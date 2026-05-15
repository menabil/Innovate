import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="md:pt-[140px] md:pb-[60px] pt-15 pb-10">
      <Container>
        <Flex className={"items-start"}>
          <div className="md:w-[45%] w-full">
            <Link to={"/"}>
              <Image
                imgSrc={logo}
                className={"cursor-pointer mx-auto md:mx-0"}
              />
            </Link>
            <p className="font-nuni text-[#6C7D93] text-[18px] leading-[180%] md:pt-[50px] pt-7 md:w-[430px] text-center w-[260px] mx-auto md:mx-0">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>

          <div className="w-[55%] md:flex justify-between hidden">
            <div className="">
              <h3 className="font-openSan text-2xl font-semibold text-[#413F45] pb-12">
                Features
              </h3>
              <Link to={"/"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Home
                </p>
              </Link>
              <Link to={"/about"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  About
                </p>
              </Link>
              <Link to={"/benifit"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Benifit
                </p>
              </Link>
              <Link to={"/price"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Pricing
                </p>
              </Link>
              <Link to={"/blog"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Blog
                </p>
              </Link>
            </div>

            <div className="">
              <h3 className="font-openSan text-2xl font-semibold text-[#413F45] pb-12">
                Products
              </h3>
              <Link to={"/task"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Task Management
                </p>
              </Link>
              <Link to={"/growth"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Company growth
                </p>
              </Link>
              <Link to={"/time"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Time tracking
                </p>
              </Link>
            </div>

            <div className="">
              <h3 className="font-openSan text-2xl font-semibold text-[#413F45] pb-12">
                Support
              </h3>
              <Link to={"/review"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Customer service
                </p>
              </Link>
              <Link to={"/accessibility"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Accessibility
                </p>
              </Link>
              <Link to={"/contact"}>
                <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                  Contact us
                </p>
              </Link>
            </div>
          </div>
        </Flex>

        <div className="flex justify-between md:pt-20 pt-10 md:flex-row flex-col">
          <div className="md:w-[70%] w-full text-center md:text-left">
            <p className="font-nuni text-[18px] text-[#6C7D93]">
              @2026 Innovate.All rights reserved.
            </p>
          </div>

          <div className="w-[30%] md:flex justify-between hidden">
            <div className="pl-9">
              <p className="font-nuni text-[18px] text-[#6C7D93]">
                Privacy policy
              </p>
            </div>
            <div className="">
              <p className="font-nuni text-[18px] text-[#6C7D93]">
                Terms & condition
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
