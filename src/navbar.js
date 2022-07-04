import React from "react";


class Appps extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" style={{marginLeft:"-90px",marginRight:"-185px",overflow:"hidden"}}>
                    <div className="container-fluid">
                        <img src={require('./ontoborn.png')} />
                        <a className="navbar-brand" href="#" style={{ fontSize: "20px", fontWeight: "light" }}>Ontoborn</a>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">CaseStudies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Reviews</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Process</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                            </ul>
                            <button className="btn btn-outline-success" style={{ fontSize: "10px", padding: "10px" }}>Book a meeting</button>
                            <button className="btn btn-outline-info" style={{ fontSize: "10px", padding: "10px" }}>Request a free quote</button>
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}

export default Appps;