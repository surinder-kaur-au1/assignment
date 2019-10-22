import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Sidebar } from './sidebar.js';
import { Aboutmain } from './main';
import { GraphComponent } from './graph';
import { Apps } from './chart.js'
class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 offset-md-2">
                        <h2>Product-Designing-App</h2>
                        <hr></hr>

                        <ul className="nav nav-fill">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Device</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Location</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2 offset-md-2">
                        <Sidebar />
                    </div>
                    <div className="col">
                        <Aboutmain />
                        <div className="row">
                            <div className="col">
                                <Apps />

                            </div>



                        </div>

                    </div>

                </div>

            </div>


        );
    }
}

export { App };