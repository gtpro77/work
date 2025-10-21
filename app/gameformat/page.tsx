"use client";
import dynamic from "next/dynamic";
import games from "./fullnames.json"; 
// Removed unused 'Image' import to keep things clean.

// 1. Define the dynamic component outside of the functional component or hook 
const DynamicGameEmbed = dynamic(
  // Assuming the path is correct: '../iframe/GameEmbed'
  () => import('../iframe/GameEmbed'),
  { 
    ssr: false, 
    loading: () => (
    <div className="mt-6 bg-gray-900 h-96 flex items-center justify-center rounded-lg shadow-xl">
        <div className="w-full h-full animate-pulse bg-gray-800 flex items-center justify-center">
            <p className="text-white text-lg font-mono">Loading Game Resources...</p>
        </div>
      </div>
    )
  } 
);


export default function GamePage({ params }: { params: { id: string } }) {
  // 1. Find the game data based on the URL parameter
  const game = games.find((g) => g.id.toString() === params.id);

  // 2. Handle the case where the game ID is not found
  if (!game) {
    return (
      <span>loading...</span>)
  }
  
  // 3. Return the main structure, including the dynamic game embed
  return (
    // A minimal container for the page content
    <div className="p-4">
        <h2>Now Loading: {game.name}</h2>
          
        {/* GAME EMBED SECTION: NOW USING THE DYNAMIC COMPONENT */}
        {/* This ensures the iframe is ONLY rendered on the client side, avoiding SSR issues. */}
      <DynamicGameEmbed 
          gameUrl={game.url} 
          gameName={game.name} 
        />
 
          
    </div>
  );
}