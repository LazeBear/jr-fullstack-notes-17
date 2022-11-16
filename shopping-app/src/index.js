import React from 'react';
import { render } from 'react-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8,
};

class App extends React.Component {
  state = {
    items: [],
    currentPage: 1,
  };

  fetchMoreData = () => {
    console.log(this.state.currentPage);
    fetch(`http://localhost:8000/v1/items?page=${this.state.currentPage}`)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log(body);
        this.setState({
          items: this.state.items.concat(body.items),
          currentPage: this.state.currentPage + 1,
        });
      });
  };

  componentDidMount() {
    this.fetchMoreData();
  }

  render() {
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              {i.name} / {i.unitPrice}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
