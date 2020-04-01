import React from 'react';
import PowerButton from '../Components/powerButton';
import Info from '../Components/infoMusic';
import {bankOne, bankTwo} from '../Components/musicSource';
import 'jquery';
import $ from 'jquery';

class ContainMusic extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        musicInfo: 'musicInfo',
        chnager: bankTwo,
        power: false
    }
  }

  listeners = (event) =>{
    if(this.state.Power){
       const keys = event.keyCode;
       const cheked = this.state.chnager.filter(keyCode => {
       return keyCode.keyCode === keys;
     })
    
       if(cheked.length !== 0){

       const getButton = document.getElementById(cheked[0].keyCode);
       const playAudio = new Audio(cheked[0].url);
       getButton.animate([
        
           { backgroundColor: 'red' },
           { backgroundColor: 'red' }
      ], { 
            duration: 50,
      }); 
       playAudio.play();
       this.controlVolume(playAudio)
       this.setState({
         musicInfo: cheked[0].id
      })                  
     }
    }
  }

  buttonClickFunction = (event) => {
    const filterMusic = this.state.chnager.filter(tunes => {
      return tunes.keyCode === Number(event.target.id)
    });
    const playAudio = new Audio(filterMusic[0].url);
    const buttons = document.getElementById(event.target.id);
    playAudio.play();
    this.controlVolume(playAudio);
    this.setState({
      musicInfo: filterMusic[0].id
   }) 
   buttons.animate([
        
        { backgroundColor: 'red' },
        { backgroundColor: 'red' }
    ], { 
       duration: 50,
    });
   }

  controlVolume = (newVol) => {
    const volume = document.getElementById('vol').value;
    newVol.volume = volume / 100;
    this.setState({musicInfo: `Volume: ${volume}`});
  }

  componentDidMount(){
    let i = 2 , p = 0;
    const onOffButton = () => {
      if(i%2 === 0){
        this.setState({
          Power: true
        })
      }else{
        this.setState({
          Power: false
        })
      }
      i++;
    } 

    const tuneChanger = () => {
        if(p%2 === 0){
          this.setState({
            chnager: bankOne,
            musicInfo: 'Heater kit'
          })
        }else{
          this.setState({
            chnager: bankTwo,
            musicInfo: 'Smooth Piano kit'
          })
        }
        p++;
    }

      $('#pbtn').click(()=> {
        $("button").fadeToggle('slow');
        onOffButton();
      })

      $('#changer').click(() => {
        tuneChanger();
      })
  
     window.addEventListener('keypress', this.listeners);
  }

  UNSAFE_componentWillMount(){
    window.removeEventListener('keypress', this.listeners);
  }

  render(){
    const RenderButtons = bankTwo.map(button => {
      return (
        <button key={button.id} id={button.keyCode} onClick={this.buttonClickFunction}>{button.keyTrigger} </button>
      )
    })

    return (
      <>
      <div className="container">

        <div className="btn">
          {RenderButtons}
        </div>

        <div className="extra">
          <div>
           <p>Power</p>
           <PowerButton ids="pbtn" class='noChange'/>
          </div>
        
         <div className="info">
           <Info detail={this.state}/>
         </div>

         <div>
           <input type="range" min="0" max="100" onChange={this.controlVolume} id='vol'/>
         </div>

         <div>
           <p>Bank</p>
           <PowerButton ids='changer' class="change"/>
         </div>
        </div>
        
        
      </div>
      <p id='spl'>Create your music</p>  
      </>
  )
  }

 }
 

export default ContainMusic;