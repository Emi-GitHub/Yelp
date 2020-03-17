import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTerm, fetchApi, setOpenYelp, setTermNear} from '../actions';
import '../Style/SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="background">
                <form className="ui form">
                    <div className="yelp-icon-div">
                        <img src="./yelp.png" alt="yelp icon" className="yelp-icon"/>
                    </div>
                    <div className="field container parent-searchBar">
                        <div className="ui icon input focus search-input-1">
                            <input
                                type="text"
                                value={this.props.term}
                                onChange={event => this.props.setTerm(event.target.value)}
                                placeholder="Find burgers, barbers, spas, handymen..."
                                className="text-input"
                            />   
                        </div>
                        <div className="ui icon input focus search-input-2">
                            <input
                                type="text"
                                value={this.props.termNear}
                                onChange={event => this.props.setTermNear(event.target.value)}
                                placeholder="Near..."
                                className="text-input"
                            />  
                            <i className="inverted circular search link icon search-icon" onClick={()=>this.props.setOpenYelp(true)}></i>
                        </div>
                    </div>
                </form>
                {this.props.openYelp ? <Redirect to="Yelp" /> : null}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        term: state.term,
        termNear: state.termNear,
        openYelp: state.openYelp
    }
}
export default connect(mapStateToProps, {setTerm, fetchApi, setOpenYelp, setTermNear})(SearchBar);
