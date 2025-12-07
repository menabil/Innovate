import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import Button from "../Button";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <>
      <Container>
        <div className={"pt-5 z-1 fixed w-[1170px]"}>
          <Flex className="justify-between">
            <div className="">
              <Link to={"/"}>
                <Image imgSrc={logo} className={'cursor-pointer'} />
              </Link>
            </div>
            <div className="">
              <ul className="flex gap-x-12 items-center ">
                <Link to={"/"}>
                  <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Home
                    </span>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      About
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
                <Link to={"/service"}>
                  <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Service
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
                <Link to={"/protfolio"}>
                  <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Protfolio
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
                <Link to={"/price"}>
                  <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Price
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
                <Link to={"/blog"}>
                  <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Blog
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <Link to={"/contact"}>
                <Button btnText={"Contact Us"} className={"font-semibold"} />
              </Link>
            </div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Header;
