import { useState, useEffect } from "react";
const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(0);
    const [gitData, setGitData] = useState(null)
    useEffect(()=>{fetchData()},[])
    const  fetchData = async () => {
        const data = await fetch("https://api.github.com/users/Kpratibha06")
        const json = await data.json()
        // console.log(json.name)
        setGitData(json)
    }
    return(
       
        <div>
            <h2> Name:{gitData.name} </h2>
            <img alt="gitprofile" src={gitData.avatar_url}/>
            <h3>Count: {count}</h3>
            <h3>Count: {count2}</h3>
        </div>
    )
}
export default User;