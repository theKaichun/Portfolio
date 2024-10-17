import { FaGithub, FaLine, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/theKaichun",
  },
  { icon: <FaLine />, path: "https://line.me/ti/p/DNPP5UB6AX" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/0915_kaichun/" },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/profile.php?id=100002735667994&locale=zh_TW",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
