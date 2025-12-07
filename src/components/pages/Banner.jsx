import Container from "../Container";
import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/Banner.png')] py-[480px] bg-no-repeat bg-cover bg-center">
      <Container>
        <div className="mt-[150px] absolute top-[50px]">
          <Image imgSrc={bannerLogo} />
          <h1 className="text-[72px] font-openSan font-extrabold leading-[98px] text-[#192239] w-[680px] ">
            We Are Digital<span className="text-[#FF7628]"> Marketing </span>
            Agency
          </h1>
          <p className="text-[20px] font-papi leading-9 text-[#6C7D93] pt-5 w-[600px]">
            Use customer data to build great and solid product experiences that
            convert. Digital marketing’s development has changed the way brands
            and businesses use technology for marketing.
          </p>
          <Button className={"font-bold mt-7.5"} btnText={"Get Free Quoto"} />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
