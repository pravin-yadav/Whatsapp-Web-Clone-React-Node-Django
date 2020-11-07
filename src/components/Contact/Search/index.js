import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {
    render() {
        return (
            <div className="contact--search">
                <div className="contact-search--input">
                    <SearchIcon fontSize={'small'} />
                    <input type="search" placeholder="Search or start new chat" />
                </div>
            </div>
        )
    }
}

export default Search