import React from "react";
import { menuList } from "@/utils/constants";
import MenuSection from "./MenuSection";

function MenuContainer() {
  return (
    <div className="bg-secondary rounded-2xl text-black h-[74vh] overflow-y-auto mx-2 py-5">
      {menuList.map((menu) => {
        return <MenuSection key={menu.category} menu={menu} />;
      })}
    </div>
  );
}

export default MenuContainer;
