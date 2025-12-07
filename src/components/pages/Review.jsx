import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import review from "../../assets/reviewPart.png";
import Container from "../Container";
import Flex from "../Flex";

const Review = () => {
  return (
    <Container className={"pt-25"}>
      <Flex className={"gap-x-6"}>
        <div className="w-[40%]">
          <Image imgSrc={bannerLogo} />
          <h1 className="text-[48px] font-openSan font-extrabold text-[#192239]">
            Client Review
          </h1>
          <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] pt-5 w-[330px]">
            people use digital devices instead of visiting physical shops,
            digital marketing campaigns are becoming more prevalent and
            efficient.
          </p>
        </div>
        <div className="pt-[25px] pb-10 pl-10 pr-[50px] bg-[#D8EAFF] rounded-[20px] ">
          <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] w-[270px]">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build. digital marketing campaigns are becoming more
            prevalent and efficient.
          </p>
          <div className="pt-5 flex items-center">
            <Image imgSrc={review} />
            <div className="pl-4">
              <h4 className="text-[24px] font-openSan font-semibold text-[#202427]">
                Jane Cooper
              </h4>
              <p className="text-[16px] font-openSan text-[#202427]">
                Fashion Designer
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[25px] pb-10 pl-10 pr-[50px] bg-[#FCF8F8] rounded-[20px]">
          <p className="text-[18px] font-papi leading-[30px] text-[#6C7D93] w-[270px]">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build. digital marketing campaigns are becoming more
            prevalent and efficient.
          </p>
          <div className="pt-5 flex items-center">
            <Image imgSrc={review} />
            <div className="pl-4">
              <h4 className="text-[22px] font-openSan font-semibold text-[#202427]">
                Eleanor Pena
              </h4>
              <p className="text-[18px] font-openSan text-[#202427]">
                Architecture
              </p>
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Review;
