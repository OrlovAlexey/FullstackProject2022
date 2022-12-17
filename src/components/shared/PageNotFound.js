import React, { Component } from 'react'

class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="error_page_not_found.jpg" className="not-found-img" />
                    </div>
                    <div className="col-md-3">
                        <div className="error-template">
                            <h2>404 Not Found</h2>
                            <div className="error-details">
                                Sorry, requested page not found!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNotFound