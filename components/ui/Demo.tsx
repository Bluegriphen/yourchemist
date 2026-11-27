"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden bg-white pt-12">
      <div className="mx-auto max-w-xl px-4 text-center">
        <h2 className="text-2xl font-extrabold text-brand-teal sm:text-3xl">
          Subscribe to Our Newsletter
         </h2>
        <p className="mt-2 text-xs text-gray-500">
          Get pharmacy tips, seasonal wellness guides, and exclusive offers straight to your inbox.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-6 flex max-w-md items-center rounded-full border border-brand-green/40 bg-brand-greenSoft/50 p-1.5"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full bg-transparent px-4 text-xs text-brand-teal outline-none placeholder:text-gray-500"
          />
          <Button type="submit" size="sm">
            Submit
          </Button>
        </form>
      </div>

      {/* Subtle Watermark above footer */}
      <p className="pointer-events-none mt-10 select-none text-center text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl">
        Elliott Street Pharmacy
      </p>
    </section>
  );
}