import BreakfastIconDark from "@/public/icons/Breakfast/Dark.png";
import CakeIconDark from "@/public/icons/Cake/Dark.png";
import CoffeeIconDark from "@/public/icons/Coffee/Dark.png";
import HotdrinkIconDark from "@/public/icons/Hotdrink/Dark.png";
import IceIconDark from "@/public/icons/Ice/Dark.png";
import IcecoffeeIconDark from "@/public/icons/Icecoffee/Dark.png";
import JuiceIconDark from "@/public/icons/Juice/Dark.png";
import SnacksIconDark from "@/public/icons/Snacks/Dark.png";
import TeaIconDark from "@/public/icons/Tea/Dark.png";
import MocktailIconDark from "@/public/icons/Mocktail/Dark.png";

import BreakfastIconLight from "@/public/icons/Breakfast/Light.png";
import CakeIconLight from "@/public/icons/Cake/Light.png";
import CoffeeIconLight from "@/public/icons/Coffee/Light.png";
import HotdrinkIconLight from "@/public/icons/Hotdrink/Light.png";
import IceIconLight from "@/public/icons/Ice/Light.png";
import IcecoffeeIconLight from "@/public/icons/Icecoffee/Light.png";
import JuiceIconLight from "@/public/icons/Juice/Light.png";
import SnacksIconLight from "@/public/icons/Snacks/Light.png";
import TeaIconLight from "@/public/icons/Tea/Light.png";
import MocktailIconLight from "@/public/icons/Mocktail/Light.png";

import CoffeeImg from "@/public/coffee-image.png";

import { StaticImageData } from "next/image";

export type Item = {
  name: string;
  nameFa: string;
  description: string;
  price: number;
  image: StaticImageData;
};

export type MenuItem = {
  category: string;
  items: Item[];
  images: {
    light: StaticImageData;
    dark: StaticImageData;
  };
};

const categories = {
  espresso: "اسپرسوبار",
  ice: "آیس کافه",
  hotdrink: "نوشیدنی گرم",
  breakfast: "صبحانه",
  juice: "آبمیوه",
  tea: "چای و دمنوش",
  snacks: "میان وعده",
  cake: "کیک و وافل",
};

