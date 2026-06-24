import Logo from "../../assets/images/Logo.png";

const Header = () => {
  const navList = [
    { id: 1, name: "Work" },
    { id: 2, name: "About" },
    { id: 3, name: "Courses" },
    { id: 4, name: "Brand Masterclass" },
    { id: 5, name: "Podcast" },
    { id: 6, name: "Press" },
  ];

  return (
    <header className="w-full h-25 flex items-center justify-between font-satoshi">
      <img src={Logo} alt="Logo" className="h-9 w-24" />

      <nav className="max-w-140.25 w-full flex justify-between max-md:justify-end">
        <ul className="flex items-center gap-6 max-md:hidden">
          {navList.map((data) => (
            <li
              key={data.id}
              className="font-medium text-[13px] cursor-pointer hover:text-[#C75804] transition-all duration-500"
            >
              {data.name}
            </li>
          ))}
        </ul>

        <a className="bg-[#1C0800] py-1.75 px-6 text-white font-bold rounded-xs cursor-pointer">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
