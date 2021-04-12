import jsPDF from "jspdf";
import React, { PureComponent } from "react";
import ReactToPrint from "react-to-print";
import firebase from 'firebase/app';
import { Table, Button } from 'react-bootstrap';

// import jsPDF from 'jspdf'

class ComponentToPrint extends PureComponent {
    constructor(props) {
        super(props)
        this.data
        this.state = {}
    }
    print = () => {
        window.print();
      }
      
    jsPdfGenerator = () => {
        let doc = new jsPDF('p', 'pt');
        doc.text('sdd')
        doc.setFont('courier');
        doc.save("generated.pdf")
    }
    componentDidMount = async () => {
        try {
            const query_clientsList = await firebase.database().ref('history').once('value')
            const clientsList = query_clientsList.val()
            let dataHistory = []
            for (const item in clientsList) {
            dataHistory.push(clientsList[item])
            }
            dataHistory.reverse()
            this.setState({dataHistory})
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }
    render() {
        console.log(this.state)
    if (Object.prototype.hasOwnProperty.call(this.state, 'dataHistory')) {
        console.log(this.state)
    return (
        <>
        <Table striped bordered hover size="sm" variant="secondary">
        <thead>
          <tr>
            <th colSpan="2">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Название компании</td>
            <td width="20%">{this.state.dataHistory[0].companyName}</td>
          </tr>
          <tr>
            <td>ИНН</td>
            <td width="20%">{this.state.dataHistory[0].INNCompany}</td>
          </tr>
          <tr>
            <td>Город клиента</td>
            <td width="20%">{this.state.dataHistory[0].adressCompany}</td>
          </tr>
          <tr>
            <td>Какая услуга интересна</td>
            <td width="20%">{this.state.dataHistory[0].service}</td>
          </tr>
          <tr>
            <td>Необходимое количество пользователей для подключение</td>
            <td width="20%">{this.state.dataHistory[0].countUsers}</td>
          </tr>
          <tr>
            <td>Количество месяце хранения данных</td>
            <td width="20%">
            {this.state.dataHistory[0].numberOfmonths}
            </td>
          </tr>
          <tr>
            <td>Тип жёсткого диска</td>
            <td width="20%">
            {this.state.dataHistory[0].typeHDD}
            </td>
          </tr>
          <tr>
            <td>Период пользования услугой (месяцев)</td>
            <td width="20%">
            {this.state.dataHistory[0].serviceUsagePeriod}
            </td>
          </tr>
          <tr>
            <td>Стоимость услуги с использованием диска HDD на 1 мес. для {this.state.dataHistory[0].countUsers} пользователей</td>
            <td width="20%">
            {this.state.dataHistory[0].priceHDD}
            </td>
          </tr>
          <tr>
            <td>Стоимость услуги с использованием диска SDD на 1 мес. {this.state.dataHistory[0].countUsers} пользователей</td>
            <td width="20%">{this.state.dataHistory[0].priceSSD}</td>
          </tr>
        </tbody>
      </Table>
      <div style={{padding: '10px'}}><Button variant="info" onClick={this.print}>Сохранить PDF</Button></div>
      </>
      );
    } else { return null}
  }
}

class Print extends React.Component {
    render() {
    return (
        <div>
        <ComponentToPrint ref={el => (this.componentRef = el)} />
        <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <div style={{padding: '10px'}}><Button variant="info">Печать</Button></div>}
        />
        </div>
    );
    }
}

export default Print;
