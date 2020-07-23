import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.viewsonic.com/library/wp-content/uploads/2019/04/5-new-workplace-design-trends-1.jpg">
        <h1>Employee Directory</h1>
        <h2>Welcome to our Employee Directory! Please type in a name, email address, or phone number to search our cureent employees.  </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <p>
              
            </p>
            <p>

            </p>
            <p>
             
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
