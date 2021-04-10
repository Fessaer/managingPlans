/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap';
import firebase from 'firebase/app';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import cityesArray from '../Components/cityesArray'

// import Select from 'react-select'
export default class AddUser extends Component {
  constructor(props){
    super(props)
    this.state = { 
        companyName: '',
        INNCompany: '',
        adressCompany: '',
        service: "Выбрать вариант услуги",
        countUsers: '',
        numberOfmonths: '',
        typeHdd: '',
        serviceUsagePeriod: '',
        buttonDisabled: '',
    }
  }
  handleInputChange = (event, value) => {
    
    this.setState({adressCompany: value})
    this.disabledButton()
  }
  changeServise = (event, value) => {
    
    this.setState({service: value})
    this.disabledButton()
  }
  handleCompany = (e) => {
    const value = e.target.value
    this.setState(() => {
      return {companyName: value}
    })
    this.disabledButton()
    
  }
  handleInn = (e) => {
    const value = e.target.value
    this.setState({INNCompany: value})
    this.disabledButton()
  }
  handleCountUsers = (e) => {
    const value = e.target.value
    this.setState({countUsers: value}, this.disabledButton())
    
  }
  saveClient = async () => {
      
      const objUser = {
        companyName: this.state.companyName,
        INNCompany: this.state.INNCompany,
        adressCompany: this.state.adressCompany,
        service: this.state.service,
        countUsers: this.state.countUsers,
        numberOfmonths: this.state.numberOfmonths,
        typeHdd: this.state.typeHdd,
        serviceUsagePeriod: this.state.serviceUsagePeriod,
      }
      try {
        await firebase.database().ref('clients').push(objUser)
        this.setState({
          companyName: '',
          INNCompany: '',
          adressCompany: '',
          service: "Выбрать вариант услуги",
          countUsers: '',
          numberOfmonths: '',
          typeHdd:'',
          serviceUsagePeriod: '',
          buttonDisabled: true,
      })
    } catch (error) {
        console.log(error.message)
        throw error
    }
  }
  inputAutocomplete = () => {
    return (
      <Autocomplete
        id="combo-box"
        size="small"
        onInputChange={this.handleInputChange}
        options={cityesArray}
        getOptionLabel={(option) => option.title}
        getOptionSelected={(option, value) => option.id === value.id}
        style={{ width: '100%', height: 'auto' }}
        renderInput={(params) => <TextField {...params} label="Город" variant="outlined" />}
      />
    );
  }
  
  dopdownMenu = () => {
    return (
      <Autocomplete
        id="combo-box-demo"
        size="small"
        onInputChange={this.changeServise}
        options={[{title: 'Облачное решение'}, {title: 'Установка локального сервера'}]}
        getOptionLabel={(option) => option.title}
        getOptionSelected={(option, value) => option.id === value.id}
        style={{ width: '100%', height: 'auto' }}
        renderInput={(params) => <TextField {...params} label="Вид сервиса" variant="outlined" />}
      />
    );
  }
  
  disabledButton = () => {
    console.log(this.state)
    if (this.state.companyName !== false &&
      this.state.INNCompany !== false &&
      this.state.adressCompany !== false &&
      this.state.service !== "Выбрать вариант услуги" &&
      this.state.countUsers > 0 || 
      this.state.companyName !== '' &&
      this.state.INNCompany !== '' &&
      this.state.adressCompany !== '' &&
      this.state.service !== "" &&
      this.state.countUsers !== '' ) {
      this.setState({buttonDisabled: false})
    } else {
      this.setState({buttonDisabled: true})
    }
  }
  defaultValues = () => {
    return ''
  }
  render() {
    const { buttonDisabled } = this.state
    return (
      <div>
        <Table striped bordered hover size="sm" variant="dark">
  <thead>
    <tr>
      <th colSpan="2">
          внести информация о клиенте
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Название компании</td>
      <td width="20%"><input type="text" className="form-control" value={this.state.companyName} placeholder="Компания" onChange={this.handleCompany}/></td>
    </tr>
    <tr>
      <td>ИНН</td>
      <td width="20%"><input type="text" className="form-control" value={this.state.INNCompany} placeholder="ИНН" onChange={this.handleInn}/></td>
    </tr>
    <tr>
      <td>Город клиента</td>
      <td width="20%">{this.inputAutocomplete()}</td>
    </tr>
    <tr>
      <td>Какая услуга интересна</td>
      <td width="20%" >{this.dopdownMenu()}</td>
    </tr>
    <tr>
      <td>Необходимое количество пользователей для подключение</td>
      <td width="30%"><input type="text" className="form-control" value={this.state.countUsers} placeholder="пользователи" onChange={this.handleCountUsers}/></td>
    </tr>
  </tbody>
</Table>
        <Button variant="primary" onClick={this.saveClient} disabled={buttonDisabled}>Добавить в базу данных</Button>
      </div>
    )
  }
}
