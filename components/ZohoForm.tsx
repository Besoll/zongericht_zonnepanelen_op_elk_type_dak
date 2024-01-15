"use client"

import React, { useEffect } from 'react';

const ZohoForm = () => {
  useEffect(() => {
    const createIframe = () => {
      const div = document.getElementById('zf_div_O0REFYM-akHQlpS2WI6SCjyaeliedZS7zIAxCwgF_hs');
      if (!div || div.getElementsByTagName('iframe').length > 0) {
        // If the div doesn't exist or already contains an iframe, don't create another one.
        return;
      }

      try {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://forms.zohopublic.eu/zongeschikt/form/ZongerichtReference/formperma/O0REFYM-akHQlpS2WI6SCjyaeliedZS7zIAxCwgF_hs?zf_rszfm=1';
        iframe.style.border = 'none';
        iframe.style.width = '320px';
        iframe.style.height = '540px';
        iframe.style.transition = 'all 0.5s ease';
        iframe.setAttribute('inter', 'Zongericht- Reference');
        iframe.setAttribute('title', 'Zongericht Reference Form');

        div.appendChild(iframe);
      } catch (e) {
        console.error(e);
      }
    };

    const handleResizeMessage = (event: any) => {
      const evntData = event.data;
      if (typeof evntData === 'string') {
        const zfIfrmData = evntData.split('|');
        if (zfIfrmData.length === 2) {
          const zfPerma = zfIfrmData[0];
          const zfIfrmHtNw = `${parseInt(zfIfrmData[1], 10) + 15}px`;
          const iframe = document.getElementById('zf_div_O0REFYM-akHQlpS2WI6SCjyaeliedZS7zIAxCwgF_hs')?.getElementsByTagName('iframe')[0];
          if (iframe && iframe.src.includes('formperma') && iframe.src.includes(zfPerma)) {
            const prevIframeHeight = iframe.style.height;
            if (prevIframeHeight !== zfIfrmHtNw) {
              iframe.style.height = zfIfrmHtNw;
            }
          }
        }
      }
    };

    createIframe();
    window.addEventListener('message', handleResizeMessage, false);

    return () => {
      window.removeEventListener('message', handleResizeMessage, false);
    };
  }, []);

  return <div id="zf_div_O0REFYM-akHQlpS2WI6SCjyaeliedZS7zIAxCwgF_hs"></div>;
};

export default ZohoForm;

