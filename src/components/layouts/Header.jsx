import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import Button from "../Button";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  let [show, setShow] = useState(false);
  let handelClick = () => {
    setShow(!show);
  };

  return (
    <nav>
      <Container>
        <div className={"pt-5 z-1 fixed md:w-[1170px] w-[280px]"}>
          <Flex className="justify-between items-center relative">
            <Link to={"/"}>
              <Image imgSrc={logo} className={"cursor-pointer"} />
            </Link>

            <div className="hidden md:block">
              <ul className="flex gap-x-12 items-center">
                <Link to={"/"}>
                  <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Home
                    </span>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      About
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
                <Link to={"/service"}>
                  <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Service
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
                <Link to={"/protfolio"}>
                  <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Protfolio
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
                <Link to={"/price"}>
                  <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Price
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
                <Link to={"/blog"}>
                  <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                    <span className="hover:text-[#FF7628] hover:duration-300">
                      Blog
                    </span>
                    <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                  </li>
                </Link>
              </ul>
            </div>

            <p
              onClick={handelClick}
              className="block md:hidden text-3xl cursor-pointer text-[#192239]"
            >
              <HiMenuAlt1 />
            </p>
            {show && (
              <div className="absolute top-full left-0 w-full bg-white p-5 rounded-2xl shadow-lg md:hidden z-50">
                <ul className="flex flex-col gap-y-4 items-center">
                  <Link to={"/"} onClick={() => setShow(false)}>
                    <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                      <span className="hover:text-[#FF7628] hover:duration-300">
                        Home
                      </span>
                    </li>
                  </Link>
                  <Link to={"/about"} onClick={() => setShow(false)}>
                    <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                      <span className="hover:text-[#FF7628] hover:duration-300">
                        About
                      </span>
                    </li>
                  </Link>
                  <Link to={"/service"} onClick={() => setShow(false)}>
                    <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                      <span className="hover:text-[#FF7628] hover:duration-300">
                        Service
                      </span>
                    </li>
                  </Link>
                  <Link to={"/protfolio"} onClick={() => setShow(false)}>
                    <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                      <span className="hover:text-[#FF7628] hover:duration-300">
                        Protfolio
                      </span>
                    </li>
                  </Link>
                  <Link to={"/price"} onClick={() => setShow(false)}>
                    <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                      <span className="hover:text-[#FF7628] hover:duration-300">
                        Price
                      </span>
                    </li>
                  </Link>
                  <Link to={"/blog"} onClick={() => setShow(false)}>
                    <li className="flex items-center text-[18px] font-openSan font-semibold text-[#192239]">
                      <span className="hover:text-[#FF7628] hover:duration-300">
                        Blog
                      </span>
                    </li>
                  </Link>
                  <Link to={"/contact"}>
                    <Button
                      btnText={"Contact Us"}
                      className={"font-semibold"}
                    />
                  </Link>
                </ul>
              </div>
            )}

            <div className="hidden md:block">
              <Link to={"/contact"}>
                <Button btnText={"Contact Us"} className={"font-semibold"} />
              </Link>
            </div>
          </Flex>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
