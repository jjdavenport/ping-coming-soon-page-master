import socials from "./assets/socials.json";
import data from "./assets/data.json";

const Socials = () => {
  return (
    <>
      <section>
        <ul>
          {socials.map((i) => (
            <li key={i.img}>
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
