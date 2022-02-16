import React from "react";

export default props => {
    return(
        <React.Fragment>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </React.Fragment>
    )
}