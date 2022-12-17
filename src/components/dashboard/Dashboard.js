import React, { Component } from 'react'
import DashboardItem from './DashboardItem'
import { Link } from "react-router-dom"

class Dashboard extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">My Notes</h1>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-primary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create new
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/createnote">Note</Link>
                                    <button disabled className="dropdown-item">Contact</button>
                                </div>
                            </div>

                            {/* <div className="card text-center">
                                <div className="card-header bg-success text-white">
                                </div>
                            </div> */}
                            <hr />
                            <DashboardItem />
                            <DashboardItem />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard