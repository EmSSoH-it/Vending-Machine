import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const drinks = [
  {id: 0, label: 'Cola', value: 9},
  {id: 1, label: 'Sprite', value: 5},
  {id: 2, label: 'Fanta', value: 15}
]

class VendingMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {money: 0, drink: '', price: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name
    const drink = drinks[event.target.value]

    if(name==="drink"){

      this.setState({
        drink: drink.label,
        price: drink.value
      })
    } else {this.setState({[name]: event.target.value})};  
  }
  
  handleSubmit(event) {
    const change = (this.state.money - this.state.price);

    this.setState({money: change});

    alert(
      'You have bought: ' + this.state.drink + 
      ' \nremaining change: ' + change +
      ' \nprice of drink was ' + this.state.price);
    event.preventDefault();
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <label>
          Please input money:
          <input name="money" type="number" value={this.state.money} onChange={this.handleChange} />
        </label>
        <label>
          Please select your drink:
          <select name="drink" defaultValue="" onChange={this.handleChange} >
              <option hidden disabled value="">-- select an option --</option>
            {drinks.map((option) => (
              <option key={option.id} value={option.id}>{option.label} - {option.value}kr</option>
            ))}
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<VendingMachine />);
