import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import './src/styles/elements/base.css';

import BoardGame from './src/components/objects/BoardGame';


const $root = document.querySelector('#root')
const $htmlBoardGame = BoardGame(6)

$root.insertAdjacentHTML('afterbegin', $htmlBoardGame)






//$ é uma boa prática. significa que representa um objeto visual 

// nao usar innerHTML por questoes de segurança 


