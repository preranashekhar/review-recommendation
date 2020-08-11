import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">amz-review-beauty-recommendation-app</a>
          </h1>
          <p className="header-subtitle">
            using{' '}
            <a href="https://github.com/algolia/react-instantsearch">
              Amazon Beauty Products Reviews
            </a>
          </p>
        </header>
        

        <div class="alignCenter">
          <h2>Amazon Beauty Products</h2>
          <h2>Items liked by the user</h2>
          <h3>User ID: A31Z48BHHUTB0P</h3>
        </div>
        
        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="existing_items_rated">
            <div className="search-panel">
              <div className="search-panel__results">
                {/* <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: '',
                  }}
                /> */}
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>

        <div class="alignCenter">
          <h2>Recommendations for the user</h2>
        </div>

        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="recommendation">
            <div className="search-panel">
              <div className="search-panel__results">
                <Hits hitComponent={RecommendedHit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

function Hit(props) {

  return (
    <article>
      <h1>
        <Highlight attribute="title" hit={props.hit} />
      </h1>
      <div>
        <img src={props.hit.images[0]} width="100"></img>
      </div>
      <p><b>Product ID: </b>{props.hit.asin}</p>
      <p>
        {props.hit.description.toString().substring(0, 150)}
      </p>
    </article>
  );
}

function RecommendedHit(props) {

  return (
    <article>
      <h1>
        <Highlight attribute="title" hit={props.hit} />
      </h1>
      <div>
        <img src={props.hit.images[0]} width="120" height="150"></img>
      </div>
      <p><b>Product ID: </b>{props.hit.asin}</p>
      <p>
        {props.hit.description.toString().substring(0, 200)}
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

RecommendedHit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
