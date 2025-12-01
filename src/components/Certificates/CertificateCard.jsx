'use client';
import React from 'react';

const CertificateCard = ({ certificate }) => {
  const handleDownload = (downloadUrl, title) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-6 border-b-2 border-blue-900">
      <div className="flex flex-col space-y-4 lg:flex-row items-center justify-between">
        <div className="flex-1 text-center lg:text-start">
          <h2 className="subHeading text-blue-900 mb-2">
            {certificate.title}
          </h2>
          <p className="text text-gray-600 text-center lg:text-start">
            {certificate.description}
          </p>
        </div>
        
        <div className="lg:ml-6">
          <button
            onClick={() => handleDownload(certificate.downloadUrl, certificate.title)}
            className="Btnlight hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2 px-4"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" 
              />
            </svg>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
