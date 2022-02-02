import "./index.css"

export function IdCard (props) {
    return (

        <div className="card">           

            <img src={props.picture} alt={props.alt}/>
            
            <div>
                <h3>
                    lastName: {props.lastName}
                </h3>

                
                <h3>
                    firstName: {props.firstName}
                </h3>

                <h3>
                    gender: {props.gender}
                </h3>

                <h3>
                    height: {props.height}
                </h3>

                <h3>
                    birth: {props.birth}
                </h3>
            </div>

        </div>
        
    )
};