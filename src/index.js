import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {InputText} from 'primereact/components/inputtext/InputText';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
