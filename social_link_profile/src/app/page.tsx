import { Card } from "@/app/ui/components/Card";
import { Profile } from "@/definitions/definitions";
import { ProfileSchema } from "@/schemas/profiles";

export default async function Home() {
  // const profiles = await getProfiles();
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/profiles.json`, {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error(
        `Failed to fetch profiles.json: ${res.status} ${res.statusText}`
      );
    }
    const raw: unknown = await res.json();
    const profiles = ProfileSchema.array().parse(raw);

    return (
      <div>
        <div className="flex flex-col items-center justify-center">
          {profiles.map((profile: Profile) => (
            <Card key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading profiles:", error);
    if (error instanceof Error) {
      return <div>Error loading profiles: {error.message}</div>;
    }
    return <div>Unknown error occurred</div>;
  }
}
