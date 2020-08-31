import React from 'react';

const base_URL = `https://www.googleapis.com/books/v1/volumes?q=`

class App extends React.Component {

  state = {
    items: [],
    volumeInfo: {},
    title: []

  }

  componentDidMount() {
    fetch(base_URL + "harry-potter")
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.items,
          volumeInfo: data.items.map(item => item.volumeInfo),
          title: data.items.map(item => item.volumeInfo.title)

        })
      })
  }

  render() {
    console.log('rendering...', this.state.volumeInfo)
    const books = this.state.title.map(el => <li>{el}</li>)
    const volume = Object.keys(this.state.volumeInfo).map((vol) => {
     return <li>{this.state.volumeInfo.vol}</li>
    } )
    return (
      <main className='App'>
        {books}
        {volume}
      </main>
    );
  }

}

export default App;