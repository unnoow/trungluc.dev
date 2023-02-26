"use client";

import "#/styles/prism.css";

import dayjs from "dayjs";
import { useMDXComponent } from "next-contentlayer/hooks";

import { SingleWriting, Tag } from "#/components";
import { WRITING_DATE } from "#/constants/date.constants";
import { allDailyLessons } from "#/contentlayer/generated";

type DailyLessonPageProps = {
  params: { slug: string };
};

export default function DailyLessonPage({ params }: DailyLessonPageProps) {
  const dailyLesson = allDailyLessons.find(
    (dailyLesson) => dailyLesson.slug === params.slug
  );
  const MDXContent = useMDXComponent(dailyLesson?.body.code ?? "");

  return (
    <SingleWriting className="bg-white rounded-3xl py-20 shadow">
      <div className="prose mx-auto">
        <div className="flex gap-3 mb-2">
          {dailyLesson?.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h1>{dailyLesson?.title}</h1>
        <div className="mb-14">
          {dayjs(dailyLesson?.publishedAt).format(WRITING_DATE)}
        </div>
        <MDXContent components={{}} />
      </div>
    </SingleWriting>
  );
}

export async function generateStaticParams() {
  return allDailyLessons.map((writing) => ({
    slug: writing.slug,
  }));
}
