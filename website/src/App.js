import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { Results } from './components';

import {ReactComponent as BarcodeLogo} from './assets/barcode.svg';
import {ReactComponent as SearchBarLogo} from './assets/searchbar.svg';
import {ReactComponent as ArrowLogo} from './assets/arrow.svg';
import {ReactComponent as ReturnLogo} from './assets/return.svg';
import {ReactComponent as SearchLogo} from './assets/search.svg';
import UK_Flag from './assets/UK.jpg';
import FR_Flag from './assets/FR.jpg';

import { fr_layout, en_layout } from './components/keyboard';

import './App.css';
import 'react-simple-keyboard/build/css/index.css';

const keyboardLayout = [en_layout, fr_layout];
const language = [UK_Flag, FR_Flag];
const UK = 0;
const FR = 1;

const HOME = 0;
const BARCODE = 1;
const SEARCH = 2;
const RESULTS = 3;

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState(UK);
  const [toggleList, setToggleList] = useState(false);
  const [state, setState] = useState(HOME);
  const [searchedDrug, setSearchedDrug] = useState("");

  const changeLanguage = (language) => {
    setToggleList(false);
    setCurrentLanguage(language);
  }

  const onChange = (input) => {
    document.querySelector(".docto__home-search_keyboard_search-searchbar").value = input;
    setSearchedDrug(input);
  }

  const goHome = () => {
    setState(HOME);
    setSearchedDrug("");
  }

  const goResults = () => {
    if (searchedDrug !== "") {
      setState(RESULTS);
    }
  }

  return (
    <div>
        <div className='App'>
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

          {state === HOME && (
            <div className='docto__home-action'>
              <BarcodeLogo className='docto__home-action-logo scale-up-center' onClick={() => setState(BARCODE)} />
              <SearchBarLogo className='docto__home-action-logo scale-up-center' onClick={() => setState(SEARCH)} />
            </div>
          )}

          {state === BARCODE && (
            <div className='docto__home-barcode'>
              <BarcodeLogo className='docto__home-barcode-logo scale-up-center' />              
              <ArrowLogo className='docto__home-barcode-logo slide-bottom' />
              <ReturnLogo className="docto__return-logo scale-up-center" onClick={() => goHome()} />
            </div>
          )}

          {state === SEARCH && (
            <div className='docto__home-search'>
              <div className='docto__home-search_keyboard slide-top'>
                <div className='docto__home-search_keyboard_search'>
                  <input className='docto__home-search_keyboard_search-searchbar' type="text" placeholder="Search..." />                
                  <SearchLogo className="docto__home-search_keyboard_search-logo" onClick={() => goResults()} />
                </div>

                <Keyboard className='docto__home-search_keyboard-keyboard' onChange={onChange} {...keyboardLayout[currentLanguage]} />
              </div>

              <ReturnLogo className="docto__return-logo scale-up-center" onClick={() => goHome()} />
            </div>
          )}

          {state === RESULTS && (
            <div className='docto__home-results'>
              <Results drug={searchedDrug} />
              <ReturnLogo className="docto__return-logo scale-up-center" onClick={() => goHome()} />
            </div>
          )}

        </div>
    </div>
  )
}

export default App