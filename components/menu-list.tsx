"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

interface MenuListProps {
  isScrolled: boolean;
}

const MenuList: React.FC<MenuListProps> = ({ isScrolled }) => {
  return (
    <NavigationMenu className="flex items-center justify-between text-[16px] font-medium py-3">
      <NavigationMenuList className="flex items-center gap-5">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className=" transition-colors text-[16px] px-0 montserrat  hover:text-[#1AD6B2] bg-transparent "
            style={{ pointerEvents: "fill" }} // Esto deshabilita el clic
          >
            Servicios
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-md shadow-lg bg-transparent dark:bg-[#1C3C3F]">
            <ul className="grid gap-4 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem href="/desarrollo" title="Desarrollo">
                Ofrecemos soluciones de desarrollo a medida para tu empresa.
              </ListItem>
              <ListItem href="/design" title="Diseño">
                Servicios de diseño creativo y funcional.
              </ListItem>
              <ListItem href="/redes" title="Redes">
                Implementación y gestión de redes seguras y eficientes.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} passHref legacyBehavior>
              <NavigationMenuLink
                className={`${
                  isScrolled ? "text-[#1C3C3F]" : "text-[#1C3C3F]"
                } hover:text-[#1AD6B2] transition-colors montserrat text-[16px]`}
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const menuItems = [
  { label: "Trabajos", href: "/work" },
  { label: "Nosotros", href: "/nosotros" },
];

export default MenuList;

interface ListItemProps {
  href: string;
  title: string;
  children: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ href, title, children }, ref) => (
    <li>
      <Link href={href} passHref legacyBehavior>
        <a
          ref={ref}
          className="block p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1C3C3F] text-sm transition-colors cursor-pointer"
        >
          <div className="font-semibold text-[#1C3C3F] dark:text-gray-200 montserrat text-sm">
            {title}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{children}</p>
        </a>
      </Link>
    </li>
  )
);

ListItem.displayName = "ListItem";
