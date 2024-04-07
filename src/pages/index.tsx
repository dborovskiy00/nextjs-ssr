import React from "react";
import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import UserDbService from "@/modules/user/db";

export const getServerSideProps = (async () => {
  const user: { id: number; email: string; name: string | null }[] | null =
    await UserDbService.getAllUsers();

  return { props: { user } };
  // eslint-disable-next-line
}) satisfies GetServerSideProps<{ user: {id: number, email: string, name: string | null}[] | null }>

export default function Page({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome to Course Project
          </h1>

          <p className="mt-2 text-lg text-gray-600">
            Project is built by {user?.[0]?.name || ""} ({user?.[0]?.email})
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">
          Project Overview
        </h2>

        <div className="mt-2 bg-white rounded-xl shadow-lg p-4">
          <p className="text-lg text-gray-600">Description</p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">Report</h2>

        <div className="mt-2 bg-white rounded-xl shadow-lg p-4">
          <p className="text-lg text-gray-600">Report</p>
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
