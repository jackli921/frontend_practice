
import { SocialLink } from "@/definitions/definitions";
import styles from "./Card.module.css";
import Link from "next/link";

interface LinkProps {
  socialLink: SocialLink;
}

export function LinkButton({ socialLink }: LinkProps){
    return (
      <div
        className={`bg-gray-600 text-white font-bold mt-4 p-3 rounded text-center  ${styles.hoverEffect} transition-all duration-200 `}
      >
        <Link href={socialLink.url}>{socialLink.platform}</Link>
      </div>
    );
}