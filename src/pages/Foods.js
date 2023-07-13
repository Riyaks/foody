import React from 'react'
import Itemcard from './Itemcard';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import './foods.css';
import Data from './Data';
import Data1 from './Data1';
import Data2 from './Data2';
import Data3 from './Data3';
import Data4 from './Data4';
import Data5 from './Data5';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { initialState } from 'react-use-cart';
function Foods() {
	
	const navigate = useNavigate()
	const [logout,setlogout] = useState(false)
	React.useEffect(() =>{
		if(!localStorage.getItem("pwd")) navigate("/Oneone");
	  },[logout]); 
  


 const [filter, setFilter] = useState('');

  const searchText = (event) =>{
	setFilter(event.target.value);
  }
let dataSearch =Data.productData.filter(item =>{
 return Object.keys(item).some(key =>
	item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
})
let dataSearch1 =Data1.productData.filter(item =>{
	return Object.keys(item).some(key =>
	   item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
   })
let dataSearch2 =Data2.productData.filter(item =>{
	return Object.keys(item).some(key =>
	   item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
   })
   let dataSearch3 =Data3.productData.filter(item =>{
	return Object.keys(item).some(key =>
	   item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
   })
let dataSearch4 =Data4.productData.filter(item =>{
	return Object.keys(item).some(key =>
	   item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
   })
let dataSearch5 =Data5.productData.filter(item =>{
	return Object.keys(item).some(key =>
	   item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
   });


  return (
    <>
      <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </head>
        <div class="caroo" >
    
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.freekaamaal.com/store_desc_images/1525866061.png" 
          alt="First slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X400/pages%2F804%2Fimage20190124131811.jpg"
          alt="Second slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://images.freekaamaal.com/store_desc_images/1526293066.jpg" 
          alt="Third slide"
        />
      </Carousel.Item>
	  <Carousel.Item>
        <img
          className="d-block "
          src="https://couponswala.com/blog/wp-content/uploads/2022/09/Food-Combo-Offers-696x392.jpg" 
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
	<section>
    <div class="jumbotron ">
     <div class="row">
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
	<img src="https://images.unsplash.com/photo-1597715469889-dd75fe4a1765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Pizza</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Burgers</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Chicken</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://images.unsplash.com/photo-1605888969139-42cca4308aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG5vb2RsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Noodles</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Rice</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://chefjar.com/wp-content/uploads/2020/01/01-1.jpg" class="imgitm rounded-circle"></img>
			<p class="imgtxt">Kunafa</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg?resize=1200:*" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Browni</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://static.toiimg.com/photo/78237787/78237787.jpg?v=3" class="imgitm rounded-circle"></img>
			<p class="imgtxt">Shakes</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://img.taste.com.au/xi2t8DpL/taste/2016/11/lemon-panna-cotta-with-vodka-blueberry-syrup-92005-1.jpeg" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Desserts</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessRedVelvetCake2_400x400.jpg?v=1632141312" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Cakes</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://www.madhuseverydayindian.com/wp-content/uploads/2021/06/samosa-grilled-cheese-1.jpg" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Sandwitches</p>
		</div>
		<div class="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2">
			<img src="https://m.economictimes.com/thumb/msid-94857105,width-1200,height-900,resizemode-4,imgsize-227384/fish-lead-story-.jpg" class="imgitm1 rounded-circle"></img>
			<p class="imgtxt">Fish</p>
		</div>
	</div>
 </div>


<section className='py-4 container'>
		<div classname="row justify-content-center">
	
<div class="col-12 mb-5">
	<div class="mb-3 col-4 mx-auto text-center" ></div>
<div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={filter} onChange={searchText.bind(this)} />
  <button type="button" class="btn btn-outline-primary" style={{color:"white",backgroundColor:"blue"}}><FaSearch style={{color:"white"}}/></button>
</div>
</div>
</div>
</section>

</section>
    <h1 className='text-center mt-3'>All Items</h1>
	  <section className='py-4 container'>
		<div className='row justify-content-center'>
			{dataSearch.map((item,index)=>{
				return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
				)
			})}
			
		</div>
		</section>
		 <br></br>
	  <section class="bvv" >
		<br></br>
	  <h1 class="text4 ml-3">Popular Dishes</h1>
	  <div className=' row justify-content-center '>
       {dataSearch1.map((item,index)=>{
				return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
				)
			})}
			</div>
	  </section>
	  <br></br>
	  <section className='py-4 container'>
		<div className='row justify-content-center'>
			{dataSearch2.map((item,index)=>{
				return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
				)
			})}
			
		</div>
		</section>
		<div >
			<img className='a123' src="https://www.dealsshutter.com/uploads/offers/1620291771-wrap.JPG"></img>
		</div>
		<br></br>
<section>
	<div class="container ">
		<img class="as1 rounded-circle" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-offer-design-template-bb5b7ed65a6c7bd00152e07952444a40_screen.jpg?ts=1615789425"></img>
		<div className='row justify-content-center'>
			{dataSearch3.map((item,index)=>{
				return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
				)
			})}
			
		</div>
	</div>
</section>
<section>
	<div class="row ">
<div class="cvcv  col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
			<img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/02ef7095700855.5e9dc45a76dfb.png" width={400}></img>
		</div>
		<div className='ml0 row col-8 justify-content-center '>
		
			{dataSearch4.map((item,index)=>{
				return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
				)
			})}
			</div>
		
		</div>	
</section>
<section >
		<div className='row justify-content-center'>
			{dataSearch5.map((item,index)=>{
				return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
				)
			})}
			
		</div>
		</section>
    </>
  )
}

export default Foods

