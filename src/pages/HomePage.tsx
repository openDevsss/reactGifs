
import React from "react";
import { GifsList } from "../components/GifsList/GifsList";
import { HomeLayout } from "../layout/HomeLayout";

export function HomePage() {
  return (
    <HomeLayout>
      <GifsList />
    </HomeLayout>
  );
}
