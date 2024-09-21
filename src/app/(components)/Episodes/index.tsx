import { MovieTypes } from "@/lib/types";
import React from "react";
import { Star } from "lucide-react";
import * as motion from "framer-motion/client";

type EpisodeProps = {
  selectedMovie: MovieTypes;
};

const Episodes = (props: EpisodeProps) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }} //
      className="gap-4 px-10 text-white sm:px-20 xl:flex"
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 xl:max-w-[516px]">
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`relative h-[300px] rounded-3xl bg-cover bg-center px-8 sm:h-[621px]`}
          style={{
            backgroundImage: `url(${props.selectedMovie.title.link})`,
          }}
        >
          <div className="-z-5 absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-black" />
          <div className="flex h-full w-full flex-col justify-end pb-5">
            {/* CARD TITLE */}
            <h3 className="relative sm:text-2xl font-semibold text-white">
              {props.selectedMovie.title.text}
            </h3>
            {/* CARD CATEGORY & RATINGS */}
            <div className="relative flex items-center justify-between">
              <p className="relative text-xs text-smallCardLabel">
                Category:
                {props.selectedMovie.genres.map(
                  (genre: string) => " " + genre + ", ",
                )}
              </p>
              <div className="relative flex items-center gap-1 text-xs font-semibold text-white">
                <Star fill="yellow" className="text-yellow-200" size={20} />
                {props.selectedMovie.rating}
              </div>
            </div>
          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <p className="leading-6 text-smallCardLabel">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum
          obcaecati ipsa perspiciatis. Quam magni inventore nam ullam laborum
          repellat dolorem amet nostrum, vero labore sunt at alias soluta
          mollitia!
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-10 flex-1 text-white xl:mt-0">
        {/* TITLES */}
        <div className="flex justify-between">
          <h3 className="text-2xl font-medium">Episodes</h3>
          <p className="text-2xl font-medium">Season 1</p>
        </div>
        <div className="mt-6 grid gap-12">
          {/* CARDS */}
          {[1, 2].map((episode) => (
            <div
              key={episode}
              className="grid items-center gap-4 md:grid-cols-2"
            >
              <div
                className="h-[236px] transform cursor-pointer rounded-[20px] bg-cover bg-center shadow transition-transform duration-300 ease-out hover:-translate-y-3 hover:shadow-white"
                style={{
                  backgroundImage: `url(${props.selectedMovie.title.link})`,
                }}
              ></div>
              <div>
                <h4 className="text-xl">Episode {episode}</h4>
                <p className="leading-6 text-smallCardLabel">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores fugit accusantium explicabo nihil provident tempore
                  neque illum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Episodes;
