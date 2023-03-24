import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="bg-cyan-500 flex justify-between items-center p-2">
      <div>
        <img src={require('../images/headerLogo.png')} alt="just" />
      </div>
      <nav>
        <ul className="list-none flex gap-2">
          <li>
            <Link
              to={'/'}
              className="uppercase text-2xl text-white inline-block p-2 font-bold border-b-4 border-b-transparent hover:border-b-red-400"
            >
              home
            </Link>
          </li>
          <li>
            <Link className="uppercase text-2xl text-white inline-block p-2 font-bold border-b-4 border-b-transparent hover:border-b-red-400">
              store
            </Link>
          </li>
          <li>
            <Link
              to={'/perfumes'}
              className="uppercase text-2xl text-white inline-block p-2 font-bold border-b-4 border-b-transparent hover:border-b-red-400"
            >
              perfumes
            </Link>
          </li>
          <li>
            <Link
              to={'/cart'}
              className="uppercase text-2xl text-white inline-block p-2 font-bold border-b-4 border-b-transparent hover:border-b-red-400"
            >
              cart
            </Link>
          </li>
          <li>
            <Link className="uppercase text-2xl text-white inline-block p-2 font-bold border-b-4 border-b-transparent hover:border-b-red-400">
              Contanct us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
