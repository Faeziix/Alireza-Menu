"use client";
import React, { useState } from "react";
import Category from "./Category";
import { menuList } from "@/utils/constants";
import useHeadObserver from "@/hooks/useHeadObserver";

function CategoryContainer() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { activeId } = useHeadObserver();

  function handleCategoryClick(index: number) {
    setActiveCategory(index);
  }

  return (
    <div className="relative mt-4">
      <div className="flex my-4 items-center gap-2 max-w-[90vw] overflow-auto mx-auto">
        {menuList.map((category, index) => (
          <Category
            onClick={() => handleCategoryClick(index)}
            key={category.category}
            category={category}
            active={activeId === category.category}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryContainer;
