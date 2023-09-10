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
      className="rounded-xl bg-primary p-2 gap-2 flex flex-col items-center mb-2"
    >
      <div className="grow">
        <Image
          src={item.image}
          className="rounded-lg"
          alt="Picture of the author"
        />
      </div>

      <div className="flex flex-col grow w-full px-2">
        <div className="w-full text-base mb-6">
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
          <p className="text-sm font-light">{item.description}</p>
        </div>

        <h4 className="text-left">{item.price} تومان</h4>
      </div>
    </div>
  );
}

export default MenuItem;
