import GistsView from "./GistsView";
import React, {useEffect, useState} from 'react';

function DetailedGistView(){

    const [state,setState] = useState("")

    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/grodtron/4535967/raw/432a09e187bf49c2c8f121bf7d4d1937055369b2/range.sql").then((r)=>{r.text().then(d=>setState(d))})
        // fetch('https://gist.githubusercontent.com/grodtron/4535967/raw/432a09e187bf49c2c8f121bf7d4d1937055369b2/range.sql')
        //     .then((response) => response.json())
        //     .then((response) => {
        //         // now fetch the text
        //         fetch(response.url)
        //             .then(response2 => response2.text())
        //             .then(response2 => {
        //                 setState(response2)
        //             })
        //     })
    },[])

    return(
        <div>
            {state}
        </div>
    );
}
export default DetailedGistView;
