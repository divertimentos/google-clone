import React from "react";

function Header() {
  const test = "Hello World";
  const someFunc = (thing) => {
    return `I'm just a function that return this: ${thing}`;
  };

  return (
    <ul className="headerListParent">
      <li id="headerListChild">Gmail</li>
      <li id="headerListChild">Imagens</li>
      <li id="headerListChild">Menu</li>
      <li id="headerListChild">GT</li>
    </ul>
  );
}

export default Header;
