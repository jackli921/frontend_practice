// components/Card.jsx
import styles from "./Card.module.css"; // Make sure the path is correct
import { Profile } from "@/definitions/definitions"
import { ReactNode } from "react";
import { LinkButton } from "./LinkButton"
import Image from 'next/image'

interface CardProps {
    profile: Profile
}

export function Card( { profile }: CardProps) : ReactNode {
  return (
    <div
      className={`${styles.cardContainer} max-w-xl m-4 min-w-md shadow-lg flex flex-col justify-center items-center text-center`}
    >
        <Image
            src = {profile.profileUrl}
            width={150}
            height={150}
            alt="picture of author"
            className="rounded-full m-2"
        />
      <h2 className={`${styles.cardTitle} text-xl font-bold mb-4`}>
        {profile.fullName}
      </h2>
      <p className={`${styles.textCustomGreen}`}>
        {profile.city}, {profile.country}
      </p>
      <p className={"text-gray-200"}>{profile.bio}</p>
      <div className="min-w-80">
        {profile.socialLinks.map((social) => (
          <LinkButton key={social.url} socialLink={social} />
        ))}
      </div>
    </div>
  );
}
