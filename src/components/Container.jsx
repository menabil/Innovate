const Container = ({ children, className }) => {
  return (
    <div className={`md:max-w-[1170px] max-w-[280px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
