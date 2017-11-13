import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Bars extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			groupName: ''
		}
		this.setName = this.setName.bind(this);

	}
	setName(e) {
		this.setState({groupName: e})
	}

	render() {
		return (
			<div className="container-fluid">
			  <div className="row">
			    <div className="col-4">
					  <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
					  	<span className="badge badge-primary">Screens</span>
						  <button type="button" onClick = {()=> this.props.numberOfStreams(1)} className="btn btn-secondary">1</button>
						  <button type="button" onClick = {()=> this.props.numberOfStreams(2)} className="btn btn-secondary">2</button>
						  <button type="button" onClick = {()=> this.props.numberOfStreams(3)} className="btn btn-secondary">3</button>
						  <button type="button" onClick = {()=> this.props.numberOfStreams(4)} className="btn btn-secondary">4</button>
						</div>
			    </div>
			    
			    <div className="col-4">
						<input className="form-control-sm" type="text" placeholder="Group Name" onChange = {(e)=> this.setName(e.target.value)}/>
						<button type="button" className="btn btn-primary" onClick = {()=> this.props.saveGroup(this.state.groupName)}>Save Group</button>
			    </div>


			    			    <div className="col-4">
			    			    <div className="dropdown">
		  	<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    Saved Groups
		  	</button>
		  	<div className="dropdown-menu" aria-labelledby="dropdownMenu1">


				{this.props.savedGroups.map((el, index)=> 	<a className="dropdown-item" key = {index} onClick = {()=> this.props.getRoomInfo(el)} > {el}</a>	 )}

		 		</div>
				</div>
			    			    </div>

			  </div>
			</div>


		)
	}
}

export default Bars;






