import React, {useState } from 'react';
import './language.css';

import UK_Flag from '../../assets/UK.jpg';
import FR_Flag from '../../assets/FR.jpg';

const language = [UK_Flag, FR_Flag];
const UK = 0;
const FR = 1;

function Language() {    
    const [currentLanguage, setCurrentLanguage] = useState(UK);
    const [toggleList, setToggleList] = useState(false);
    
    const changeLanguage = (language) => {
        setToggleList(false);
        setCurrentLanguage(language);
    }

    return (
        <div className='docto__language'>
            {toggleList && (
                <div className='docto__language-list scale-up-ver-top'>
                    <img className='docto_language-list-flag' src={language[UK]} alt="UK flag" onClick={() => changeLanguage(UK)} />
                    <img className='docto_language-list-flag' src={language[FR]} alt="FR flag" onClick={() => changeLanguage(FR)} />
                </div>
            )}
            {!toggleList && (
                <img className='docto__language-logo scale-up-center' src={language[currentLanguage]} alt="Current flag" onClick={() => setToggleList(true)} />
            )}
        </div>
    )
}

export default Language
