"use client";

import { useSearchParams } from "next/navigation";

export default function NamaTamu() {
  const searchParams = useSearchParams();
  const nama = searchParams.get("nama");

  return (
    <p className="text-center text-white dancing text-[2.2rem] mt-2 capitalize">
      {nama ? nama : "You"} & Partner
    </p>
  );
}
