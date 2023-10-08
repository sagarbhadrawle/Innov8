import { fb, insta, twit } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black flex flex-row-reverse">
      <img className="w-12 p-3" src={twit} alt="" />
      <img className="w-12 p-3" src={insta} alt="" />
      <img className="w-12 p-3" src={fb} alt="" />
    </div>
  );
};

export default Footer;
