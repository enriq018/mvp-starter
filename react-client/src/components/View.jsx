import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Twitch from './twitch.jsx';
// const View = (props) => (

// 		<div className = "col-5">
// 			<div className="dropdown">
// 		  	<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 		    Dropdown
// 		  	</button>
// 		  	<div className="dropdown-menu" aria-labelledby="dropdownMenu1">
// 			    <a className="dropdown-item" href="#!">Action</a>
// 			    <a className="dropdown-item" href="#!">Another action</a>
// 		 		</div>
// 				</div>
// 	    <iframe src="http://www.youtube.com/embed/W7qWa52k-nE"
//    width="300" height="300" frameBorder="15" allowFullScreen></iframe>


// 		</div>
// )



class View extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: this.props.index,
		}


	}

	userName(obj) {
	  return obj.thumbnail_url.split('_')[2].split('-')[0]
	}

	render() {
		return (
		 		<div className = "col-6 view">
		 		<div className = 'viewContainer'>
					<div className="dropdown">
		  			<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" 
		  				data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    			Streamers
		  				</button>
						<button type="button" className="btn btn-primary">{this.props.streamerNames[this.props.index]}</button>
						<button type="button" className="btn btn-info">Viewers: {this.props.twitchData[this.props.index].viewer_count}</button>

		  			<div className="dropdown-menu" aria-labelledby="dropdownMenu1" >
		  				{this.props.twitchData.map((el, index)=> <a onClick = {() => this.props.updateStreamer(this.userName(el), this.state.index)} 
		  				key = {index} className="dropdown-item" >{this.userName(el)}</a> )}
		 				</div>
						</div>
					<Twitch streamerNames = {this.props.streamerNames[this.props.index]}/>
					</div>
				</div> 
		)
	}
}

export default View;



// <div id="app"></div>
//     <script src="https://embed.twitch.tv/embed/v1.js"></script>

//     <script type="text/javascript">
//       new Twitch.Embed("twitch-embed", {
//         width: 854,
//         height: 480,
//         channel: "monstercat"
//       });
//     </script>


	  //   <iframe src="http://www.youtube.com/embed/W7qWa52k-nE"
   // width="400" height="300" frameBorder="15" allowFullScreen></iframe>
