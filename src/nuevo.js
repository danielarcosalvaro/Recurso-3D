import React, { Component } from 'react';
import { TimelineLite, CSSPlugin , TweenLite} from "gsap/all";
class nuevo extends Component {
   



    var bezPoints = [{x:200, y:100}, {x:400, y:0}, {x:300, y:200}];
    var tweenA = TweenLite.to(".a", 1, {bezier:bezPoints});
    
    $("#restart").click(function(){
      tweenA.restart();
    })
    

    render() {
        return (
            <div>
          <div class="wrapper">

            <div class="box green a">A</div>

           <div class="nav">
              <button id="restart">restart</button>
           </div>

            </div>
               <div class="brandBar">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/GreenSock-logo-text-outlines.svg"></img>
            </div>
        
         </div>
        );
    };



export default nuevo;