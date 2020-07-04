import React from 'react';
import { Link } from 'react-router-dom';

import gadget from './gadget.png'
class ProductList extends React.Component{
    render(){
        return (
        <>
           <div className="row m-3 justify-content-center">
              {this.props.products
                .filter(item => item.categoryId === parseInt(this.props.selectedType))
                .map(item => (
                <div className="col-3 m-1 p-3 border" key={item.id}>
                    <div className="text-center">
                    <img className="mb-3" src={gadget} alt="gadget" width="150" height="100" ></img>
                    </div>
                    <div className="text-center">
                        <Link to={{ 
                            pathname: `gadget_shop/detail/${item.id}` }}>
                            {item.name}
                        </Link>
                    </div>
                    <div className="text-center">{item.model}</div> 
                    <div className="text-center">Price:{item.price}</div> 
                  </div>
              ))}
            </div> 
        </>
        )
    }
}

export default ProductList;
