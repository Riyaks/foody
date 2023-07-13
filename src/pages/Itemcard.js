import React from "react";
import './Itemcard.css';
import {useCart} from 'react-use-cart';
const Itemcard = (props) =>{
    const {addItem} = useCart();
    return (
        <div className=" col-sm-6 col-md-4 col-lg-3 col-xl-2 mr-4 mb-5 p-0  mt-5   ">
            <div class="card p-0 overflow-hidden h-100 shadow " style={{borderRadius:'17px'} }>
            <img src={props.img} className="ik8 card-img-top img-fluid h-100 mt-0 "style={{borderTopRightRadius:'16px',borderTopLeftRadius:'16px'} }/>
            <div className=" lkj card-body text-center " style={{borderBottomRightRadius:'16px',borderBottomLeftRadius:"16px"} }>
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-title">${props.price}</h5>
                <p class="card-text">{props.desc}</p>
                <button className="btn btn-success" onClick={() =>addItem(props.item)}>Add to Cart</button>
            </div>
        </div>
    </div>
    );
};
export default Itemcard;