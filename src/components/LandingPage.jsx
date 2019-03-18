import React, { Component } from 'react';

import Input from './Input';
import Image from './Image';

class LandingPage extends Component {
  state = {
    catURL: "",
    isLoaded: false,
    error: null
  }

  componentDidMount() {
    this.fetchCatURL();
  }

  fetchCatURL(query="kevin") {
    fetch(`https://robohash.org/${query}?set=set4`)
      .then(
        (result) => {
          const catURL = result.url;
          this.setState({
            isLoaded: true,
            catURL
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
    const input = document.querySelector('.rela-block.text-input');
    const query = input.value;
    this.fetchCatURL(query);
  }

  render() {
    const { error, isLoaded, catURL } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="landing-container">
          <h1 className="header">robocats</h1>
          <div className="input-container">
            <Input 
              className="rela-block text-input"
              type="text"
              placeholder="enter any text and click Fetch for a cool cat..." 
              />
              <div className="buttons-container">
                <button className="rela-inline" onClick={this.handleClick.bind(this)}>Fetch</button>
              </div>
          </div>
          <div className="image-container">
            <Image src={ catURL } alt="robocat"></Image>
          </div>
          { !isLoaded && <h3>Loading. . .</h3> }
        </div>
      );
    }
  }
}

export default LandingPage;