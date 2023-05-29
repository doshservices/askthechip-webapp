import facebookPrimary from "./../assets/icons/facebookPrimary.svg";
import instagramPrimary from "./../assets/icons/instagramPrimary.svg";
import youtubePrimary from "./../assets/icons/youtubePrimary.svg";
import linkedInPrimary from "./../assets/icons/linkedin-primary.svg";

const socials = [
  {
    link: "",
    icon: instagramPrimary,
  },
  {
    link: "",
    icon: youtubePrimary,
  },
  {
    link: "",
    icon: linkedInPrimary,
  },
];

const Socials = () => {
  return (
    <ul className="flex">
      {socials.map((s, index) => (
        <li
          key={index}
          className="mr-5 hover:scale-125 active:scale-100 cursor-pointer transition duration-300"
        >
          <img src={s.icon} alt="Facebook" />
        </li>
      ))}
    </ul>
  );
};

export default Socials;
