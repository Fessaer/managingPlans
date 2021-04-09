import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class History extends Component {
    render() {
        return (
            <div>
<Table striped bordered hover size="sm" variant="dark">
  <thead>
    <tr>
      <th width="1rem">#</th>
      <th>Имя</th>
      <th>Данные</th>
      <th width="10%">Тариф</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Безлимитный</td>
      <td>12000 р</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
            </div>
        )
    }
}
