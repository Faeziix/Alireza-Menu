import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MenuItem } from "@/utils/constants";
import useHeadObserver from "@/hooks/useHeadObserver";

type CategoryData = {
  category: MenuItem;
  active: boolean;
};

function Category({ category, active }: CategoryData) {
  const categoryRef = useRef<HTMLDivElement>(null);
  const { changeActiveId } = useHeadObserver();

  // useEffect(() => {
  //   if (active) {
  //     categoryRef.current?.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // }, [active]);

  return (
    <div className="flex" ref={categoryRef}>
      <button
        className={` ${
          active ? "bg-primary text-secondary" : "bg-transparent text-primary"
        } rounded-2xl grow min-w-[12rem] p-4 gap-1 flex flex-col border-primary border-2 justify-center items-center basis-full`}
        onClick={() => changeActiveId(category.category)}
      >
        <div className="">
          <Image
            src={active ? category.images.dark : category.images.light}
            alt="Picture of the author"
            className="w-12 h-12"
          />
        </div>
        <p className="text-center whitespace-nowrap">{category.category}</p>
      </button>
    </div>
  );
}

export default Category;
