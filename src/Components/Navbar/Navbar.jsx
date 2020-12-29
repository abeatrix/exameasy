import React from 'react'
import { Nav, NavBtn, NavLink, Bars, NavMenu, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/899/899796.svg" alt="logo" width='50px' height='50px'/>
                    {/* <img src={require('../../assets/exameasy.png')} alt='logo' /> */}
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' adctiveStyle>
                        About
                    </NavLink>
                    <NavLink to='/services' adctiveStyle>
                        Services
                    </NavLink>
                    <NavLink to='/plans' adctiveStyle>
                        Plans
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign Out</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
