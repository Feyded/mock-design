import { MovieTypes } from "@/lib/types";
import { Star } from "lucide-react";
import RawMovies from "@/data/movies.json";
import * as motion from "framer-motion/client";

type OverviewProps = {
  setSelectedMovie: (movie: MovieTypes) => void;
  throwBackMovies: MovieTypes[];
  setSelectedBottomLink: (movie: string) => void;
};

const index = ({
  setSelectedMovie,
  throwBackMovies,
  setSelectedBottomLink,
}: OverviewProps) => {
  return (
    <div>
      <div className="h-full px-10 sm:pl-20">
        <div className="scrollbar-custom flex gap-4 overflow-x-auto py-3">
          {/* CARD */}
          {RawMovies.map((movie: MovieTypes) => (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              whileHover={{ translateY: -5 }}
              key={movie.id}
              className={`relative h-[291px] min-w-[516px] transform cursor-pointer rounded-3xl bg-cover bg-center px-8 shadow transition-transform duration-300 ease-out hover:shadow-white`}
              style={{
                backgroundImage: `url(${movie.title.link})`,
              }}
              onClick={() => {
                setSelectedMovie(movie);
                setSelectedBottomLink("Episodes");
              }}
            >
              <div className="-z-5 absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-black" />
              <div className="flex h-full w-full flex-col justify-end pb-5">
                {/* CARD TITLE */}
                <h3 className="relative text-2xl font-semibold text-white">
                  {movie.title.text}
                </h3>
                {/* CARD CATEGORY & RATINGS */}
                <div className="relative flex items-center justify-between">
                  <p className="text-smallCardLabel relative text-xs">
                    Category:
                    {movie.genres.map((genre: string) => genre + ", ")}
                  </p>
                  <div className="relative flex items-center gap-1 text-xs font-semibold text-white">
                    <Star fill="yellow" className="text-yellow-200" size={20} />
                    {movie.rating}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-14 px-10 sm:px-20 pb-14">
        <div>
          <h2 className="text-4xl font-bold text-white">Throwback Anime!</h2>
          <div className="mt-9 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {/* CARD */}
            {throwBackMovies.map((movie: MovieTypes) => (
              <div
                onClick={() => {
                  setSelectedMovie(movie);
                  setSelectedBottomLink("Episodes");
                }}
                key={movie.id}
                className="h-[20vh] sm:h-[42.7vh] cursor-pointer rounded-3xl border-2 bg-cover bg-center transition-transform duration-300 hover:-translate-y-3"
                style={{
                  backgroundImage: `url(${movie.title.link})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
