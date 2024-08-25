import { useState } from "react";
import data from "./assets/data.json";

const Header = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      setError("Email cannot be empty.");
      return false;
    } else if (!regex.test(email)) {
      setError("Invalid email format.");
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
      <header className="flex flex-col items-center gap-4">
        <img className="w-10 object-contain" src={data.logo} />
        <h1>{data.h1}</h1>
        <span>{data.span}</span>
        <form
          onSubmit={submit}
          noValidate
          className="flex w-full flex-col gap-4"
        >
          <input
            value={email}
            placeholder={data.placeholder}
            className="rounded-full px-8 py-2 outline outline-1 outline-darkGrey"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p>{error}</p>}
          <button
            type="submit"
            className="rounded-full bg-blue py-4 text-white"
          >
            {data.button}
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;
