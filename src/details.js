import React from "react";
import { Container } from "reactstrap";

class Details extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <h1 style={{ fontSize: "50px", textAlign: "center", marginTop: "20px" }}>Who Are We?</h1>
                    <ul style={{ fontSize: "20px", marginLeft: "50px" }}>
                        <li>We are a <strong>Software Development Company</strong> Specializing in developing scalable and stable
                            <strong>Web Application</strong> and <strong>Mobile Apps</strong> with experience in verticals such as
                            <strong>Healthcare, Education</strong> & <strong>E-commerece .</strong>
                        </li>
                        <li>We are experts in technologies as <strong>iOS, Android, AngularJS, ReactJS, Ruby on Rails
                            , Go, Python, PHP, NodeJS, JAVA, DotNet, Xamarin</strong> and <strong>Wavemaker</strong></li>
                    </ul>
                    <h1 style={{ fontSize: "50px", textAlign: "center", marginTop: "20px" }}> Client Testimonials </h1>
                </Container>
            </>

        )
    }
}
export default Details;