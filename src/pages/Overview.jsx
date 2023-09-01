import React, { useState, useEffect } from 'react';

const Overview = () => {
  const [jugadores, setJugadores] = useState ([
    { imagen: 'https://www.fichajes.com/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg',
      title: 'Cristiano Ronaldo', text: 'Cristiano Ronaldo dos Santos Aveiro (Funchal, Madeira; 5 de febrero de 1985), conocido como Cristiano Ronaldo, es un futbolista portugués. Juega como extremo izquierdo o delantero y su equipo actual es el Al-Nassr F. C. de la Liga Profesional Saudí.'},
    { imagen: 'https://media.gettyimages.com/id/92981862/es/foto/raul-gonzalez-of-real-madrid-looks-on-during-the-copa-del-rey-fourth-round-second-leg-match.jpg?s=612x612&w=gi&k=20&c=ZUBtaJPGc2JzFBKbKFZyjb2Ybas5CeKMTaqmc-3kRcM=', 
      title: 'Raul Gonzalez', text: 'Más conocido deportivamente como Raúl, es un exfutbolista y entrenador español. Su posición era la de delantero desarrollando la mayor parte de su carrera en el Real Madrid Club de Fútbol de la Primera División de España, mientras que llegó a acumular 22 títulos entre los distintos equipos de los que formó parte.'},
    { imagen: 'https://e0.pxfuel.com/wallpapers/925/419/desktop-wallpaper-zinedine-zidane-zinedine-zidane.jpg', 
      title: 'Zinedine Zidane', text: 'Como centrocampista ofensivo, es considerado como uno de los mejores jugadores de su generación, así como uno de los mejores futbolistas de todos los tiempos,​ obteniendo el «Balón de Oro» en 1998, siendo nombrado en tres ocasiones como «Jugador Mundial de la FIFA» en 1998, 2000 y 2003, y como «mejor futbolista europeo de los últimos 50 años» por la UEFA.'},
      { imagen: 'https://tmssl.akamaized.net/images/foto/galerie/sergio-ramos-1572609665-27087.jpg?lm=1572609684', 
      title: 'Sergio Ramos', text: 'Formado en las categorías inferiores del Sevilla F. C, debutó en Primera División con el equipo hispalense en 2004. Para la temporada 2005-06 fichó por el Real Madrid Club de Fútbol, equipo del que fue capitán desde el curso 2015-16 y con el que se ha proclamado, entre otros títulos, pentacampeón de Liga, tetracampeón de Europa y tetracampeón del mundo..'}
  ])

  useEffect(() => {
    const getFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const updJugadores = jugadores.map((jugador) => ({
      ...jugador,
      isFavorite: getFavoritos.includes(jugador.title),
    }));
    setJugadores(updJugadores);
  }, []);

  const addFavorito = (index) => {
    const updJugadores = [...jugadores];
    updJugadores[index].isFavorite = !updJugadores[index].isFavorite;
    setJugadores(updJugadores);

    const favoritos = updJugadores
      .filter((jugador) => jugador.isFavorite)
      .map((jugador) => jugador.title);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  };

  return (
    <div className="container mt-4">
      <div className="row">
      {jugadores.map((jugador, index) => (
        <div className='col-md-6 col-sm-12 col-lg-3' key={index}>
          <div className={`card shadow-lg zoom-on-hover d-flex h-100 ${jugador.isFavorite ? 'border-danger' : ''}`}
              >
          <img className='card-img-top card-image' src={jugador.imagen} alt="" />
          <div className='card-body'>
            <h4 className='card-title'>{jugador.title} </h4>
            <p className='card-text'>{jugador.text}</p>
            <div className="d-flex justify-content-between">
            <button className="btn btn-primary" style={{ backgroundColor: '#2a2a72', color: '#fff' }}>Detalles</button>
            <button
              className={`btn ${jugador.isFavorite ? 'btn-danger' : 'btn-primary'}`}
              onClick={() => addFavorito(index)}
              style={{
                backgroundColor: jugador.isFavorite ? 'red' : '#2a2a72',
                color: '#fff',
              }}
            >
              <span>🤍</span>
            </button>

            </div>
          </div>
        </div>
      </div>
      ))}  
    </div>
    </div>
  )
}

export default Overview