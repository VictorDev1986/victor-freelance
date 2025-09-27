import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { smoothScrollIntoView, scrollToIdWhenReady, smoothScrollTo } from "@/lib/smoothScroll";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import Logo from "../assets/Logo.png";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  href: string;
  label: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "Acerca de mí",
  },
  {
    href: "#projects",
    label: "Proyectos",
  },
  {
    href: "#pricing",
    label: "Precios",
  },
   {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "#contact",
    label: "Contacto",
  },

];

const servicesList: ServiceProps[] = [
  {
    href: "/servicios/landing-page",
    label: "Landing Page",
    description: "Páginas de aterrizaje optimizadas para conversión"
  },
  {
    href: "/servicios/pagina-web",
    label: "Página Web",
    description: "Sitios web corporativos completos"
  },
  {
    href: "/servicios/ecommerce",
    label: "E-commerce",
    description: "Tiendas online profesionales"
  },
  {
    href: "/servicios/software-medida",
    label: "Software a Medida",
    description: "Aplicaciones web personalizadas"
  },
  
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const NAVBAR_OFFSET = 70; // compensar altura aproximada del navbar
  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar a que el DOM de Home esté listo y hacer scroll suave
      scrollToIdWhenReady(sectionId, 40, 50, { offset: NAVBAR_OFFSET, duration: 650 });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        smoothScrollIntoView(element, { offset: NAVBAR_OFFSET, duration: 650 });
      }
    }
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Es una sección, usar handleSectionNavigation
      handleSectionNavigation(href.replace('#', ''));
    } else {
      // Es una ruta, navegar directamente
      navigate(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Reducido de 100 a 50 para que sea más rápido
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Navbar fijo (fixed) con fondo totalmente transparente al inicio y blur + translucidez al hacer scroll
    <header
      className={`fixed top-0 left-0 h-14 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/30 dark:bg-background/30 border-b border-border/40 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
      // Nota: si algún contenido queda oculto detrás del navbar, asegurarse de añadir pt-14 al primer contenedor principal
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              to="/"
              className="ml-2 font-bold text-2xl flex items-center tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                // Cerrar sheet móvil si está abierto
                if (isOpen) setIsOpen(false);
                if (location.pathname !== '/') {
                  navigate('/');
                  // Asegurar que tras montar Home se haga scroll suave al top
                  setTimeout(() => smoothScrollTo(0, { duration: 650 }), 50);
                } else {
                  smoothScrollTo(0, { duration: 650 });
                }
              }}
              aria-label="Ir al inicio"
            >
              <img
                src={Logo}
                alt="Logo Victor Sánchez"
                className="mr-2 w-12 h-12 object-contain"
                style={{ display: 'inline-block' }}
              />
              <span>Victor</span>
              <span className="text-green-500 ml-2">Sánchez</span>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <div className="flex justify-center items-center w-full py-2">
                    <img
                      src={Logo}
                      alt="Logo Victor Sánchez"
                      className="w-16 h-16 object-contain"
                      style={{ display: 'inline-block' }}
                    />
                  </div>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4 text-2xl">
                  {routeList.slice(0, 1).map(({ href, label }: RouteProps) => (
                    <button
                      key={label}
                      onClick={() => {
                        handleSectionNavigation(href.replace('#', ''));
                        setIsOpen(false);
                      }}
                      className={`${buttonVariants({ variant: "ghost" })} text-2xl font-semibold`}
                    >
                      {label}
                    </button>
                  ))}
                  
                  {/* Servicios en móvil - Submenu desplegable */}
                  <div className="w-full">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`${buttonVariants({ variant: "ghost" })} w-full flex items-center justify-center gap-2 text-2xl font-semibold`}
                    >
                      Servicios
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {mobileServicesOpen && (
                      <div className="mt-2 space-y-1 pl-4">
                        {servicesList.map(({ href, label, description }) => (
                          <Link
                            key={label}
                            to={href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block w-full text-left p-3 rounded-md hover:bg-accent transition-colors text-base"
                          >
                            <div className="text-base font-medium leading-snug">{label}</div>
                            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {routeList.slice(1).map(({ href, label }: RouteProps) => (
                    <button
                      key={label}
                      onClick={() => {
                        handleNavigation(href);
                        setIsOpen(false);
                      }}
                      className={`${buttonVariants({ variant: "ghost" })} text-2xl font-semibold`}
                    >
                      {label}
                    </button>
                  ))}
                  
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/VictorDev1986"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.slice(0, 1).map((route: RouteProps, i) => (
              <button
                key={i}
                onClick={() => handleSectionNavigation(route.href.replace('#', ''))}
                className={`text-lg ${buttonVariants({
                  variant: "ghost",
                })} font-medium`}
              >
                {route.label}
              </button>
            ))}
            
            {/* Submenu de Servicios */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-lg ${buttonVariants({
                    variant: "ghost",
                  })} font-medium`}>
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {servicesList.map((service) => (
                        <NavigationMenuLink
                          key={service.href}
                          asChild
                        >
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.label}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {routeList.slice(1).map((route: RouteProps, i) => (
              <button
                key={i + 1}
                onClick={() => handleNavigation(route.href)}
                className={`text-lg ${buttonVariants({
                  variant: "ghost",
                })} font-medium`}
              >
                {route.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/VictorDev1986"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
