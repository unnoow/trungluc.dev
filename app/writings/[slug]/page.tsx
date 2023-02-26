"use client";

import "#/styles/prism.css";

import { useMDXComponent } from "next-contentlayer/hooks";

import { SingleWriting } from "#/components";
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
