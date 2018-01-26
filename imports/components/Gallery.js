import React, {Component} from 'react';
import { Grid, Image  } from 'semantic-ui-react'

import styles from '../style/Gallery.css';

export default class Gallery extends Component {
  constructor(){
     super()
     this.state={
      pics:[{ _id: 'caypg3w7sGBH5ZyYm', pics: '/image/paysage.jpg' }]

     };
   }


   componentDidMount(){
     Meteor.call('listePics', (err,res) =>{
       if(err){
         Bert.alert({
           title: "Erreur",
           message: err.message,
           type: 'danger'
         });
       } else {
         this.setState({pics: res.reverse().slice(0, 5)})
         console.log(res)
         console.log(this.state.pics)
       }
     });
  console.log(this.state.pics)
   }


  render() {

  console.log(this.state.pics);

    return (
      <div className='wrapper'>

    <div className='box box1'>
    </div>
    <div className='box box2'>
    </div>
    <div className='box box3'>
    </div>
    <div className='box box4'>
    </div>
    <div className='box box5'>
    </div>
    <div className='box box6'>
    </div>
    <div className='box box7'>
    </div>
    <div className='box box8'>
    </div>
  </div>


    );
  }
}
