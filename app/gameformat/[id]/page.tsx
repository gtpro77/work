import React from "react";
import GameClient from "./GameClient"; // client component

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  return <GameClient id={params.id} />;
}
