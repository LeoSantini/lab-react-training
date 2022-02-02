import "./index.css"

export function Greetings (props) {

    let lang = ""

    if (props.lang === "de") {
        lang = "Hallo"
    } else if (props.lang === "fr") {
        lang = "Bonjour"
    };

    return (

        <div className="greetings">

            <h2>{lang} {props.children}</h2>

        </div>
    )
};