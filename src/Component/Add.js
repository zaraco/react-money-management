import React, {Component} from "react";
import {Form, Col, Row, FormGroup, FormLabel, FormControl, Button} from "react-bootstrap";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            amount: ''

        }
    }

    clickHandlerTi = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    clickHandlerAm = (e) => {
        this.setState({
            amount: e.target.value
        })
    }


    add = () => {

        const newRow  = {
            title: this.state.title,
            amount: this.state.amount
        }

        let items = JSON.parse(localStorage.getItem('items'))
        if(!items){
            items = []
        }
        items.push(newRow)


        localStorage.setItem('items', JSON.stringify(items))
        //console.log(items)

        this.setState({
            title: '',
            amount: ''
        })
    }


    render() {
        return (
            <div>
                <Form>
                    <FormGroup as={Row} controlId="formHorizontalTitle"
                               >
                        <FormLabel column sm={2}>
                            Title
                        </FormLabel>
                        <Col sm={10}>
                            <FormControl type="title" placeholder="Title" onChange={this.clickHandlerTi} value={this.state.title}/>
                        </Col>
                    </FormGroup>

                    <FormGroup as={Row} controlId="formHorizontalAmount" >
                        <FormLabel column sm={2}>
                            Amount
                        </FormLabel>
                        <Col sm={10}>
                            <FormControl type="amount" placeholder="Amount" value={this.state.amount}
                                         onChange={this.clickHandlerAm}/>
                        </Col>
                    </FormGroup>
                    <Button type="button" variant="success" onClick={this.add}>Add</Button>
                </Form>
            </div>
        );
    }
}


export default Add;