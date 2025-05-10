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
    <section className="shadow-pastel mb-8 rounded-2xl bg-white/80 p-4">
      <h2 className="text-center text-2xl font-bold text-black">{category}</h2>
      <ul
        className={`list-none p-0 text-gray-800 ${
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
                  <span className="text-black text-gray-700">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
