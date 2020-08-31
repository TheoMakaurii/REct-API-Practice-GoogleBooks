import React from 'react';

const base_URL = `https://www.googleapis.com/books/v1/volumes?q=`

class App extends React.Component {

  state = {
    items: []
  }

  componentDidMount() {
    fetch(base_URL + "harry-potter")
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.items
        })
      })
  }

  render() {
    console.log('rendering...', this.state.items)
    const books = this.state.items.map(el => <li>
      <p>{el.volumeInfo.title}</p>
    <p>{el.volumeInfo.authors}</p>
    <p>{el.saleInfo.isEbook ? 'Ebook' : 'Not EBook'}</p>
    <img src={el.volumeInfo.imageLinks.thumbnail} alt="Harry Potter"/>
      </li>)
    return (
      <main className='App'>
        {books}
      </main>
    );
  }

}

export default App;