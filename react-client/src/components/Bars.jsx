import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Bars extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			stuff: ''
		}

	}

	render() {
		return (
			<div className="container">
			  <div className="row">
			    <div className="col-5">
			    	{console.log(this.props.twitchData)}
					  <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
						  <button type="button" onClick = {()=> this.props.changeStreams(1)} className="btn btn-secondary">1</button>
						  <button type="button" onClick = {()=> this.props.changeStreams(2)} className="btn btn-secondary">2</button>
						  <button type="button" onClick = {()=> this.props.changeStreams(3)} className="btn btn-secondary">3</button>
						  <button type="button" onClick = {()=> this.props.changeStreams(4)} className="btn btn-secondary">4</button>
						</div>
			    </div>
			    
			    <div className="col-2">

			    	<button type="button" className="btn btn-primary">Primary</button>
			    </div>
			  </div>
			</div>


		)
	}
}

export default Bars;






