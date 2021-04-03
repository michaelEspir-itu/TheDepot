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
                <Table stripped border hover bordred>
                    <thead>

                        <tr>
                            <th>Mercedes Benz</th>
                            <th>Lexus</th>
                            
                            
                        </tr>

                    </thead>
                    <tbody>

                        <tr>
                            <td>C class</td>
                            <td>S class</td>
                        </tr>

                        <tr>
                            <td>RX350</td>
                            <td>GX450</td>
                        </tr>

                        

                      

                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default About;