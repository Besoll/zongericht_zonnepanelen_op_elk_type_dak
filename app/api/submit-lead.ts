// pages/api/submit-lead.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { ZCRMRestClient, Module } from "@zohocrm/nodejs-sdk";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Initialize Zoho CRM client
  try {
    // Configuration for Zoho CRM SDK
    const configuration = {
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      redirect_url: process.env.ZOHO_REDIRECT_URL, // This is the URL you set in Zoho CRM for OAuth
      user_identifier: process.env.ZOHO_USER_IDENTIFIER, // This could be your Zoho CRM user email
      mysql_module: 'local', // This could vary based on your setup
      base_url: 'https://www.zohoapis.eu', // Default API endpoint
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      iamurl: 'accounts.zoho.eu',
      version: 'v2',
      token_persistence_path: './token', // Token persistence path _persistence
    };

    // Initialize Zoho CRM client with configuration
    ZCRMRestClient.initialize(configuration);

    const leadData = {
      // Assuming your form data matches these field names in Zoho CRM
      Last_Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      Postal_Code: req.body.postcode,
      Street: req.body.address,
      // Any additional fields...
    };

    // Create a record in Zoho CRM
    const response = await Module.Operations.createRecords({
      ModuleAPIName: 'Leads',
      Body: {
        data: [leadData],
      }
    });

    // Handle the response from Zoho CRM and send back a relevant response
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Error submitting to Zoho CRM:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
