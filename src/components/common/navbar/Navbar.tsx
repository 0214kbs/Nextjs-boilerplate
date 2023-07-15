"use client";
import React, { useState } from "react";
import { StyledNav, StyledNavLink, NavLinks } from "./NavBar.styled";
import Image from "next/image";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onLogout = () => {
    console.log("logout");
    setIsLogin(false);
  };

  const onLogin = () => {
    console.log("login");
    setIsLogin(true);
  };
  const onCreateAccount = () => {
    console.log("create account");
  };

  return (
    <header>
      <StyledNav>
        <StyledNavLink href="/">
          <Image
            src="/cow.jpg"
            priority={true}
            width={50}
            height={50}
            alt="Logo"
          ></Image>
        </StyledNavLink>
        <NavLinks>
          {isLogin ? (
            <StyledNavLink href="/" onClick={onLogout}>
              로그아웃
            </StyledNavLink>
          ) : (
            <StyledNavLink href="/login" onClick={onLogin}>
              로그인
            </StyledNavLink>
          )}
          <StyledNavLink href="/signup" onClick={onCreateAccount}>
            회원가입
          </StyledNavLink>
        </NavLinks>
      </StyledNav>
    </header>
  );
};

export default Navbar;
