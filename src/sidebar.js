import React from 'react';
import './App.css';
class Sidebar extends React.Component {
    render() {
        return (
            
            
                   <div id="side" className="nav flex-column">
                       <p></p>
                       <a link="nav-link" href="#">PLATFORM</a>
                       
                       <a link="nav-link" href="#"><span className="oi oi-home"></span>&nbsp;&nbsp;Home</a>
                          
                       <a link="nav-link" href="#"><span className="oi oi-monitor"></span>&nbsp;&nbsp;Machine</a>
                       <a link="nav-link" href="#"><span className="oi oi-person"></span>&nbsp;&nbsp;Clients</a>
                       <a link="nav-link" href="#"><span className="oi oi-clock"></span>&nbsp;&nbsp;Planning</a>
                       <p></p>
                       <p></p>
                       <a link="nav-link" href="#">SETTINGS</a>
                       <a link="nav-link" href="#"><span className="oi oi-people"></span>&nbsp;&nbsp;Users</a>
                       <a link="nav-link" href="#"><span class="oi oi-data-transfer-download"></span>&nbsp;&nbsp;ExportData</a>
                       <a link="nav-link" href="#"><span className="oi oi-cog"></span>&nbsp;&nbsp;Settings</a>
                       <p>
                       </p>
                       <p></p>
                       <a link="nav-link" href="#">ADVANCED</a>
                       <a link="nav-link" href="#"><span className="oi oi-box"></span>&nbsp;&nbsp;FANCYBOX CONFIGS</a>
                       <a link="nav-link" href="#"><span className="oi oi-cloud"></span>&nbsp;&nbsp;SPACEBUNNY STATUS</a>
                       <a link="nav-link" href="#"><span className="oi oi-share-boxed"></span>&nbsp;&nbsp;SHARED FOLDERS</a>
                       <p></p>
                       <p></p><p></p><p></p>
                       <a id="capfont" link="nav-link" href="#"><span className="oi oi-infinity"></span>&nbsp;&nbsp;FANCY PIXEL</a>
                       
                       
                   </div>
                
                
                        )
                    }
}
export { Sidebar };