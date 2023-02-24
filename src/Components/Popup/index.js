
import { Button, Popup } from 'semantic-ui-react'

import './styles.scss';

const PopupInfo = () => (
  <Popup
    content="Ce championnat regroupe 12 équipes qui disputent chacune 38 matchs. Chaque club se rencontre trois fois puis le championnat se divise en deux au soir de la 33e journée. Ainsi les 6 meilleures équipes jouent le titre et les places européennes et s'affrontent une fois de plus dans ces séries éliminatoires (play-off en anglais). Il en va de même pour les 6 clubs du bas de tableau en play-down. À la fin de la saison, l'équipe qui totalise le plus faible nombre de points est reléguée en Championship, le deuxième niveau du football écossais."
    on='click'
    pinned
    trigger={<Button size= "small" content= "info" color="yellow" />}
    position= 'bottom left'
    size='huge'
  />
)

export default PopupInfo