"use client";
import React, { useState } from "react";
import Category from "./Category";
import { menuList } from "@/utils/constants";
import useHeadObserver from "@/hooks/useHeadObserver";

function CategoryContainer() {
  const { activeId, changeActiveId } = useHeadObserver();

  return (
    <div className="relative">
      <div
        style={{
          direction: "rtl",
        }}
        className="flex py-1 my-3 items-center gap-2 max-w-[90vw] overflow-auto mx-auto"
      >
        {menuList.map((category, index) => (
          <Category
            key={category.category}
            category={category}
            active={activeId === category.category}
            changeActiveId={changeActiveId}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryContainer;
