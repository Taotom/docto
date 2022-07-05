import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './results.css';

const API_URL = "http://localhost:5000";

function Results(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(API_URL + "/drugs?name=" + props.drug).then((res) => {
            setData(res.data);
        }).catch((err) => {
            setError(err.response.data);
        });
    }, [props.drug]);

    return (
        <div className='docto__results'>
            <h1>{props.drug}</h1>
                {error !== "" && (
                    <h3>{error}</h3>   
                )}

                {data === []  && (
                    <h1 className='watting'>...</h1>
                )}

                {data !== [] && (
                    <div className='docto__results_list scroll4'>
                        {
                            data.map(elt =>
                                <div className='docto__results_list_item'>
                                    <img src={elt.img} className='docto__results_list_item-image' alt='Product'/>
                                    <div className='docto__results_list_item_info'>
                                        <h2>{elt.name}</h2>
                                        <p>{elt.description}</p>
                                    </div>
                                </div>
                            )
                        }                
                    </div>
                )}            
        </div>
    );
}

export default Results