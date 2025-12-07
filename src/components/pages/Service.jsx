import Container from "../Container";
import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import serviceOne from "../../assets/serviceOne.png";
import serviceTwo from "../../assets/serviceTwo.png";
import serviceThree from "../../assets/serviceThree.png";
import Flex from "../Flex";

const Service = () => {
  return (
    <div className="pt-1">
      <Container>
        <div className={"pt-25"}>
          <div className="">
            <Image imgSrc={bannerLogo} className={"w-25 mx-auto"} />
            <h1 className="text-[48px] font-openSan font-extrabold text-[#192239] text-center ">
              Our Services
            </h1>
            <p className="text-[18px] font-papi leading-8 text-[#6C7D93] pt-[15px] w-[300px] text-center mx-auto">
              We have been providing great flooring solutions service.
            </p>
          </div>
          <div className="mt-[25px]">
            <Flex className={"justify-between gap-x-7"}>
              <div className="px-12 py-[52px] bg-[#EBF7E9] rounded-[20px] text-center">
                <Image imgSrc={serviceOne} className={"w-15 mx-auto"} />
                <h3 className="text-[30px] font-openSan font-semibold text-[#202427] pt-[30px] ">
                  Marketing strategy
                </h3>
                <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] pt-5 w-[280px] mx-auto">
                  Social Media has changed the way we interact & do business
                  while creating
                </p>
                <Flex className={"cursor-pointer mx-auto w-35 pt-5"}>
                  <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                  <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                    Read more
                  </p>
                </Flex>
              </div>
              <div className="px-12 py-[52px] bg-[#D8EAFF] rounded-[20px] text-center">
                <Image imgSrc={serviceTwo} className={"w-15 mx-auto"} />
                <h3 className="text-[30px] font-openSan font-semibold text-[#202427] pt-[30px] ">
                  Social Marketing
                </h3>
                <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] pt-5 w-[280px] mx-auto">
                  Social Media has changed the way we interact & do business
                  while creating
                </p>
                <Flex className={"cursor-pointer mx-auto w-35 pt-5"}>
                  <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                  <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                    Read more
                  </p>
                </Flex>
              </div>
              <div className="px-12 py-[52px] bg-[#FBF1EC] rounded-[20px] text-center">
                <Image imgSrc={serviceThree} className={"w-15 mx-auto"} />
                <h3 className="text-[30px] font-openSan font-semibold text-[#202427] pt-[30px] ">
                  Content Marketing
                </h3>
                <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] pt-5 w-[280px] mx-auto">
                  Social Media has changed the way we interact & do business
                  while creating
                </p>

                <Flex className={"cursor-pointer mx-auto w-35 pt-5"}>
                  <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4">
                    <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                      Read more
                    </p>
                  </div>
                </Flex>
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
