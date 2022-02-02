import "./index.css"

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
};

export function Random (props) {   
      
    return (

        <div className="rdm">
            <h2> {`Random value between ${props.min} and ${props.max} => ${getRandomInt(props.min, props.max)}`} </h2>
        </div>

    )
};