import Logo from '../images/logo.png';

import Bear from '../images/bear.png';

import Dog from '../images/dog.png';

import './form';

import './submit';

// Import CSS files
import "../css/index.css";


import { Tooltip, Toast, Popover } from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { initdb } from './database';


window.addEventListener('load', function () {

    document.getElementById('logo').src = Logo;

    document.getElementById('bearThumbnail').src = Bear;

    document.getElementById('dogThumbnail').src = Dog;

});

window.addEventListener('load', function () {
    initdb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});