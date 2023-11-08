import React from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
class About extends React.Component {
  render() {
    return (
      <div>
        {/* <h2>About us page loaded...</h2> */}
        {/* <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div> */}
        <UserClass name={"Hello Pratibha"} />
      </div>
    );
  }
}

export default About;
