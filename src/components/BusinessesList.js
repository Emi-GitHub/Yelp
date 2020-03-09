import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusinessesItem from './BusinessesItem';
import '../Style/BusinessesList.css';

class BusinessesList extends Component {
    render() {
        const list = this.props.businesses.map( (item, i) => {
            return <BusinessesItem item={item} key={item.id} i={i}/>;
        });
        return (
            <div>
                {list}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    businesses: state.businesses,
});
export default connect(mapStateToProps)(BusinessesList);
