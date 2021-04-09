import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class Home extends Component {
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
      <td>ООО рога и копыта</td>
    </tr>
    <tr>
      <td>ИНН</td>
      <td>342342342342352</td>
    </tr>
    <tr>
      <td>Город клиента</td>
      <td>Selector</td>
    </tr>
    <tr>
      <td>Какая услуга интересна</td>
      <td>Selector</td>
    </tr>
    <tr>
      <td>Необходимое количество пользователей для подключение</td>
      <td>Input</td>
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
      <td>Input</td>
    </tr>
    <tr>
      <td>Тип жёсткого диска</td>
      <td>Selector</td>
    </tr>
    <tr>
      <td>Период пользования услугой (месяцев)</td>
      <td>Selector</td>
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
      <td>OUTPUT PRICE</td>
    </tr>
    <tr>
      <td>Стоимость услуги с использованием диска HDD на 1 мес. для 10 пользователей</td>
      <td>OUTPUT PRICE</td>
    </tr>
  </tbody>
</Table>
</div>
        )
    }
}
