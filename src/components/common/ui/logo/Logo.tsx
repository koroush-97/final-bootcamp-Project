import React from "react";
import { ImageView } from "@/components";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"}>
      <ImageView
        src={"/assetss/photo/Martgroty.png"}
        width={140}
        height={60}
        alt="Martgroty"
      />
    </Link>
  );
}
