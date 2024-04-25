import React from 'react'
import styled from 'styled-components';
import { DiCssdeck } from "react-icons/di";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px){
    padding: 0 0px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
`;

const NavItems = styled.ul`
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 32px;
    padding: 20px;
    list-style: none;
    @media screen and (max-width: 640px){
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
      color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 640px){
      display: none;
    }
`;

const GithubButton = styled.a`
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: 1.8px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    text-decoration: none; /* Add this line */
    :hover{
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 640px){
      display: none; /* Change to display: none to hide on smaller screens */
    }
`;


export const Span = styled.div`
    padding: 0px ppx 50px 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const LogoLink = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const githubLink = "https://github.com/roshiniraju19";
  return (
    <Nav>
      <NavContainer>
      <NavLogo to="/">
          <LogoLink>
            <DiCssdeck size = "3rem" />
            <Span>Portfolio</Span>
          </LogoLink>
        </NavLogo>
        <MobileIcon>
          <FaBars 
            onClick={() => {
              setOpen(!open);
            }}
            />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={githubLink} target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {
        open && (
          <MobileMenu open={open}>
            <MobileLink
              href="#about"
              onClick={() => {
                setOpen(!open);
              }}
              >
                About
              </MobileLink>
              <MobileLink
              href="#skills"
              onClick={() => {
                setOpen(!open);
              }}
              >
                Skills
              </MobileLink>
              <MobileLink
              href="#experience"
              onClick={() => {
                setOpen(!open);
              }}
              >
                Experience
              </MobileLink>
              <MobileLink
              href="#projects"
              onClick={() => {
                setOpen(!open);
              }}
              >
                Projects
              </MobileLink>
              <MobileLink
              href="#education"
              onClick={() => {
                setOpen(!open);
              }}
              >
                Education
              </MobileLink>
              <MobileLink
              href="#contact"
              onClick={() => {
                setOpen(!open);
              }}
              >
                Contact
              </MobileLink>
              <GithubButton
                style={{
                  padding: "10px 16px",
                  background: "white",
                  color: "white",
                  width: "max-content",
                }}
                href={githubLink}
                target="_blank"
                >Github Profile</GithubButton>
          </MobileMenu>
        )
      }
    </Nav>
  )
}

export default Navbar