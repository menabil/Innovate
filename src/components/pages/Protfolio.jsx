import Container from "../Container";
import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";

const Protfolio = () => {
  return (
    <section className="pt-15">
      <Container>
        <header>
          <Image imgSrc={bannerLogo} className={"w-25 mx-auto"} />
          <h1 className="text-[48px] font-openSan font-extrabold text-[#192239] text-center ">
            Work Showcase
          </h1>

          <ul className="flex gap-x-7 py-[45px] text-[#6C7D93]] justify-center">
            <li className="text-[#6C7D93] hover:text-[#FF7628] duration-300 cursor-pointer font-semibold text-[18px]">
              All
            </li>
            <li className="text-[#6C7D93] hover:text-[#FF7628] duration-300 cursor-pointer font-semibold text-[18px]">
              Digital Mkt
            </li>
            <li className="text-[#6C7D93] hover:text-[#FF7628] duration-300 cursor-pointer font-semibold text-[18px]">
              Branding
            </li>
            <li className="text-[#6C7D93] hover:text-[#FF7628] duration-300 cursor-pointer font-semibold text-[18px]">
              Content Mkt
            </li>
            <li className="text-[#6C7D93] hover:text-[#FF7628] duration-300 cursor-pointer font-semibold text-[18px]">
              Social Media Mkt
            </li>
          </ul>
        </header>
        <div>
          <div className="flex gap-x-5">
            <div className="bg-[#C4C4C4] px-[138px] py-[172px] rounded-[20px] "></div>
            <div className="bg-[#C4C4C4] px-[280px] py-[172px] rounded-[20px] "></div>
            <div className="bg-[#C4C4C4] px-[138px] py-[172px] rounded-[20px] "></div>
          </div>
          <div className="flex gap-x-5 pt-5">
            <div className="bg-[#C4C4C4] px-[207px] py-[216px] rounded-[20px] "></div>
            <div className="bg-[#C4C4C4] px-[164px] py-[216px] rounded-[20px] "></div>
            <div className="bg-[#C4C4C4] px-[185px] py-[216px] rounded-[20px] "></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Protfolio;
