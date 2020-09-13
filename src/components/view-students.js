import React, { Component } from "react";
import { Form, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'; 
import axios from "axios";

class ViewStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: [],
            nationalities: [],
            selectedItem: "",
            selectedStudentList:[],
            sortAscendingClicked:true
        };
        this.getSortedList = this.getSortedList.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:4000/students/get')
            .then(res => {
                this.setState({
                    students: res.data
                });

            }).then(res => {
                let nationalitiesSource = [];
                this.state.students.map(item => {
                    if (nationalitiesSource.indexOf(item.nationality) === -1) {
                        nationalitiesSource.push(item.nationality)
                    }
                });
                nationalitiesSource.sort();
                this.setState({
                    nationalities: nationalitiesSource,
                    selectedItem:nationalitiesSource[0]
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    getStudent() {
        this.state.selectedStudentList=[];
        return this.state.students.map((item, i) => {
            if (item.nationality == this.state.selectedItem) {
                 this.state.selectedStudentList.push(item)
            return <Card key={item.id}><Card.Body > {item.firstname} {item.lastname} ({item.age})</Card.Body></Card>

            }
        }

        )
    }
    getSortedList(e){
        debugger;
        e.preventDefault();
        if(this.state.sortAscendingClicked){
            this.setState({students: this.state.students.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1)})
            this.state.sortAscendingClicked=false;

        }
       else{

        this.setState({students: this.state.students.reverse()}); 
        this.state.sortAscendingClicked=true;
       }
            
        
    }
    render() {
        return (<div className="form-wrapper">
            <Form.Group>
                <Form.Control as="select" size="lg" value={this.state.selectedItem}
                    onChange={(e) => this.setState({ selectedItem: e.target.value,sortAscendingClicked:true })}>
                    {this.state.nationalities.map((nationality) => <option key={nationality} value={nationality}>{nationality}</option>)}
                </Form.Control>
                <br />
            </Form.Group>
            <br/>
            {this.getStudent()}
            <br/>
            <Button variant="primary" type="button" onClick={this.getSortedList}>
                    Sort
                </Button>
        </div>
        );
    }
};

export default ViewStudent;
