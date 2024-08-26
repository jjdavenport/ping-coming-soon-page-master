import data from "./assets/data.json";
import icons from "./assets/icons.json";

const Socials = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-8 text-center">
        <ul className="flex gap-4">
          {icons.map((i) => (
            <li
              key={i.name}
              className="group flex h-10 w-10 transform items-center justify-center rounded-full border border-gray border-opacity-40 duration-300 ease-in-out hover:bg-blue"
            >
              <a
                href="#"
                className="flex h-full w-full items-center justify-center"
              >
                <svg
                  width={i.width}
                  height={i.height}
                  viewBox={i.viewBox}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-blue transition-colors duration-200 group-hover:fill-white"
                    d={i.path}
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <p className="font-light text-gray">{data.copy}</p>
      </section>
    </>
  );
};

export default Socials;
