import React, { useContext, useEffect, useState } from 'react';
import { Comentario } from './Comentario';
import { ComentarioContext } from './ComentariosContext';
function Data() {
  const {comentarios,CargarComentarios}=useContext(ComentarioContext);
  const [data, setData] = useState(null);
  const lista=null;
  useEffect(() => {
    CargarComentarios();
      
  }, []);

  const renderList = (items) => {
    return items.map((item, index) => (
      
      <li  style={{listStyle:"none", margin:"0", padding:"0"}}  key={index}>
        <Comentario  id={item.id} name={item.name}  coment={item.comentario} points={item.puntaje}
        url={item.url} time={item.fechahora} anwsers={item.subcomentario.length}
       />
        {item.subcomentario.length > 0 && (
          <ul style={{listStyle:"none",margin:"0", padding:"0"}}  >
            <div style={{paddingLeft:"5rem"}}>{renderList(item.subcomentario)}</div>
            
          </ul>
        )}
      </li>
    ));
  };

  if (!comentarios) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {renderList(comentarios)}
    </div>
  );
}

export function LoadData(){
    return(<Data/>);
};