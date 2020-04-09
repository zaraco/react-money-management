import React, {Component} from "react";
import Table from "react-bootstrap/Table";

class Show extends Component {
    constructor() {
        super();
        let items = JSON.parse(localStorage.getItem('items'))
        this.state = {
            items: items
        }
    }





        render() {
            let total = this.state.items.length>0 ? this.state.items.map((item) =>
                <tr>
                    <td>{item.title}</td>
                    <td>{item.amount}</td>

                </tr>
            ) : null

            return (
                <>

                    <Table striped bordered hover>
                        <thead>
                        <tr>

                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                        </thead>

                        <tbody>

                        {total}

                        </tbody>
                    </Table>
                </>
            );
        }
    }


export default Show;