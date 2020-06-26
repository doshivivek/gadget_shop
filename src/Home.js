import React from 'react';

import ProductList from './ProductList';

import 'bootstrap/dist/css/bootstrap.css'
// import './Home.css'

class Home extends React.Component{
  
    state = {
      selectedType: null,
      category: [],
      items: []
    }

  async componentDidMount(){
    const url_1 = "https://aveosoft-react-assignment.herokuapp.com/products"
    const response_1 = await fetch(url_1)
    const data_1 = await response_1.json()

    const url_2 = "https://aveosoft-react-assignment.herokuapp.com/categories"
    const response_2 = await fetch(url_2)
    const data_2 = await response_2.json()
    this.setState({category: data_2, items: data_1}) 
  } 

  handleChange= (e) => {
    this.setState({ selectedType: e.target.value })
  }
  
  render(){

    return (
      <>
        <div className="container border mt-5 bg-light">
          <div className="row  justify-content-center m-3">
            <h4>Product Category</h4>
              <select className="ml-2" onChange={this.handleChange}>
              <option>Select</option>
              {this.state.category.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
            <ProductList category={this.state.category} products={this.state.items} selectedType={this.state.selectedType}/>
          </div>
            
        </div>
      </>
    );
  }
}
export default Home;