export const menuList: MenuItem[] = [
  {
    category: "اسپرسوبار",
    images: {
      light: CoffeeIconLight,
      dark: CoffeeIconDark,
    },
    items: [
      {
        name: "Double Espresso",
        nameFa: "دوبل اسپرسو",
        description: "Double shot of espresso",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Single Espresso",
        nameFa: "اسپرسو",
        description: "Single shot of espresso",
        price: 2.5,
        image: CoffeeImg,
      },
      {
        name: "Latte",
        nameFa: "لاته",
        description: "Espresso with steamed milk",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Cappuccino",
        nameFa: "کاپوچینو",
        description: "Espresso with a little bit of steamed milk",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Con Leche",
        nameFa: "کن لچه",
        description: "Espresso with a lot of steamed milk",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Americano",
        nameFa: "آمریکانو",
        description: "Espresso with hot water",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Mocha",
        nameFa: "موکا",
        description: "Espresso with chocolate",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Caramel Macchiato",
        nameFa: "کارامل ماکیاتو",
        description: "Espresso with caramel and steamed milk",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Turkish Coffee",
        nameFa: "قهوه ترک",
        description: "Turkish coffee",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Greek Coffee",
        nameFa: "قهوه یونانی",
        description: "Greek coffee",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Hype Espresso",
        nameFa: "اسپرسو هایپ",
        description: "Espresso with a lot of steamed milk",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Hype Latte",
        nameFa: "لاته هایپ",
        description: "Espresso with a lot of steamed milk",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Affogato",
        nameFa: "افوگاتو",
        description: "Espresso with ice cream",
        price: 165000,
        image: CoffeeImg,
      },
    ],
  },
  {
    category: "آیس کافه",
    images: {
      light: IcecoffeeIconLight,
      dark: IcecoffeeIconDark,
    },
    items: [
      {
        name: "Special",
        nameFa: "مخصوص کافه",
        description: "Espresso with ice cream",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Iced Latte",
        nameFa: "لاته یخی",
        description: "Espresso with ice cream",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Iced Mocha ",
        nameFa: "موکا یخی",
        description: "Espresso with ice cream",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Iced Caramel Macchiato",
        nameFa: "کارامل ماکیاتو یخی",
        description: "Espresso with ice cream",
        price: 165000,
        image: CoffeeImg,
      },
    ],
  },
  {
    category: "نوشیدنی گرم",
    images: {
      light: HotdrinkIconLight,
      dark: HotdrinkIconDark,
    },
    items: [
      {
        name: "Hot Chocolate",
        nameFa: "شکلات گرم",
        description: "Hot chocolate",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Milk Chocolate",
        nameFa: "شیر کاکائو",
        description: "Milk chocolate",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Masala",
        nameFa: "ماسالا",
        description: "Masala",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Federal",
        nameFa: "فدرال",
        description: "Federal",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Black Nescafe",
        nameFa: "نسکافه بلک",
        description: "Black nescafe",
        price: 165000,
        image: CoffeeImg,
      },
    ],
  },
  {
    category: "آبمیوه",
    images: {
      light: JuiceIconLight,
      dark: JuiceIconDark,
    },
    items: [
      {
        name: "Carrot Juice",
        nameFa: "آب هویج",
        description: "Carrot juice",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Carrot and Ice Cream Juice",
        nameFa: "آب هویج و بستنی",
        description: "Carrot and ice cream juice",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Apple Juice",
        nameFa: "آب سیب",
        description: "Apple juice",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Celery and Lemon Juice",
        nameFa: "آب کرفس لیمو",
        description: "Celery and lemon juice",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Banana Milk",
        nameFa: "شیر موز",
        description: "Banana milk",
        price: 165000,
        image: CoffeeImg,
      },
    ],
  },
  {
    category: "چای و دمنوش",
    images: {
      light: TeaIconLight,
      dark: TeaIconDark,
    },
    items: [
      {
        name: "Peace",
        nameFa: "آرامش",
        description: "Peace",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Special",
        nameFa: "مخصوص باریستا",
        description: "Special",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Hot Apple",
        nameFa: "آب سیب داغ",
        description: "Hot apple",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Fruit Tea",
        nameFa: "چای میوه ای",
        description: "Fruit tea",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Gilani Tea",
        nameFa: "چای گیلانی",
        description: "Gilani tea",
        price: 165000,
        image: CoffeeImg,
      },
    ],
  },
  {
    category: "کیک و وافل",
    images: {
      light: CakeIconLight,
      dark: CakeIconDark,
    },
    items: [
      {
        name: "Chocolate and Strawberry Waffle",
        nameFa: "وافل شکلات و توت فرنگی",
        description: "Chocolate and strawberry waffle",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Ice cream and Banana Waffle",
        nameFa: "وافل بستنی و موز",
        description: "Ice cream and banana waffle",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Wet Chocolate Cake",
        nameFa: "شکلاتی خیس",
        description: "Chocolate and banana waffle",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Cheesecake",
        nameFa: "چیزکیک",
        description: "Cheesecake",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Chocolate Canash Dessert",
        nameFa: "کدسر کاناش شکلاتی",
        description: "Chocolate canash dessert",
        price: 165000,
        image: CoffeeImg,
      },
    ],
  },
  {
    category: "میلک‌شیک و بستنی",
    images: {
      light: IceIconLight,
      dark: IceIconDark,
    },
    items: [
      {
        name: "Chocolate Milkshake",
        nameFa: "نوتلا",
        description: "Chocolate milkshake",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Lotus Milkshake",
        nameFa: "لوتوس",
        price: 165000,
        image: CoffeeImg,
        description: "Lotus milkshake",
      },
      {
        name: "Oreo Milkshake",
        nameFa: "اورئو",
        price: 165000,
        image: CoffeeImg,
        description: "Oreo milkshake",
      },
      {
        name: "Peanut Butter Milkshake",
        nameFa: "بادام‌زمینی",
        price: 165000,
        image: CoffeeImg,
        description: "Peanut butter milkshake",
      },
      {
        name: "Banana Chocolate Milkshake",
        nameFa: "موزشکلات",
        price: 165000,
        image: CoffeeImg,
        description: "Banana chocolate milkshake",
      },
      {
        name: "Vanilla Milkshake",
        nameFa: "وانیل",
        price: 165000,
        image: CoffeeImg,
        description: "Vanilla milkshake",
      },
      {
        name: "Chocolate Glace",
        nameFa: "شکلات گلاسه",
        price: 165000,
        image: CoffeeImg,
        description: "Chocolate glace",
      },
      {
        name: "Cafe Glace",
        nameFa: "کافه گلاسه",
        price: 165000,
        image: CoffeeImg,
        description: "Cafe glace",
      },
    ],
  },
  {
    category: "موکتل",
    images: {
      light: MocktailIconLight,
      dark: MocktailIconDark,
    },
    items: [
      {
        name: "Lemonade",
        nameFa: "لیموناد",
        description: "Lemonade",
        price: 165000,
        image: CoffeeImg,
      },
      {
        name: "Mojito",
        nameFa: "موهیتو",
        description: "Mojito",
        price: 165000,
        image: CoffeeImg,
      },
      {
        nameFa: "کوک اسپرسو",
        name: "Coke Espresso",
        description: "Coke espresso",
        price: 165000,
        image: CoffeeImg,
      },
      {
        nameFa: "اوکراین",
        name: "Ukraine",
        description: "Ukraine",
        price: 165000,
        image: CoffeeImg,
      },
      {
        nameFa: "سان ست",
        name: "Sunset",
        description: "Sunset",
        price: 165000,
        image: CoffeeImg,
      },
      {
        nameFa: "سیگنیچر",
        name: "Signature",
        description: "Signature",
        price: 165000,
        image: CoffeeImg,
      },
    ],
  },
  {
    category: "صبحانه",
    images: {
      light: BreakfastIconLight,
      dark: BreakfastIconDark,
    },
    items: [],
  },
  {
    category: "میان وعده",
    images: {
      light: SnacksIconLight,
      dark: SnacksIconDark,
    },
    items: [],
  },
];
