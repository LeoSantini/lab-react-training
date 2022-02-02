export function BoxColor (props) {

    function ColorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
      }
      
      function ConvertRGBtoHex(red, green, blue) {
        return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
    }


    return (

        <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, border: "1px solid black", margin: "20px", padding: "30px", color: "black", textAlign: "center" }}>
            <p>
                RGB({props.r}, {props.g}, {props.b})
            </p>

            <p>
                {ConvertRGBtoHex(props.r, props.g, props.b)}
            </p>
        </div>
    )
};