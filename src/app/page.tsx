import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome to My Course Project
          </h1>

          <p className="mt-2 text-lg text-gray-600">
            It's my project
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">
          Project Overview
        </h2>

        <div className="mt-2 bg-white rounded-xl shadow-lg p-4">
          <p className="text-lg text-gray-600">
            Description
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">Report</h2>

        <div className="mt-2 bg-white rounded-xl shadow-lg p-4">
          <p className="text-lg text-gray-600">
            Report
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">
          CI & CD Diagram
        </h2>

        <div className="mt-2 bg-white rounded-xl p-2 shadow-lg">
          <Image src="/img.png" width={1000} height={240} alt="image" />
        </div>
      </div>
    </main>
  );
}
