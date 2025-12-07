import Container from "../Container";
import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import Flex from "../Flex";

const Blog = () => {
  return (
    <div className="pt-1">
      <Container>
        <div className={"my-25"}>
          <div>
            <Image imgSrc={bannerLogo} className={"w-25 mx-auto"} />
            <h1 className="text-[48px] font-openSan font-extrabold text-[#192239] text-center ">
              Our Latest Blog
            </h1>
            <p className="text-[18px] font-papi leading-8 text-[#6C7D93] pt-[15px] w-[500px] text-center mx-auto">
              We provide digital experience services to startups and small
              businesses.
            </p>
          </div>
          <div className="mt-[52px] mb-[118px]">
            <div className="h-60 w-[370px]">
              <div className="p-30 bg-[#202427] rounded-tl-[20px] rounded-tr-[20px]"></div>
              <div className="px-7 py-4  bg-[#EFEFEF] rounded-bl-[20px] rounded-br-[20px] ">
                <h3 className="text-[24px] font-openSan font-medium text-[#413F45] pt-5 w-[200px] ">
                  How to Be Ahead of Stock Changes
                </h3>
                <p className="text-[18px] font-papi text-[#474747] pt-4">
                  By John - 5 Comments
                </p>

                <Flex className={"cursor-pointer w-35 pt-5 pb-3"}>
                  <div className="p-4.5 bg-[#ffba94] rounded-[50%] -mr-5 -mb-4"></div>
                  <p className="text-[18px] font-openSan font-bold text-[#202427] pt-5">
                    Read more
                  </p>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
