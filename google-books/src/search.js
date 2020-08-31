import React from 'react';


export default class Search extends React.Component{
onSubmitForm =(e)=>{
    e.preventDefault()
    this.props.searchFunction(e.target.searchForm.value)

}
render(){
return (
<form  onSubmit={this.onSubmitForm} className="searchBox"> 
    
    <label>
        Search here:
        <input type ="text" name="searchForm" placeholder="Enter book here" ></input>
    </label>
    <button  type = "submit" className="search-button">Search</button>
</form>)

} 
}