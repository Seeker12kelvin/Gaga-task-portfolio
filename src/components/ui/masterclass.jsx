import masterclassPic1 from "../../assets/images/masterclassPic1.png";

const Masterclass = () => {
  return (
    <section
      id="Masterclass-section"
      className="flex flex-col gap-10 w-full min-h-264 max-sm:justify-end h-fit"
    >
      <h2 className="text-[35px] text-[#1C0800] font-semibold font-cormorant max-w-82 w-full self-center text-center">
        Learn how to create brand identities
      </h2>

      <div className="self-center max-w-170 w-full flex flex-col gap-3">
        <img
          src={masterclassPic1}
          alt="A picture of Bolane Banwo Osadolo"
          className="h-92 max-xl:object-cover xl:object-contain"
        />

        <div className="w-full flex max-md:justify-between md:gap-32">
          <h3 className="max-[461px]:text-[28px] text-[35px] text-[#1C0800] font-semibold font-cormorant max-w-26.75 w-full leading-10">
            Bolane Banwo Osadolo
          </h3>
          <p className="font-satoshi font-medium text-[13px] text-[#1C0800] leading-4.5 flex text-right max-sm:max-w-70 w-full">
            BRAND IDENTITY DESIGNER <br />
            FOUNDER GENEZA BRANDS, GENEZA SCHOOL OF DESIGN <br />
            TFDM
          </p>
        </div>

        <button className="bg-[#1C0800] max-sm:py-4 sm:py-1.75 px-6 text-white rounded-xs max-sm:w-[60%] sm:w-fit self-center font-satoshi font-bold max-sm:text-2xl sm:text-[13px]">
          Learn More
        </button>
      </div>

      <h3 className="text-[#1C0800] md:text-[100px] max-md:text-[80px] max-sm:text-[70px] max-[481px]:text-[65px] font-semibold font-cormorant tracking-[-5%]">
        Brand Design Masterclass
      </h3>
    </section>
  );
};

export default Masterclass;
