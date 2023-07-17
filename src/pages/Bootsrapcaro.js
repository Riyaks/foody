import React from 'react'
import './Carou.css'
import Carousel from 'react-bootstrap/Carousel';
function Bootsrapcaro() {
  return (
    <>
    {/* <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </head> */}
    <div class="jumbotron">
        <div class="caroo container " >
    
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000" 
          alt="First slide" 
        />
        <Carousel.Caption>
          <h1 style={{fontFamily:'times new roman',fontSize:'70px'} }>Hungry?</h1>
          <h3>Good,We are here to serve you</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-221028-how-to-roast-a-turkey-317-horizontal-rv-web-1667860202.jpg"
          alt="Second slide" 
        />

        <Carousel.Caption>
          <h1 style={{fontFamily:'times new roman',fontSize:'70px'} }>Fresh delivery</h1>
          <h3>Always fresh food and works</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://www.verywellhealth.com/thmb/AhIvvzBu51aydxREKDdQ12-LPgc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/why-does-spicy-food-cause-diarrhea-1088717-primary-recirc2-b725688228b54925897c53d73f88dde5.jpg" 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 style={{fontFamily:'times new roman',fontSize:'70px'} }>Order the Finest</h1>
          <h3>
            Takeaway Food to Your Door
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </>
  )
}

export default Bootsrapcaro
