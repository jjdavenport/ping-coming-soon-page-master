import socials from "./assets/socials.json";
import data from "./assets/data.json";

const Socials = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-8">
        <ul className="flex gap-4">
          {socials.map((i) => (
            <li
              key={i.img}
              className="border-gray flex h-10 w-10 items-center justify-center rounded-full border border-opacity-40"
            >
              <a href="#">
                <img src={i.img} />
              </a>
            </li>
          ))}
        </ul>
        <p>{data.copy}</p>
      </section>
    </>
  );
};

export default Socials;
