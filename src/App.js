import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import keys from "./variables/keys";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const dateBuild = (d) => {
    let [date, time] = d.toLocaleString('es-PE').split(' ');
    return `Fecha: ${date} Hora: ${time}`;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-3">
          <h1>React Weather App</h1>
        </div>
        <div className="col-12">
          <p><strong>{dateBuild(new Date())}</strong></p>
        </div>
        <div className="col-12">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" aria-label="Weather search" aria-describedby="search-box" />
            <div className="input-group-append">
              <span className="input-group-text" id="search-box">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
