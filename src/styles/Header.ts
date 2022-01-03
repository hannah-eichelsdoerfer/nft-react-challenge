import styled from "styled-components";

export const NavbarElements = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  .logo {
    height: 2rem;
  }

  .searchBar {
    background-color: #1c1c1e;
    height: 50px;
    display: flex;
    flex: 1;
    border-radius: 50px;
    align-items: center;
    padding: 0 1.5rem;
  }

  .searchInput {
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    color: #eee;
    font-size: 1.6rem;
    padding-left: 1.5rem;
  }

  .headerItems {
    display: flex;
    gap: 1rem;
    color: #a1a5b0;
  }

  .login {
    background: linear-gradient(to right, #59f9b7, #66feea);
    padding: 1.5rem 4rem;
    border-radius: 5rem;
    color: black;
  }
`;
