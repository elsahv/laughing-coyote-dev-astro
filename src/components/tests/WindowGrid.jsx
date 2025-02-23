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
    <div id="window-grid-wrapper" className="bg- w-[200px]">
      <h2>
        <b> Social Media</b>
      </h2>
      <div id="window-grid" className="grid grid-cols-2 gap-3">
        {SmIcons.map((item) => (
          <div key={item.icon}>
            <div className="">
              <h4 className="w-full bg-test1">{item.icon}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WindowGrid;
