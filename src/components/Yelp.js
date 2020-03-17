import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTerm, fetchApi, setTermNear, setOpenYelp, setHeader} from '../actions';
import BusinessesList from './BusinessesList';
import MapContainer from './MapContainer';
import '../Style/Yelp.css';

class Yelp extends Component {
    componentDidMount(){
        this.props.setHeader(true)
        this.props.fetchApi(this.props.term, this.props.termNear);
    }
    onSearch = () => {
        this.props.fetchApi(this.props.term, this.props.termNear);
        this.props.setHeader(true)
    }
    onInputChangeTerm = event => {
        this.props.setTerm(event.target.value);
        this.props.setHeader(false);
    }
    onInputChangeTermNear = event => {
        this.props.setTermNear(event.target.value);
        this.props.setHeader(false);
    }
    render() {
        const notFound = () =>{
            return <p className="not-found">Not found!</p>
        }
        return (
            <div className="background-yelp">
                <div className="background-margins">
                    <form className="ui form">
                        <div className="parent-search">
                            <div className="child-1-search">
                                <img src="./yelp.png" alt="yelp icon" className="yelp-icon-yelp" />
                            </div>
                            <div className="child-2-search">
                                <div className="ui big icon input search-input-yelp">
                                    <input
                                        type="text"
                                        value={this.props.term}
                                        onChange={this.onInputChangeTerm}
                                        placeholder="Find burgers, barbers, spas, handymen..."
                                    />
                                </div>
                                <div className="ui big icon input search-input-yelp">
                                    <input
                                        type="text"
                                        value={this.props.termNear}
                                        onChange={this.onInputChangeTermNear}
                                        placeholder="Near..."
                                    />
                                    <i className="search link icon search-icon-yelp" style={{color:"white", backgroundColor:"#f43939"}}onClick={()=>this.onSearch()}></i>
                                </div>   
                            </div>
                        </div>
                    </form>
                </div>
                {this.props.goHome ? <Redirect to="Yelp" /> : null}
                <div className="yelp-parent" >
                    <div className="yelp-child-1">
                        <div>
                            {this.props.businessesLength === 0 ? notFound() : <BusinessesList /> }
                        </div>
                    </div>
                    <div >
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
        termNear: state.termNear,
        businesses: state.businesses,
        loader: state.loader,
        businessesLength: state.businessesLength
    }
}
export default connect(mapStateToProps, {setTerm, fetchApi, setTermNear, setOpenYelp, setHeader})(Yelp);
