import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BusinessesList from './BusinessesList';
import { setGoHome, setTerm, fetchApi } from '../actions';
import '../Style/Yelp.css';
import MapContainer from './MapContainer';

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
                        <div className="parent-search">
                            <div className="child-1-search">
                                <img src="./yelp.png" alt="yelp icon" className="yelp-icon-yelp" />
                            </div>
                            <div child-2-search>
                                <div className="ui big icon input search-input-yelp">
                                    <input
                                        type="text"
                                        value={this.props.term}
                                        onChange={event => this.props.setTerm(event.target.value)}
                                        placeholder="Find burgers, barbers, spas, handymen..."
                                    />   
                                    <i className="search icon search-icon-yelp" onClick={this.onSubmit}></i>
                                </div>
                                {/*<a href="/" onClick={()=>this.props.setGoHome(true)} className="go-back">
                                    <i className="home icon"/>
        </a>*/}
                            </div>
                        </div>
                    </form>
                </div>
                {/*<a href="/" onClick={()=>this.props.setGoHome(true)} className="go-back">
                    <i className="arrow alternate circle left outline icon"></i>
                    Go Back To Search
            </a>*/}
                {this.props.goHome ? <Redirect to="Yelp" /> : null}
                <div className="yelp-parent">
                    <div className="yelp-child-1">
                        <BusinessesList />
                    </div>
                    <div className="yelpchild-2" style={{width:"40%", position:"fixed", right:"0", top:"130px"}}>
                        <MapContainer />
                    </div>
                </div>
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
