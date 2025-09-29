import { Link } from "react-router-dom";
import { useTheme } from "@/context/theme-provider";
import CitySearch from "./CitySearch";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0">
          <img
            src={theme === "dark" ? "/logo_new1.png" : "/logo_new.png"}
            alt="Klimate logo"
            className="h-10 sm:h-12 md:h-14 transition-transform duration-500"
          />
        </Link>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* City Search */}
          <div className="w-32 xs:w-40 sm:w-48 md:w-64">
            <CitySearch />
          </div>

          {/* Theme Toggle */}
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
