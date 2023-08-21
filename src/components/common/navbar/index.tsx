"use client";
import navlinks from "./navlinks/Navlinks";
import { StyledNav, StyledNavLink } from "./NavBar.styled";
import theme from "@/styles/DefaultTheme";

const NavbarComponent = () => {
  return (
    <header style={{ position: "fixed", width: "100%", zIndex: "100", borderBottom: "1px solid", borderBottomColor: theme.colors.lightgray }}>
      <StyledNav>
        <img src="/bosun.png" style={{ height: "1.6rem", cursor: "pointer" }} />
        <div style={{ display: "flex", gap: "25px" }}>
          {navlinks.map((item) => {
            const { title, location } = item;
            return (
              <StyledNavLink href={location} key={title}>
                {title}
              </StyledNavLink>
            );
          })}
        </div>
      </StyledNav>
    </header>
  );
};

export default NavbarComponent;
