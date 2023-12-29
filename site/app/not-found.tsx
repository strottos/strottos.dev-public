"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1 className="font-bold text-xl pb-4">Page Not Found</h1>
      <p className="pb-2">Could not find requested resource</p>
      <p>
        <Link href="/">Return Home</Link>
      </p>
    </section>
  );
}
