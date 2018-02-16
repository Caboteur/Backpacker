import React, {Component} from 'react';
import { Grid, Image, Button  } from 'semantic-ui-react'
import Slide  from 'react-reveal/Zoom';
import Lightbox from 'react-image-lightbox';

import styles from '../style/Gallery.css';

const images = [
'https://source.unsplash.com/collection/1076958/1600x900',
'https://source.unsplash.com/collection/1076958/1600x900',
  'https://source.unsplash.com/collection/1076958/1600x900',
  'https://source.unsplash.com/collection/1076958/1600x900',
  'https://source.unsplash.com/collection/1076958/1600x900',
  'https://source.unsplash.com/collection/1076958/1600x900',
  'https://source.unsplash.com/collection/1076958/1600x900',
  'https://source.unsplash.com/collection/1076958/1600x900',
];


export default class Gallery extends Component {
  constructor(){
     super()
     this.state={
      pics:[{ _id: 'caypg3w7sGBH5ZyYm', pics: '/image/movieposter.png' },
              { _id: 'caypg3w7sGBH5ZyYm', pics: '/image/movieposter.png' },{ _id: 'caypg3w7sGBH5ZyYm', pics: '/image/movieposter.png' },
              { _id: 'caypg3w7sGBH5ZyYm', pics: '/image/movieposter.png' },{ _id: 'caypg3w7sGBH5ZyYm', pics: '/image/movieposter.png' },
              { _id: 'caypg3w7sGBH5ZyYm', pics: '/image/movieposter.png' },{ _id: 'caypg3w7sGBH5ZyYm', pics: '/image/movieposter.png' },
              { _id: 'caypg3w7sGBH5ZyYm', pics: '/image/movieposter.png' }],
      isOpen: false,
      photoIndex: 0
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
         this.setState({pics: res.reverse()})
         console.log(res)
         console.log(this.state.pics)
       }
     });
  console.log(this.state.pics)
   }





  render() {

      const { photoIndex, isOpen } = this.state;

    var sectionStyle = {
    backgroundImage:"url('https://source.unsplash.com/collection/1076958/1600x900')"
  };

  var o ='https://source.unsplash.com/collection/1076958/1600x900';

   const zoom = () => {
     this.setState({ isOpen: true });
       }

  console.log(this.state.pics);

    return (<div  style={{borderBottom: '3PX solid #0a9cb9'}}>
      <div id="Medias" style={{height:"100px", textAlign:"center" , boxShadow: '0px 5px 20px #0000002e'}} className="categorie-title">Medias<img style={{width:"50px", float:"right",marginTop: "-15px",
    marginRight: "10px"}} src='/image-icon/camera.svg'/></div>

        <Slide left duration={1000}>
      <div className='wrapper'>

    <div className="boxing"  className='box box1' style={{cursor:'pointer', backgroundImage:'url("'+ this.state.pics[0].pics+'")'}} onClick={() => this.setState({ isOpen: true })}>

    </div>
    <div name='ok' id="boxing" style={{cursor:'pointer', backgroundImage:'url("'+ this.state.pics[1].pics+'")', cursor:'pointer'}} onClick={zoom} className='box box2 boxing' >
    </div>
    <div id="boxing" style={{cursor:'pointer', backgroundImage:'url("'+ this.state.pics[2].pics+'")', cursor:'pointer'}} onClick={zoom} className='box box3  boxing'>
    </div>
    <div id="boxing" style={{cursor:'pointer', backgroundImage:'url("'+ this.state.pics[3].pics+'")', cursor:'pointer'}} onClick={zoom} className='box box4  boxing'>
    </div>
    <div id="boxing"  style={{cursor:'pointer', backgroundImage:'url("'+ this.state.pics[4].pics+'")', cursor:'pointer'}} onClick={zoom} className='box box5  boxing'>
    </div>
    <div id="boxing" style={{cursor:'pointer', backgroundImage:'url("'+ this.state.pics[5].pics+'")', cursor:'pointer'}} onClick={zoom} className='box box6  boxing'>
    </div>
    <div id="boxing" style={{cursor:'pointer', backgroundImage:'url("'+ this.state.pics[6].pics+'")', cursor:'pointer'}} onClick={zoom} className='box box7  boxing'>
    </div>
    <div id="boxing" style={{cursor:'pointer', backgroundImage:'url("'+ this.state.pics[7].pics+'")', cursor:'pointer'}} onClick={zoom} className='box box8  boxing'>
    </div>
  </div>

  </Slide>

          {isOpen && (
            <Lightbox
              mainSrc={this.state.pics[this.state.photoIndex].pics}
              nextSrc={this.state.pics[(this.state.photoIndex + 1) % this.state.pics.length].pics}
              prevSrc={this.state.pics[(this.state.photoIndex + this.state.pics.length - 1) % this.state.pics.length].pics}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
              this.setState({
               photoIndex: (photoIndex + this.state.pics.length - 1) % this.state.pics.length
              })}
              onMoveNextRequest={() =>
              this.setState({
               photoIndex: (photoIndex + 1) % this.state.pics.length
             })}
            />
          )}
   <button className="btn btn--stripe">Plus de photos</button>
  </div>

    );
  }
}
