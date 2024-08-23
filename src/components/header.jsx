import data from "./assets/data.json";

const Header = () => {
  return (
    <>
      <header>
        <img src={data.logo} />
        <h1>{data.h1}</h1>
        <span>{data.span}</span>
        <form noValidate>
          <input type="email" />
          <button>{data.button}</button>
        </form>
      </header>
    </>
  );
};

export default Header;
