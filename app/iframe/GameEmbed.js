"use client";

export default function GameEmbed({ gameUrl, gameName }) {
  if (!gameUrl) {
    return <div className="text-red-500">Invalid URL</div>;
  }

  return (
    <div className="mt-6 bg-black rounded-lg shadow-lg">
      <iframe
        key={gameUrl} // 👈 forces rerender when URL changes
        src={gameUrl}
        title={gameName || "Game"}
        className="w-full h-[600px] border-0"
        allowFullScreen
      />
    </div>
  );
}
