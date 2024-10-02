import React from "react";
import { HelpCircle } from "lucide-react";
import FAQItem from "./FAQItem";

const HelpSection = () => {
  return (
    <div className="p-10 mx-auto max-w-6xl bg-white rounded-3xl shadow-lg">
      <h1 className="text-6xl font-extrabold mb-8 text-center text-primary flex items-center justify-center space-x-3">
        <HelpCircle className="text-primary w-12 h-12" />
        <span>Help & FAQ</span>
      </h1>
      <div className="bg-premiumGray rounded-2xl shadow-md mb-8 p-8">
        <h2 className="text-5xl font-semibold mb-6 text-primary">Steps to Add a New Device</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Launch the app.",
            "Sign up and log in.",
            "Tap the '+' button at the top right of the home screen.",
            "Navigate to the 'CONNECT' tab.",
            "Select your device.",
            "Press the 'Connect' button.",
            "Enter your Wi-Fi password when prompted.",
            "Go to the 'CONNECTED' tab.",
            "Assign your device to a room and click 'Save.'",
          ].map((step, index) => (
            <div key={index} className="p-5 bg-white rounded-xl shadow-lg flex items-start space-x-4 transition-all duration-300 hover:shadow-xl">
              <span className="text-indigo-600 font-bold text-2xl mr-4">{index + 1}.</span>
              <p className="text-lg text-darkGray break-words">{step}</p>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-5xl font-semibold mt-6 mb-4 text-primary text-center">Frequently Asked Questions</h2>
      <div className="flex flex-col space-y-4">
        <FAQItem
          question="Help! The app isn't detecting my device."
          answer="Make sure your device is powered on and close to your phone. If the LED keeps blinking, try from step 1."
        />
        <FAQItem
          question="I can't remember my Wi-Fi password!"
          answer="Check if it’s saved in your phone’s settings, look on the back of your router, or contact your internet service provider."
        />
        <FAQItem
          question="My device is not showing in the CONNECTED tab."
          answer="Check that you are connected to the same Wi-Fi network. Restart the app and try again."
        />
        <FAQItem
          question="My device shows as 'offline.' What should I do?"
          answer="Ensure the device is powered on and connected to the internet. Restart the app or the device, and check your Wi-Fi connection."
        />
      </div>
    </div>
  );
};

export default HelpSection;
