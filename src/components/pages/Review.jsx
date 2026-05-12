import Image from "../Image";
import bannerLogo from "../../assets/bannerLogo.png";
import review from "../../assets/reviewPart.png";
import Container from "../Container";
import Flex from "../Flex";

const Review = () => {
  return (
    <Container className={"md:pt-15 pt-10"}>
      <Flex className={"gap-x-6 flex-col md:flex-row gap-y-5"}>
        <div className="md:w-[40%] text-center md:text-left">
          <Image imgSrc={bannerLogo} className={"mx-auto md:mx-0 w-25 mb-4"} />
          <h1 className="md:text-5xl text-4xl font-openSan font-extrabold text-[#192239]">
            Client Review
          </h1>
          <p className="md:text-lg text-sm font-papi leading-[30px] text-[#6C7D93] pt-5 md:w-[330px] w-[280px]">
            people use digital devices instead of visiting physical shops,
            digital marketing campaigns are becoming more prevalent and
            efficient.
          </p>
        </div>
        <div className="md:pt-[25px] md:pb-10 md:pl-10 md:pr-[50px] p-6 bg-[#D8EAFF] rounded-[20px] ">
          <p className="md:text-lg text-sm font-papi leading-[30px] text-[#6C7D93] md:w-[270px] w-[250px]">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build. digital marketing campaigns are becoming more
            prevalent and efficient.
          </p>
          <div className="pt-5 flex items-center">
            <Image imgSrc={review} className={"w-15 md:w-fit"} />
            <div className="pl-4">
              <h4 className="md:text-2xl text-lg font-openSan font-semibold text-[#202427]">
                Jane Cooper
              </h4>
              <p className="md:text-base text-sm font-openSan text-[#202427]">
                Fashion Designer
              </p>
            </div>
          </div>
        </div>
        <div className="md:pt-[25px] md:pb-10 md:pl-10 md:pr-[50px] p-6 bg-[#FCF8F8] rounded-[20px]">
          <p className="md:text-lg text-sm font-papi leading-[30px] text-[#6C7D93] md:w-[270px] w-[250px]">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build. digital marketing campaigns are becoming more
            prevalent and efficient.
          </p>
          <div className="pt-5 flex items-center">
            <Image imgSrc={review} className={"w-15 md:w-fit"} />
            <div className="pl-4">
              <h4 className="md:text-2xl text-lg font-openSan font-semibold text-[#202427]">
                Eleanor Pena
              </h4>
              <p className="md:text-base text-sm font-openSan text-[#202427]">
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
