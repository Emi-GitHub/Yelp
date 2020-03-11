import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusinessesItem from './BusinessesItem';
import '../Style/BusinessesList.css';
import Pagination from './Pagination';
import { setCounter } from '../actions';

class BusinessesList extends Component {
    render() {
        const indexOfLastPost = this.props.currentPage * this.props.postPerPage;
        const indexOfFirstPost = indexOfLastPost - this.props.postPerPage;
        const currentPosts = this.props.businesses.slice(indexOfFirstPost, indexOfLastPost);

        const list = currentPosts.map( (item, i) => {
            return <BusinessesItem item={item} key={item.id} i={i+1}/>;
        });
        return (
            <div>
                {this.props.header ? <h1 className="header">Best {this.props.term} in {this.props.termNear}</h1> : null }
                {list}
                <Pagination />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    businesses: state.businesses,
    term: state.term,
    termNear: state.termNear,
    header: state.header,
    currentPage: state.currentPage,
    changeCurrentPage: state.changeCurrentPage,
    postPerPage: state.postPerPage
});
export default connect(mapStateToProps, {setCounter})(BusinessesList);
