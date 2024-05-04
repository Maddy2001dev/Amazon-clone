import SearchBar from './search/SearchBar';
import LocationNav from './LocationNav';
import Logo from './Logo';
import LanguageNav from './LanguageNav';
import SignIn from './SignIn';
import OrdersNav from './OrdersNav';
import ShoppingNav from './ShoppingNav';
import SubNav from './SubNav';

function Navbar() {
  return (
    <nav className="z-[50] relative">
      <div className="bg-nav p-1.6 flex items-center">
        <Logo />
        <LocationNav />
        <SearchBar />
        <LanguageNav />
        <SignIn />
        <OrdersNav />
        <ShoppingNav />
      </div>
      <SubNav />
    </nav>
  );
}

export default Navbar;
