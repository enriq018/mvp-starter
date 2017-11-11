import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
			stuff:'',
			test: ['Action', 'plzzzzz','reandom']
		}


	}

	render() {
		return (
		 		<div className = "col-5">
			<div className="dropdown">
		  	<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    Dropdown
		  	</button>
		  	<div className="dropdown-menu" aria-labelledby="dropdownMenu1">
		  		{this.state.test.map((el, index)=> <a key = {index} className="dropdown-item" href="#!">{el} </a> )}
		
		 		</div>
				</div>
	    <iframe src="http://www.youtube.com/embed/W7qWa52k-nE"
   width="300" height="300" frameBorder="15" allowFullScreen></iframe>


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
