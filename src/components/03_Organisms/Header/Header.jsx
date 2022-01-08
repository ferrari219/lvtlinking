import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from 'assets/img/logo.png';
import SearchForm from 'components/02_Molecules/SearchForm/SearchForm';

const Header = () => {
  return (
    <header css={headerStyle}>
      <div className="top">
        <div className="left">
          <div className="logo">
            <Navbar.Brand href="#home">
              <img src={Logo} alt="LivartLinking" />
            </Navbar.Brand>
          </div>
          <div className="sch">
            <SearchForm />
          </div>
        </div>
        <div className="right">로그인</div>
      </div>
      <div className="mid">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="전체카테고리" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">link1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">베스트 클래스</Nav.Link>
                <Nav.Link href="#link">플리마켓</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

const headerStyle = css`
  & > .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    & > .left {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      // background-color: red;
      & > .logo {
        flex: 0 0 150px;
        img {
          width: 100%;
        }
      }
      & > .sch {
        flex: 1;
      }
    }
    & > .right {
      flex: 0 0 20rem;
      text-align: right;
      // background-color: blue;
    }
  }
`;

export default Header;
