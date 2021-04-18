import React, { Component } from 'react';
import { Table, Dropdown, DropdownButton, Button, ButtonGroup } from 'react-bootstrap';
import firebase from 'firebase/app';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.data = {}
    this.state = {company:{}}
  }
  componentDidMount = async () => {
      try {
          const query_clientsList = await firebase.database().ref('clients').once('value')
          const clientsList = query_clientsList.val()
          this.data = clientsList
      } catch (error) {
          console.log(error.message)
          throw error
      }
  
  }
  changeService = () => {
    
    return (
      <Autocomplete
        id="combo-box-demo"
        size="small"
        onInputChange={this.changeServise}
        options={[{title: 'Облачное решение'}, {title: 'Установка локального сервера'}]}
        getOptionLabel={(option) => option.title}
        getOptionSelected={(option, value) => option.id === value.id}
        style={{ width: '100%', height: 'auto' }}
        renderInput={(params) => <TextField {...params} label="Вид сервиса"  color="primary" variant="outlined" />}
      />
    )
  }
  handleChengeSearch = (e) => {
    this.setState({search: e.target.value, company: {}})
  }
  clickSearch = () => {
    console.log(this.state.search)
    console.log(this.data)
    for (const item in this.data) {
      if (this.data[item].companyName === this.state.search) {
        this.setState({search: this.state.search, company: this.data[item]}, console.log(this.state, 'state'))
        
      }
    }
    // const array = Object.entries(this.data)

  }
  renderSearch = () => {
    return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-info" type="button" id="button-addon1" onClick={this.clickSearch}>Поиск</button>
      </div>
      <input type="text" className="form-control" placeholder="в базе клиентов" aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={this.handleChengeSearch} />
    </div>
    )
  }
  numberOfMonthsSaveData = (e) => {
    const value = e.target.value
    const dataObj = this.state
    dataObj.company.numberOfmonths = value
    this.setState({dataObj})
  }
  numberOfMonthsService = (e) => {
    const value = e.target.value
    const dataObj = this.state
    dataObj.company.serviceUsagePeriod = value
    this.setState({dataObj})
  }
  clickMath = async () => {
    const dataObj = this.state
    const priceСountUsers = dataObj.company.countUsers
    const priceServiceUsagePeriod = dataObj.company.serviceUsagePeriod
    const priceNumberOfmonths = dataObj.company.numberOfmonths
    let priceHDD = 30 * priceServiceUsagePeriod * priceNumberOfmonths * priceСountUsers
    let priceSSD = 51 * priceServiceUsagePeriod * priceNumberOfmonths * priceСountUsers
    dataObj.company.priceHDD = Math.round(priceHDD)
    dataObj.company.priceSSD = Math.round(priceSSD)
    this.setState({dataObj})
    await firebase.database().ref('history').push(this.state.company) 
    console.log(this.state)
    
    
  }
  handleHHD = (e) => {
    const value = e.target.text
    const dataObj = this.state
    dataObj.company.typeHDD = value
    this.setState({dataObj})
    // console.log(e.target.text)
  }

    render() {
      
        return (
          
            <div>
<Table striped bordered hover size="sm" variant="secondary">
  <thead>
    <tr>
      <th colSpan="2">
      {this.renderSearch()}
      Блок №1 Основная информация о клиенте 
  
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Название компании</td>
      <td width="20%">{Object.prototype.hasOwnProperty.call(this.state.company, 'companyName') ? this.state.company.companyName : ''}</td>
    </tr>
    <tr>
      <td>ИНН</td>
      <td width="20%">{Object.prototype.hasOwnProperty.call(this.state.company, 'INNCompany') ? this.state.company.INNCompany : ''}</td>
    </tr>
    <tr>
      <td>Город клиента</td>
      <td width="20%">{Object.prototype.hasOwnProperty.call(this.state.company, 'adressCompany') ? this.state.company.adressCompany : ''}</td>
    </tr>
    <tr>
      <td>Какая услуга интересна</td>
      <td width="20%">{this.changeService()}</td>
    </tr>
    <tr>
      <td>Необходимое количество пользователей для подключение</td>
      <td width="20%">{Object.prototype.hasOwnProperty.call(this.state.company, 'countUsers') ? this.state.company.countUsers : ''}</td>
    </tr>
  </tbody>
</Table>
<Table striped bordered hover size="sm" variant="secondary">
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
      <td width="20%">
      <input className="form-control" placeholder="месяцев" aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={this.numberOfMonthsSaveData} type="number" pattern="[0-9]*" />
      </td>
    </tr>
    <tr>
      <td>Тип жёсткого диска</td>
      <td width="20%">

      <ButtonGroup justified>
      <DropdownButton
        variant="info"
        menuAlign="left"
        title={Object.prototype.hasOwnProperty.call(this.state.company, 'typeHDD') ? this.state.company.typeHDD : 'Тип жёсткого диска' }
        id="dropdown-menu-align-responsive-1"
        onClick={this.handleHHD}
      >
        <Dropdown.Item eventKey="1" aria-expanded="true">HDD</Dropdown.Item>
        <Dropdown.Item eventKey="2">SSD</Dropdown.Item>
        <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Оба варианта</Dropdown.Item>
        </DropdownButton>
        </ButtonGroup>

      </td>
    </tr>
    <tr>
      <td>Период пользования услугой (месяцев)</td>
      <td width="20%"><input className="form-control" placeholder="месяцев" aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={this.numberOfMonthsService} type="number" pattern="[0-9]*" />
</td>
    </tr>
  </tbody>
</Table>
<Table striped bordered hover size="sm" variant="secondary">
<thead>
        <tr>
            <th colSpan="2">
                Блок №3 Итоговая стоимость облачного офисного контроля
            </th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Стоимость услуги с использованием диска HDD на 1 мес. для {Object.prototype.hasOwnProperty.call(this.state.company, 'countUsers') ? this.state.company.countUsers : 0 } пользователей</td>
      <td width="20%">{this.state.company.priceHDD}</td>
    </tr>
    <tr>
      <td>Стоимость услуги с использованием диска SDD на 1 мес. для {Object.prototype.hasOwnProperty.call(this.state.company, 'countUsers') ? this.state.company.countUsers : 0 } пользователей</td>
      <td width="20%">{this.state.company.priceSSD}</td>
    </tr>
  </tbody>
  <>
  <Button variant="info" onClick={this.clickMath}>Расчитать</Button>
  </>
</Table>

</div>
        )
    }
}
