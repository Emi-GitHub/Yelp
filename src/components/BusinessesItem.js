import React, { Component } from 'react'
import { connect } from 'react-redux';

class BusinessesItem extends Component {
    render() {
        let backgroundImgStyle = {
            backgroundImage: 'url(' + this.props.item.image_url + ')'
        }
        const categories = this.props.item.categories.map( (value, i) => {
            if(i===0) return value.title; 
            return null;
        });
        return (
            <div className="item-cover  parent">
                <div className="child-1">
                    <div style={backgroundImgStyle} className="card-photo"/>
                </div>
                <div className="child-2">
                    <h2>{this.props.item.name}</h2>
                    <i className="star icon"></i>
                    <i className="star icon"></i>
                    <i className="star icon"></i>
                    <i className="star icon"></i>
                    <i className="star icon"></i>
                    {this.props.item.review_count}
                    <br/> 
                    {this.props.item.price} . {categories}
                    <div className="location">
                        {this.props.item.display_phone}
                        <br/>
                        {this.props.item.location.address1}
                        <br/>
                        {this.props.item.location.city}
                        <br/>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    businesses: state.businesses,
    item: state.businesses.find(item => item === ownProps.item),
});

export default connect(mapStateToProps)(BusinessesItem);
