import React from 'react';

const base_URL= `https://www.googleapis.com/books/v1/volumes?q=`

class App extends React.Component {

  state={
    items: []
  }

  componentDidMount(){
  fetch( base_URL+"harry-potter")
  .then(res => res.json())
  .then(data=> this.setState({items: data.items[0].volumeInfo.title}) )

  }

  render(){
  // const books = this.state.items.map(el => <li>{el}</li>)
  return (
    <main className='App'>
      {this.state.items}
    </main>
  );}

}

export default App;