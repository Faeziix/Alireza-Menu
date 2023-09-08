import { Item } from "@/utils/constants";
import Image from "next/image";
import React from "react";

type MenuItemData = {
  item: Item;
};

function MenuItem({ item }: MenuItemData) {
  return (
    <div
      style={{ direction: "rtl" }}
      className="mx-2 rounded-lg bg-primary p-2 flex"
    >
      <div className="h-20 w-20 ml-2">
        <Image
          src={item.image}
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col grow">
        <div className="w-full text-sm">
          <div className="flex justify-between w-full mb-2">
            <h3 className="font-bold">{item.nameFa}</h3>
            <h3
              style={{
                direction: "ltr",
              }}
              className="font-bold"
            >
              {item.name}
            </h3>
          </div>
          <p className="text-xs">{item.description}</p>
        </div>

        <h4 className="text-left">{item.price} تومان</h4>
      </div>
    </div>
  );
}

export default MenuItem;
