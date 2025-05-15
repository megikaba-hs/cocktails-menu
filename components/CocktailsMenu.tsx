import React from "react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type Props = {
  category: string;
  items: MenuItem[];
};

const MenuSection: React.FC<Props> = ({ category, items }) => {
  const isFlavorsMenu = category === "FLAVORS MENU";

  return (
    <section className="shadow-pastel rounded-2xl bg-amber-800/60 p-4">
      <h2 className="text-center text-2xl font-bold text-[#D8A34D]">
        {category}
      </h2>
      <ul
        className={`list-none p-0 text-white ${
          isFlavorsMenu ? "text-center" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item.name} className="my-4">
            {isFlavorsMenu ? (
              <span className="block font-bold">{item.name}</span>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-white font-bold">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-black">{item.description}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
