import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, Fragment } from 'react';
import "98.css";
import NearLogo from 'public/wisel.svg';
import { useWallet } from '@/wallets/wallet-selector';
import { ImMenu } from "react-icons/im";

export const Navigation = () => {

	const [isOpen, setIsOpen] = useState(false);

  const LINKS = (
    <Fragment>
   
    </Fragment>
  );
  const { signedAccountId, logOut, logIn } = useWallet();
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (signedAccountId) {
      setAction(() => logOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => logIn);
      setLabel('Login');
    }
  }, [signedAccountId, logOut, logIn, setAction, setLabel]);

  return (
    <section className="fixed w-full  flex flex-col lg:flex-row justify-center top-4 z-[1]">
			  <nav className="!z-50  w-full items-center shadow-xl justify-between border drop-shadow-lg bg-slate-200/80 backdrop-blur-lg border-black h-[100px]  px-8 rounded-xl flex lg:max-w-[54rem]">
			  <Link className="flex-shrink-0 max-w-[8rem]" href="/">
          <Image
            src={NearLogo}
            alt=""
            width={280}
            height={380}
          />
        </Link>
      
		<button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ImMenu className="text-xl text-black fill-current" />
        </button>
		<button className="btn btn-secondary" onClick={action} > {label} </button>
		</nav>
		<section
        className={`flex-col  py-4 bg-white [&_button]:underline [&_button]:underline-offset-8 rounded-xl drop-shadow-lg bg-white/80 backdrop-blur-lg border-white  text-black gap-2 lg:hidden ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {LINKS}
      </section>
        <div className='navbar-nav pt-1'>
        </div>
    </section>

  );
};