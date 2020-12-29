import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;

    // justify-content: space-between;
    /* to Left */
    justify-content: flex-start;

    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #020202;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #768EA4;
  }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #434933;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* to Right */
  /* margin-right: 24px; */

  /* to Left */
  width: 100vw;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    /* to Left */
    justify-content: flex-end;
    width: 100vw;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #434933;
    padding: 10px 22px;
    color: #FFF;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    /* to Right */
    /* margin-right: 24px; */

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFF;
        color: #010606;
    }
`
