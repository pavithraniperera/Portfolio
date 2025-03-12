import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowForward } from "react-icons/io";
import { PROJECTS } from "../utils/data";
import ProjectCard from "../Components/ProjectCard";

const MyProject = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("init", updateScrollButtons); // Ensure update on init
    emblaApi.on("select", updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  return (
    <section id="projects" className="bg-background mt-14">
      <div className="container mx-auto px-8 md:px-10 py-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Recent Projects</h4>
          <p className="text-md text-center mt-4 leading-6 mb-4">
            From concept to deployment, these projects showcase my technical
            expertise. I focus on clean code, performance, and user experience.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden scrollbar-hide" ref={emblaRef}>
            <div className="flex pt-14 pb-8">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
                >
                  <ProjectCard
                    key={project.id}
                    imgUrl={project.image}
                    name={project.name}
                    title={project.description}
                    tags={project.technologies}
                    githubUrl={project.link}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button */}
          <button
            className={`arrow-btn absolute top-1/2 left-0 transform -translate-y-1/2 ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <IoIosArrowForward size={24} color="black" className="rotate-180" />
          </button>

          {/* Next Button */}
          <button
            className={`arrow-btn absolute top-1/2 right-0 transform -translate-y-1/2 ${
              !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}
          >
            <IoIosArrowForward size={24} color="black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
