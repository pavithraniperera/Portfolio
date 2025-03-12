import React, { useState } from "react";

const ProjectCard = ({ imgUrl, name, title, tags, githubUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-full bg-white rounded-xl overflow-hidden shadow-md mx-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <img src={imgUrl} alt={name} className="w-full h-72 md:h-80 object-cover" />

      {/* Hover Overlay */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-60 transition-opacity duration-300">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#cf8d46] px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-orange-200 hover:text-[#cf8d46] transition"
          >
            View on GitHub
          </a>
        </div>
      )}

      {/* Project Details */}
      <div className="px-4 py-5">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-eclipse">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm text-[#cf8d46] bg-orange-100 px-3 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
