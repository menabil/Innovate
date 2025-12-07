const Button = ({ btnText, className }) => {
  return (
    <button
      className={`${className} py-3.5 px-7 rounded-[100px] bg-[#FF7628] text-white cursor-pointer`}
    >
      {btnText}
    </button>
  );
};

export default Button;
