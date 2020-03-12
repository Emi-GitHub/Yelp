import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../Style/BusinessesList.css';
import _ from 'lodash';
import { setCounter } from '../actions';

class BusinessesItem extends Component {
    onDivClick = () => {
        return <a 
            href={this.props.item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="site-link"
        > </a> 
    }
    render() {
        let backgroundImgStyle = {
            backgroundImage: 'url(' + this.props.item.image_url + ')'
        }
        const categories = this.props.item.categories.map( (value, i) => {
            if(i===this.props.item.categories.length-1) return value.title
            else return value.title + ', '
        });
        const star = () => {
            let i=0;
            var star = [];
            while(i<this.props.item.rating){
                if(_.isEqual(this.props.item.rating, i+0.5)) {
                    star[i] = <i className="star icon star-icon" key={i}></i>
                }
                else star[i] = <i className="star icon star-icon" style={{background:"#f43939"}} key={i}></i>
                i++;
            }
            return star;
        }
        return (
            <div className="item-cover parent" onClick={()=> window.open(this.props.item.url, "_blank")}>
                <div className="child-1">
                    <div style={backgroundImgStyle} className="card-photo"/>
                </div>
                <div className="child-2">
                    <h2>{this.props.i+this.props.counter}. {this.props.item.name}</h2>
                    {star()}
                    {this.props.item.review_count}
                    <br/> 
                    {this.props.item.price} . {categories}
                    <br/> 
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
    counter: state.counter,
    currentPage: state.currentPage,
    item: state.businesses.find(item => item === ownProps.item)
});
export default connect(mapStateToProps, {setCounter})(BusinessesItem);
