import { Link } from "react-router-dom";
import { useTheme } from "@/context/theme-provider";
import CitySearch from "./CitySearch";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-3 sm:px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <Link to={"/"} className="shrink-0">
          <img
            src={theme === "dark" ? "/logo_new1.png" : "/logo_new.png"}
            alt="Klimate logo"
            className="h-10 sm:h-12 md:h-14 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-auto sm:w-[60%] md:w-[50%] lg:w-[40%]">
          {/* Search input shrinks on small screens */}
          <div className="flex-1 min-w-[120px] sm:min-w-[200px]">
            <CitySearch />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
