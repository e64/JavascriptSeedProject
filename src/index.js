import _ from 'lodash';
import './style.less';
import './stylescss.scss';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min';
import Icon from './animal-paw-print.png';
import Doggy from './dog-head.svg';
import $ from '../node_modules/jquery/dist/jquery.min';
// pas fameux
import JQuery from '../node_modules/jquery/dist/jquery.min';
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!../node_modules/snapsvg/dist/snap.svg.js`);

import Personn from './personn.es2015';
import {renderHelloReact} from './helloReact.jsx';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);


    return element;
}

$(document).ready(function () {
    renderHelloReact();
    $('#jquery').append('<div>Et hop jquery</div>');

    var personn = new Personn('john Doe', 45);
    $('#es2015').append('<div class="personn">'+personn.speak('hello my friend')+'<br/>'+personn.presentme()+'</div>')

    var s = Snap("#dog");
    var g = s.g();

    var image = s.image(Doggy, 0,0, 200,200 );
    var clone = image.clone();

    clone.transform('t100,200r45');


});
document.body.appendChild(component());