import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../Style/BusinessesList.css';

class BusinessesItem extends Component {
    render() {
        let backgroundImgStyle = {
            backgroundImage: 'url(' + this.props.item.image_url + ')'
        }
        const categories = this.props.item.categories.map( (value, i) => {
            if(i===this.props.item.categories.length-1) return value.title
            else return value.title + ', '
        });
        const star = () => {
            var i=0;
            var star = [];
            while(i<this.props.item.rating){
                star[i] = <i className="star icon"></i>
                i++;
            }
            return star;
        }
        return (
            <div className="item-cover  parent">
                <div className="child-1">
                    <div style={backgroundImgStyle} className="card-photo"/>
                </div>
                <div className="child-2">
                    <h2>{this.props.item.name}</h2>
                    {star()}
                    {this.props.item.review_count}
                    <br/> 
                    {this.props.item.price} . {categories}
                    <br/> 
                    <button className="ui black button button-site">
                        <a 
                            href={this.props.item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="site-link"
                        > Click to open
                        </a> 
                    </button>
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
    item: state.businesses.find(item => item === ownProps.item)
});

export default connect(mapStateToProps)(BusinessesItem);
