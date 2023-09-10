import { MenuItem as MenuItemType } from "@/utils/constants";
import React from "react";
import MenuItem from "./MenuItem";
import Divider from "../Divider";

type MenuSectionData = {
  menu: MenuItemType;
};

function MenuSection({ menu: { category, items } }: MenuSectionData) {
  return (
    <div id={category} className="section flex flex-col gap-4 mx-4">
      <h2 className="text-2xl font-bold text-center text-primary flex items-center justify-between gap-2">
        <div className="w-1/5">
          <Divider />
        </div>
        {category}
        <div className="rotate-180 w-1/5">
          <Divider />
        </div>
      </h2>
      <div className="flex flex-col gap-1 mb-4">
        {items.map((item) => {
          return <MenuItem key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
}

export default MenuSection;
