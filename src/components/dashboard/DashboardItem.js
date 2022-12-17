import React, { Component } from 'react'

class DashboardItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-md-10">
                            <h3>Example Note</h3>
                            <p>Sample Text</p>
                        </div>
                        <div className="col-md-2 d-lg-block">
                            <ul className="list-group">
                                <a href="transactions.html">
                                    <li className="list-group-item board text-success">
                                        <b className="fa fa-flag-checkered pr-1"> Copy</b>
                                    </li>
                                </a>
                                <a href="walletForm.html">
                                    <li className="list-group-item update text-secondary">
                                        <b className="fa fa-edit pr-1"> Edit</b>
                                    </li>
                                </a>
                                <a href="">
                                    <li className="list-group-item delete text-danger">
                                        <b className="fa fa-minus-circle pr-1"> Delete</b>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardItem