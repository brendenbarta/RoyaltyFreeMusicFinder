import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Button, InputGroup, FormControl, Card, Row, ButtonGroup, Table } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: " ",
      output: [],
    }
  }




  generateOutput = (input) => {
    //Take a input and apply model and update state of output
    input ? this.setState({ output: "LIST OF SONGS" }) : alert("Please Enter a Valid input")
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({[name]:value})
  }
  

  render (){
    const { input, output } = this.state
    const containerStyle  = { display:"flex", justifyContent:"center", marginTop:"4rem" }
    const columnStyle  = { display:"flex", flexDirection:"column", justifyContent:"center",}
    const styling = { marginBottom:"2rem", justifyContent:"center" }
    const styling2 = {  marginBottom:"2rem", alignSelf: 'center' }
  

    return (
      <Container style={containerStyle}>
          <Col lg={8} style={columnStyle}>
              <h1 style={styling2}>Royalty Free Music Finder</h1>
                <InputGroup style={styling}>
                  <FormControl as="textarea" aria-label="With textarea" placeholder="Enter an Emotion, feeling or mood to search for royalty free music." name="input" onChange={(e) => this.handleChange(e)} value={input}/>
                </InputGroup>

                {<Button variant='primary' onClick={() => this.generateOutput(input)} style={styling}>Generate output</Button>}
                {output &&
                <div className="d-flex flex-column" style={styling}>
                  <Card>
                    <Card.Body>{output}</Card.Body>
                  </Card>
                </div>}
          <div className="d-flex flex-column" style={styling}>
            <ButtonGroup>
              <Button variant='danger' onClick={() => alert('Clicked')(0)}>Terrible!</Button>
              <Button variant='warning' onClick={() => alert('Clicked')(1)}>Fail</Button>
              <Button variant='primary' onClick={() => alert('Clicked')(2)}>Pass</Button>
              <Button variant='success' onClick={() => alert('Clicked')(3)}>Great!</Button>
            </ButtonGroup>
          </div>  


              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </Table>
            </Col>
      </Container>
    );
  }
}

export default App;
