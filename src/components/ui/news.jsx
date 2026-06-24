import { MdOutlineArrowOutward } from "react-icons/md";
import newsPic1 from "../../assets/images//newsPic1.png";

const News = () => {
  const list = [
    {
      id: 1,
      first: { header: "JOBBERMAN NIGERIA", desc: "02/02/2026" },
      second: {
        header: "Interview with Jobberman Nigeria",
        desc: "Spoke about her design journey and her mission to expose more women to the opportunities available in design and tech.",
      },
    },
    {
      id: 2,
      first: {
        header: "LECTURE - UNIVERSITY OF PORTSMOUTH",
        desc: "Lecture . UK",
      },
      second: {
        header: "Lecture — The Role of Visual Elements of Branding",
        desc: "Delivered an invited lecture at the University of Portsmouth, School of Computing, exploring how visual identity shapes brand perception",
      },
      img: newsPic1,
      alt: "A picture of a woman in a painting",
    },
    {
      id: 3,
      first: { header: "INSTAGRAM LIVE", desc: "Session" },
      second: {
        header: "Live session with Chris Do",
        desc: "A live conversation with Chris Do breaking down popular growth hacks into actionable strategies for designers in the Nigerian creative space.",
      },
    },
    {
      id: 4,
      first: { header: "YALI NETWORK", desc: "Fellowship . 2021" },
      second: {
        header: "Mandate Washington Fellowship — Class of 2025",
        desc: "One of a select group of young African leaders selected to engage and collaborate at the Mandela Washington Fellowship 2021.",
      },
    },
  ];

  return (
    <section
      id="news"
      className="min-h-302.25 h-fit w-full pt-20 flex flex-col gap-20"
    >
      <h2 className="font-cormorant font-medium md:text-[100px] max-md:text-[80px] max-sm:text-[65px] tracking-[-5%] leading-[100%]">
        In the news
      </h2>

      <div className="flex flex-col gap-12 w-full">
        {list.map((data) => (
          <div
            key={data.id}
            className="w-full flex max-[1302px]:flex-col max-[1302px]:gap-6 justify-between items-start pb-7 border-b border-b-[#47403E4D]"
          >
            <div className="flex flex-col gap-3 max-w-52.75 w-fit">
              <p className="text-[#1C0800] font-satoshi text-[13px] font-bold">
                {data.first.header}
              </p>

              <p className="text-[#474545] font-satoshi font-medium text-[13px] leading-4.5 tracking-[2%]">
                {data.first.desc}
              </p>
            </div>

            <div className="min-[1302px]:max-w-258 w-full flex justify-between gap-5">
              <div className="max-w-197.25 w-full h-full flex flex-col items-start gap-3">
                <h3 className="font-semibold text-[#1C0800] max-[461px]:text-[28px] text-[35px] font-cormorant leading-8 max-[1302px]:max-w-120 w-full">
                  {data.second.header}
                </h3>
                <p className="text-[#474545] font-satoshi sm:max-w-111.5 w-full font-medium">
                  {data.second.desc}
                </p>
              </div>

              {data.img && (
                <img
                  src={data?.img}
                  alt={data?.alt}
                  className="max-sm:max-h-21 sm:w-23.25 sm:h-31 sm:-ml-20 max-[461px]:hidden"
                />
              )}

              <MdOutlineArrowOutward size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
