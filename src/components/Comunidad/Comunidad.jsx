import dataImages from './ComunidadData';
import ComunidadCard from './CardComunidad';
import './comunidad.css';
const Comunidad = () => {
  return (
    <>
      <div className="comunidad-text">
        <h2>Comunidad</h2>
      </div>
      <div className="comunidad-grid">
        {dataImages.map((value, index) => {
          return (
            <ComunidadCard
              key={index}
              imagen={value.imgUrl}
              nombre={value.nombre}
              link1={value.userIg}
              link2={value.linkTw}
              link3={value.linkDC}
              chat={value.chat}
            />
          );
        })}
      </div>
    </>
  );
};

export default Comunidad;
