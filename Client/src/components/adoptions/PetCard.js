import React, { useState } from "react";

function PetCard(props) {
  const [img, setImg] = useState(props.img);
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [description, setDescription] = useState(props.description);

  return (
    <div className="col">
      <div className="card h-100 bg-secondary mx-3 my-2">
        <h5 className="card-text adoption-card-header text-center mt-4 ">
          {name}
        </h5>
        <img src={img} className="card-img-top card-img-p" alt="Mascota" />
        <div className="card-body ps-4">
          <p className="card-text">Edad: {age}</p>
          <p className="card-text">{description}</p>
        </div>
        <div className="bg-primary d-flex justify-content-center">
          <a href={`/adoption/${name}`}>
            <button type="button" className="card my-3 btn btn-light">
              Adoptar
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PetCard;