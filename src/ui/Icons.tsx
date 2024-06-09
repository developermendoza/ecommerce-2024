import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export function CartBagIcon() {
  return (
    <h3 className="text-xl">
      <IoBagOutline style={{ fontSize: "20px" }} />
    </h3>
  );
}

export function HeartIcon() {
  return <CiHeart style={{ fontSize: "20px" }} />;
}
export function UserIcon() {
  return <CiUser style={{ fontSize: "20px" }} />;
}

export function SearchIcon() {
  return <CiSearch style={{ fontSize: "20px" }} />;
}
