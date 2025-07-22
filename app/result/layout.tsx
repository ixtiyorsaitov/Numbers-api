import React from "react";

const ResultPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      {children}
    </div>
  );
};

export default ResultPageLayout;
