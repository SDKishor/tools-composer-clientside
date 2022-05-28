import React from "react";
import "./blogs.css";

export default function Blogs() {
  return (
    <div className="blogPage">
      <div className="questionContainer">
        <h3 className="question">
          Q1: How will you improve the performance of a React Application?
        </h3>
        <p className="answer">
          Not using excessive css animation <br />
          Non optimized Image
          <br />
          make sure that components receive only necessary props <br />
          Memoizing React components to prevent unnecessary re-renders.
        </p>
        <h3 className="question">
          Q2: What are the different ways to manage a state in a React
          application?
        </h3>
        <div className="answer">
          there are four way to manage react app <br />
          1. Local state <br />
          2. Global state <br />
          3. Server state <br />
          4. URL state <br />
        </div>
        <h3 className="question">
          Q3: How does prototypical inheritance work?
        </h3>
        <div className="answer">
          it is a features that is used to get method and properties of an
          object to another object
        </div>
        <h3 className="question">
          Q4: Why you do not set the state directly in React?
        </h3>
        <div className="answer">
          whenever a component is rendering it always renders all the components
          that are in its tree. React won’t be able to see a change of the state
          and so it won’t be reflected in the original DOM until we reload.
          Also, mutating the state directly can lead to odd bugs and components
          that are hard to optimize.
        </div>

        <h3 className="question">
          Q5: You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h3>
        <div className="answer">
          {`By using array.find(function(arr,){
            if(arr.name == "name")
            return true
          })`}
        </div>

        <h3 className="question">
          Q5: What is a unit test? Why should write unit tests?
        </h3>
        <div className="answer">
          unit test is a automated test run by devloper to ensure the app meets
          it design and behave as intented. it is used in test phase.
        </div>
      </div>
    </div>
  );
}
