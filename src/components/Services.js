import React from "react";
import Service from "./Service";
import "../index.css";

const Services = ({ services, onDelete, onEdit }) => {
  return (
    <>
      {services.map((service) => (
        <Service
          key={service.id}
          service={service}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

export default Services;
