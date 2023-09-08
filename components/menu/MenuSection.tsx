import { MenuItem as MenuItemType } from "@/utils/constants";
import React from "react";
import MenuItem from "./MenuItem";

type MenuSectionData = {
  menu: MenuItemType;
};

function MenuSection({ menu: { category, items } }: MenuSectionData) {
  return (
    <div id={category} className="section flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center text-primary divider-line">
        {category}
      </h2>
      <div className="flex flex-col gap-4 mb-6">
        {items.map((item) => {
          return <MenuItem key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
}

export default MenuSection;
