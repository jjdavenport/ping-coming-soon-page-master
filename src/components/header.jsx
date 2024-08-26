import { useState } from "react";
import data from "./assets/data.json";

const Header = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      setError("Please provide an email address");
      return false;
    } else if (!regex.test(email)) {
      setError("Please provide a valid email address");
      return false;
    } else {
      setError("");
      setEmail("");
      return true;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <>
      <header className="flex flex-col items-center gap-8 text-center">
        <img className="w-24 object-contain" src={data.logo} />
        <div className="flex flex-col gap-4">
          <h1 className="inline space-x-1 text-2xl font-light text-gray md:text-6xl">
            {data.h1}
            <span className="pl-2 font-bold text-veryDarkBlue">
              {data.span}
            </span>
          </h1>
          <span className="font-light text-veryDarkBlue">{data.subtitle}</span>
        </div>
        <form
          onSubmit={submit}
          noValidate
          className="flex w-full flex-col gap-4 md:flex-row"
        >
          <div className="flex flex-col gap-1 md:w-8/12">
            <input
              value={email}
              placeholder={data.placeholder}
              className={`${error ? "outline outline-lightRed" : "text-veryDarkBlue"} rounded-full px-4 py-2 outline outline-1 outline-paleBlue placeholder:text-paleBlue md:h-14 md:w-full md:px-8 md:py-4`}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <em className="text-base text-lightRed md:pl-4 md:text-left">
                {error}
              </em>
            )}
          </div>
          <button
            type="submit"
            className="flex items-center justify-center rounded-full bg-blue py-2 font-semibold text-white hover:bg-opacity-80 md:h-14 md:w-4/12 md:py-4"
          >
            {data.button}
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;
