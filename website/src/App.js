import React, {useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { Language } from './components';
import {ReactComponent as BarcodeLogo} from './assets/barcode.svg';
import {ReactComponent as SearchBarLogo} from './assets/searchbar.svg';
import {ReactComponent as ArrowLogo} from './assets/arrow.svg';
import {ReactComponent as ReturnLogo} from './assets/return.svg';
import {ReactComponent as SearchLogo} from './assets/search.svg';

import './App.css';
import 'react-simple-keyboard/build/css/index.css';

const HOME = 0;
const BARCODE = 1;
const SEARCH = 2;
const RESULTS = 3;

const App = () => {
  const [state, setState] = useState(HOME);
    const [searchedDrug, setSearchedDrug] = useState("");

  const onChange = (input) => {
    document.querySelector(".docto__home-search_keyboard_search-searchbar").value = input;
    setSearchedDrug(input);
  }

  return (
    <div>
        <div className='App'>
          <Language />

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
              <ReturnLogo className="docto__return-logo scale-up-center" onClick={() => setState(HOME)} />
            </div>
          )}

          {state === SEARCH && (
            <div className='docto__home-search'>
              <div className='docto__home-search_keyboard slide-top'>
                <div className='docto__home-search_keyboard_search'>
                  <input className='docto__home-search_keyboard_search-searchbar' type="text" placeholder="Search..." />                
                  <SearchLogo className="docto__home-search_keyboard_search-logo" onClick={() => setState(RESULTS)} />
                </div>

                <Keyboard className='docto__home-search_keyboard-keyboard' onChange={onChange} />
              </div>

              <ReturnLogo className="docto__return-logo scale-up-center" onClick={() => setState(HOME)} />
            </div>
          )}

          {state === RESULTS && (
            <div className='docto__home-search'>
              <p>{searchedDrug}</p>
              <ReturnLogo className="docto__return-logo scale-up-center" onClick={() => setState(HOME)} />
            </div>
          )}

        </div>
    </div>
  )
}

export default App