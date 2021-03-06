import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Nav>

      <Logo src="/images/logo.svg" />

      <NavMenu>

        <a>
          <img src='/images/home-icon.svg' alt='home'/>
          <span>HOME</span>
        </a>

        <a>
          <img src='/images/search-icon.svg' alt='home'/>
          <span>SEARCH</span>
        </a>

        <a>
          <img src='/images/watchlist-icon.svg' alt='home'/>
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src='/images/home-icon.svg' alt='home'/>
          <span>HOME</span>
        </a>

        <a>
          <img src='/images/original-icon.svg' alt='home'/>
          <span>ORIGINALS</span>
        </a>

        <a>
          <img src='/images/movie-icon.svg' alt='home'/>
          <span>MOVIES</span>
        </a>

        <a>
          <img src='/images/series-icon.svg' alt='home'/>
          <span>SERIES</span>
        </a>

      </NavMenu>

      <UserImg src='/images/no-user.webp'/>

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  justify-content: space-between;
  height: 70px;
  background: #090b13;
  color: #fff;
  display: flex;
  align-items:center;
  padding: 0 30px;
  overflow-x: hidden;
`

const Logo = styled.img`
  width: 80px;
  
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  ${'' /* flex: 1; */}
  ${'' /* margin-left: 25px; */}

  a{
    height: 30px;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    cursor: pointer;

    img{
      height: 20px;
    }
    span{
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after{
        content: '';
        height: 2px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        ${'' /* transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; */}
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }  
    }
    &:hover{
      span:after{
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`