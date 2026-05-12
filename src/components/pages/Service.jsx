import Container from "../Container";
import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import serviceOne from "../../assets/serviceOne.png";
import serviceTwo from "../../assets/serviceTwo.png";
import serviceThree from "../../assets/serviceThree.png";
import Flex from "../Flex";

const Service = () => {
  return (
    <section>
      <Container>
        <header>
          <Image imgSrc={bannerLogo} className={"w-25 mx-auto mb-4"} />
          <h1 className="md:text-5xl text-4xl font-openSan font-extrabold text-[#192239] text-center ">
            Our Services
          </h1>
          <p className="text-[18px] font-papi leading-8 text-[#6C7D93] pt-[15px] md:w-[300px] w-[280px] text-center mx-auto">
            We have been providing great flooring solutions service.
          </p>
        </header>
        <div className="mt-6">
          <Flex className={"justify-between gap-7 md:flex-row flex-col"}>
            <div className="md:px-12 px-5 py-10 md:py-13 bg-[#EBF7E9] rounded-[20px] text-center">
              <Image imgSrc={serviceOne} className={"w-15 mx-auto"} />
              <h3 className="md:text-3xl text-2xl font-openSan font-semibold text-[#202427] pt-[30px] ">
                Marketing strategy
              </h3>
              <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] pt-5 md:w-[280px] w-[250px] mx-auto">
                Social Media has changed the way we interact & do business while
                creating
              </p>
              <Flex className={"cursor-pointer mx-auto w-35 pt-5"}>
                <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                  Read more
                </p>
              </Flex>
            </div>
            <div className="md:px-12 px-5 py-10 md:py-13 bg-[#D8EAFF] rounded-[20px] text-center">
              <Image imgSrc={serviceTwo} className={"w-15 mx-auto"} />
              <h3 className="md:text-3xl text-2xl font-openSan font-semibold text-[#202427] pt-[30px] ">
                Social Marketing
              </h3>
              <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] pt-5  md:w-[280px] w-[250px] mx-auto">
                Social Media has changed the way we interact & do business while
                creating
              </p>
              <Flex className={"cursor-pointer mx-auto w-35 pt-5"}>
                <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                  Read more
                </p>
              </Flex>
            </div>
            <div className="md:px-12 px-5 py-10 md:py-13 bg-[#FBF1EC] rounded-[20px] text-center">
              <Image imgSrc={serviceThree} className={"w-15 mx-auto"} />
              <h3 className="md:text-3xl text-2xl font-openSan font-semibold text-[#202427] pt-[30px] ">
                Content Marketing
              </h3>
              <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] pt-5  md:w-[280px] w-[250px] mx-auto">
                Social Media has changed the way we interact & do business while
                creating
              </p>
              <Flex className={"cursor-pointer mx-auto w-35 pt-5"}>
                <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                  Read more
                </p>
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Service;
