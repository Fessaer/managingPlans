import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import firebase from 'firebase/app';
import _ from 'lodash'
export default class History extends Component {
  constructor(props) {
    super(props)
    this.data
    this.state = {}
  }
  componentDidMount = async () => {
    try {
        const query_clientsList = await firebase.database().ref('history').once('value')
        const clientsList = query_clientsList.val()
        let dataHistory = []
        for (const item in clientsList) {
          dataHistory.push(clientsList[item])
        }
        this.setState({dataHistory})
    } catch (error) {
        console.log(error.message)
        throw error
    }
}
    render() {
      
     
      // dataHistory.map((item) => console.log(item))
        return (
            <div>
<Table striped bordered hover size="sm" variant="dark">
  <thead>
    <tr>
      <th>Имя</th>
      <th>Данные</th>
      <th width="10%">Тариф</th>
    </tr>
  </thead>
  <tbody>
  {Object.prototype.hasOwnProperty.call(this.state, 'dataHistory') ? this.state.dataHistory.map((item) => {
    return (
      <tr key={_.uniqueId()}>
      <td>{item.companyName}</td>
      <td>{item.service}, типа диска: {item.typeHDD}, адресс: {item.adressCompany}</td>
      <td>{item.priceHDD} р</td>
    </tr>
    )}) : null}
  </tbody>
</Table>
            
            
            </div>
        )
    }
}

