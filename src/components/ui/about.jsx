import { MdOutlineArrowOutward } from "react-icons/md";
import aboutPic3 from "../../assets/images/aboutPic3.png";
import aboutPic4 from "../../assets/images/aboutPic4.png";
import pic_of_client from "../../assets/images/clientPicture.png";
import client2Pic from "../../assets/images/clientPictureAbout2.png";

const About = () => {
  const list = [
    { id: 1, num: "800+", desc: "Women Trained in Design" },
    { id: 2, num: "10", desc: "Years of design practice" },
    { id: 3, num: "50+", desc: "Brands Built" },
  ];

  return (
    <section
      id="about"
      className="flex flex-col gap-50 xl:min-h-[2147px] h-fit"
    >
      <div className="flex flex-col gap-15">
        <h2 className="font-cormorant font-semibold max-[461px]:text-[28px] text-[35px] sm:max-w-140.75 max-sm:max-w-100 w-full leading-10 tracking-[-4%] sm:text-right max-sm:text-center self-center">
          <q>
            I’m driven with the desire to increase opportunity & access for
            people who wish to do meaningful work in technology & design
          </q>
        </h2>

        <div className="w-full flex max-xl:flex-col justify-between gap-6 xl:items-end h-fit">
          <img
            src={pic_of_client}
            alt="A picture of Bolanle Banwo Osadolo"
            className="max-h-226.75 h-full max-w-142.25 w-full xl:hidden max-xl:self-center"
          />

          <div className="max-xl:self-center w-full h-fit flex flex-col max-xl:items-center gap-6">
            <img
              src={client2Pic}
              alt="A picture of Bolanle Banwo Osadolo"
              className="h-31 w-23.25 mb-50 max-xl:hidden"
            />
            <div className="max-sm:text-center  xl:max-w-170 flex max-md:flex-col gap-6 justify-between font-satoshi font-medium text-[16px] tracking-[0%]">
              <p className="xl:max-w-82 w-full text-[#47403E] leading-6.25">
                Bolanle Banwo Osadolo is a Brand Identity designer/design
                advocate from Lagos, Nigeria. She helps brands tell compelling
                stories through creative designs. Much of her work is centered
                around helping small and medium businesses create strong
                identities via good communication designs.
              </p>

              <p className="xl:max-w-82 w-full text-[#47403E] leading-6.25">
                She is also the Founder of The Female Designer Movement, an
                initiative she launched with a mission to train and equip women
                with design skill-set and thereby help increase the number of
                women in the Nigerian Technology ecosystem.
              </p>
            </div>

            <a className="max-xl:self-center xl:self-end pb-0.5 border-b border-[#1C0800] text-[#1C0800] flex gap-2 items-center w-fit text-[13px] font-satoshi font-bold tracking-[2%]">
              <span>READ FULL BIO</span>
              <MdOutlineArrowOutward size={20} />
            </a>
          </div>

          <img
            src={pic_of_client}
            alt="A picture of Bolanle Banwo Osadolo"
            className="max-h-226.75 h-full max-w-142.25 w-full max-xl:hidden"
          />
        </div>
      </div>

      <div className="self-center max-w-287.25 w-full flex max-md:flex-col max-md:gap-10 md:justify-between max-md:items-center">
        <img
          src={aboutPic3}
          alt="A designed pictured of a woman"
          className="h-37 w-56"
        />

        <div className="flex flex-col md:gap-28 max-md:gap-12">
          {list.map((data) => (
            <div
              key={data.id}
              className="hover:opacity-100 duration-1000 transition-all cursor-pointer opacity-50"
            >
              <h3 className="font-cormorant font-medium text-[100px]">
                {data.num}
              </h3>
              <p className="text-[13px] ">{data.desc}</p>
            </div>
          ))}
        </div>

        <img
          src={aboutPic4}
          alt="A designed pictured of a woman"
          className="h-70 w-52.75"
        />
      </div>
    </section>
  );
};

export default About;
