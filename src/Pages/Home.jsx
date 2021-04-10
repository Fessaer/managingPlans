import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {

  }
    render() {
        return (
            <div>
<Table striped bordered hover size="sm" variant="dark">
  <thead>
    <tr>
      <th colSpan="2">
          Блок №1 Основная информация о клиенте
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Название компании</td>
      <td width="20%">ООО рога и копыта</td>
    </tr>
    <tr>
      <td>ИНН</td>
      <td width="20%">342342342342352</td>
    </tr>
    <tr>
      <td>Город клиента</td>
      <td width="20%"><input type="text" className="form-control" placeholder="Город" onChange={this.handleClick}/></td>
    </tr>
    <tr>
      <td>Какая услуга интересна</td>
      <td width="20%">Selector</td>
    </tr>
    <tr>
      <td>Необходимое количество пользователей для подключение</td>
      <td width="20%">Input</td>
    </tr>
  </tbody>
</Table>
<Table striped bordered hover size="sm" variant="dark">
    <thead>
        <tr>
            <th colSpan="2">
                Блок №2 Основные требования к офрмлению облачного решения
            </th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td colSpan="2">Покупка облачного офисного контроля</td>
    </tr>
    <tr>
      <td>Количество месяце хранения данных</td>
      <td width="20%">Input</td>
    </tr>
    <tr>
      <td>Тип жёсткого диска</td>
      <td width="20%">Selector</td>
    </tr>
    <tr>
      <td>Период пользования услугой (месяцев)</td>
      <td width="20%">Selector</td>
    </tr>
  </tbody>
</Table>
<Table striped bordered hover size="sm" variant="dark">
<thead>
        <tr>
            <th colSpan="2">
                Блок №3 Итоговая стоимость облачного офисного контроля
            </th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Стоимость услуги с использованием диска HDD на 1 мес. для 10 пользователей</td>
      <td width="20%">OUTPUT PRICE</td>
    </tr>
    <tr>
      <td>Стоимость услуги с использованием диска HDD на 1 мес. для 10 пользователей</td>
      <td width="20%">OUTPUT PRICE</td>
    </tr>
  </tbody>
</Table>
</div>
        )
    }
}
