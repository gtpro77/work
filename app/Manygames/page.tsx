"use client";
import { useSearchParams } from "next/navigation";
import gamesData from "../gameformat/fullnames.json"; // 👈 adjust path to your JSON
import Image from "next/image";
import Link from "next/link";

export default function DisplayPage() {
  const params = useSearchParams();
  const text = params.get("text"); // 👈 receiving category name

  // Filter games based on category
  const games = gamesData.filter(
    (game) => game.category.toLowerCase() === text?.toLowerCase()
  );

  return (
    <div className="p-8">
      {/* Category header */}
      <div className="shadow-lg rounded-xl w-full h-auto bg-white flex items-center justify-center mb-10">
        <p className="text-black font-semibold text-2xl">{text} Games</p>
      

      {/* Games Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {games.length > 0 ? (
          games.map((game) => (
            <Link
              key={game.id}
              href={{
                pathname: "/gameformat", // 👈 your game play page
                query: { id: game.id },
              }}
              className="flex flex-col items-center"
            >
              <Image
                src={game.image}
                alt={game.name}
                width={200}
                height={140}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
              />
              <span className="mt-2 text-base font-semibold text-center">
                {game.name}
              </span>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 text-lg col-span-full text-center">
            No games found for {text}.
          </p>
        )}
      </div>
    </div>
    </div>
  );
}
