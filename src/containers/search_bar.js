import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
         this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){   
        this.setState({term: event.target.value});
    }   

    onFormSubmit(event){
        event.preventDefault();

        //Consumindo nosso action creator para retornar a previsão do tempo.
        //Passando o term(city) de pesquisa do input para reotrnar os dados da cidade.
        this.props.fetchWeather(this.state.term);
        //Limpando o input após a pesquisa
        this.setState({term:''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
              <input 
                placeholder="Get a five days forecast in your favorite cites"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                 />   
             <span className="input-group-btn">
                  <button type="submit" className="btn btn-secondary">
                        Submit
                  </button>
              </span> 
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);


