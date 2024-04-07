import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  formType: string;
  placeHolderLG: string;
  placeHolderSM: string;
  logo: string;
}

const MyComponent: React.FC<Props> = ({
  title,
  formType,
  placeHolderLG,
  placeHolderSM,
  logo,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const placeholder = windowWidth >= 1050 ? placeHolderLG : placeHolderSM;

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={formType} className=" text-zinc-700 hidden lgn:block">
        {title}
      </label>

      <div className="flex relative items-center flex-row">
        <img src={logo} alt={formType} className="absolute left-2 w-7 " />
        <input
          className="w-full text-zinc-500 py-3 pl-11 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-light focus:border-zinc-500 transition-all duration-300 ease-in-out"
          id={formType}
          type={formType}
          name={formType}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default MyComponent;
