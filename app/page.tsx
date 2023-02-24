import dayjs from "dayjs";
import { range } from "lodash-es";

import { ProfileCard, WritingCard } from "#/components";

export default function RootPage() {
  return (
    <div className="mt-10 flex gap-5">
      <div className="grow">
        <h2 className="p-1 mb-3 font-semibold text-lg">🗒️ Writings</h2>
        {range(10).map((i) => (
          <WritingCard
            key={i}
            post={{
              id: "1",
              title: "Tailwind - best practice",
              summary: "Lets try using tailwind with ReactJs",
              createdAt: dayjs().format(),
              fullWidth: true,
              slug: "tailwind-best-practice",
              status: "Public",
              tags: ["React", "Tailwind"],
            }}
          />
        ))}
      </div>
      <div className="shrink-0">
        <ProfileCard />
      </div>
    </div>
  );
}
