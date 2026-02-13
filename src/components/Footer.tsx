import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export const Footer = () => {
  return (
    <footer id="contact">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div className="col-span-1 md:col-span-2 text-center md:text-left">
          <Link
            to="/"
            className="font-bold text-xl flex items-center justify-center md:justify-start mb-4"
          >
            <img
              src={Logo}
              alt="Logo Victor Sánchez"
              className="mr-2 w-16 h-16 object-contain"
            />
            Victor <span className="text-green-500 ml-2">Sánchez</span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
            Desarrollador de software freelance especializado en soluciones web modernas y escalables.
          </p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="font-bold text-lg mb-2">Navegación</h3>
          <a
            href="#about"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Acerca de mí
          </a>
          <a
            href="#projects"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Proyectos
          </a>
          <a
            href="#pricing"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Precios
          </a>
          <Link
            to="/blog"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Blog
          </Link>
        </div>

        {/* Servicios */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="font-bold text-lg mb-2">Servicios</h3>
          <Link
            to="/servicios/landing-page"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Landing Page
          </Link>
          <Link
            to="/servicios/pagina-web"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Página Web
          </Link>
          <Link
            to="/servicios/ecommerce"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            E-commerce
          </Link>
          <Link
            to="/servicios/software-medida"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Software a Medida
          </Link>
        </div>
      </section>

      <section className="container pb-8 text-center border-t pt-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Victor Sánchez. Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
};
