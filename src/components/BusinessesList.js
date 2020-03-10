import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusinessesItem from './BusinessesItem';
import '../Style/BusinessesList.css';

class BusinessesList extends Component {
    render() {
        const list = this.props.businesses.map( (item, i) => {
            return <BusinessesItem item={item} key={item.id} i={i+1}/>;
        });
        return (
            <div>
                <h1 className="header">Best {this.props.term} in London, United Kingdom</h1>
                {list}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    businesses: state.businesses,
    term: state.term
});
export default connect(mapStateToProps)(BusinessesList);
