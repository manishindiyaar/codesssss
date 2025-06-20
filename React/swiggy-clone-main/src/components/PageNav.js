import logo from "../assets/asset 47.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as OffersIcon } from "../assets/asset 51.svg";
import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import { ReactComponent as HelpIcon } from "../assets/help.svg";
import hamburgerMenu from "../assets/hamburger_menu.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import ToggleMenuContext from "../contexts/ToggleMenuContext";
import useRestaurantsPlaceId from "../hooks/useRestaurantsPlaceId";

export default function PageNav({ setIsSearchPlace }) {
  const cartItems = useSelector((store) => store.cart.items);
  const { toggleMenu, setToggleMenu } = useContext(ToggleMenuContext);
  const {restaurantPlaceName} = useRestaurantsPlaceId();

  function handleSearchForRestaurant() {
    setIsSearchPlace(true);
  }

  useEffect(() => {
    function handleCloseToggleMenu() {
      return window.innerWidth > 760 && setToggleMenu({ isActive: false });
    }

    window.addEventListener("resize", handleCloseToggleMenu);

    return () => window.removeEventListener("resize", handleCloseToggleMenu);
  }, [setToggleMenu]);

  function handleToggleMenu() {
    if (window.innerWidth <= 760) {
      setToggleMenu({ isActive: !toggleMenu.isActive });
    }
  }

  return (
    <div className="nav-shadow  fixed top-0  z-20 flex w-full flex-1 items-center justify-center bg-white">
      <div className="flex max-w-7xl lg:gap-0  flex-1 items-center justify-between gap-28 p-4  px-8 md:gap-4 xs:px-2 ">
        <div className="flex over items-center justify-between gap-10 lg:gap-4 xs:gap-2 ">
          <Link to="/">
            <img
              className="cursor-pointer transition xs:w-8 p-1  duration-200 hover:scale-110"
              src={logo}
              alt="logo"
            />
          </Link>
          <button
            onClick={() => handleSearchForRestaurant()}
            className="flex   cursor-pointer items-center  justify-between gap-2 whitespace-nowrap text-sm xs:text-xs"
          >
            <span className="text-bold underline decoration-2  underline-offset-5 transition-all hover:text-red-500 hover:decoration-orange-600  md:text-sm xs:text-xs">
              {(restaurantPlaceName?.address_components[0]?.long_name)?.split(" ")?.splice(0,2)?.join(" ") || "New Delhi"}
            </span>
            <p className="mr-2 xs:text-xs  text-slate-600 lg:overflow-hidden lg:mr-0  md:text-sm  sm:line-clamp-1">
             {(restaurantPlaceName?.formatted_address)?.split(" ")?.splice(0,3)?.join(" ") || "New Delhi"}
            </p>
            <FontAwesomeIcon icon={faChevronDown} className="text-red-500" />
          </button>
        </div>

        <button
          className="absolute right-0 pr-4 bg-white top-5 z-[100] hidden md:block "
          onClick={() => handleToggleMenu()}
        >
          <img className="w-7 cursor-pointer xs:w-5 " src={hamburgerMenu} alt="" />
        </button>

        <ul
          className={`flex items-center ${
            !toggleMenu.isActive ? "md:hidden" : "toggle-nav slideIn"
          } justify-between gap-16 whitespace-nowrap text-base lg:gap-7 md:gap-5 md:text-sm`}
        >
          <li>
            <Link
              onClick={() => handleToggleMenu()}
              to="search"
              className="flex cursor-pointer items-center justify-center gap-2 text-slate-600 hover:text-red-500 md:gap-1 md:gap-2"
            >
              <SearchIcon
                className={`nav-icon md:h-4 ${toggleMenu.isActive && "md:h-5"}`}
              />{" "}
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleToggleMenu()}
              to="help"
              className="flex cursor-pointer items-center justify-center gap-2 text-slate-600 hover:text-red-500"
            >
              <HelpIcon
                className={`nav-icon md:h-4 ${toggleMenu.isActive && "md:h-5"}`}
              />{" "}
              <span>Help</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleToggleMenu()}
              to="offers"
              className="me-3 flex cursor-pointer items-center justify-center gap-2 text-slate-600 hover:text-red-500"
            >
              <OffersIcon
                className={`nav-icon md:h-4 ${toggleMenu.isActive && "md:h-5"}`}
              />
              <div className="relative">
                <span>Offers </span>
                <span
                  className={` absolute -top-3  text-[10px] font-bold text-orange-400  md:text-[8px] md:text-xs`}
                >
                  NEW
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleToggleMenu()}
              to="cart"
              className="flex cursor-pointer items-center justify-center gap-2 text-slate-600 hover:text-red-500"
            >
              <FontAwesomeIcon
                className={`nav-icon md:h-4 ${toggleMenu.isActive && "md:h-5"}`}
                icon={faCartShopping}
              />
              <span>Cart ({cartItems.length}) </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
