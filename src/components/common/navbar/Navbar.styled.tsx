import Link from "next/link";
import styled from "styled-components";
import Image from 'next/image'

const StyledLogo = styled(Image)`
  height: 34px;
`;
const StyledNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #abc8ff;
  /* background: #92a8d1; */
  text-align: right;
  padding: 10px 0px;
`;

const StyledNavLink = styled(Link)`
  color: white;
  text-decoration: none;

`;

const NavLinks = styled.div`
  a {
    display: inline-block;
    margin-top: 8px;
    color: #fff;
    margin-left: 1em;
    margin-right: 10px;
    text-decoration: none;

    &:hover {
      color: #cdcdcd;
    }
  }
`;

export { StyledNav, StyledNavLink, StyledLogo, NavLinks };