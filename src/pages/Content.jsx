import React, { useEffect, useContext, useState } from 'react';
import { Contexto } from '../contexto/Contexto';

const Content = () => {
  const deportes = [
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MotoX_racing03_edit.jpg/800px-MotoX_racing03_edit.jpg',
      titulo: 'Motocross', 
      descripcion: 'Es una forma de competición de motocicletas en todo terreno celebrada en circuitos cerrados. El deporte fue evolucionando desde las pruebas celebradas en el Reino Unido.El motocross es un deporte físicamente exigente que tiene lugar en todo tipo de condiciones tanto de pista como de clima.',
      categoria:'Motor', equipo: 'Joël Robert',
      link:'https://en.wikipedia.org/wiki/Jo%C3%ABl_Robert'},
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bridge_declarer.jpg/320px-Bridge_declarer.jpg',
      titulo: 'Bridge (Cartas)', 
      descripcion: 'Es un juego de naipes de cuatro jugadores formando parejas, que consiste en que en cada ronda una de las parejas debe ganar como mínimo un número de bazas previamente acordado en una subasta entre los jugadores. ',
      categoria:'Mesa', equipo: 'Harold Vanderbilt',
      link:'https://es.wikipedia.org/wiki/Harold_Vanderbilt'},
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Europei_di_pallavolo_2005_-_Italia-Russia.jpg/800px-Europei_di_pallavolo_2005_-_Italia-Russia.jpg',
      titulo: 'Voleibol', 
      descripcion: 'Es un deporte que se juega con una pelota y en el que dos equipos, integrados por seis jugadores cada uno, se enfrentan sobre una área de juego separada por una red central. El objetivo del juego es pasar el balón por encima de la red, logrando que llegue al suelo del campo contrario mientras el equipo adversario intenta impedir simultáneamente que lo consiga, forzándolo a errar en su intento. Surge una fase de ataque en un equipo cuando intenta que el balón toque el suelo del campo contrario mientras que en el otro equipo surge una fase de defensa intentando impedirlo.',
      categoria:'Equipo', equipo: 'Rusia',
      link:'https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Voleibol_Masculino'},
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Avalanche_Weiman_bw_game.jpg/1024px-Avalanche_Weiman_bw_game.jpg',
      titulo: 'Hockey', 
      descripcion: 'Es una familia de deportes originada en Inglaterra a mediados del siglo XVIII en la cual dos equipos compiten para llevar una pelota de un material duro (plástico) o un disco de corcho a la portería contraria para anotar puntos con la ayuda de un bastón largo llamado "palo de hockey" (stick en inglés, bâton en francés).',
      categoria:'Equipo', equipo: 'Canada',
      link:'https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Hockey_sobre_Hielo_Masculino'},
    { img: 'https://s.france24.com/media/display/f1c47ecc-aa50-11ed-923b-005056bfb2b6/w:1280/p:16x9/2023-02-11T192833Z_596431449_UP1EJ2B1I3J5E_RTRMADP_3_SOCCER-CLUB-MAD-ALH-REPORT.JPG',
      titulo: 'Fútbol', 
      descripcion: 'Es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno, mientras los árbitros se ocupan de que las normas se cumplan correctamente. Es, ampliamente, considerado el deporte más popular del mundo, pues lo practican unas 270 millones de personas.',
      categoria:'Equipo', equipo: 'Real Madrid',
      link:'https://es.wikipedia.org/wiki/Real_Madrid_Club_de_F%C3%BAtbol'},
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/International_draughts.jpg/320px-International_draughts.jpg',
      titulo: 'Damas', 
      descripcion: 'El juego consiste en mover las piezas en diagonal a través de los cuadros negros (o blancos en algunas variantes) de un tablero de 64 o 100 cuadros. Si alguien no mata (captura), perderá esa pieza al jugar, contrario a la intención obligatoria de capturar (comer) las piezas del jugador contrario, pasando por encima de dichas piezas.',
      categoria:'Mesa', equipo: 'Marion Tinsley',
      link:'https://es.wikipedia.org/wiki/Marion_Tinsley'},
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ben_Willshire_GP1.jpg/800px-Ben_Willshire_GP1.jpg',
      titulo: 'Karting',
      descripcion: 'Es una disciplina del automovilismo que se practica con karts sobre circuitos llamados kartódromos, que tienen entre 600 y 1.700 metros de longitud, y un ancho de entre 8 y 15 metros. Dadas sus características, el kart es la modalidad por excelencia de formación de pilotos: suele ser el primer automóvil en el que debutan los aspirantes a pilotos de competición, a edades tan tempranas como los cinco años.',
      categoria:'Motor', equipo: 'Comisión Internacional de Karting',
      link:'https://www.fia.com/es/events/karting/season-2019/karting'},
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Hornberg.jpg/200px-Hornberg.jpg',
      titulo: 'Trial', 
      descripcion: 'El trial de motociclismo es una disciplina motociclística en la que los pilotos deben superar obstáculos sin tocar el suelo con el cuerpo ni caerse. Las habilidades esenciales son el equilibrio y la planificación de los movimientos para avanzar en el recorrido. Esta disciplina es popular en España, particularmente en Cataluña, y el Reino Unido.',
      categoria:'Motor', equipo: 'TrialGP',
      link:'https://www.fim-moto.com/en/news/news-detail/article/trialgp-busto-raises-his-game-with-gasgas'},
    { img: 'https://www.math4all.es/wp-content/uploads/2020/07/tablero-de-parchis.jpg',
      titulo: 'Parchis', 
      descripcion: 'Es un juego de 2 a 4 jugadores aunque hay versiones para más jugadores. Requiere un tablero característico formado por un circuito de 100 casillas y 4 “casas” de diferentes colores: amarillo, rojo, verde y azul. Cada jugador dispone de 4 fichas del mismo color que su “casa” y un dado pero en otras versiones se juega con dos dados, sobre todo en internet. El objetivo del juego consiste en llevar todas las fichas desde su casa hasta la meta recorriendo todo el circuito, intentando “comerse” o capturar el resto de fichas en el camino. Gana el primer jugador que consiga meter todas sus fichas en la meta',
      categoria:'Mesa', equipo: 'Puri Allué',
      link:'https://cadenaser.com/aragon/el-primer-premio-del-campeonato-mundial-de-parchis-de-el-grado-se-va-a-jaca-radio-huesca/'}
  ]

  const {lista, setLista} = useContext(Contexto)

  const [categoriaSelec, setCategoriaSelec] = useState('');

  useEffect(()=>{
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    const combinedCards = [...deportes, ...savedCards];
    setLista(combinedCards);
  },[categoriaSelec]);

  const CategoriaChange = (event) => {
    setCategoriaSelec(event.target.value);
  };

  const filteredSports = categoriaSelec
    ? lista.filter((sports) => sports.categoria === categoriaSelec)
    : lista;

  return (
    <div className="container mt-4" >
      <div className="col-md-6 mb-3" >
          <select
            className="form-select"
            value={categoriaSelec}
            onChange={CategoriaChange}>
            <option value="">Seleccione una categoria para filtrar.</option>
            <option value="Motor">Motor</option>
            <option value="Mesa">Mesa</option>
            <option value="Equipo">Equipo</option>
          </select>
        </div>
      <div className="row" style={{ marginTop: '30px' }}>
      {filteredSports.map((sports, index) => (
        <div className='col-md-6 col-sm-6 mb-3 col-lg-4' key={index}>
          <div className="card shadow-lg zoom-on-hover d-flex h-100">
            <img className='card-img-top card-image' src={sports.img} alt="" />
            <div className='card-body'>
                <h4 className='card-titulo'>{sports.titulo} </h4>
                <p className='card-text'>{sports.descripcion}</p>
                <p className='card-text'><span className='fw-bold'>Categoria:</span> {sports.categoria}</p>
                <p className='card-text'><span className='fw-bold'>Equipo:</span> <a target="_blank" href={sports.link}>{sports.equipo}</a></p>
            </div>
          </div>
        </div>
      ))}  
    </div>
    </div>
  )
}

export default Content