import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { Writing } from "#/app/types/writing.types";
import { Tag } from "#/components";
import { WRITING_DATE } from "#/constants/date.constants";

type WritingCardProps = {
  post: Writing;
};

export const WritingCard = ({ post }: WritingCardProps) => {
  return (
    <Link href={`/writings/${post.slug}`} legacyBehavior>
      <article
        key={post.id}
        className="overflow-hidden mb-6 md:mb-8 rounded-2xl bg-white hover:shadow-lg transition-shadow cursor-pointer"
      >
        {post.thumbnail && (
          <div className="relative w-full pb-[66%] lg:pb-[50%] bg-gray-200">
            <Image
              src={post.thumbnail}
              className="object-cover"
              layout="fill"
              alt={post.title}
            />
          </div>
        )}
        <div className="p-4">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black">
              {post.title}
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
              {dayjs(post.updatedAt ?? post.createdAt).format(WRITING_DATE)}
            </div>
          </div>

          <main className="mb-4">
            <p className="hidden md:block leading-8 text-gray-700">
              {post.summary}
            </p>
          </main>
          <div className="flex gap-2">
            {post.tags &&
              post.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
