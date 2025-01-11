"use client";

import { useEffect, useState } from "react";

const VerifyEmail = () => {
  const [message, setMessage] = useState("Verifying your email");
  const [secondaryMessage, setSecondaryMessage] = useState<string | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      const params = new URLSearchParams(window.location.hash.substring(1));
      const access_token = params.get("access_token");
      const error_description = params.get("error_description");

      if (error_description) {
        setSecondaryMessage(`${decodeURIComponent(error_description)}`);
      }

      if (!access_token) {
        setMessage("No tokens found");
      } else {
        setMessage(
          "Your email has been verified successfully! You can close this window."
        );
      }
    };

    verifyEmail();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl font-semibold">{message}</h1>
      {secondaryMessage && (
        <h2 className="text-xl text-red-500">{secondaryMessage}</h2>
      )}
    </div>
  );
};

export default VerifyEmail;
