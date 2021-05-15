export const getTypeStyle = (type, isInGrid) => {
    let backgroundColor = "";
    switch (type) {
        case "grass":
        backgroundColor = "#9bcc50";
        break;
        case "poison":
        backgroundColor = "#b97fc9";
        break;
        case "fire":
        backgroundColor = "#fd7d24";
        break;
        case "flying":
        backgroundColor = "#3dc7ef";
        break;
        case "water":
        backgroundColor = "#4592c4";
        break;
        case "bug":
        backgroundColor = "#729f3f";
        break;
        case "normal":
        backgroundColor = "#a4acaf";
        break;
        case "electric":
        backgroundColor = "#eed535";
        break;
        case "ground":
        backgroundColor = "#ab9842";
        break;
        case "fairy":
        backgroundColor = "#fdb9e9";
        break;
        case "fighting":
        backgroundColor = "#d56723";
        break;
        case "psychic":
        backgroundColor = "#f366b9";
        break;
        case "rock":
        backgroundColor = "#a38c21";
        break;
        case "steel":
        backgroundColor = "#9eb7b8";
        break;
        case "ghost":
        backgroundColor = "#7b62a3";
        break;
        case "ice":
        backgroundColor = "#51c4e7";
        break;
        case "dragon":
        backgroundColor = "#f16e57";
        break;
        default:
        backgroundColor = "#000";
        break;
    }
    if(isInGrid){
        return {
            border: '2px solid',
            borderColor: backgroundColor,
            backgroundColor: shade(backgroundColor, 0.731)
        };
    }
    else{
        return {
            backgroundColor,
            color: "#FFF",
            margin: "5px",
            padding: '2px 10px 2px 10px',
            alignText: 'center',
            borderRadius: '10%',
        };
    }


    //Color linear interpolation with white (Returns a lightened color based on the color passed as argument)
    function hex2(c) {
        c = Math.round(c);
        if (c < 0) c = 0;
        if (c > 255) c = 255;
    
        var s = c.toString(16);
        if (s.length < 2) s = "0" + s;
    
        return s;
    }
    
    function color(r, g, b) {
        return "#" + hex2(r) + hex2(g) + hex2(b);
    }
    
    function shade(col, light) {
    
        //REMIND --->   -1 < light < 1
    
        var r = parseInt(col.substr(1, 2), 16);
        var g = parseInt(col.substr(3, 2), 16);
        var b = parseInt(col.substr(5, 2), 16);
    
        if (light < 0) {
            r = (1 + light) * r;
            g = (1 + light) * g;
            b = (1 + light) * b;
        } else {
            r = (1 - light) * r + light * 255;
            g = (1 - light) * g + light * 255;
            b = (1 - light) * b + light * 255;
        }
    
        return color(r, g, b);
    }
    
};