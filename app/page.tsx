"use client";
import CategoryContainer from "@/components/category/CategoryContainer";
import MenuContainer from "@/components/menu/MenuContainer";
import useHeadObserver from "@/hooks/useHeadObserver";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl text-active py-8 text-center font-bold">
        منوی کافی‌شاپ
      </h1>

      <div className="grid grid-rows-[auto_1fr] h-full">
        <CategoryContainer />
        <MenuContainer />
      </div>
    </main>
  );
}
