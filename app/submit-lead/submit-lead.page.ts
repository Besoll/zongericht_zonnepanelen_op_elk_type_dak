// app/submit-lead/submit-lead.page.ts
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
        redirect_url: process.env.ZOHO_REDIRECT_URL,
        user_identifier: process.env.ZOHO_USER_IDENTIFIER,
        mysql_module: 'local',
        base_url: 'www.zohoapis.eu',
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        iamurl: 'accounts.zoho.eu',
        version: 'v2',
        token_persistence_path: './token',
        scope: 'ZohoCRM.modules.leads.CREATE', // Add other scopes if necessary
        access_type: 'offline', // Typically 'offline' for server-side applications
        prompt: 'consent' // 'consent' ensures that the user is prompted for permission
      };

      console.log(configuration)

    // Initialize Zoho CRM client with configuration
    ZCRMRestClient.initialize(configuration);

    const leadData = {
      // Assuming your form data matches these field names in Zoho CRM
      Last_Name: req.body.name,
      Email: req.body.email,
      Telefoon_Visueel: req.body.phone,
      Postal_Code: req.body.postcode,
      Huisnummer: req.body.address,
      Lead_Bron_ID: req.body.lead_bron_ID,
      Lead_Bron_URL: req.body.lead_bron_URL,
      Opdrachtgever: req.body.opdrachtgever,
      Lead_Keyword: req.body.lead_keyword,
      // Any additional fields...
    };

    // Create a record in Zoho CRM
    const response = await Module.Operations.createRecords({
      ModuleAPIName: 'Leads',
      Body: {
        data: [leadData],
      }
    });

    console.log(leadData)
    console.log(response)

    // Handle the response from Zoho CRM and send back a relevant response
    res.status(200).json({ success: true, data: response });
  } catch (error: any) {
    console.error('Error submitting to Zoho CRM:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
