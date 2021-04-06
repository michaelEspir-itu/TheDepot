import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export const About = () => {
    return (
        <Container>
            <div>
                <h1>About The Depot</h1>
                <div>
                    <p>
                        I loved Cars since I was a kid. I always dreamed of driving
                        a sports car one day and I did when I turned 26. Cars for me
                        is a a machine that must be respected and not taken for granted.
                        That's why for my final project, I want to be able to put on file
                        the cars I want to drive and hopefully buy in the future.
                    </p>
                    These are the list of cars I really like:
                </div>
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Cars</th>
      <th>Model Name</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mercedes Benz</td>
      <td>C Class</td>
      <td>2010</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Lexus</td>
      <td>RX350</td>
      <td>2020</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Tesla</td>
      <td>S Model</td>
      <td>2019</td>
    </tr>
  </tbody>
</Table>
            </div>
        </Container>
    )
}

export default About;