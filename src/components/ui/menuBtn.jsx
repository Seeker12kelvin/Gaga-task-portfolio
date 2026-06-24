import { useContext } from "react";
import { UserContext } from "./user";
import { CiMenuBurger } from "react-icons/ci";

const MenuBtn = () => {
  const { setMenuBtn } = useContext(UserContext);

  return (
    <button
      className="min-[767px]:hidden"
      onClick={() => {
        setMenuBtn(true);
        console.log(true);
      }}
    >
      <CiMenuBurger size={30} />
    </button>
  );
};

export default MenuBtn;
