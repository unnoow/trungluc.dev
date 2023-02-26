import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { Tag } from "#/components";
import { WRITING_DATE } from "#/constants/date.constants";
import { Writing } from "#/contentlayer/generated";

type WritingCardProps = {
  writing: Writing;
};

export const WritingCard = ({ writing }: WritingCardProps) => {
  return (
    <Link href={`/writings/${writing.slug}`} legacyBehavior>
      <article
        key={writing.slug}
        className="overflow-hidden mb-6 md:mb-8 rounded-2xl bg-white hover:shadow-lg transition-shadow cursor-pointer"
      >
        {writing.thumbnail && (
          <div className="relative w-full pb-[66%] lg:pb-[50%] bg-gray-200">
            <Image
              src={writing.thumbnail}
              className="object-cover"
              fill
              sizes="100vw"
              alt={writing.title}
            />
          </div>
        )}
        <div className="p-4">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black">
              {writing.title}
            </h2>
          </header>

          <div className="flex items-center gap-2 mb-4">
            {/* {post.author && (
                <>
                  <div className="flex items-center gap-1">
                    <Image
                      className="rounded-full"
                      src={post.author.profile_photo}
                      alt="profile_photo"
                      loader={imageLoader}
                      width={20}
                      height={20}
                    />
                    <div className="text-sm text-gray-500">
                      {`${post.author.last_name}${post.author.first_name}`}
                    </div>
                  </div>
                  <div className="self-stretch w-px my-1 bg-gray-300"></div>
                </>
              )} */}

            <div className="text-sm text-gray-500 md:ml-0">
              {dayjs(writing.publishedAt).format(WRITING_DATE)}
            </div>
          </div>

          <main className="mb-4">
            <p className="hidden md:block leading-8 text-gray-700">
              {writing.description}
            </p>
          </main>
          <div className="flex gap-2">
            {writing.tags &&
              writing.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
