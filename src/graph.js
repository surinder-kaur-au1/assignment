import React from 'react';
import './App.js';
import  Line from 'chart.js';
class GraphComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            data: {
                labels: ["1","2","3","4","5"],
                dataSets:[{
                    labels: "green",
                    backgroundColor: "rgba(0, 255, 0, 0.75)",
                    data:  [4,6,7,8,21]
                },
                {
                    labels: "blue",
                    backgroundColor: "rgba(255, 0,255, 0.75)",
                    data:  [14,16,27,18,21]
                
                }

                ]
            }
        }
    }
    render() {
        return(
    <div style={{position:"relative",
width:"400", height:"400"}}>

           
               <line options={{
                   responsive:true
               }} 
               data = {this.state.data} />
        </div>
        );
    }
}
export { GraphComponent };