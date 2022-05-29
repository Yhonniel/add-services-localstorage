import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const AddService = ({ onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: "No olvides indicar el nombre del servicio y la descripción",
      });
    } else if (!name && description) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes colocar el nombre del servicio",
      });
    } else if (name && !description) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "no olivdes colocar una descripción",
      });
    } else {
      onSave({ name, description });
    }
    setName("");
    setDescription("");
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            placeholder="agrega tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input
            type="text"
            className="form-control"
            placeholder="ingresa una descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success" value="Save Service">
          Grabar
        </button>
      </form>
    </>
  );
};

export default AddService;
