import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as S from "./styles";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <S.Menus open={open} />
        <S.Menus open={open} />
        <S.Menus open={open} />
      </S.StyledBurger>
      <S.Nav>
        <NavLink to="/">
          <S.Logo src={require("../assets/logo.png")} alt="Gustavo Scarpim" />
        </NavLink>
      </S.Nav>
      <S.Ul open={open}>
        <S.LogoUl src={require("../assets/logo.png")} alt={"Gustavo Scarpim"} />

        <NavLink
          to="/covid"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          <S.Li>코로나19</S.Li>
        </NavLink>

        <NavLink
          to="/disease"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          <S.Li>증상 검색</S.Li>
        </NavLink>

        <NavLink
          to="/drug"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          <S.Li>의약품 검색</S.Li>
        </NavLink>

        <NavLink
          to="/hospital"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          <S.Li>의료기관 검색</S.Li>
        </NavLink>
      </S.Ul>
    </>
  );
};

export default NavBar;
