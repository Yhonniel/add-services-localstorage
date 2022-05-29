import React from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import "../index.css";

const Service = ({ service, onDelete, onEdit }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{service.name}</h5>
          <p className="card-text">{service.description}</p>
          <div>
            <p>
              <FaTimes
                onClick={() => onDelete(service.id)}
                className="delIcon"
              />
            </p>
            <p>
              <FaPencilAlt
                onClick={() => onEdit(service.id)}
                className="editIcon"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
