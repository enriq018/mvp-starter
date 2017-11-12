import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import List from './components/List.jsx';
import Bars from './components/Bars.jsx';
import Screens from './components/Screens.jsx';
import twitchData from './twitchData';
//7fat6yyl6puo9pjt6eypzfciu04pyj



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      streamsOpen: ['a'],
      streamerNames: ['imaqtpie', 'imaqtpie', 'imaqtpie', 'imaqtpie'],
      twitchData: twitchData,
      savedGroups: ['dongsquad', 'anotha one']
    }
    this.numberOfStreams = this.numberOfStreams.bind(this);
    this.updateStreamer = this.updateStreamer.bind(this);
    this.saveGroup = this.saveGroup.bind(this);
  }


    getRequest() {
    $.ajax({
      type: "GET",
      url: 'http://127.0.0.1:3000/groups',
      contentType: 'application/json',
      dataType: 'json',
      success: (data)=> {
        console.log('success', data)
        // this.setState({twitchData: data})
      },
      error: (data) => {
        console.log('error')
      },
    });

  }

  componentDidMount() {
   $.ajax({
      type: "GET",
      url: 'http://127.0.0.1:3000/groups',
      contentType: 'application/json',
      dataType: 'json',
      success: (data)=> {
        console.log('MOUNT success', data)
        this.setState({twitchData: data})
      },
      error: (data) => {
        console.log('error')
      },
    });
  }

//USE TWITCH API AFTER GROUPS TO DB WORKING , we can use mock for now 

//ON LOAD & GET
//get live streamers 
//get saved groups 

//POST 
// add streamers and group name. 



  numberOfStreams(e) {
    console.log(e)
    var MOCKDATA = [];
    for(var i = 0; i < e; i++){MOCKDATA.push(e)}
    this.setState({streamsOpen: MOCKDATA})
  }

  updateStreamer(name, index) {
    var old = this.state.streamerNames;
    old[index] = name;
    this.setState({streamerNames: old});
    console.log('===========', this.state.streamerNames)
  }

  saveGroup(groupName) {
    //send groupName and current streamerNames
    var data = {groupName:groupName, streamerNames: this.state.streamerNames};
    console.log(data);
    $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:3000/groups',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(data),
      success: (data)=> {
        console.log('POST REQ SUCCESS', data)
      },
      error: (data) => {
        console.log('error')
      },
    });

  }

  render () {
    return (
    <div className = 'container'>
      <h1 className ="title">Twitchy</h1>
      <Bars numberOfStreams = {this.numberOfStreams} saveGroup = {this.saveGroup} savedGroups = {this.state.savedGroups} />
      <Screens streamsOpen = {this.state.streamsOpen} updateStreamer = {this.updateStreamer}
      streamerNames = {this.state.streamerNames} twitchData = {this.state.twitchData.data}/>
    </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



// <div class="dropdown show">
//   <button class="btn btn-secondary dropdown-toggle"
//           type="button" id="dropdownMenu2" data-toggle="dropdown"
//           aria-haspopup="true" aria-expanded="false">
//     Dropdown
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
//     <a class="dropdown-item" href="#!">Action</a>
//     <a class="dropdown-item" href="#!">Another action</a>
//   </div>