import Image from "next/image";

export const ProfileCard = () => {
  return (
    <div>
      <div className="p-1 mb-3 font-semibold text-lg">💻 Profile</div>
      <div className="w-full md:p-4 lg:p-4 rounded-2xl bg-white mb-9">
        <div className="relative w-full aspect-square">
          <Image
            src="https://morethan-log.vercel.app/avatar.svg"
            alt="trungluc"
            fill
          />
        </div>
        <div className="bg-white p-2 flex flex-col items-center">
          <div className=" text-xl italic font-bold">trungluc</div>
          <div className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            frontend developer
          </div>
          <div className="text-sm mb-2">I develop everything using node.</div>
        </div>
      </div>
    </div>
  );
};
