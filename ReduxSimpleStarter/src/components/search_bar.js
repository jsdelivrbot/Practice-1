import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// }

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
            <input onChange={event => this.setState({ term: event.target.value })} />
            {/* Value of the input: { this.state.term } */}
            </div>
        );
    }

    // onInputChange(evente) {
    //     console.log(evente.target.value);
    // }
}
export default SearchBar;