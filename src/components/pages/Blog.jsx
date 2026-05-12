import Container from "../Container";
import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import Flex from "../Flex";

const Blog = () => {
  return (
    <section className="pt-15">
      <Container>
        <header>
          <Image imgSrc={bannerLogo} className={"w-25 mx-auto mb-4"} />
          <h1 className="md:text-5xl text-4xl font-openSan font-extrabold text-[#192239] text-center ">
            Our Latest Blog
          </h1>
          <p className="md:text-lg text-base font-papi leading-8 text-[#6C7D93] pt-[15px] md:w-[500px] w-[290px] text-center mx-auto">
            We provide digital experience services to startups and small
            businesses.
          </p>
        </header>
        <Flex
          className={
            "justify-between md:flex-row flex-col md:mt-8 mt-4 gap-y-5"
          }
        >
          <div className="md:w-[370px] w-[290px]">
            <div className="p-30 bg-[#C4C4C4] rounded-tl-[20px] rounded-tr-[20px]"></div>
            <div className="px-7 py-4  bg-[#F2F7FD] rounded-bl-[20px] rounded-br-[20px] ">
              <h3 className="text-[24px] font-openSan font-medium text-[#413F45] pt-5 w-[200px] ">
                How to Be Ahead of Stock Changes
              </h3>
              <p className="text-lg font-nuni text-[#474747] pt-4">
                By John - 5 Comments
              </p>
              <Flex className={"cursor-pointer w-35 pt-5 pb-3"}>
                <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                <p className="text-lg font-openSan font-bold text-[#202427] pt-5">
                  Read more
                </p>
              </Flex>
            </div>
          </div>
          <div className="md:w-[370px] w-[290px]">
            <div className="p-30 bg-[#C4C4C4] rounded-tl-[20px] rounded-tr-[20px]"></div>
            <div className="px-7 py-4  bg-[#F2F7FD] rounded-bl-[20px] rounded-br-[20px] ">
              <h3 className="text-[24px] font-openSan font-medium text-[#413F45] pt-5 w-[230px] ">
                Online Reputation And Management
              </h3>
              <p className="text-[18px] font-nuni text-[#474747] pt-4">
                By Amin - 10 Comments
              </p>
              <Flex className={"cursor-pointer w-35 pt-5 pb-3"}>
                <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                  Read more
                </p>
              </Flex>
            </div>
          </div>
          <div className="md:w-[370px] w-[290px]">
            <div className="p-30 bg-[#C4C4C4] rounded-tl-[20px] rounded-tr-[20px]"></div>
            <div className="px-7 py-4  bg-[#F2F7FD] rounded-bl-[20px] rounded-br-[20px] ">
              <h3 className="text-[24px] font-openSan font-medium text-[#413F45] pt-5 w-[250px] ">
                Tips To Move Your Project More Forward
              </h3>
              <p className="text-[18px] font-nuni text-[#474747] pt-4">
                By Insider - 15 Comments
              </p>
              <Flex className={"cursor-pointer w-35 pt-5 pb-3"}>
                <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                  Read more
                </p>
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;
