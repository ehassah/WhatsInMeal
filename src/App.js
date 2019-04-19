import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import RecipeCard from "./components/RecipeCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

//pages
import SignInForm from "./Pages/SignInForm";
import SignUpForm from "./Pages/SignUpForm";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: {}
    };
  }

  componentDidMount() {
    const URL = "https://www.themealdb.com/api/json/v1/1/latest.php";

    axios
      .get(URL)
      .then(res => {
        const meal = res.data.meals;
        if (typeof meal === "object") {
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var data = this.state.meal;
    return (
      // <AppContainer className="App">
      //   {/* <Router>
      //     <Route path = "/signin" component={SignInForm}/>
      //   </Router> */}
      //   {data.length > 0 && <RecipeCard meals={data} />}
      // </AppContainer>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

const AppContainer = styled.div`
  background: #fff;
  padding: 2em;
`;
