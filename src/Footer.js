import React from "react";
import axios from 'axios';
import {
    FormGroup,
    Form,
    Input,
    Button,
    Row,
    Col
} from "reactstrap";

class Foot extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Name:"",
            Email:"",
            PhoneNumber:"",
            Text:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    namehandler = (event)=>{
        this.setState({
            Name: event.target.value
        })
    }
    emailhandler = (event)=>{
        this.setState({
            Email: event.target.value
        })
    }
    phonenumberhandler = (event)=>{
        this.setState({
            PhoneNumber: event.target.value
        })
    }
    texthandler = (event)=>{
        this.setState({
            Text: event.target.value
        })
    }
    handleSubmit= (event)=>{
        console.log("hello")
        alert(`${this.state.Name} ${this.state.Email} Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            Name:"",
            Email:"",
            PhoneNumber:"",
            Text:"",
        })
    event.preventDefault()
    // let temp=this.setState
    console.log("temppppp",this.setState)
    let arr ={
            name:this.state.Name,
            email:this.state.Email,
            phone_number:this.state.PhoneNumber,
            text:this.state.Text,
    }
    console.log("datasssss",arr)
    axios.post('http://localhost:8001/person',arr)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        return (
            <>
                <div class="card-group">
                    <div class="card" style={{ marginLeft: "-90px", marginRight: "-90px", marginTop: "20px", backgroundColor: "rgb(103, 151, 233)" }}>
                        <div class="card-body" style={{ marginBottom: "30px" }}>
                            <h1 style={{ fontSize: "50px", textAlign: "center", marginBottom: "20px" }}> Tell Us About Your Project </h1>
                            <Form style={{ marginLeft: "90px", marginRight: "90px" }} onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="Full Name"
                                                type="text"
                                                value={this.state.Name}
                                                onChange={this.namehandler}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="Email Address"
                                                type="email"
                                                value={this.state.Email}
                                                onChange={this.emailhandler}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="Phone Number"
                                                type="number"
                                                value={this.state.PhoneNumber}
                                                onChange={this.phonenumberhandler}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Input style={{ marginTop: "20px" }}
                                    id="exampleFormControlTextarea1"
                                    placeholder="Write a large text here ..."
                                    rows="6"
                                    type="textarea"
                                    value={this.state.Text}
                                    onChange={this.texthandler}
                                />
                                <Button color="success" size="lg" type="submit" style={{ marginTop: "40px", fontSize: "20px" }} value="Submit">
                                    Contact Us
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    Enquiries: contactus@ontoborn.com | Careers: hr@ontoborn.com
                </div>
                <div style={{textAlign:"center"}}>
                    Copyright (c) 2022 ontoborn.
                </div>
            </>
        )
    }
}

export default Foot;