import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  const listP = ["ABOUT", "COURSES", "POCAST", "PRESS", "CONTACT"];
  const links = ["INSTAGRAM", "FACEBOOK", "TWITTER", "BEHANCE", "YOUTUBE"];

  return (
    <footer className="bg-[#1C0800] min-[1280px]:h-94 max-[1280px]:min-h-94 max-[1280px]:h-fit flex flex-col gap-6 px-7 pt-15 overflow-hidden">
      <div className="max-[1281px]:min-h-37 max-[1280px]:h-fit w-full flex max-[1280px]:flex-wrap gap-10 max-[1355px]:justify-around min-[1355px]:justify-between">
        <p className="font-medium font-satoshi text-[13px] text-white max-w-53.25 w-full leading-4.5 tracking-[2%]">
          Be the first to know about latest projects, design insights, and
          updates from the movement.
        </p>

        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your email address"
            className="outline-none h-11 w-81.5 rounded-xs bg-[#FEF9F6] px-6 placeholder:text-[13px] font-satoshi font-medium text-[13px] leading-4.5 tracking-[2%]"
          />

          <a className="pb-0.5 border-b border-white text-white flex gap-2 items-center w-fit text-[13px] font-satoshi font-bold leading-4.5 tracking-[2%]">
            <span>Subscribe</span>
            <MdOutlineArrowOutward size={20} />
          </a>
        </div>

        <div className="w-170 flex justify-between">
          <div className="flex flex-col gap-3">
            {listP.map((data, index) => (
              <p
                key={index}
                className="font-satoshi font-medium text-[13px] text-[#FEF9F6]"
              >
                {data}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {links.map((data, index) => (
              <a
                key={index}
                className="pb-0.5 border-b border-white flex gap-2 items-center w-fit leading-4.5 tracking-[2%] font-satoshi font-medium text-[13px] text-[#FEF9F6]"
              >
                {data}
                <span>
                  <MdOutlineArrowOutward size={20} />
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-satoshi font-medium text-[13px] text-[#FEF9F6]">
              Built by{" "}
              <span className="pb-0.5 border-b border-white">
                Genezabrands.com
              </span>
            </p>
            <p className="font-satoshi font-medium text-[13px] text-[#FEF9F6]">
              2026 BOLANLE BANWO OSABOLO
            </p>
          </div>
        </div>
      </div>

      <p className="text-[179px] font-cormorant font-medium leading-56.75 tracking-[-8%] text-white text-center max-[1280px]:-mb-75 max-[912px]:-mb-135">
        Bolanle Banwo Osadolo
      </p>
    </footer>
  );
};

export default Footer;
