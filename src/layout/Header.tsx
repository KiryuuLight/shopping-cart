import { Link } from 'react-router-dom';
import classNames from 'classnames';
import cartIcon from '../assets/cart.svg';
import hamburgerIcon from '../assets/hamburger.svg';
import { useAppSelector } from '../app/hooks';
import useToggle from '../hooks/useToggle';
import Anchor from '../components/Anchor';

function Header() {
  const cart = useAppSelector((state) => state.cart.items);
  const { toggle, toggleItem } = useToggle();

  return (
    <header className="border-b-2 border-black">
      <nav>
        <div className="mx-auto flex flex-wrap  items-center justify-between gap-4 py-4 lg:container">
          <Link
            to="/"
            className="ml-4 font-barlow text-xl uppercase lg:order-1"
          >
            FakeStore
          </Link>

          <div className="ml-auto flex items-center gap-4 md:ml-0 lg:order-3">
            <Link to="/cart" className="relative">
              <img src={cartIcon} alt="" className="w-8" />
              <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#e384c9] ">
                <span className=" text-sm">{cart.length}</span>
              </div>
            </Link>
            <button type="button" className=" md:hidden" onClick={toggleItem}>
              <img src={hamburgerIcon} alt="" className="mr-4 w-8 " />
            </button>
          </div>

          <div
            className={classNames(
              ' w-full md:ml-auto md:mt-0 md:block md:w-auto lg:order-2',
              { block: toggle },
              { hidden: !toggle }
            )}
          >
            <ul className="flex list-none flex-col gap-5 border-t-2 border-black px-1 py-2.5  md:flex-row md:items-center md:border-0">
              <li>
                <Anchor navigateTo="/" name="Home" />
              </li>
              <li>
                <Anchor navigateTo="/products" name="Products" />
              </li>
              <li>
                <Anchor navigateTo="/cart" name="Cart" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
