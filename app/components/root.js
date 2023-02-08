import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import allcandies from "./allcandies";

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <Link to="/">home</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Router>
          <Route path="/api/candies" component={allcandies} />
        </Router>
      </main>
    </div>
  );
};

export default Root;
