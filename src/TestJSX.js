import image from './1.jpg'

function TestJSX() {
    return (
      <div className="TestJSX">
        <header className="App-header">
          <p>
          Fast and Furious
          </p>
          <p>
          <img alt='' src={image} />
          </p>
          <p>
          La nuit tombée, Dominic Toretto règne sur les rues de Los Angeles à la tête d'une équipe de fidèles qui partagent son goût du risque, sa passion de la vitesse et son culte des voitures de sport lancées à plus de 250 km/h dans des rodéos urbains d'une rare violence. Ses journées sont consacrées à bricoler et à relooker des modèles haut de gamme, à les rendre toujours plus performants et plus voyants, à organiser des joutes illicites où de nombreux candidats s'affrontent sans merci sous le regard énamouré de leurs groupies. A la suite de plusieurs attaques de camions, la police de L.A. décide d'enquêter sur le milieu des street racers. Brian, un jeune policier, est chargé d'inflitrer la bande de Toretto, qui figure, avec celle de son rival Johnny Tran, au premier rang des suspects.
          </p>
  
  
        </header>
      </div>
    );
  }

export default TestJSX;
