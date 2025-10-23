"use client";
import dynamic from "next/dynamic";
import games from "@/app/gameformat/fullnames.json";

const DynamicGameEmbed = dynamic(() => import("@/app/iframe/GameEmbed"), { ssr: false });

export default function GameClient({ id }: { id: string }) {
  const game = games.find((g) => String(g.id) === String(id));

  if (!game) {
    return <div className="flex h-screen items-center justify-center text-white">Game not found...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white mb-4">Now Loading: {game.name}</h2>
      <DynamicGameEmbed gameUrl={game.url} gameName={game.name} />
    </div>
  );
}
