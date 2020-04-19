import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID pSwJ5wIlkiKV5rb6mBr_s-kIcF7NN0OmBEft4f1Cpe4'
            }
        });

        this.setState({ images: response.data.results });
        console.log(response.data.results);
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar runMeWhenSubmit={this.onSearchSubmit} />
                <b />
                Found: { this.state.images.length} images
            </div >);
    };
};

export default App;