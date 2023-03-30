import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="bg-cyan-500 flex justify-between items-center ">
      <div>
        <img
          src={require('../images/headerLogo.png')}
          alt="just"
          className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-13 lg:h-13"
        />
      </div>
      <nav>
        <ul className="list-none flex gap-[1px] sm:gap-1 md:gap-2">
          <li>
            <Link
              to={'/'}
              className="uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white inline-block p-1 font-bold border-b-1 border-b-transparent hover:border-b-red-400"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to={'/store'}
              className="uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white inline-block p-1 font-bold border-b-1 border-b-transparent hover:border-b-red-400"
            >
              store
            </Link>
          </li>
          <li>
            <Link
              to={'/perfumes'}
              className="uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white inline-block p-1 font-bold border-b-1 border-b-transparent hover:border-b-red-400"
            >
              perfumes
            </Link>
          </li>
          <li>
            <Link
              to={'/cart'}
              className="uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white inline-block p-1 font-bold border-b-1 border-b-transparent hover:border-b-red-400"
            >
              cart
            </Link>
          </li>
          <li>
            <Link className="uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white inline-block p-1 font-bold border-b-1 border-b-transparent hover:border-b-red-400">
              Contanct us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
