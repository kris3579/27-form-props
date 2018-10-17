import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.subredditName = this.props.subreddit.name || '';
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({subredditName: event.target.value});
        this.props.handleSubredditPick(this.state.subredditName);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="redditSearch"
                    type="text"
                />
                <input
                    name="numberOfPosts"
                    type="number"
                />
                <button type="submit">Search Reddit</button>
            </form>
        );
    }
}

SearchForm.propTypes = {
    subreddit: PropTypes.object,
};

export default SearchForm
