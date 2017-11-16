import React from 'react';

const ValidationComponent =(props)=>{
    let validationMessage=<p>Text long enough</p>;

    if(props.userInputLength<=5){
        validationMessage=<p>Text too short!!</p>;
    }

    return(
        <div>
            <p>Length:{props.userInputLength}</p>
           {validationMessage}
        </div>
    )
};
export default ValidationComponent;