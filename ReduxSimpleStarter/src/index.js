/**
 * @Author CB
 */
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//Create a new component, this component should produce some HTML 

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


//Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));