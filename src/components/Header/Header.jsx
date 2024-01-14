import { useEffect, useState } from "react";
import logo from "/logo-name.svg";
import { styled } from "styled-components";
//import "./Header.css";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let name = "Result";
  return (
    <HeaderContainer>
      <img src={logo} alt={name} />
      {/* <h3>Resul University</h3> */}
      <span>Время сейчас: {time.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
export default Header;
