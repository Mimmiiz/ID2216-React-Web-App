import React, { Component } from 'react'



  class ScrollableList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: props.items || [],
        visibleItems: props.visibleItems || 3,
        startIndex: 0,
        endIndex: props.visibleItems || 3,
      };
    }
  
    handleScroll = (e) => {
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      if (scrollHeight - (scrollTop + clientHeight) < 50) {
        // load more items if available
        if (this.state.endIndex < this.state.items.length) {
          const newEndIndex = this.state.endIndex + this.state.visibleItems;
          this.setState({
            endIndex: newEndIndex,
            startIndex: newEndIndex - this.state.visibleItems,
          });
        }
      }
    };
  
    render() {
      const { items, startIndex, endIndex } = this.state;
      const visibleItems = items.slice(startIndex, endIndex);
  
      return (
        <div style={{ height: '70%', overflowY: 'auto' }} onScroll={this.handleScroll}>
          {visibleItems.map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      );
    }
  }
  
  export default ScrollableList;