import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../actions';
import '../Style/Pagination.css';

class Pagination extends Component {
    render() {
        const pageNumbers = []; 
        const totalPosts = this.props.businesses.length;
        for(let i = 1; i <= Math.ceil(totalPosts/this.props.postPerPage); i++) pageNumbers.push(i);
        return (
            <div className="ui horizontal list item-list">
                {pageNumbers.map((number, i) => (
                        <div className="item" key={number} i={i+1}>
                        <div onClick={()=>this.props.setCurrentPage(number)} className="list-number">{number}</div>
                </div> ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        businesses: state.businesses,
        currentPage: state.currentPage,
        postPerPage: state.postPerPage
    }
}
export default connect(mapStateToProps, {setCurrentPage})(Pagination);
