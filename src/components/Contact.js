const Contact = () => {
    return (
        <div>
            <h2>Contact us for further assistance..</h2>
            <form className="m-2 p-2">
                <input className="border-2 border-spacing-2 m-2 p-2" placeholder="Name"/>
                <input className="border-2 border-spacing-2 m-2 p-2" placeholder="Message..."/>
                <button className="bg-slate-100 border-spacing-2 m-2 p-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact