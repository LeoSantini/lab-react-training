import "./index.css"

export function CreditCard (props) {
    return (

        <div>

            <img src={props.type}/>


            <h3>{props.number}</h3>
            <p>{props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
            <p>{props.bgColor}</p>
            <p>{props.color}</p>
        </div>

    )
};