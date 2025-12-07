import Container from "../Container";
import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import Flex from "../Flex";

const Price = () => {
  return (
    <div className="pt-1">
      <Container>
        <div className={"pt-25"}>
          <div>
            <Image imgSrc={bannerLogo} className={"w-25 mx-auto"} />
            <h1 className="text-[48px] font-openSan font-extrabold text-[#192239] text-center ">
              Our creative process.
            </h1>
            <p className="text-[18px] font-papi leading-8 text-[#6C7D93] pt-[15px] w-[500px] text-center mx-auto">
              We provide digital experience services to startups and small
              businesses.
            </p>
          </div>

          <div className="pt-13">
            <div className="flex gap-x-3 items-center">
              <div className="pr-[130px]">
                <div className="bg-[#EBF7E9] p-[25px] rounded-[20px] w-[465px] ">
                  <Flex className={"cursor-pointer w-35 pb-4"}>
                    <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                    <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                      Step-1
                    </p>
                  </Flex>
                  <h3 className="w-[300px] text-[#202427] font-openSan font-semibold text-[30px] pb-5">
                    Global SEO Research
                  </h3>
                  <p className="w-[350px] text-[#6C7D93] font-nuni font-semibold text-[18px] leading-7">
                    Practical tools and features make it easier to build and
                    manage your site.
                  </p>
                </div>
              </div>
              <div className="bg-[#C4C4C4] px-[285px] py-[162px] rounded-[20px] "></div>
            </div>

            <div className="flex gap-x-3 items-center pt-5">
              <div className="bg-[#C4C4C4] px-[285px] py-[162px] rounded-[20px] "></div>
              <div className="pl-[130px]">
                <div className="bg-[#D8EAFF] p-[25px] rounded-[20px] w-[465px] ">
                  <Flex className={"cursor-pointer w-35 pb-4"}>
                    <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                    <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                      Step-2
                    </p>
                  </Flex>
                  <h3 className="w-[400px] text-[#202427] font-openSan font-semibold text-[30px] pb-5">
                    Social media integration
                  </h3>
                  <p className="w-[350px] text-[#6C7D93] font-nuni font-semibold text-[18px] leading-7">
                    Practical tools and features make it easier to build and
                    manage your site.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-x-3 items-center pt-5">
              <div className="pr-[130px]">
                <div className="bg-[#FBF1EC] p-[25px] rounded-[20px] w-[465px] ">
                  <Flex className={"cursor-pointer w-35 pb-4"}>
                    <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                    <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                      Step-3
                    </p>
                  </Flex>
                  <h3 className="w-[400px] text-[#202427] font-openSan font-semibold text-[30px] pb-5">
                    Launching the Application
                  </h3>
                  <p className="w-[350px] text-[#6C7D93] font-nuni font-semibold text-[18px] leading-7">
                    Practical tools and features make it easier to build and
                    manage your site.
                  </p>
                </div>
              </div>
              <div className="bg-[#C4C4C4] px-[285px] py-[162px] rounded-[20px] "></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Price;
