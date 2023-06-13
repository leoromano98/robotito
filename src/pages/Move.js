import React, { useState } from "react";
import { sendMovementData } from "../helpers/apiCalls";

const SEND_DATA_STATES = {
  UNDEFINED: 0,
  SUCCESS: 1,
  ERROR: 2,
};

const DEFAULT_MOVEMENTS_VALUES = {
  height: 0,
  distance: 0,
  spin: 0,
};

const Move = ()=> {
  const [movements, setMovements] = useState(DEFAULT_MOVEMENTS_VALUES);
  const [sendDataState, setSendDataState] = useState(
    SEND_DATA_STATES.UNDEFINED
  );

  const handleMovementChange = (event) => {
    if (sendDataState !== SEND_DATA_STATES.UNDEFINED) {
      setSendDataState(SEND_DATA_STATES.UNDEFINED);
    }

    const field = event.target.name;
    setMovements({ ...movements, [field]: event.target.value });
  };

  const handleSubmitClick = () => {
    sendMovementData(movements)
      .then(() => {
        setSendDataState(SEND_DATA_STATES.SUCCESS);
      })
      .catch(() => {
        setSendDataState(SEND_DATA_STATES.ERROR);
      });
  };

  return (
    <div className="app-container">
      <h1 className="title">Robo-Tito</h1>
      <div className="sliders-container">
        <p className="input-label">Altura:</p>
        <input
          name="height"
          type="range"
          min="0"
          max="120"
          value={movements.height}
          className="slider"
          onChange={handleMovementChange}
        />
        <p className="input-label">Distancia:</p>
        <input
          name="distance"
          type="range"
          min="0"
          max="120"
          value={movements.distance}
          className="slider"
          onChange={handleMovementChange}
        />
        <p className="input-label">Giro:</p>
        <input
          name="spin"
          type="range"
          min="0"
          max="120"
          value={movements.spin}
          className="slider"
          onChange={handleMovementChange}
        />
      </div>
      <div className="values-container">
        <div className="value-container">
          <p className="value-label">Altura</p>
          <p className="value-number">{movements.height}</p>
        </div>
        <div className="value-container">
          <p className="value-label">Distancia</p>
          <p className="value-number">{movements.distance}</p>
        </div>
        <div className="value-container">
          <p className="value-label">Giro</p>
          <p className="value-number">{movements.spin}</p>
        </div>
      </div>
      <button className="send-button" onClick={handleSubmitClick}>
        Enviar
      </button>
      {sendDataState === SEND_DATA_STATES.SUCCESS && (
        <p className="data-state success">Movimiento enviado!</p>
      )}
      {sendDataState === SEND_DATA_STATES.ERROR && (
        <p className="data-state error">Error al enviar el movimiento.</p>
      )}
    </div>
  );
}

export default Move;
