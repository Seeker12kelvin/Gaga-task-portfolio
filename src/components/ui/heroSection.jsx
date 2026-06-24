const HeroSection = () => {
  return (
    <section
      id="Hero-section"
      className="max-sm:min-h-130 sm:min-h-143.75 h-fit flex flex-col justify-center items-center"
    >
      <div className="w-full flex flex-col max-md:gap-6">
        <p className="text-[13px] font-satoshi font-medium leading-4.5 tracking-[2%]">
          BRAND IDENTITY DESIGNER / FOUNDER / DESIGN ADVOCATE
        </p>
        <h1 className="max-xl:text-[140px] max-md:text-center xl:text-[160px] min-[1440px]:text-[179px] md:text-[140px] max-md:text-[100px] max-sm:text-[90px] font-cormorant font-light max-xl:leading-[1em] xl:leading-56.75 tracking-[-8%] max-w-346 w-full self-center">
          Bolanle Banwo Osadolo
        </h1>
        <p className="text-[13px] font-satoshi font-medium leading-4.5 tracking-[2%] self-end">
          DESIGNING IDENTITY . BUILDING ACCESS
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
