function Question({element}){
    const { title, info} = element;
    return(
        
        <>
        <div className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn"></button>
            </header>
            <p>{info}</p>
        </div>
        </>
    )

}
export default Question;