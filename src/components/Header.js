import React from "react";
import Button from "./Button";
import "../index.css";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <header className="hero">
      <h2 className="app-hero">Administrador de Servicios App</h2>
      <Button
        onClick={showForm}
        color={changeTextAndColor ? "red" : "green"}
        text={changeTextAndColor ? "Cerrar" : "Agregar"}
      />
    </header>
  );
};

export default Header;
