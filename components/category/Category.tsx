import React from "react";
import Image from "next/image";
import { MenuItem } from "@/utils/constants";
import useHeadObserver from "@/hooks/useHeadObserver";

type CategoryData = {
  onClick: () => void;
  category: MenuItem;
  active: boolean;
};

function Category({ onClick, category, active }: CategoryData) {
  const { changeActiveId } = useHeadObserver();

  return (
    <div className="flex">
      <button
        className={` ${
          active ? "bg-primary text-secondary" : "bg-transparent text-primary"
        } rounded-2xl grow min-w-[7rem] p-4 gap-1 flex flex-col border-primary border-2 justify-center items-center basis-full`}
        onClick={() => changeActiveId(category.category)}
      >
        <div onClick={onClick} className="w-8 h-8 ">
          <Image
            src={active ? category.images.dark : category.images.light}
            alt="Picture of the author"
          />
        </div>
        <p className="text-center whitespace-nowrap">{category.category}</p>
      </button>
    </div>
  );
}

export default Category;
