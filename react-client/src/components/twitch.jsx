import React from 'react';

const Test = (props) => (

  <div>
  {console.log('1111111111111111111', props.streamerNames)}
          <iframe
            src={`http://player.twitch.tv/?channel=${props.streamerNames}`}
            frameBorder='0'
            height={`300px`}
            width={`450px`}
            allowFullScreen='true'
          ></iframe>
  </div>
)


export default Test

//    return <div ref={el => (this.instance = el)} />;

