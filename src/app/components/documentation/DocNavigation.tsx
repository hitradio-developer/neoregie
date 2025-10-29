"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const DocNavigation = () => {
  const [navItem, setNavItem] = useState("version");

  function getNavItem(item: string) {
    setNavItem(item);
  }

  const DocsNav = [
    {
      id: 1,
      navItem: "Qui sommes nous ?",
      hash: "version",
    },
    {
      id: 2,
      navItem: "Notre Vision - Mission",
      hash: "start",
    },
    {
      id: 3,
      navItem: "Types d'offres",
      hash: "structure",
    },
    {
      id: 4,
      navItem: "Neoregie dans le temps",
      hash: "configuration",
    },
  ];

  return (
    <div className="flex flex-col gap-0.5 mt-4 items-start fixed pe-4">
      {DocsNav.map((item) => {
        return (
          <Link
            key={item.id}
            href={`#${item.hash}`}
            onClick={() => getNavItem(item.hash)}
            className={`py-2.5 hover:bg-red-200/20 hover:text-red-600 dark:hover:text-red-600 xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium  ${item.hash === navItem
              ? "bg-red-600 text-white"
              : "text-white/60"
              }`}
          >
            {item.navItem}
          </Link>
        );
      })}
    </div>
  );
};
