import React from "react";

import { cocktailsMenu } from "../data/cocktailsMenu";
import CocktailsMenu from "../components/CocktailsMenu";
import FirstPage from "../components/FirstPage";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl p-4">
      <FirstPage imageUrl="images/el-sahara-menu.PNG" />

      <div className="mt-8 space-y-8">
        {cocktailsMenu.map((section) => (
          <div
            key={section.category}
            className="rounded-2xl bg-cover bg-center p-4"
            style={{ backgroundImage: `url(${section.imageUrl})` }}
          >
            <CocktailsMenu category={section.category} items={section.items} />
          </div>
        ))}
      </div>
    </div>
  );
}
