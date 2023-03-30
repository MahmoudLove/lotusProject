import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <div className="bg-cyan-500 flex justify-between overflow-hidden">
      <div className="flex items-center gap-[12px] mx-auto">
        <p className="uppercase text-xs font-bold py-[2px] text-white">
          follow us
        </p>
        <figure className="flex items-center py-1 gap-1 ">
          <FaFacebookSquare className=" font-bold text-white text-sm md:text-lg" />
          <span className="uppercase text-sm md:text-base text-white">
            facebook
          </span>
        </figure>
        <figure className="flex items-center py-1 gap-[1px]">
          <FaInstagram className=" text-white text-sm md:text-lg" />
          <span className="uppercase text-sm md:text-base text-white">
            instagram
          </span>
        </figure>
      </div>
      <div>
        <img
          src={require('../images/headerLogo.png')}
          className=" transfrom rotate-[315deg] translate-x-4"
          alt="the ahghah"
        />
      </div>
    </div>
  );
}

export default Footer;
