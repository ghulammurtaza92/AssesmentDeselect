import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from "axios";
class AddStudent extends Component {
    constructor(props) {
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            id: "",
            firstname: "",
            lastname: "",
            age: "",
            nationality: ""
        }
    }

    onChangeFirstName = (e) => {
        this.setState({ firstname: e.target.value })
    }

    onChangeLastName = (e) => {
        this.setState({ lastname: e.target.value })
    }

    onChangeAge = (e) => {
        this.setState({ age: e.target.value })
    }

    onChangeNationality = (e) => {
        this.setState({ nationality: e.target.value })
    }

    onChangeId = (e) => {
        this.setState({ id: e.target.value })
    }
    onFormSubmit(e) {
        e.preventDefault();
        const studentData = {
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            nationality: this.state.nationality,
            age: this.state.age,

        };
        
        axios.post('http://localhost:4000/students/init',studentData).then(res => console.log(res.data));
        this.setState({
            id: "",
            firstname: "",
            lastname: "",
            age: "",
            nationality: ""
        })
    }
    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="number" placeholder="Enter Id" value={this.state.id} onChange={this.onChangeId} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" placeholder="Enter firstname" value={this.state.firstname} onChange={this.onChangeFirstName} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="Enter lastname" value={this.state.lastname} onChange={this.onChangeLastName} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" value={this.state.age} onChange={this.onChangeAge} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control type="text" placeholder="Enter nationality" value={this.state.nationality} onChange={this.onChangeNationality} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>);
    }
};

export default AddStudent;
