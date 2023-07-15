"use client";
import React from "react";
import { StyledNav, StyledNavLink, NavLinks } from "./NavBar.styled";
import Image from "next/image";
import useLoginStore from "@/stores/useLoginStore";

const NavbarComponent = () => {
  const isLogin = useLoginStore((state: any) => state.isLogin);
  const loginState = useLoginStore((state: any) => state.logout);

  const changeLoginState = () => {
    loginState();
  };

  const onCreateAccount = () => {
    console.log("create account");
  };

  return (
    <header>
      <StyledNav>
        <StyledNavLink href="/">
          <Image src="/cow.jpg" priority={true} width={50} height={50} alt="Logo"></Image>
        </StyledNavLink>
        <NavLinks>
          {isLogin ? (
            <StyledNavLink href="/" onClick={changeLoginState}>
              로그아웃
            </StyledNavLink>
          ) : (
            <StyledNavLink href="/login">로그인</StyledNavLink>
          )}
          <StyledNavLink href="/signup" onClick={onCreateAccount}>
            회원가입
          </StyledNavLink>
        </NavLinks>
      </StyledNav>
    </header>
  );
};

export default NavbarComponent;
