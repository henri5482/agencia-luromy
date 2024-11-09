import { Menu, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ItemsMenuMobile = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleProductsToggle = () => {
    setProductsOpen(!isProductsOpen);
    setPopoverOpen(false); // Cierra el menú al abrir productos
  };

  const closeModal = () => {
    setProductsOpen(false);
  };

  const handleProductClick = () => {
    closeModal(); // Cierra el modal de productos al seleccionar un producto
    setPopoverOpen(false); // Cierra el navbar
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger
        aria-label="Open menu"
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#1C3C3F]"
      >
        <Menu size={24} />
      </PopoverTrigger>
      <PopoverContent className="w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4">
        <button
          onClick={handleProductsToggle}
          className="block w-full py-2 px-4 text-left hover:bg-gray-100 dark:hover:bg-[#1C3C3F] rounded-md flex items-center"
        >
          <MenuIcon className="mr-2" />
          Servicios
        </button>
        <Link
          href="/work"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-[#1C3C3F] rounded-md"
        >
          <span className="flex items-center">Trabajos</span>
        </Link>
        <Link
          href="/nosotros"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-[#1C3C3F] rounded-md"
        >
          <span className="flex items-center">Nosotros</span>
        </Link>
      </PopoverContent>

      {/* Modal de Productos */}
      {isProductsOpen && (
        <div className="fixed inset-0 bg-[#1C3C3F] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1C3C3F] rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[80%] overflow-y-auto">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold">Nuestros Servicios</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-[#1C3C3F]"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <Link href="/desarrollo">
                <li
                  onClick={handleProductClick}
                  className="flex items-center justify-between bg-gray-100 dark:[#1C3C3F] rounded-md p-2 transition-all hover:bg-gray-200 gap-2 dark:hover:bg-gray-600 cursor-pointer"
                >
                    <span className="font-semibold">Desarrollo</span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                  Ofrecemos soluciones de desarrollo a medida para tu empresa.
                  </span>
                </li>
                  </Link>
                <Link href="/design">
                <li
                  onClick={handleProductClick}
                  className="flex items-center justify-between bg-gray-100 dark:bg-[#1C3C3F]rounded-md p-2 transition-all gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                >
                    <span className="font-semibold">Diseño</span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                  Servicios de diseño creativo y funcional.
                  </span>
                </li>
                  </Link>
                <Link href="/redes">
                <li
                  onClick={handleProductClick}
                  className="flex items-center justify-between bg-gray-100 dark:bg-[#1C3C3F] rounded-md p-2 transition-all gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                >
                    <span className="font-semibold">Redes</span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                  Implementación y gestión de redes seguras y eficientes.
                  </span>
                </li>
                  </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Popover>
  );
};

export default ItemsMenuMobile;
