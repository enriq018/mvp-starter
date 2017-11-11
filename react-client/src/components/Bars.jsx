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

					  <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
						  <button type="button" className="btn btn-secondary">1</button>
						  <button type="button" className="btn btn-secondary">2</button>
						  <button type="button" className="btn btn-secondary">3</button>
						  <button type="button" className="btn btn-secondary">4</button>
						</div>
			    </div>
			    <div className="col-5">

						<div className="dropdown">
						  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Dropdown
						  </button>
						  <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <a className="dropdown-item" href="#!">Action</a>
						    <a className="dropdown-item" href="#!">Another action</a>
						  </div>
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






