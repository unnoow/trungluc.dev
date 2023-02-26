import { ProfileCard, WritingCard } from "#/components";
import { allWritings } from "#/contentlayer/generated";

export default function WritingsPage() {
  return (
    <div className="mt-10 flex gap-5">
      <div className="grow">
        <h2 className="p-1 mb-3 font-semibold text-lg">🗒️ Writings</h2>
        {allWritings.map((writing) => (
          <WritingCard key={writing._id} writing={writing} />
        ))}
      </div>
      <div className="shrink-0">
        <ProfileCard />
      </div>
    </div>
  );
}
