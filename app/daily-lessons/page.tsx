import dayjs from "dayjs";
import Link from "next/link";

import { Tag } from "#/components";
import { WRITING_DATE } from "#/constants/date.constants";
import { allDailyLessons } from "#/contentlayer/generated";

export default function DailyLessons() {
  return (
    <div className="mt-20 max-w-3xl mx-auto">
      {allDailyLessons.map((e) => (
        <div key={e._id} className="flex">
          <div className="text-slate-600 w-28 shrink-0 pt-1">
            {dayjs(e.publishedAt).format(WRITING_DATE)}
          </div>

          <div className="flex flex-col items-center px-6 relative">
            <div className="rounded-full w-3 h-3 bg-slate-400 shrink-0 absolute left-1/2 -translate-x-1/2 top-2" />
            <div className="h-full w-0.5 bg-slate-400" />
          </div>

          <div className="pb-5">
            <div className="flex gap-3 mb-2">
              {e.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <Link href={`/daily-lessons/${e.slug}`}>
              <h2 className="text-lg md:text-2xl font-bold mb-2 cursor-pointer text-black">
                {e.title}
              </h2>
            </Link>

            <p className="text-slate-600">{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
