import React from "react";
import { menuList } from "@/utils/constants";
import MenuSection from "./MenuSection";

function MenuContainer() {
  return (
    <div className="bg-secondary rounded-lg text-black h-[85vh] overflow-y-auto mx-2">
      {menuList.map((menu) => {
        return <MenuSection key={menu.category} menu={menu} />;
      })}
    </div>
  );
}

export default MenuContainer;
