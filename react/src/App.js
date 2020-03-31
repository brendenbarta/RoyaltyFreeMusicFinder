import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Col, Button, InputGroup, FormControl, Card, ButtonGroup, Table } from 'react-bootstrap';
// const {
//   Stitch,
//   RemoteMongoClient,
//   AnonymousCredential
// } = require('mongodb-stitch-browser-sdk');

// const client = Stitch.initializeDefaultAppClient('rfmf-stitch-app-wcgnl');

// const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('rfmfdb');

// client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
//   db.collection('rfmfcollection'turetrytuyry).updateOne({ owner_id: client.auth.user.id }, { $set: { number: 42 } }, { upsert: true })
// ).then(() =>
//   db.collection('rfmfcollection').find({ owner_id: client.auth.user.id }, { limit: 100 }).asArray()
// ).then(docs => {
//   console.log("Found docs", docs)
//   console.log("[MongoDB Stitch] Connected to Stitch")
// }).catch(err => {
//   console.error(err)
// });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: [],
    }
  }




  generateOutput = event => {
    //Take a input and apply model and update state of output
    //input ? this.setState({ output: "taco" }) : alert("Please Enter a Valid input")
    event.preventDefault();

    const { input } = this.state;

    fetch(`http://localhost:5000/music/${input}`)
      .then(res => res.json())
      .then(output => {
        output = output.splice(0, 20);
        this.setState({ output, notFound: "" });
        console.log("output", output)
        if (output.length === 0) {
          this.setState({ notFound: "Invalid search Query" })
        }
      })
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }


  render() {
    const { input, output, notFound } = this.state
    const containerStyle = { display: "flex", justifyContent: "center", marginTop: "4rem" }
    const columnStyle = { display: "flex", flexDirection: "column", justifyContent: "center", }
    const styling = { marginBottom: "2rem", justifyContent: "center" }
    const styling2 = { marginBottom: "2rem", alignSelf: 'center', FontFamily: 'AvenirNextCondensed-Bold' }



    return (
      <div>
        <Container style={containerStyle}>
          <Col lg={12} style={columnStyle}>
            <h1 style={styling2}>Royalty Free Music Finder</h1>
            <InputGroup style={styling}>
              <FormControl as="textarea" aria-label="With textarea" placeholder="Enter an Emotion, feeling or mood to search for royalty free music." name="input" onChange={(e) => this.handleChange(e)} value={input} />
            </InputGroup>

            <Button variant='primary' onClick={this.generateOutput} style={styling}>search</Button>
            {/* {output &&
            <div className="d-flex flex-column" style={styling}>
              <Card>
                <Card.Body>{output}</Card.Body>
              </Card>
            </div>} */}



          </Col>
        </Container>
        <div className="output">
          {output.map((m, i) => {
            const { url, title, producer, description } = m;
            return (
              <div key={i}>
                <h2>{title}</h2>
                <h4>{producer}</h4>
                <p>{description}</p>
                <a href={url}>Url</a>
              </div>
            )
          })}
        </div>
        <div className="error"><h4>{notFound}</h4></div>
      </div>
    );
  }
}

export default App;
