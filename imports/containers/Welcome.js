import React, { Component } from 'react';
import styles from '../style/Welcome.css';
import { Button, Divider, Form } from 'semantic-ui-react';


export default class Welcome extends Component {



render () {

return (

  <div className="Welcome">


<div className="videoContainer">
  <video autoPlay loop height="auto" width="100%" src="/image/motionLive.mov" className="fullscreen"> <Button className="entry-btn" secondary>Entrez sur le site</Button></video>
</div>

  </div>

)


}
}
