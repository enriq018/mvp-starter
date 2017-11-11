import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import View from './View.jsx';

class Screens extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stuff:''
		}


	}

	render() {
		return (
		  <div className="container">
		  	<div className="row">


		  {this.props.streamsOpen.map((el, i) => 
		  	<View streamerNames = {el} index = {i} key = {i}  twitchData = {this.props.twitchData}
		  	 updateStreamer = {this.props.updateStreamer}/>)}
		  	</div>
			</div>
		  
		  
		)

	}

}

export default Screens;


	// {if (this.props.streams === 1) {
	// 	  		return <View/>
	// 	  		}
	// 	  		if(this.props.streams === 2) {
	// 	  			return <div><View/><View/> </div>
	// 	  		}

	// 	  	}		

			 //  {console.log('whyyyyyyyyyy', this.props.streams)}
		  // {this.props.streams === 1 ? <h1>1111111111</h1> : <span></span>}
		  // {this.props.streams === 2 ? <h1>2222222222</h1> : <span></span>}
		  // {this.props.streams === 3 ? <h1>3333333333</h1> : <span></span>}
		  // {this.props.streams === 4 ? <h1>4444444444</h1> : <span></span>}
