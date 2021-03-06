import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';
import Header from '../header/header';
import SearchResultList from '../search-result-list/search-result-list';
import SearchForm from '../search-form/search-form';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        // this.state.subreddit= '';
        this.state.redditPosts = [];

    }

    // async componentDidMount(){
    //     await this.loadRedditPostList();
    //
    //     console.log('Reddit posts loaded!');
    // }

    // loadPokemonList = async () => {
    //     //! Vinicio - an async function ALWAYS returns a promise
    //     //! Vinicio - outside of this function, I can use await
    //     const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';
    //     return superagent.get(POKEMON_API)
    //         .then(response => {
    //             if (response.body.results) {
    //                 this.setState({pokemon: response.body.results.slice(0,10)});
    //             }
    //         })
    //         .catch(console.error);
    // };

    handleSubredditPick = (subreddit) => {
        const REDDIT_API = `https://www.reddit.com/dev/api/r/${subreddit}/top/.json?count=10`;
        return superagent.get(REDDIT_API)
            .then(response => {
                if (response.body.results) {
                    this.setState({redditPosts: response.body.results.slice(0,10)});
                }
                console.log(this.state.redditPosts);
            })
            .catch(console.error);
    };

    render() {
        return (
            <main>
                <Header/>
                <SearchForm handleSubredditPick={this.handleSubredditPick}/>
                {/*<SearchResultList subreddit={this.state.redditPosts}/>*/}
            </main>
        );
    }
}

export default App;
