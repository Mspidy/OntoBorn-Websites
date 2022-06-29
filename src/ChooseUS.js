import React from "react";

class Choose extends React.Component {
    render() {
        return (
            <div class="card-group">
                <div class="card" style={{marginLeft:"-90px"}}>
                    <img src={require('./img1.png')} class="card-img-top" />
                    <h1 class="card-title" style={{textAlign:"center"}}>Proven Expertise</h1>
                    <div class="card-body">
                        <p class="card-text">Our expertise ranges from developing offline web-based systems to highly scalable enterprise SAAS products. We have a proven record of delivering high-quality deliverables to our clients.</p>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                <div class="card">
                    <img src={require('./img2.png')} class="card-img-top" />
                    <h1 class="card-title" style={{textAlign:"center"}}>Qualified Professionals</h1>
                    <div class="card-body">
                        <p class="card-text">We hire only the top talents in the state. All of our employees are highly qualified professionals. Our employees undergo training every day to stay updated with the latest trends.</p>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                <div class="card">
                    <img src={require('./img3.png')} class="card-img-top" />
                    <h1 class="card-title" style={{textAlign:"center"}}>Within your budget</h1>
                    <div class="card-body">
                        <p class="card-text">Leap forward on your growth strategy with our development team that suits your budget. All our plans have been cherry-picked to make sure our clients get maximum return on investment.</p>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                <div class="card" style={{marginRight:"-90px"}}>
                    <img src={require('./img4.png')} class="card-img-top" />
                    <h1 class="card-title" style={{textAlign:"center"}}>Unparalleled Support</h1>
                    <div class="card-body">
                        <p class="card-text">Get all your questions answered round the clock. Just call us or email us and we will get back to you as soon as we can. We are just a click away!</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Choose;