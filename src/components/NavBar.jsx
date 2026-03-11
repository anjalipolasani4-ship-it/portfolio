import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 5vw;
  background: rgba(12, 12, 14, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
`;

const Logo = styled.a`
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--text);
  text-decoration: none;
  letter-spacing: 0.01em;

  span {
    color: var(--accent);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;

  a {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: var(--accent);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
  font-size: 1.4rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg);
  z-index: 199;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;

  a {
    font-size: 1.5rem;
    font-family: var(--font-display);
    color: var(--text);
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: var(--accent);
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 5vw;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 1.8rem;
  cursor: pointer;
`;

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <Logo href="#home">Anjali <span>Polasani</span></Logo>
        <NavLinks>
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </NavLinks>
        <MenuBtn onClick={() => setMenuOpen(true)} aria-label="Open menu">☰</MenuBtn>
      </NavContainer>

      <MobileMenu open={menuOpen}>
        <CloseBtn onClick={() => setMenuOpen(false)}>✕</CloseBtn>
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          </li>
        ))}
      </MobileMenu>
    </>
  );
};

export default NavBar;
