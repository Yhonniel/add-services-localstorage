// Components
import Header from "../components/Header";
import Services from "../components/Services";
import AddService from "../components/AddService";
// Hooks
import { useState, useEffect } from "react";
// Packages
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const filtros = [
  {
    label: "Todos",
    url: "todos",
  },
  {
    label: "Autos",
    url: "autos",
  },
  {
    label: "Salud",
    url: "salud",
  },
  {
    label: "Hogar",
    url: "hogar",
  },
];

function Home() {
  // All States

  const [services, setServices] = useState([]);
  const [showAddService, setShowAddService] = useState(false);
  const [loading, setloading] = useState(true);
  const [filterSelected, setFilterSelected] = useState(filtros[0]);

  // Pre-loader
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);

  // Fetching from Local Storage
  const getServices = JSON.parse(localStorage.getItem("serviceAdded"));

  useEffect(() => {
    if (getServices == null) {
      setServices([]);
    } else {
      setServices(getServices);
    }
  }, []);

  // Add Service

  const addService = (service) => {
    const id = uuidv4();
    const newService = { id, ...service };

    setServices([...services, newService]);

    Swal.fire({
      icon: "success",
      title: "Genial...",
      text: "Tu servicio ha sido guardado con éxito",
    });

    localStorage.setItem(
      "serviceAdded",
      JSON.stringify([...services, newService])
    );
  };

  // Delete Service

  const deleteService = (id) => {
    const deleteService = services.filter((service) => service.id !== id);

    setServices(deleteService);

    Swal.fire({
      icon: "success",
      title: "Oops..",
      text: "Tu servicio ha sido eliminado con éxito",
    });

    localStorage.setItem("serviceAdded", JSON.stringify(deleteService));
  };

  // Edit Service
  const editService = (id) => {
    const name = prompt("Service Name");
    const description = prompt("Description");
    let data = JSON.parse(localStorage.getItem("serviceAdded"));

    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          name: name,
          description: description,
          id: uuidv4(),
        };
      }
      return x;
    });

    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "Has editado el servicio con éxito!",
    });
    localStorage.setItem("serviceAdded", JSON.stringify(myData));
    window.location.reload();
  };

  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          {/* App Header */}
          <Header
            showForm={() => setShowAddService(!showAddService)}
            changeTextAndColor={showAddService}
          />
          {/* Services Counter */}
          <div className="my-3">
            <h5>Servicios guardados: {services.length}</h5>
          </div>
          {/* Revealing of Add Task Form */}

          {showAddService && <AddService onSave={addService} />}

          <div className="row">
            {filtros.map((filtro, index) => {
              return (
                <div
                  key={"filtros" + index}
                  className="col text-center py-3 bg-light"
                >
                  <button
                    className={`btn btn-primary ${
                      filtro.label === filterSelected.label && "active"
                    }`}
                    onClick={() => setFilterSelected(filtro)}
                  >
                    {filtro.label}
                  </button>
                </div>
              );
            })}
          </div>
          {/* Displaying of Services */}
          <div className="text-center p-5">
            {services.length > 0 ? (
              <Services
                services={services}
                onDelete={deleteService}
                onEdit={editService}
              />
            ) : (
              <h5> "No hay nada que mostrar! 🐌" </h5>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
