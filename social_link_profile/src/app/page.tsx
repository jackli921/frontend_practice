import { Card } from "@/app/ui/components/Card";
import { Profile } from "@/definitions/definitions";
import path from "path";
import {promises as fs} from "fs";


async function getProfiles(): Promise<Profile[]> {
  try{
    const filePath = path.join(
      process.cwd(),
      "src",
      "app",
      "data",
      "profiles.json"
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    const profiles: Profile[] = JSON.parse(fileContents);
    return profiles;
  }
  catch(error){
    console.error("Error reading profiles:", error);
    return [];
  }
}

export default async function Home(){
  const profiles = await getProfiles();

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {profiles.map((profile: Profile) => (
          <Card key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}
