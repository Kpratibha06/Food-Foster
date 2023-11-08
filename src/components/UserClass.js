import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      git: []
    };
    // console.log("Child constructor")
  }

  async componentDidMount() {
    // console.log("Component DidMount called")
    const data = await fetch("https://api.github.com/users/Kpratibha06")
    const json = await data.json()
    // console.log(json)
    this.setState({git: json} )
  }

  componentDidUpdate(){
    // console.log("Component did update")
  }

  componentWillUnmount(){
    // console.log("Component will unmount")
  }
  render() {

    // console.log("Child render")
    // const { name } = this.props;
    // const { count } = this.state;
    return (
      <div className="flex flex-col items-center bg-green-200 h-screen">
        <img className="w-2/12 m-2 p-1" alt="avatar" src={this.state.git.avatar_url}/>
        <h2 className="w-2/12 text-center m-1 p-1 text-lg font-bold bg-slate-200">Name: {this.state.git.name}</h2>
        <h2 className="w-2/12 text-center m-1 p-1 text-lg font-bold bg-slate-200">UserName: {this.state.git.login}</h2>
        <h2 className="w-2/12 text-center m-1 p-1 text-lg font-bold bg-slate-200">Bio: {this.state.git.bio}</h2>
      </div>
    );
  }
}


/*****
 * 
 * 
 * ----MOUNTING------
 * 
 * Constructor
 * Render
 *    <HTML>
 * Component did Mount
 *   <API Call>
 * Component Update
 * 
 * 
 * *
 
 
 
******/ 






export default UserClass;
