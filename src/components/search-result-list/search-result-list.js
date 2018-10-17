import React from 'react';
import PropTypes from 'prop-types';

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.redditPosts = [];
  }

  render() {

    return (
            <ul>
                {
                    this.state.redditPosts.map(() =>)
                }
            </ul>
    );
  }
}

SearchResultList.propTypes = {
  subreddit: PropTypes.object,

};

export default SearchResultList;
