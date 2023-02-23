import dayjs from "dayjs";
import { range } from "lodash-es";

import { WritingCard } from "#/components";

export default function RootPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
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
  );
}
