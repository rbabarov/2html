import Rendering from './Rendering';
import Actions from './Actions';

const content = new Rendering();

content.bindToDOM(document.querySelector('#container'));
content.draw();

const actions = new Actions(content);
actions.init();
