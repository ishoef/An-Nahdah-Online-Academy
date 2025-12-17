import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeacherCard = ({ instructor }) => {
  const { id, name, title, bio, avatar } = instructor;

  return (
    <div
      className="
        w-full h-full
        bg-white dark:bg-slate-800
        border border-gray-200 dark:border-gray-800
        rounded-2xl 
        transition-all duration-300
        p-4
        flex flex-col
      "
    >
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#206380]/20">
          <Image
            src={avatar || "/avatar-placeholder.png"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {name}
        </h3>

        <p className="text-sm font-medium text-[#206380] mt-1">{title}</p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
          {bio}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={`/instructors/${id}`}
        className="
          mt-4 block text-center
          w-full bg-[#206380] text-white
          py-2 px-4 rounded-lg
          hover:bg-[#1a4e5a]
          transition-colors duration-300
        "
      >
        View Profile
      </Link>
    </div>
  );
};

export default TeacherCard;
