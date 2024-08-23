import CopyRight from './CopyRight';
import Items from './Items';
import logo from '../../images/logo.png';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linked.svg';
import gmail from '../../assets/icons/gmail.svg';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 h-20 w-full overflow-hidden rounded-lg bg-slate-500 shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-4">
        <div className="flex items-center justify-between sm:flex sm:items-center sm:justify-between">
          <a
            href="#home"
            className="mb-2 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt=" Logo" />
            <span className="dark:text-white self-center whitespace-nowrap text-2xl font-semibold">
              Haroun
            </span>
          </a>
          <ul className="flex flex-wrap items-center justify-between gap-8 font-medium text-gray-500 dark:text-gray-400">
            <Items item={github} link="https://github.com/HarounAlarabi" />
            <Items
              item={linkedin}
              link="https://www.linkedin.com/in/haroun-alarabi-abb0b4247/"
            />
            <Items item={gmail} link="mailto:alarabiharoun@gmail.com" />
          </ul>
        </div>
        <CopyRight />
      </div>
    </footer>
  );
}

export default Footer;
