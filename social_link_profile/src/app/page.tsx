import { Card } from "@/component/Card"
import rawProfiles  from "../app/data/profiles.json"
import { Profile } from "@/definitions/definitions"

const profiles: Profile[] = rawProfiles

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {profiles.map((profile) => (
          <Card key={profile.id} profile={profile} />
        ))}
      </div>
      </div>
  );
}
