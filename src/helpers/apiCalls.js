import axios from 'axios'

export const sendMovementData = (movements)=> {
    console.log(movements)
    
    return axios
    .post("/api/v1/light/brightness", {
        red: parseInt(movements.height,10) ,
        green: parseInt(movements.distance,10),
        blue: parseInt(movements.spin,10)
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  