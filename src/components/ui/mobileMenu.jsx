import gsap from "gsap";
import { UserContext } from "./user";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useActiveSection } from "../../hooks/useScrollView";

const MobileMenu = () => {
  const navList = [
    { id: 1, name: "Work", href: "hero" },
    { id: 2, name: "About", href: "about" },
    { id: 3, name: "Courses", href: "services" },
    { id: 4, name: "Brand Masterclass", href: "masterclass" },
    { id: 5, name: "Podcast", href: "news" },
    { id: 6, name: "Press", href: "press" },
  ];

  const { setMenuBtn } = useContext(UserContext);
  const asideRef = useRef();

  const activeSection = useActiveSection(navList);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(
    () => {
      const menu = asideRef.current;
      const tl = gsap.timeline();

      tl.fromTo(menu, { xPercent: 100 }, { xPercent: 0, duration: 0.2 }).to(
        ".animNav",
        { opacity: 1, xPercent: 0, duration: 0.2, stagger: 0.1 },
      );
    },
    { scope: asideRef },
  );

  const exitAnimation = () => {
    const menu = asideRef.current;
    const tl = gsap.timeline();

    tl.to(".animNav", {
      opacity: 0,
      xPercent: 500,
      duration: 0.2,
      stagger: 0.1,
      reversed: true,
    })
      .fromTo(menu, { xPercent: 0 }, { xPercent: 100, duration: 0.2 })
      .call(() => setMenuBtn(false));
  };

  return (
    <aside
      ref={asideRef}
      className="h-dvh min-[481px]:max-w-62.5 fixed right-0 w-full bg-[#00000000] backdrop-blur-3xl flex flex-col z-100 gap-2 p-4 inset-y-0 md:hidden"
    >
      <div className="h-fit w-full flex flex-col justify-center">
        <button onClick={() => exitAnimation()} className="p-2 self-center">
          <IoMdClose size={50} />
        </button>
      </div>

      <nav className="w-full h-full">
        <ul className="w-full h-fit flex flex-col gap-6 items-start justify-start">
          {navList.map((data) => (
            <a
              key={data.id}
              onClick={() => {
                exitAnimation();
                handleScroll(data.href);
              }}
              className={`font-medium text-2xl cursor-pointer focus:text-[#C75804] hover:text-[#C75804] transition-all duration-500 animNav opacity-0 translate-x-[500%] ${activeSection == data.href ? "text-[#C75804]" : ""}`}
            >
              {data.name}
            </a>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileMenu;
