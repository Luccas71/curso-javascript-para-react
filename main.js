import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import './src/styles/elements/base.css';

import CardGame from "./src/components/CardGame"


const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

$root.insertAdjacentHTML('afterbegin', $htmlCardGame)






//$ é uma boa prática. significa que representa um objeto visual 

// nao usar innerHTML por questoes de segurança 


