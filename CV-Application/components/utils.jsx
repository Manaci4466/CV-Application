
function Input({label,type,}) {
    const id = label;
    return (
        <fieldset className="field">
            <label className="label" htmlFor={id.split(' ').join('-')}>{label}</label>
            <input id={id.split(' ').join('-')} type={type} />
        </fieldset>
    );
}

/** PER SECTION **/
function Card({children,headingText,}){

    return(
        <div>
            <h1>{headingText}</h1>
            <form onSubmit={(e) => {e.preventDefault()}} action="">
                <div>{children}</div>
                <fieldset className="action-buttons">
                    <button className="delete">Delete</button>
                    <button className="add">Add</button>
                </fieldset>
            </form>
        </div>
    );
}

function PrintFieldCard({headingText,className,children}) {

    return (
        <section className="print-field-card">
            <h2>{headingText}</h2>
            <div className={className}>
                {children}
            </div>
        </section>
    );
}
function PrintField({label,fieldText}) {

    return (
        <article>
            <p>{`${label}:`}<br></br>{`${fieldText}`}</p>
        </article>
    );
}



export{Card,Input,PrintFieldCard,PrintField}