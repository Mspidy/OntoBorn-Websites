import React from "react";
// reactstrap components
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

class Navbars extends React.Component {

    render() {
        return (
            <>
                <Container>
                    <h1 style={{ fontSize: "70px", textAlign: "center" }}>We Build World Class Software Solutions</h1>
                    <h4 style={{ fontSize: "30px", textAlign: "center" }}>What do you need our help with ?</h4>
                </Container>

                <Container style={{textAlign:"center"}}>
                    <button className="btn btn-outline-primary">A SAAS Platform</button>
                    <button className="btn btn-outline-primary">A Web Application</button>
                    <button className="btn btn-outline-primary">A Mobile Application</button>
                    <button className="btn btn-outline-primary">or Checkout our Work</button>
                </Container>
            </>
        )
    }
}

export default Navbars;