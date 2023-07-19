import React from 'react'
import './contacts.css'
import { FaAddressCard, FaLandmark, FaPhone, FaStar} from 'react-icons/fa';
import Ending from './Ending';
const colors = {
	yellow: "#fffb00",
	white: "#ffffff"
}

function Contacts() {

const stars = Array(5).fill(0);
const[currentValue, setCurrentValue] = React.useState(0);
const [hoverValue, setHoverValue] = React.useState(undefined);
const handleClick = value => {
	setCurrentValue(value)
};
const handleMouseOver = value =>{
	setHoverValue(value)
}
 const handleMouseLeave = () =>{
	setHoverValue(undefined)
 }
 const suggestions = () =>{
	alert("Thanks for your support.")
 }
 const booking = () =>{
	alert("Your table has been booked.Have a good day.")
 }

  return (
	<>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<body >
	<div class=" card img-fluid" style={{border:"none"}} >
    <img class="imgscreen card-img-top" src="https://t4.ftcdn.net/jpg/04/81/72/77/360_F_481727770_1u2ylNpie8WRosMVbv1COXDnnEK6ofwh.jpg" style={{marginTop:"1px"}}></img>
    <div class="card-img-overlay">

    </div>
  </div>
		<div >
	<div class="op0 container " >
		{/* <div class=" container" >
    <div class="row">
      <div class="col-md-5">
        <img src="https://4.bp.blogspot.com/-lnM6Szj8rI8/WWSREgSjjFI/AAAAAAAAAHI/OLneHeewSDcC3xfdW4n1yyHwNkXa9ja7ACLcBGAs/s1600/book-a-table-in-restaurant-online.jpg" class="img-thumbnail mt-3 img-fluid"
          style={{borderRadius: "17px"}}/>
      </div>
      <div class="col-md-2 ">
		<center>
        <form style={{marginTop: "30px"}}>
          <table >
            <tr>
                <th ><input class="op00" type="text" placeholder="name"></input></th>
                <th ><input class="op00" type="text" placeholder="email"></input></th>
              </tr>
         
              <tr>
                <th ><input class="op00" type="text" placeholder="number"></input></th>
                <th ><input class="op00" type="text" placeholder="food name"></input></th>
              </tr>
       
          </table>
          <textarea name="comment" cols="51" rows="4" placeholder="special requirements..."
            style={{borderRadius:" 6px",marginLeft:"10px"}}></textarea>
          <br></br>
          <button class="btn bg-dark mt-3" style={{color:" white", marginBottom: "30px",marginLeft:"30px"}}>Book Now</button>
        </form>
		</center>
      </div>
    </div>
  </div> */}
  	<div>
	<div className='row'>
		<div className='col-12 col-md-6' style={{marginTop:"90px"}}>
			<center>
		<form style={{marginTop: "30px"}}>
          <table >
            <tr>
                <th ><input class="op00" type="text" placeholder="name"></input></th>
                <th ><input class="op00" type="text" placeholder="email"></input></th>
              </tr>
         
              <tr>
                <th ><input class="op00" type="text" placeholder="number"></input></th>
                <th ><input class="op00" type="text" placeholder="food name"></input></th>
              </tr>
       
          </table>
          <textarea name="comment" cols="51" rows="4" placeholder="special requirements..."
            style={{borderRadius:" 6px",marginLeft:"10px"}}></textarea>
          <br></br>
          <button class="btn bg-dark " style={{color:" white", marginBottom: "30px",marginTop:"30px",float:"left",marginLeft:"80px"}}>Book Now</button>
        </form></center></div>
	<div className='col-12 col-md-6' style={{marginBottom:"150px"}} >
		<center>
	<img src='https://4.bp.blogspot.com/-lnM6Szj8rI8/WWSREgSjjFI/AAAAAAAAAHI/OLneHeewSDcC3xfdW4n1yyHwNkXa9ja7ACLcBGAs/s1600/book-a-table-in-restaurant-online.jpg' class="img-thumbnail  img-fluid"  style={{marginTop:"80px",borderRadius: "17px"}}></img></center></div>
</div>
</div>

		</div>
		<br></br>
		<section>
			<center>
			<div class="container" style={{maxWidth:"95%"}}>
			<div class=" row " style={{marginTop:'150px'} }>
				<div class="col-12 col-md-6" >
				<h1 style={{color:'white',fontFamily:'times new roman',fontSize:'8vw', textShadow:'6px 3px 5px black'}}>Any suggestions<span>?</span></h1>
			     </div>
			   <div class="col-12 col-md-6">
				<textarea class="ml-2 mt-5 " name="comment" cols="51" rows="6" placeholder='suggestions here...' style={{borderRadius:'6px',maxWidth:"70%"} }></textarea>
					 <div class="ml-2 oop00"  style={{maxWidth:"70%"} }>
					{stars.map((_, index) => {
						return (
							<FaStar key={index} style={{ cursor:"pointer"}}
							color={(hoverValue || currentValue) > index ? colors.yellow : colors.white}
							onClick={() => handleClick(index + 1)}/>
						)
					})}
					<button class="btn lol00" style={{backgroundColor:"red"} } onClick={suggestions}>submit</button>
					</div>
					
				
					</div>
					</div>
					</div>
					</center>
					</section>
<br></br><br></br>
<section>
<div class="container" style={{color:"white",marginTop:"100px"}} >
	<div class="row cvbn"  >
    <div class="card col-9 col-md-6 col-lg-3  mb-3 mr-3" style={{padding:'0',borderRadius:'17px'} }>
      <div class="card-body dfg4   text-center">
		<FaLandmark/>
        <p class="card-text mb-3 mt-3">fhjklk</p>
		<p>dfghgjgj</p>
      </div>
    </div>
    <div class="card col-9 col-md-6 col-lg-3 mr-3 mb-3" style={{padding:'0',borderRadius:'17px'} }>
      <div class="card-body dfg4  text-center" >
		<FaAddressCard/>
        <p class="card-text mb-3 mt-3">rujhg3df@gmail.com</p>
		<p>fgghjbjb@gmail.com</p>
      </div>
    </div>
    <div class="card col-9 col-md-6 col-lg-3  mr-3 mb-3" style={{padding:'0',borderRadius:'17px'} }>
      <div class="card-body dfg4  text-center">
		<FaPhone/>
        <p class="card-text mt-3 mb-3">456789005</p>
		<p>243567889</p>
      </div>
    </div>
	</div></div>
</section>
<br></br><br></br>
	<section style={{marginBottom:"70px"}}>
		</section>	
		<section>
		<Ending/></section>			
		</div>
			
</body>
	</>
  )
}

export default Contacts

