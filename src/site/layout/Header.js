import React from "react";
import HeaderTop from "../shared/components/HeaderTop";
import Menu from "../shared/components/Menu";

export default function Header() {
  return (
    <header className="header-v1">
      <div className="navbar navbar-default" id="ibid-main-head">
        <HeaderTop />
        <Menu />
      </div>
    </header>
  );
}
