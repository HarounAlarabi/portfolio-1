import React from 'react';

function NavItems({ title, sectionId }) {
  return (
    <li className="group m-4 p-5">
      <a
        href={`#${sectionId}`}
        className="block py-2 font-medium text-white-100 transition-colors duration-200 hover:text-yellow-400 group-hover:underline md:py-0"
      >
        {title}
      </a>
    </li>
  );
}

export default NavItems;
