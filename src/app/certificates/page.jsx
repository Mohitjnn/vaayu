import React from 'react'
import CertificateCard from "@/components/Certificates/CertificateCard";

export const metadata = {
  title: "Certificates | Vaayun Sports Academy - Download Training Certifications",
  description: "Download official certificates from Vaayun Sports Academy. Access your coaching certifications, training completion certificates, and sports qualifications.",
  keywords: [
    "sports certificates",
    "coaching certification",
    "training certificates",
    "vaayun certificates",
    "sports academy certificates",
    "download certificates",
    "handball certification",
    "basketball certification",
    "football coaching certificate",
    "yoga instructor certificate"
  ],
  robots: "index,follow",
};

const certificates = [
  {
    id: 1,
    title: "Vaayun Cup",
    description: "Download certificate for printing - Vaayun Cup Certificate",
    downloadUrl: "/static/certificates/VaayunCup.pdf"
  }
];

function CertificatesPage() {
  return (
    <main className="w-full h-full lg:min-h-[45vh]">
      <div className="w-full flex flex-col items-center mt-3 space-y-10 px-4 xl:px-16">
        <h1 className="Title text-center w-full text-blue-900 font-black">
          Vaayun Certificates
        </h1>
        
        <div className="w-full space-y-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-12">
            <h2 className="Heading text-gray-600 mb-4">No certificates available</h2>
            <p className="text text-gray-500">Check back later for new certificates.</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default CertificatesPage
