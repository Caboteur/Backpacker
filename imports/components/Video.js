import React, {Component} from 'react';



export default class Video extends Component {
  constructor(){
    super()
    this.state= {
      ListVideo:[],
      Video:''
    };
  }

  componentWillMount(){
    this.getVideo();

  }


  getVideo(){
    Meteor.call('listeVideo', (err,res) =>{
      if(err){
        Bert.alert({
          title: "Erreur",
          message: err.message,
          type: 'danger'
        });
      } else {
        const vid = res.reverse();
        this.setState({ListVideo: vid[0].title})
        console.log(res);
        console.log(this.state.ListVideo)
      }
    });

  }

  ChangePage () {
    FlowRouter.go("/MainVideo");

  }

  render() {
    return (

      <div className="stripe" style={{borderBottom: '3PX solid #0a9cb9'}}>

      <div id="equipe" style={{height:"100px", textAlign:"center", boxShadow: '0px 5px 20px #0000002e'}} className="categorie-title">Video<img style={{width:"50px", float:"right",marginTop: "-15px",
    marginRight: "10px"}} src='/image-icon/play.svg'/></div>

      <div style={{width:'80%', height:'500px', margin:'auto'}}>
 <iframe style={{width:'100%', height:'500px',     border: '8px solid white'}} className="rapido" id="youfs" src={this.state.ListVideo} frameborder="0"></iframe>
   </div>

           <button onClick={this.ChangePage.bind(this)} style={{marginTop:'70px'}}className="btn btn--stripe" >Video</button>

      </div>


    );
  }
}
