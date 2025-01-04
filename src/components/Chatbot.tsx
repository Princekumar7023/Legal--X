// components/Chatbot.tsx
'use client';

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Add the chatbot config
    window.embeddedChatbotConfig = {
      chatbotId: "l8w11zsDFYfp57_iDsWK4",
      domain: "www.chatbase.co"
    };

    // Create and append the script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', "l8w11zsDFYfp57_iDsWK4");
    script.setAttribute('domain', "www.chatbase.co");
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}