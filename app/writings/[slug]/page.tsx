"use client";

import "#/styles/prism.css";

import dayjs from "dayjs";
import { useMDXComponent } from "next-contentlayer/hooks";

import { SingleWriting, Tag } from "#/components";
import { WRITING_DATE } from "#/constants/date.constants";
import { allWritings } from "#/contentlayer/generated";

type WritingPageProps = {
  params: { slug: string };
};

export default function WritingPage({ params }: WritingPageProps) {
  const writing = allWritings.find((writing) => writing.slug === params.slug);
  const MDXContent = useMDXComponent(writing?.body.code ?? "");

  return (
    <SingleWriting className="bg-white rounded-3xl py-20 shadow">
      <div className="prose mx-auto">
        <div className="flex gap-3 mb-2">
          {writing?.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h1 className="mb-2">{writing?.title}</h1>
        <div className="mb-14">
          {dayjs(writing?.publishedAt).format(WRITING_DATE)}
        </div>
        <MDXContent components={{}} />
      </div>
    </SingleWriting>
  );
}

export async function generateStaticParams() {
  return allWritings.map((writing) => ({
    slug: writing.slug,
  }));
}
