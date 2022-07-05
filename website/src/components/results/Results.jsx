import React, { useState } from 'react';
import axios from 'axios';
import './results.css';

const API_URL = "localhost:5000";

function Results(props) {
    const [data, setData] = useState([
        {name:"Doliprane",description:"Les maux de tête",composant:["paracétamol","diacideduréméthyle","etc etc"],img:"https://www.rockethealth.shop/wp-content/uploads/2020/12/Dioclear.jpg",country:"FR"},
        {name:"Spasfon",description:"Les maux de ventre",composant:["spasfyne","dithyle"],img:"https://cdn.shop-pharmacie.fr/images/smecta-3-g-orange-vanille-sachet-s-F10000486-p12.jpg",country:"EN"},
        {name:"Spasfon",description:"Les maux de ventre",composant:["spasfyne","dithyle"],img:"https://cdn.shop-pharmacie.fr/images/smecta-3-g-orange-vanille-sachet-s-F10000486-p12.jpg",country:"EN"}
    ]);

    /*axios.get(API_URL + "/drugs?name=" + props.drug).then(res => {
        setData(JSON.parse(res));
    });*/

    return (
        <div className='docto__results'>
            <h1>{props.drug}</h1>
            <div className='docto__results_list scroll4'>
                {data && data.map(elt =>
                    <div className='docto__results_list_item'>
                        <img src={elt.img} className='docto__results_list_item-image'/>
                        <div className='docto__results_list_item_info'>
                            <h2>{elt.name}</h2>
                            <p>{elt.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Results