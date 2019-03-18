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
    }

    this.handleClick = this.handleClick.bind(this);
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
    this.setState({ isLoaded: false });
    this.fetchCatURL(query);
  }

  render() {
    const { isLoaded, catURL } = this.state;
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
              <Button className="rela-inline" onClick={this.handleClick.bind(this)}>Fetch</Button>
            </div>
        </div>

        <div className="image-container">
          { !isLoaded && <p>Loading. . .</p> }
          <Image src={ catURL } alt="robocat"></Image>
        </div>

      </div>
    );
  }
}

export default LandingPage;