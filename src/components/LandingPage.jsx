import React, { Component } from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      isLoaded: false,
      cats: [],
    }

    this.update = this.update.bind(this);
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
            cats: this.state.cats.concat([catURL])
          });
        },
        (error) => {
          this.setState({
            isLoaded: true
          });
        }
      );
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleClick(e) {
    const { inputVal } = this.state;
    this.setState({  
      isLoaded: false 
    });
    const query = inputVal === "" ? "kevin" : inputVal;
    this.fetchCatURL(query);
  }

  renderCats() {
    return (this.state.cats.map((catURL, i) => {
      return (
        <img key={i} src={catURL} alt="robocat" />
      )}
    ))
  }

  render() {
    const { inputVal, isLoaded } = this.state;
    return (
      <div className="landing-container">
        <h1 className="header">robocats</h1>
        <div className="input-container">
          <input 
            type="text"
            value={inputVal}
            className="rela-block text-input"
            placeholder="enter any text and click Fetch for a cool cat..." 
            onChange={this.update('inputVal')}
            />
            <div className="buttons-container">
              <button className="rela-inline" onClick={this.handleClick}>Fetch</button>
            </div>
        </div>
        <div className="image-container">
          { !isLoaded && <p>Loading. . .</p>}
          { this.renderCats() }
        </div>

      </div>
    );
  }
}

export default LandingPage;