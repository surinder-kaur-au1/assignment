import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'june', 'july'],
  datasets: [
    {
      label: 'Rainfall',
      fill: true,
      lineTension: 1.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      
      data: [120, 200, 65, 59, 80, 81, 56, 100]
    }
  ]
}

export default class Apps extends React.Component {
  render() {
    return (
       <div style={{position:"relative",
      width:"500", height:"500"}}>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'',
              fontSize:5
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
export {  Apps };