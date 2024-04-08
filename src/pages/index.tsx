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
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">
          Project is built by
        </h2>

        <div className="mt-2 bg-white rounded-xl shadow-lg p-4">
          <p className="text-lg text-gray-600">
            {user?.[0]?.name || ""} ({user?.[0]?.email})
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">Group</h2>

        <div className="mt-2 bg-white rounded-xl shadow-lg p-4">
          <p className="text-lg text-gray-600">
            <b>md-sa2-27-24</b>
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">
          Pipeline Diagram
        </h2>

        <div className="mt-2 bg-white rounded-xl p-2 shadow-lg">
          <Image src="/img.png" width={1000} height={240} alt="image" />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-10">
          Technologies
        </h2>

        <div className="mt-2 bg-white rounded-xl shadow-lg p-4">
          <p className="text-md text-gray-600">
            <b>GitHub</b> was utilized as the version control system. Three core
            repositories were created to implement the CI/CD pipeline for the
            application. The Next.js repository serves as the primary repository
            housing the website&rsquo;s code. The Helm repository stores the
            Helm chart with predefined values. The Argocd repository is employed
            to implement GitOps principles.
          </p>

          <p className="text-md text-gray-600 mt-4">
            <b>GitHub Actions</b> were utilized for CI/CD purposes. Actions from
            the Next.js application ran linters and tests for the application
            upon pull request creation. Additionally, a deployment action was
            manually triggered, allowing for the selection of the release type
            (major, minor, patch). Subsequently, it automatically incremented
            the application version based on the previous tag, built the Docker
            image, published it to Docker Hub, and sent a version update request
            to the GitHub Actions repository associated with the Helm chart.
            Actions from the Helm repository, upon receiving a request with a
            new version, updated the image version within the values file and
            also updated the version within the chart.yaml file. Following this,
            they sent a version update request to the ArgoCD repository. ArgoCD
            actions, upon receiving the request, updated the targetRevision in
            the application.yaml to the appropriate version.
          </p>

          <p className="text-md text-gray-600 mt-4">
            <b>Docker Hub</b> served as the repository for Docker images and
            their respective versions.
          </p>

          <p className="text-md text-gray-600 mt-4">
            <b>ArgoCD</b> was employed to implement GitOps principles and
            synchronize manifests to maintain infrastructure in alignment with
            the code. Additionally, notifications synchronized with Slack were
            set up to notify about deployments or synchronizations.
          </p>

          <p className="text-md text-gray-600 mt-4">
            <b>Next.js</b> was utilized to construct a server-side-rendered
            (SSR) application within the cluster.
          </p>

          <p className="text-md text-gray-600 mt-4">
            <b>Kubernetes</b> was employed for orchestrating the entire
            application, ensuring its scalability, and managing other aspects of
            deployment and operation.
          </p>
        </div>
      </div>
    </main>
  );
}
