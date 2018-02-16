import React, {Component} from 'react';

import styles from '../style/Popup.css';

export default class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <a onClick={this.props.closePopup} className="close-button"></a>
         {this.props.text}
        </div>
      </div>
    );
  }
}
