

export function Rating (props) {

    const numberOfStars = Math.round(props.children);

    let star = "★";

    star = star.repeat(numberOfStars).padEnd(5, "☆")

    return (

        <span>
            {star}
        </span>

    )
}