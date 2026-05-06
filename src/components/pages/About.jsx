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
        <Flex>
          <div className="w-[60%]">
            <Image imgSrc={about} />
          </div>
          <div className="w-[40%]">
            <Image imgSrc={bannerLogo} />
            <h1 className="text-[48px] font-openSan font-extrabold text-[#192239] ">
              Who We Are
            </h1>
            <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] pt-[15px] w-[500px]">
              We are a Dhaka based Digital Communication Agency committed to
              creating an actionable strategy, online marketing & technology
              solution for our partners. As a multidisciplinary company, we
              operate as a unified,
            </p>
            <p className="text-[12px] font-papi text-[#6C7D93] pt-2.5">
              Join the 10.000+ Companys Trusting{" "}
            </p>
            <Image imgSrc={aboutLogo} className={"ml-[-30px]"} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
