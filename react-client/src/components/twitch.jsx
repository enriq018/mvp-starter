import React from 'react';

const Test = (props) => (

  <div className = 'container'>
          <iframe className = 'twitchPlayer'
            src={`http://player.twitch.tv/?channel=${props.streamerNames}`}
            frameBorder='0'
            height={`350px`}
            width={`550px`}
            allowFullScreen='true'
          ></iframe>
  </div>
)


export default Test

