import React, { Component } from 'react';

import Input from '../util/Input';
import Button from '../util/Button';
import Image from '../util/Image';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catURL: "",
      isLoaded: false,
      cats: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleNewClick = this.handleNewClick.bind(this);
  }

  componentDidMount() {
    this.fetchCatURL();
  }

  fetchCatURL(query="kevin") {
    fetch(`https://robohash.org/${query}?set=set4`)
      .then(
        (result) => {
          const catURL = result.url;
          console.log(catURL);
          console.log(this.state.cats);
          this.setState({
            isLoaded: true,
            catURL,
            cats: this.state.cats.concat([catURL])
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    
  handleClick(e) {
    console.log(e);
    const input = document.querySelector('.rela-block.text-input');
    const query = input.value;
    this.setState({ isLoaded: false });
    this.fetchCatURL(query);
  }

  handleNewClick(e) {
    this.setState({
      cats: this.state.cats.pop()
    })
  }

  render() {
    const { isLoaded, catURL, cats } = this.state;
    console.log(cats);
    return (
      <div className="landing-container">
        <h1 className="header">robocats</h1>

        <div className="input-container">
          <Input 
            type="text"
            className="rela-block text-input"
            placeholder="enter any text and click Fetch for a cool cat..." 
            />
            <div className="buttons-container">
              <button className="rela-inline" onClick={this.handleClick}>Fetch</button>
              <Button className="rela-inline" onClick={this.handleNewClick.bind(this)}>New</Button>
            </div>
        </div>

        <div className="image-container">
          { !isLoaded && <p>Loading. . .</p> }
          { cats.map(catURL => (
            <Image src={ catURL } alt={ "robocat" }></Image>
          ))}
        </div>

      </div>
    );
  }
}

export default LandingPage;