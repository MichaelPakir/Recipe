import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";

const NavLinks = [
  { label: "Menu", path: "/menu", icon: <MdRestaurantMenu size={24} /> },
  { label: "Edit", path: "/edit", icon: <FaRegEdit size={24} /> },
  {
    label: "Favorites",
    path: "/fav",
    icon: <BsFillBookmarkHeartFill size={24} />,
  },
  { label: "Add", path: "/add", icon: <IoMdAddCircleOutline size={24} /> },
];

export default NavLinks;
