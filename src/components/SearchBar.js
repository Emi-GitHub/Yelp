import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTerm } from '../actions';
import { fetchApi } from '../actions';
import '../Style/SearchBar.css';

class SearchBar extends Component {
    onSubmit = event => {
        event.preventDefault(); 
        this.props.fetchApi(this.props.term); 
    }
    onChange = event => {
        this.props.setTerm(event.target.value)
    }
    render() {
        console.log('businesses',this.props.businesses)
        return (
            <div className="background">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="yelp-icon-div">
                        <img src="./yelp.png" alt="yelp icon" className="yelp-icon"/>
                    </div>
                    <div className="field container">
                        <div className="ui icon input focus search-input">
                            <input
                                type="text"
                                value={this.props.term}
                                onChange={this.onChange}
                                placeholder="Find burgers, barbers, spas, handymen..."
                                className="text-input"
                            />   
                            <i className="inverted circular search link icon" onClick={this.onSubmit}></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        term: state.term,
        businesses: state.businesses
    }
}
export default connect(mapStateToProps, {setTerm, fetchApi})(SearchBar);
