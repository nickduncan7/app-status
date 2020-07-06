import React from "react";
import StatusElement from "../components/StatusElement";
import { constants } from "../js/constants";

export default function Home() {
  const now = new Date();

  return (
    <>
      <div className="container mx-auto py-16 px-4">
        <h1 className="title">{constants.appName}</h1>
        <h3 className="subtitle">Status Page</h3>
        <div className="w-full text-gray-600 text-sm mt-12">
          Last updated {now.toLocaleTimeString()}. <br />
          Please refresh this page to see the latest status.
        </div>
        <div id="content">
          <h2 className="mb-4 text-gray-700">Sample Applications</h2>
          <div>
            <StatusElement
              name="Google"
              url="https://www.google.com"
            />
            <StatusElement
              name="Vercel"
              url="https://vercel.com"
            />
          </div>
        </div>
        <footer>
          Copyright &copy; 2020 {constants.appName}. All rights reserved.
        </footer>
      </div>
    </>
  );
}
