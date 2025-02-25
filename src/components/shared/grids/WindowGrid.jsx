import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SmIcons = [
  {
    icon: <FaLinkedin />,
  },
  {
    icon: <FaGithubAlt />,
  },
  {
    icon: <FaFacebook />,
  },
  {
    icon: <FaInstagram />,
  },
];

const WindowGrid = () => {
  return (
    <div id="window-grid-wrapper" className="pt-5">
      {/* <h2 className="text-2xl underline font-bold p-2 text-center ">
        Social Media
      </h2> */}
      <div id="window-grid" className="mt-2 p-5 grid grid-cols-2 gap-y-10 ">
        {SmIcons.map((item) => (
          <div key={item.icon}>
            <h4 className="xl:text-5xl md:text-4xl text-5xl bg-test flex justify-center ">
              {item.icon}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WindowGrid;
