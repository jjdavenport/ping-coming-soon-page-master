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
        <img className="w-32 object-contain" src={data.logo} />
        <h1 className="text-4xl">{data.h1}</h1>
        <span>{data.span}</span>
        <form
          onSubmit={submit}
          noValidate
          className="flex w-full flex-col gap-4"
        >
          <input
            value={email}
            placeholder={data.placeholder}
            className={`${error ? "outline-lightRed outline" : ""} rounded-full px-8 py-2 outline outline-1 outline-darkGrey`}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <em className="text-lightRed text-center text-base">{error}</em>
          )}
          <button
            type="submit"
            className="rounded-full bg-blue py-4 font-bold text-white"
          >
            {data.button}
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;
