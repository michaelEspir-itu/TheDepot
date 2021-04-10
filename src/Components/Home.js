import React from 'react';
import Carousel from'react-bootstrap/Carousel';
import tesla from '../images/tesla.jpeg';
import lexus from '../images/lexus.jpeg';
import benz from '../images/benz.jpeg';
import { Container } from 'react-bootstrap';

// i added a carousel to make a grand entrance but i am having problems
// modifying the size of the images to make it even and not blurry.
// i want to make it like a car website.
export const Home = () => {
    return (
       <Container> 
    <Carousel fade>
  <Carousel.Item interval={2000}>
    <img
      
      className="d-block w-100"
      src={tesla}
      alt="Tesla slide"
    />
    <Carousel.Caption>
      <h3>The Tesla</h3>
      <p>With the longest range and quickest acceleration of any electric
          vehicle in production, Model S is the highest performing sedan ever built.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={lexus}
      alt="Lexus slide"
    />

    <Carousel.Caption>
      <h3> The Lexus Rx 350</h3>
      <p>The Most Luxurious SUV that hit the road!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={benz}
      alt="Mercedez Benz slide"
    />

    <Carousel.Caption>
      <h3> The Mercedes Benz</h3>
      <p>The Comfort of driving made reality.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Container>
    );
}

export default Home;