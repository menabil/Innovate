import Image from "../Image";
import errorImg from "../../assets/errorPage.gif";
import Button from "../Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Image imgSrc={errorImg} className={"m-auto pt-20"} />
      <div className="text-center pt-5">
        <Link to={"/"}>
          <Button btnText={"Get Back"} className={"font-semibold text-xl"} />
        </Link>
      </div>
    </>
  );
};

export default Error;
