import { MdOutlineArrowOutward } from "react-icons/md";
import servicesPic1 from "../../assets/images/servicesPic1.png";
import servicesPic2 from "../../assets/images/servicesPic2.png";
import servicesPic3 from "../../assets/images/servicesPic3.png";

const Services = () => {
  const list = [
    {
      id: 1,
      header: "Brand Identity Design",
      desc: "Helping brands tell compelling stories through visual communication, creative design, logo and identity systems for SMEs",
    },
    {
      id: 2,
      header: "Courses & Education",
      desc: "Design and self-development courses for designers and entrepreneurs navigating their professional journey.",
    },
    {
      id: 3,
      header: "1-on-1 Sessions",
      desc: "Personalized career guidance, portfolio reviews, and professional decision-making support for designers.",
    },
    {
      id: 4,
      header: "Speaking Engagements",
      desc: "Open to speaking invitations at events, conferences, and academic institutions on design and advocacy.",
    },
    {
      id: 5,
      header: "Press & Media",
      desc: "For press enquiries, interviews, or media features about design, women in tech, and the African design ecosystem.",
    },
    {
      id: 6,
      header: "Podcast Series",
      desc: "Experience-based insights on design, self-improvement, and navigating the design industry in Africa.",
    },
  ];

  return (
    <section className="xl:min-h-[2086px] h-fit w-full pt-20 flex flex-col max-[1115px]:gap-20 min-[1115px]:justify-between">
      <div className="w-full flex flex-col gap-10">
        <h2 className="font-cormorant font-medium md:text-[100px] max-md:text-[80px] max-sm:text-[65px]">
          What I offer
        </h2>

        <div className="flex items-end w-full justify-between">
          <div className="flex max-xl:flex-col items-center xl:items-end gap-6 max-[1160px]:hidden">
            <img
              src={servicesPic1}
              alt="A picture of Bolanle Banwo Osadolo"
              className="h-70.25 w-[210.75px]"
            />

            <button className="py-1.75 px-6 bg-[#1C0800] rounded-xs text-white font-satoshi font-bold text-[13px]">
              GET IN TOUCH
            </button>
          </div>

          <div className="min-[1160px]:max-w-199.25 w-full flex flex-col gap-12">
            {list.map((data) => (
              <div
                key={data.id}
                className="w-full flex max-md:flex-col items-start justify-between border-b-[#47403E4D] border-b pb-7"
              >
                <div className="flex items-center gap-6 h-fit">
                  <span className="font-cormorant font-medium text-[#C75804] text-[28px] leading-[100%] tracking-[-5%]">
                    {`0${data.id}`}
                  </span>

                  <h3 className="font-cormorant font-semibold max-[461px]:text-[28px] text-[35px] text-[#1C0800] leading-10">
                    {data.header}
                  </h3>
                </div>
                <p className="font-satoshi font-medium min-[1160px]:max-w-82 max-[1160px]:max-w-130 w-full leading-6.25 text-[#474545] self-end max-[979px]:max-w-110 max-[873px]:max-w-90 max-[804px]:max-w-82 max-md:max-w-[93.5%]">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="flex flex-col items-center items-end gap-6 hidden">
            <img
              src={servicesPic1}
              alt="A picture of Bolanle Banwo Osadolo"
              className="h-70.25 w-[210.75px]"
            />

            <a className="w-[50%] hidden py-1.75 px-6 bg-[#1C0800] rounded-xs text-white font-satoshi font-bold text-[16px] text-[13px] flex justify-center items-center">
              GET IN TOUCH
            </a>
          </div> */}
        </div>

        <a className="self-center pb-0.5 border-b border-[#1C0800] text-[#1C0800] flex gap-2 items-center w-fit text-[13px] font-satoshi font-bold tracking-[2%]">
          <span>READ MORE</span>
          <MdOutlineArrowOutward size={20} />
        </a>
      </div>

      <div className="flex max-[1115px]:flex-col min-[1115px]:justify-between max-[1115px]:gap-20 h-fit">
        <div className="flex flex-col gap-6 w-full h-fit max-w-82 max-[1115px]:self-end">
          <img
            src={servicesPic2}
            alt={"A picture of a coffee cup"}
            className="object-cover w-82 h-70"
          />

          <h3 className="text-[#1C0800] font-cormorant font-semibold text-[35px] leading-10 tracking-[-4%]">
            Geneza Branding Agency
          </h3>

          <p className="text-[#474545]">
            At Geneza Brands, I help companies & individuals create unique
            experiences to improve brand awareness through brilliant logo and
            visual communication designs.
          </p>
        </div>

        <div className="flex items-end gap-3">
          <a className="max-[1243px]:hidden pb-0.5 border-b border-[#1C0800] text-[#1C0800] flex gap-2 items-center w-fit text-[13px] font-satoshi font-bold tracking-[2%]">
            <span>LEARN ABOUT AZARI</span>
            <MdOutlineArrowOutward size={20} />
          </a>

          <div
            className={`flex flex-col gap-6 w-full h-fit max-w-170 min-[1115px]:mt-50`}
          >
            <img
              src={servicesPic3}
              alt={"A picture of a woman smiling infront of a brown wall"}
              className="object-contain w-170"
            />

            <h3 className="text-[#1C0800] font-cormorant font-semibold text-[35px] leading-10 tracking-[-4%]">
              The Female Designer Movement
            </h3>

            <p className="text-[#474545]">
              TFDm now Azari is a not-for-profit initiative I founded with a
              mission to empower women with design skill sets in order to
              increase the number of women in the African Design and Tech
              ecosystem.
            </p>

            <a className="min-[1243px]:hidden pb-0.5 border-b border-[#1C0800] text-[#1C0800] flex gap-2 items-center w-fit text-[13px] font-satoshi font-bold tracking-[2%]">
              <span>LEARN ABOUT AZARI</span>
              <MdOutlineArrowOutward size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
