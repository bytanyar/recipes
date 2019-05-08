import _ from 'lodash';

import Index from './index';

function component() {
    let element = document.createElement('div');
  
    element.innerHTML = _.join(<Index />, ' ');
  
    return element;
  }
  
  document.body.appendChild(component());