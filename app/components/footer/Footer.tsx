import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col text-slate-300">
      <Link href="#" className="bg-[#232F3E]/90 hover:bg-[#232F3E]/80">
        <p className="text-center text-[12px] p-[14px] text-white">
          Back to top
        </p>
      </Link>
      <div className="p-10 px-[180px] flex justify-around flex-row  bg-[#232F3E]">
        <div>
          <p className="text-white font-extrabold p-[2px]">Get to Know Us</p>
          <ul className="flex flex-col">
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Careers
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Blog
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                About Amazon
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Investor Relations
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Amazon Devices
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Amazon Science
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-extrabold p-[2px]">
            Make Money with Us
          </p>
          <ul className="flex flex-col">
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Sell products on Amazon
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Sell on Amazon Business
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Sell apps on Amazon
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Become an Affiliate
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Advertise Your Products
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Self-Publish with Us
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Host an Amazon Hubs
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                See More Make Money with Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-extrabold p-[2px]">
            Amazon Payment Products
          </p>
          <ul className="flex flex-col">
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Amazon Business Card
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Shop with Points
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Reload Your Balance
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Amazon Currency Converter
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-extrabold p-[2px]">Let Us Help You</p>
          <ul className="flex flex-col">
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Amazon and COVID-19
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Your Account
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Your Orders
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                <p>Shipping Rates &</p>
                Policies
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                <p>Returns &</p>
                Replacements
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Manage Your Content and Devices
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Amazon Assistant
              </Link>
            </li>
            <li className="p-[2px]">
              <Link href="#" className="hover:underline text-sm">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-slate-500 h-[0.5px]" />
      <div className="bg-[#232F3E] p-[10px]">
        <div className="flex items-center justify-center mx-auto w-[800px]">
          <Link href="/" className="p-1 mr-20">
            <Image
              src="/images/brand/navbarImg.png"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <div className="flex items-center justify-center gap-1">
            <div className="p-1.6 cursor-pointer flex items-center gap-1 border-slate-500 border-2 rounded justify-center">
              <Image
                src="/images/icons/globe.png"
                width={17}
                height={17}
                alt="globe logo"
              />
              <p>English</p>
            </div>
            <div className="p-1.6 cursor-pointer flex items-center gap-1 border-slate-500 border-2 rounded justify-center">
              <p>
                <span className="font-semibold text-white">$</span> USD - U.s
                Dollor
              </p>
            </div>
            <div className="p-1.6 cursor-pointer flex items-center gap-1 border-slate-500 border-2 rounded justify-center">
              <Image
                src="/images/icons/united-states.png"
                width={17}
                height={17}
                alt="globe logo"
              />
              <p>United States</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
