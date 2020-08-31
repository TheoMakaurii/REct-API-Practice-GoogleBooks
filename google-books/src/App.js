import React from 'react';
import Search from './search'

const base_URL = `https://www.googleapis.com/books/v1/volumes?q=`




class App extends React.Component {

  state = {
    items: [],
    searchQuery:""
  }
  
  searchFunction = (title) => {
    console.log('clicked')
    fetch(base_URL + title)
      .then(res => res.json())
      .then(data => {
        console.log(data.items)
        this.setState({
          items: data.items
        })
      })
    // this.setState({searchQuery: title})
    // this.setState({searchQuery: e.target.value})
  }

  // componentDidMount() {
  //   fetch(base_URL + this.state.searchQuery)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         items: data.items
  //       })
  //     })
  // }

  render() {
    console.log('rendering...', this.state.items)
    const books =(this.state.items.length) ? this.state.items.map(el => <li key={el.id}>
      <p>{el.volumeInfo.title}</p>
    <p>{el.volumeInfo.authors}</p>
    <p>{el.saleInfo.isEbook ? 'Ebook' : 'Not EBook'}</p>
    <img src={el.volumeInfo.imageLinks.thumbnail} alt="Harry Potter"/>
      </li>) : "Enter a serach"
    return (
      <main className='App'>
        <Search 
        searchFunction= {this.searchFunction}
        />
        {books}
      </main>
    );
  }

}

export default App;