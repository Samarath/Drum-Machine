import React from 'react';
import ReactDOM from 'react-dom';
import './Containers/music.css'
import * as serviceWorker from './serviceWorker';
import ContainMusic from './Containers/musicContainer';

ReactDOM.render(<ContainMusic />, document.getElementById('root'));
serviceWorker.unregister();
