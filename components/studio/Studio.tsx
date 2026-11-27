"use client";

import { NextStudio } from "next-sanity/studio/client-component";
import config from "@/sanity.config";

export default function Studio() {
  return (
    <>
      <script
        src="https://core.sanity-cdn.com/bridge.js"
        async
        type="module"
        data-sanity-core
      />
      <NextStudio config={config} />
    </>
  );
}
