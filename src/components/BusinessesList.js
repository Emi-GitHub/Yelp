import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusinessesItem from './BusinessesItem';
import Pagination from './Pagination';
import '../Style/BusinessesList.css';

class BusinessesList extends Component {
    render() {
        const indexOfLastPost = this.props.currentPage * this.props.postPerPage;
        const indexOfFirstPost = indexOfLastPost - this.props.postPerPage;
        const currentPosts = this.props.businesses.slice(indexOfFirstPost, indexOfLastPost);
        var x=1;
        const list = currentPosts.map( (item, i) => {
            if(this.props.currentPage===2) x=6;
            else if(this.props.currentPage===3) x=11;
            else if(this.props.currentPage===4) x=16;
            else if(this.props.currentPage===5) x=21;
            else if(this.props.currentPage===6) x=26;
            else if(this.props.currentPage===7) x=31;
            else if(this.props.currentPage===8) x=36;
            else if(this.props.currentPage===9) x=41;
            else if(this.props.currentPage===10) x=46;
            return <BusinessesItem item={item} key={item.id} i={i+x}/>;
        });
        return (
            <div className="header">
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
export default connect(mapStateToProps)(BusinessesList);
