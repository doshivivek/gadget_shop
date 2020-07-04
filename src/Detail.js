import React from 'react'
import { Link } from 'react-router-dom'

import gadget from './gadget.png'

class Detail extends React.Component{

    state = {
        activeItem: []
    }
    
    async componentDidMount(){
        const url = `https://aveosoft-react-assignment.herokuapp.com/products/${this.props.match.params.id}`
        const response = await fetch(url)
        const data = await response.json()
        this.setState({activeItem: data})
    }

    render(){
        return (
           <>
            <div className="m-5">
            <div className="media">
                <img className="align-self-start m-3" src={gadget} alt="gadget" width="300" height="200" ></img>
                <div className="media-body m-3">
                    <div className="m-3"><strong>Name:</strong> {this.state.activeItem.name}</div>
                    <div className="m-3"><strong>Price:</strong> {this.state.activeItem.price}</div>
                    <div className="m-3"><strong>Description:</strong> {this.state.activeItem.description}</div>
                    <Link to="/gadget_shop">
                    <button className="m-3"> ←Back </button>
                    </Link>
                </div>
            </div>
            </div>
           </>
        )
    }
}

export default Detail