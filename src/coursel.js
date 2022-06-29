import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "reactstrap";

class Testimonials extends React.Component {
    render() {
        return (
            <>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ backgroundColor: "skyblue" }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ textAlign: "center", fontStretch: "expanded" }}>
                            <p>Ontoborn has built a software app from scratch for us. It serves thousands/week, and is in an educational setting, so it is critical that the app is highly dependable, student (and instructor) friendly, and secure. Overall, they have been excellent, and I would highly recommend them if you have need of developers with a broad range of abilities. They were very professional, hard working, mindful of details, and responsive. They don't say "no we can't do that", rather they find solutions. They are quick to learn new standards and methods when needed. They are friendly and easy to work with, and they care about the product, so that brings a special insight into achieving quality and finding creative and novel functionality. Finally, they understand critical, time sensitive issues and have been great at dealing with unexpected "crises".</p>
                        </div>
                        <div className="carousel-item" style={{ textAlign: "center" }}>
                            <h1>Hello World2</h1>
                        </div>
                        <div className="carousel-item" style={{ textAlign: "center" }}>
                            <h1>Hello World3</h1>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="conatiner" style={{ textAlign: "center" }}>
                    <h1>Dr.Andrew Heckler</h1>
                    <h3>Professor</h3>
                    <h4>Ohio State University</h4>
                </div>
                <div className="conatiner" style={{ textAlign: "center", marginTop:"100px",marginBottom:"70px"}}>
                    <img src={require('./badge.png')} />
                    <h1 style={{fontSize:"50px"}}>Our Work</h1>
                    <p>Web apps, mobile apps, watch apps and what not!</p>
                    <button type="button" className="btn btn-success btn-lg" style={{marginTop:"10px"}}>Our Portfolio</button>
                </div>
                
            </>
        )
    }
}
export default Testimonials;