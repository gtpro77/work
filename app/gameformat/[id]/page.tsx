import React from "react";
import GameClient from "./GameClient"; // client component (see below)

type Props = { params: { id: string } };

export default function Page({ params }: Props) {
  return <GameClient id={params.id} />;
}
