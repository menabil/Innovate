import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import about from "../../assets/about.png";
import bannerLogo from "../../assets/bannerLogo.png";
import aboutLogo from "../../assets/aboutLogo.png";

const About = () => {
  return (
    <section>
      <Container className={"pt-15"}>
        <Flex className={"flex-col-reverse md:flex-row"}>
          <div className="md:w-[60%] md:mt-0 mt-8 ">
            <Image imgSrc={about} className={"w-70 md:w-fit"} />
          </div>
          <div className="md:w-[40%]">
            <Image imgSrc={bannerLogo} className={"mx-auto md:mx-0 w-25"} />
            <h1 className="md:text-5xl text-4xl font-openSan font-extrabold text-[#192239] text-center md:text-left">
              Who We Are
            </h1>
            <p className="md:text-[18px] text-sm text-center md:text-left font-papi leading-[30px] text-[#6C7D93] pt-[15px] md:w-[500px] w-[280px]">
              We are a Dhaka based Digital Communication Agency committed to
              creating an actionable strategy, online marketing & technology
              solution for our partners. As a multidisciplinary company, we
              operate as a unified,
            </p>
            <p className="text-[12px] font-papi text-[#6C7D93] pt-2.5 md:block hidden">
              Join the 10.000+ Companys Trusting{" "}
            </p>
            <Image
              imgSrc={aboutLogo}
              className={"ml-[-30px] md:block hidden"}
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
