import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BusinessesList from './BusinessesList';
import { setGoHome, setTerm, fetchApi } from '../actions';
import '../Style/Yelp.css';

class Yelp extends Component {
    componentDidMount(){
        this.props.fetchApi(this.props.term);
    }
    onSubmit = event => {
        event.preventDefault(); 
        this.props.fetchApi(this.props.term);
        console.log(this.props.counter)
    }
    render() {
        console.log('businesses in yelp',this.props.businesses)
        return (
            <div className="background-yelp">
                <div className="background-margins">
                    <form onSubmit={this.onSubmit} className="ui form">
                        <div className="yelp-icon-div">
                            <img src="./yelp.png" alt="yelp icon" className="yelp-icon-yelp" />
                        </div>
                        <div className="field">
                            <div className="ui icon input focus">
                                <input
                                    type="text"
                                    value={this.props.term}
                                    onChange={event => this.props.setTerm(event.target.value)}
                                    placeholder="Find burgers, barbers, spas, handymen..."
                                    className="text-input"
                                />   
                                <i className="inverted circular search link icon search-icon" onClick={this.onSubmit}></i>
                            </div>
                        </div>
                    </form>
                    <div className="ui divider"></div>
                    <a href="/" onClick={()=>this.props.setGoHome(true)} className="go-back">
                        <i className="arrow alternate circle left outline icon"></i>
                        Go Back To Search
                    </a>
                    {this.props.goHome ? <Redirect to="Yelp" /> : null}
                </div>
                <BusinessesList />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        goHome: state.goHome,
        openYelp: state.openYelp,
        term: state.term,
        businesses: state.businesses
    }
}
export default connect(mapStateToProps, {setTerm, fetchApi, setGoHome})(Yelp);
