import Image from "next/image";
import React from "react";
import Header from "./Header";
import Link from "next/link";

const Certificates = () => {
  return (
    <section
      id="Certs"
      className="py-20 px-4 max-w-[1140px] mx-auto md:px-6 lg:px-8"
    >
      {/* Header */}
      <Header title="Certificates" />
      <div className="w-full h-92 gap-6 flex flex-col md:flex-row items-center justify-between mt-10">
        <Link
          href="/BackendCert.pdf"
          target="_blank"
          className="aspect-video hover:scale-105 duration-200 transition-all h-full w-ful md:w-1/2 relative"
        >
          <Image
            src="/Backend.png"
            alt="Backend Certs"
            width={1144}
            height={804}
            className="h-full w-full rounded-sm"
          />
          <span className="absolute bottom-0 left-0 w-full flex justify-center items-center bg-gradient-to-b from-transparent to-primary text-background p-3">
            <h2 className="text-2xl font-bold">Backend Development</h2>
          </span>
        </Link>

        <Link
          href="/FrontendCert.pdf"
          target="_blank"
          className="aspect-video hover:scale-105 duration-200 transition-all h-full w-full md:w-1/2 relative"
        >
          <Image
            src="/Frontend.png"
            alt="Backend Certs"
            width={981}
            height={758}
            className="h-full object-cover rounded-sm"
          />
          <span className="absolute bottom-0 left-0 w-full flex justify-center items-center bg-gradient-to-b from-transparent to-primary text-background p-3">
            <h2 className="text-2xl font-bold">Frontend Development</h2>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Certificates;
