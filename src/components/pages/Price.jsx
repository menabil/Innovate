import Container from "../Container";
import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import Flex from "../Flex";

const Price = () => {
  return (
    <section className="pt-15">
      <Container>
        <header>
          <Image imgSrc={bannerLogo} className={"w-25 mx-auto mb-4"} />
          <h1 className="md:text-5xl text-4xl font-openSan font-extrabold text-[#192239] text-center ">
            Our creative process.
          </h1>
          <p className="md:text-lg text-sm font-papi leading-8 text-[#6C7D93] pt-[15px] md:w-[500px] w-[290px] text-center mx-auto">
            We provide digital experience services to startups and small
            businesses.
          </p>
        </header>
        <div className="md:pt-13 pt-5">
          <div className="flex gap-x-3 items-center">
            <div className="md:pr-[130px]">
              <div className="bg-[#EBF7E9] md:p-[25px] p-4 rounded-[20px] md:w-[465px] w-[280px]">
                <Flex className={"cursor-pointer w-35 pb-4"}>
                  <div className="md:p-4.5 p-3 bg-[#ffba94] rounded-[50%] md:-mr-5 -mr-3.5 -mb-4"></div>
                  <p className="md:text-lg text-sm font-openSan font-bold text-[#202427] pt-5">
                    Step-1
                  </p>
                </Flex>
                <h3 className="md:w-[300px] w-[250px] text-[#202427] font-openSan font-semibold md:text-3xl text-2xl pb-5">
                  Global SEO Research
                </h3>
                <p className="md:w-[350px] w-[250px] text-[#6C7D93] font-nuni font-semibold md:text-lg text-sm leading-7">
                  Practical tools and features make it easier to build and
                  manage your site.
                </p>
              </div>
            </div>
            <div className="bg-[#C4C4C4] px-[285px] py-[162px] rounded-[20px] hidden md:block"></div>
          </div>
          <div className="flex gap-x-3 items-center pt-5">
            <div className="bg-[#C4C4C4] px-[285px] py-[162px] rounded-[20px] hidden md:block mr-[130px]"></div>

            <div className="bg-[#D8EAFF] md:p-[25px] p-4 rounded-[20px] md:w-[465px] w-[280px]">
              <Flex className={"cursor-pointer w-35 pb-4"}>
                <div className="md:p-4.5 p-3 bg-[#ffba94] rounded-[50%] md:-mr-5 -mr-3.5 -mb-4"></div>
                <p className="md:text-lg text-sm font-openSan font-bold text-[#202427] pt-5">
                  Step-2
                </p>
              </Flex>
              <h3 className="md:w-[400px] w-[250px] text-[#202427] font-openSan font-semibold md:text-3xl text-2xl pb-5">
                Social media integration
              </h3>
              <p className="md:w-[350px] w-[250px] text-[#6C7D93] font-nuni font-semibold md:text-lg text-sm leading-7">
                Practical tools and features make it easier to build and manage
                your site.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3 items-center pt-5">
            <div className="md:pr-[130px]">
              <div className="bg-[#FBF1EC] md:p-[25px] p-4 rounded-[20px] md:w-[465px] w-[280px]">
                <Flex className={"cursor-pointer w-35 pb-4"}>
                  <div className="md:p-4.5 p-3 bg-[#ffba94] rounded-[50%] md:-mr-5 -mr-3.5 -mb-4"></div>
                  <p className="md:text-lg text-sm font-openSan font-bold text-[#202427] pt-5">
                    Step-3
                  </p>
                </Flex>
                <h3 className="md:w-[300px] w-[250px] text-[#202427] font-openSan font-semibold md:text-3xl text-2xl pb-5">
                  Launching the Application
                </h3>
                <p className="md:w-[350px] w-[250px] text-[#6C7D93] font-nuni font-semibold md:text-lg text-sm leading-7">
                  Practical tools and features make it easier to build and
                  manage your site.
                </p>
              </div>
            </div>
            <div className="bg-[#C4C4C4] px-[285px] py-[162px] rounded-[20px] hidden md:block"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Price;
