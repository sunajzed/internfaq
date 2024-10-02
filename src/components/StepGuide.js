import React from "react";
import { PlusCircle } from "lucide-react"; 

const StepGuide = () => {
  return (
    <div className="mb-8">
      <h2 className="text-5xl font-semibold mb-4 text-primary">Steps Overview</h2>
      <ol className="list-decimal ml-6 space-y-4 text-lg text-darkGray">
        {[
          "Launch the app.",
          "Sign up and log in.",
          "Tap the '+' button at the top right of the home screen.",
          "Navigate to the 'CONNECT' tab."
        ].map((step, index) => (
          <li key={index} className="flex items-center">
            <span className="inline-block w-8 h-8 mr-2 rounded-full bg-secondary text-white flex items-center justify-center">
              <PlusCircle className="w-5 h-5" />
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepGuide;
