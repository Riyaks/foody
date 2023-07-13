import React from 'react'
import { useCart} from "react-use-cart";
import './cart.css';
function Cart() {

    const placeorder = () =>{
        alert("your order has been placed.")
     }

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <img class="maximg" src="./images/cart.avif" style={{marginTop:"150px",display:"block", marginLeft:"auto",marginRight:"auto",maxWidth:"490px"}}></img>
    return(
        <section className='py-4 container' >
            <div className='justify-content-center'>
                
                <div className='col-12 arty'>
                    <h5>Cart ({totalUniqueItems}) total Items:({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {
                                items.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>
                                                <img  src={item.img} style={{height:'6rem', width:'8rem',borderRadius:'14px'} }  />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>Quantity ({item.quantity})</td>
                                            <td >
                                                <button className='btn btn-info ml-2 '
                                                onClick={() => updateItemQuantity(item.id,item.quantity -1 )} style={{marginRight:"4px"}}>-</button>
                                                 <button className='btn btn-info ml-2'
                                                onClick={() => updateItemQuantity(item.id,item.quantity +1 )}  style={{marginRight:"4px"}}>+</button>
                                                <button className='btn btn-danger ml-2 remove'  onClick={() => removeItem(item.id)} >Remove Item</button>
                                            </td>
                                          </tr>
                                        
                                    )
                                })
                            }
                        </tbody>
                    </table>
               </div>
         <div className='col-auto ms-auto mt-3'>
            <h2>Total Price: $ {cartTotal}</h2>
        </div>
         <div className='col-auto '>
            <button className='btn btn-danger ml-2 m-2' onClick={() =>emptyCart()}>Clear Cart</button>
            <button className='btn btn-primary m-2' onClick={placeorder}>Place Order</button>
         </div>
            </div>
    
           </section>
           
    );


  
};

export default Cart
