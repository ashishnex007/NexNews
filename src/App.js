import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
        <br />
        <br />
        <br />
          <Navbar />
          <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey} key="general" category="general" heading="Top Headlines Today"/>}/>
          <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" category="business" heading="Business Buzz"/>}/>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" category="entertainment" heading="Entertainment News"/>}/>
          <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" category="health" heading="Health News"/>}/>
          <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" category="science" heading="Future is Science"/>}/>
          <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" category="sports" heading="Just Sports"/>}/>
          <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" category="technology" heading="Tech or Nothing"/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
