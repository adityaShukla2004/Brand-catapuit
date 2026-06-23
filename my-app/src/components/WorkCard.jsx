import React from "react";

const WorkCard = ({ image, title, tags }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider
            ${
              tag.active
                ? "border-red-500 bg-red-500 text-white"
                : "border-white/40 text-white"
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;