import React from "react";
import { Container } from "reactstrap";
import './slider.css';
// const items = [
//     {
//       src: require("./swigy.png"),
//       altText: '',
//       caption: '',
//       header: ''
//     },
//     {
//       src: require("./ohio-state.jpg"),
//       altText: '',
//       caption: '',
//       header: ''
//     },
//     {
//         src: require("./neo.png"),
//         altText: '',
//         caption: '',
//         header: ''
//     },
//     {
//         src: require("./poultry.png"),
//         altText: '',
//         caption: '',
//         header: ''
//     },
//     {
//         src: require("./concize.png"),
//         altText: '',
//         caption: '',
//         header: ''
//     },
//     {
//         src: require("./priseworks.png"),
//         altText: '',
//         caption: '',
//         header: ''
//     },
//     {
//         src: require("./pricemate.jpg"),
//         altText: '',
//         caption: '',
//         header: ''
//     },
//     {
//         src: require("./physiocare.png"),
//         altText: '',
//         caption: '',
//         header: ''
//     },
//     {
//         src: require("./edulogic.png"),
//         altText: '',
//         caption: '',
//         header: ''
//     },
//     {
//         src: require("./devaologo.png"),
//         altText: '',
//         caption: '',
//         header: ''
//     }

//   ];

class Slider extends React.Component{
    render(){
        return(
            <>
                <Container>
                    <h1 style={{ fontSize: "70px", textAlign: "center", marginBottom:"50px" }}>Trusted By</h1>
                    
                </Container>
                {/* <div className="container" style={{maxWidth:"700px",maxHeight:"600px"}}>
                    <UncontrolledCarousel items={items}/>
                </div> */}
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src={require('./swigy.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./neo.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./concize.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./ohio-state.jpg')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./physiocare.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./poultry.png')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./pricemate.jpg')}/>
                        </div>
                        <div className="slide">
                            <img src={require('./priseworks.png')}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Slider;