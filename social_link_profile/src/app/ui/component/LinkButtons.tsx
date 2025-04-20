
import { Links } from "@/definitions/definitions";
import styles from "./Card.module.css";
import { ReactNode } from "react";
import Link from "next/link";

interface LinkProps {
    Links: Links
}

export function LinkButton({ Links }: LinkProps) : ReactNode {
    return (
      <div
        className={`bg-gray-600 text-white font-bold mt-4 p-3 rounded text-center  ${styles.hoverEffect} transition-all duration-200 `}
      >
        <Link href={Links.url}>{Links.platform}</Link>
      </div>
    );
}