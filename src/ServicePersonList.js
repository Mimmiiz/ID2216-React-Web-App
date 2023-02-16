import React from 'react';
import { Component, List } from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createRef, useEffect, useState } from "react";
import "./index.css";
import image from './images/avatar.jpg'
import Search from './Search';
import './styles/ServicePersonList.css';
import { useParams } from 'react-router-dom';
import ScrollableList from './ScrollableList';
/* Shows a list of all the service professionals for a specific service e.g., men's haircut */
function Avatar(){
    return (
      // <div class="Avatar">
        <img className="Avatar"
            src={image}
            alt="Photo"
        />
      // </div>
    )
}

function PersonBlock(){
  return(
    <Link className='PersonBlock' to="/service-persons-details">
        {/* <img src='./avatar.jpg'></img> */}
        <Avatar/>
        <div className="PersonInfo">
        <span>Joe Biden</span><div>250SEK</div>
      </div>      
    </Link>
  )
}

// export default class ServicePersonList extends React.Component {
//   static propTypes = {
//     listItems: PropTypes.array.isRequired,
//     heightOfItem: PropTypes.number,
//     maxItemsToRender: PropTypes.number,
//     style: PropTypes.object
//   }
//   static defaultProps = {
//     listItems: [
//       {
//         id: '0001',
//         content: <PersonBlock/>
//       },    
//       {
//         id: '0002',
//         content: <PersonBlock/>
//       },  
//       {
//         id: '0003',
//         content: <PersonBlock/>
//       },  
//       {
//         id: '0004',
//         content: <PersonBlock/>
//       },  
//       {
//         id: '0005',
//         content: <PersonBlock/>
//       },  
//       {
//         id: '0006',
//         content: <PersonBlock/>
//       },  
//       {
//         id: '0007',
//         content: <PersonBlock/>
//       },  
//       {
//         id: '0008',
//         content: <PersonBlock/>
//       },    
      
//     ],
//     heightOfItem: 30,
//     maxItemsToRender: 30
//   }
//   constructor(props) {
//     super(props)
//     this.state = { scrollPosition: 0 }
//     this.list = null

//     this.setListRef = element => {
//       this.list = element
//     }

//     this.updateScrollPosition = this.updateScrollPosition.bind(this)
//   }
//   componentDidMount() {
//     this.list.addEventListener('scroll', this.updateScrollPosition)
//   }
//   componentWillUnmount() {
//     this.list.removeEventListener('scroll', this.updateScrollPosition)
//   }
//   updateScrollPosition() {
//     const newScrollPosition = this.list.scrollTop / this.props.heightOfItem
//     const difference = Math.abs(this.state.scrollPosition - newScrollPosition)

//     if (difference >= this.props.maxItemsToRender / 5) {
//       this.setState({ scrollPosition: newScrollPosition })
//     }
//   }
//   render() {
//     const startPosition = this.state.scrollPosition -
//       this.props.maxItemsToRender >
//       0
//       ? this.state.scrollPosition - this.props.maxItemsToRender
//       : 0

//     const endPosition = this.state.scrollPosition +
//       this.props.maxItemsToRender >=
//       this.props.listItems.length
//       ? this.props.listItems.length
//       : this.state.scrollPosition + this.props.maxItemsToRender

//     return (
//       <div style={{background: "#F1EDE7", height: '70%', overflowY: 'auto'}} onScroll={this.handleScroll}>
//         <Search/>
//         <div className="react-scrollable-list" ref={this.setListRef} >
//         <div
//           key="list-spacer-top"
//           style={{
//             height: startPosition * this.props.heightOfItem
//           }}
//         />
//         {this.props.listItems.slice(startPosition, endPosition).map(item => (
//           <div
//             className="react-scrollable-list-item"
//             key={'list-item-' + item.id}>
//             {item.content}
//           </div>
//         ))} 
//         <div
//           key="list-spacer-bottom"
//           style={{
//             height: this.props.listItems.length * this.props.heightOfItem -
//               endPosition * this.props.heightOfItem
//           }}
//         />
//       </div>
//       <div style={{height:'56px',position:'fixed',bottom:'0',width:'100%'}}></div>
//       <Navbar/>
//       </div>
      
//     )
//   }
// }


const items = [
  {
    id: '0001',
    content: <PersonBlock/>
  },    
  {
    id: '0002',
    content: <PersonBlock/>
  },  
  {
    id: '0003',
    content: <PersonBlock/>
  },  
  {
    id: '0004',
    content: <PersonBlock/>
  },  
  {
    id: '0005',
    content: <PersonBlock/>
  },  
  {
    id: '0006',
    content: <PersonBlock/>
  },  
  {
    id: '0007',
    content: <PersonBlock/>
  },  
  {
    id: '0008',
    content: <PersonBlock/>
  }
  // add more items here
];

function ServicePersonList() {
  return (
    <div style={{background: "#F1EDE7"}}>
      <Search/>
      {/* <h1>My Scrollable List</h1> */}
      <ScrollableList className='scrollable-list' items={items} visibleItems={30} />
      <div style={{height:'56px', opacity: '0', position:'100%'}}></div>
      <Navbar/>
    </div>
  );
}

export default ServicePersonList; 