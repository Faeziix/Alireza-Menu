"use client";
import React, { useState } from "react";
import Category from "./Category";
import { menuList } from "@/utils/constants";
import useHeadObserver from "@/hooks/useHeadObserver";

function CategoryContainer() {
  const { activeId } = useHeadObserver();

  return (
    <div className="relative mt-4">
      <div className="flex my-4 items-center gap-2 max-w-[90vw] overflow-auto mx-auto">
        {menuList.map((category, index) => (
          <Category
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
