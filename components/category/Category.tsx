import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MenuItem } from "@/utils/constants";

type CategoryData = {
  category: MenuItem;
  active: boolean;
  changeActiveId: (id: string) => void;
};

function Category({ category, active, changeActiveId }: CategoryData) {
  const categoryRef = useRef<HTMLDivElement>();

  useEffect(() => {
    console.log("active", active);
    if (active) {
      console.log(categoryRef.current?.offsetLeft);
      categoryRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <div ref={categoryRef} className="flex">
      <button
        id={"btn-" + category.category}
        className={` ${
          active ? "bg-primary text-secondary" : "bg-transparent text-primary"
        } rounded-2xl grow min-w-[8rem] p-4 gap-1 flex flex-col border-primary border-2 justify-center items-center basis-full`}
        onClick={() => changeActiveId(category.category)}
      >
        <div className="">
          <Image
            src={category.images.dark}
            alt="Picture of the author"
            className={active ? "block" : "hidden"}
            priority
          />
          <Image
            src={category.images.light}
            alt="Picture of the author"
            className={active ? "hidden" : "block"}
            priority
          />
        </div>
        <p className="text-center text-sm whitespace-nowrap">
          {category.category}
        </p>
      </button>
    </div>
  );
}

export default Category;
