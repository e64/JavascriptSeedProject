import _ from 'lodash';
import './../style.less';
//import './stylescss.scss';
//import '../semantic/dist/semantic.min.css';
//import '../semantic/dist/semantic.min';
//import $ from '../node_modules/jquery/dist/jquery.min';
// pas fameux
//const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!../node_modules/snapsvg/dist/snap.svg.js`);

import multipleTable from './multipleTable.es2015';
import {renderDislayTableLayout} from './multiplicationTable.jsx';


$(document).ready(function () {
    renderDislayTableLayout();
});