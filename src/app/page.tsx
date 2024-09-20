"use client";

import { Heart, Play, Star } from "lucide-react";
import RawMovies from "@/data/movies.json";
import { useState } from "react";
import { MovieTypes } from "@/lib/types";
import Overview from "@/app/(components)/Overview";
import Episodes from "@/app/(components)/Episodes";
import { AnimatePresence, motion } from "framer-motion";

const HoverLink = ({
  children,
  selectedBottomLink,
  setSelectedBottomLink,
  label,
}: {
  children: React.ReactNode;
  selectedBottomLink: string;
  setSelectedBottomLink: (selected: string) => void;
  label: string;
}) => {
  const isSelected = selectedBottomLink === children;
  return (
    <div
      className={`group relative h-fit w-fit ${isSelected && "text-sm font-bold"} cursor-pointer`}
      onClick={() => {
        setSelectedBottomLink(label);
      }}
    >
      {children}
      <span
        className={`absolute inset-x-1 -bottom-2 h-1 origin-left ${isSelected ? "scale-x-100" : "scale-x-0"} rounded bg-loginButton transition-transform duration-300 ease-out group-hover:scale-x-100`}
      ></span>
    </div>
  );
};

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieTypes>(RawMovies[7]);
  const [selectedBottomLink, setSelectedBottomLink] =
    useState<string>("Overview");

  const throwBackMovies = RawMovies.filter(
    (movie: MovieTypes) => movie.isThrowback === true,
  );

  return (
    <div>
      {/* MAIN MOVIE SECTION */}
      <div
        className={`relative flex min-h-screen flex-col justify-center bg-cover bg-center px-10 transition-all duration-700 sm:px-20`}
        style={{ backgroundImage: `url(${selectedMovie.title.link})` }}
      >
        <div className="-z-index-10 absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

        <div className="text-white md:w-2/3 lg:w-1/2">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex flex-col"
          >
            {/* TITLE */}
            <h1 className="relative text-5xl font-bold text-white md:text-7xl">
              {selectedMovie.title.text}
            </h1>
            <div className="mt-2.5 flex items-center gap-5">
              {/* RATINGS & CATEGORY */}
              <div className="relative flex items-center gap-1 text-xs font-semibold">
                <Star fill="yellow" className="text-yellow-200" size={20} />
                {selectedMovie.rating}
              </div>
              <p className="relative text-xs">
                Category: {selectedMovie.genres.map((genre) => genre + ", ")}
              </p>
            </div>
            {/* DESCRIPTION */}
            <p className="relative mt-4 line-clamp-5 text-base leading-5">
              {selectedMovie.description}
            </p>
            {/* ACTIONS */}
            <div className="relative mt-2.5 gap-4 sm:flex">
              <button className="group mb-2 flex items-center justify-center gap-1 rounded bg-loginButton px-2.5 py-2 hover:bg-white hover:text-black sm:mb-0">
                <Play
                  className="group-hover:animate-bounceX"
                  fill={`white`}
                  size={29}
                />
                Watch Now!
              </button>
              <button
                onClick={() =>
                  setSelectedMovie((prev) => ({
                    ...selectedMovie,
                    isLiked: !prev.isLiked,
                  }))
                }
                className="group flex h-[44px] w-[48px] items-center justify-center rounded border hover:bg-white"
              >
                <Heart
                  fill={`${selectedMovie.isLiked ? "red" : "white"}`}
                  className={`group-hover:fill-red-500 ${selectedMovie.isLiked ? "text-red-500" : "text-white"}`}
                  size={27}
                />
              </button>
            </div>
          </motion.div>
        </div>
        {/* BOTTOM LINKS */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="absolute inset-x-10 bottom-16 mx-auto flex text-sm text-white sm:inset-x-20"
        >
          <div className="flex gap-7">
            <HoverLink
              setSelectedBottomLink={setSelectedBottomLink}
              selectedBottomLink={selectedBottomLink}
              label={"Overview"}
            >
              Overview
            </HoverLink>
            <HoverLink
              setSelectedBottomLink={setSelectedBottomLink}
              selectedBottomLink={selectedBottomLink}
              label={"Episodes"}
            >
              Episodes
            </HoverLink>
            <HoverLink
              setSelectedBottomLink={setSelectedBottomLink}
              selectedBottomLink={selectedBottomLink}
              label={"Details"}
            >
              Details
            </HoverLink>
          </div>
        </motion.div>
      </div>

      {/* RENDERED BY BOTTOM LINKS */}
      <div className="bg-darkBackground pb-10 pt-14">
        {/* TITLE */}
        <h2 className="mb-7 px-10 text-4xl font-bold text-white sm:pl-20">
          Trending <span className="text-span">this week</span>
        </h2>
        <AnimatePresence>
          {selectedBottomLink === "Overview" && (
            <Overview
              throwBackMovies={throwBackMovies}
              setSelectedMovie={setSelectedMovie}
              setSelectedBottomLink={setSelectedBottomLink}
            />
          )}
          {selectedBottomLink === "Episodes" && (
            <Episodes selectedMovie={selectedMovie} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
