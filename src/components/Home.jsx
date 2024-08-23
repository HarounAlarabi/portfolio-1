import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import logo from '../images/logo.png';
const siteProps = {
  greeting: "Hi, I'm",
  name: 'Haroun ',
  title: 'Full-Stack ',
  sub: 'Software Developer',
};
const Home = () => {
  const { greeting, name, title, sub } = siteProps;
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="relative mx-auto flex h-screen w-full flex-col overflow-hidden bg-hero-mobile sm:flex-row sm:bg-hero"
      id="home"
    >
      <div className="relative left-0 mt-[10rem] flex w-full items-center justify-between text-center">
        <div className="ml-[4rem] text-left xs:ml-[6rem] sm:ml-[7rem] sm:mt-[-8rem] md:ml-[10rem]">
          <h1 className="font-poppins text-[40px] font-black uppercase xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[90px]">
            {greeting}
            <br />
            <span className="font-mova text-[50px] uppercase sm:text-[90px] sm:text-gray-300">
              {name}
            </span>
          </h1>
          <p className="text-[16px] font-medium xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
            {title} &
            <br className="hidden sm:block" />
            {sub}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <img
            src={logo}
            className="absolute ml-[-30vh] mt-[30vh] h-[20vh] xs:ml-[-70vw] sm:mt-[10vh] sm:h-[20vh] md:ml-[-60vw] md:mt-[5vh] md:h-[20vh] lg:ml-[-40vw] lg:mt-[-10vh] xl:h-[35vh] 2xl:ml-[-50vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
