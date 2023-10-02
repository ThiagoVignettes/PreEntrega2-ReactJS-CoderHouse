import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const cards = [
    {
      id: 1,
      categoria: "cremas",
      foto: "https://depilogros.000webhostapp.com/img/New%20Body%20De%20Beaute.jpeg",
      nombre:
        "New Body de Beaute",
      descripcion:
        "La crema New Body de Beauté Brève es un producto de cuidado de la piel que promete hidratación y revitalización. Sin embargo, muchos usuarios han encontrado que su textura es pesada y su fragancia abrumadora, lo que la hace menos atractiva. Además, algunos no han experimentado resultados notables en términos de mejoras en la piel después de su uso",
      precio: 30,
    },
    {
      id: 2,
      categoria: "locion",
      foto: "https://depilogros.000webhostapp.com/img/Losion%20tonica%20Reequilibrante.jpeg",
      nombre: "Locion tonica Reequilibrante",
      descripcion:
        "La Loción Tónica Reequilibrante es un esencial en tu rutina de cuidado facial. Esta fórmula suave y refrescante está diseñada para restaurar el equilibrio natural de tu piel. Enriquecida con ingredientes naturales como extractos de plantas y aceites esenciales, esta loción tonifica y refresca la piel, eliminando impurezas y preparándola para la absorción de tratamientos posteriores. Disfruta de una piel revitalizada y saludable con cada aplicación, mientras que su aroma suave proporciona una experiencia relajante para tus sentidos. Un paso clave para una piel radiante y equilibrada.",
      precio: 20,
    },
    {
      id: 3,
      categoria: "cremas",
      foto: "https://depilogros.000webhostapp.com/img/Microesferas%20con%20vitamina%20C%20en%20gel%20con%20acido%20hialuronico.jpeg",
      nombre: "Microesferas con vitamina C en gel con acido Hialuronico",
      descripcion:
        "Las microesferas de vitamina C ofrecen una liberación gradual de este antioxidante, ayudando a iluminar y mejorar la apariencia de la piel al reducir la pigmentación y promover la producción de colágeno.",
      precio: 10,
    },
    {
      id: 4,
      categoria: "gel",
      foto: "https://depilogros.000webhostapp.com/img/Gel%20desincrustante%20para%20puntos%20negros.jpeg",
      nombre:
        "Gel para puntos negros",
      descripcion:
        "El gel para puntos negros es una solución eficaz para combatir las imperfecciones en la piel.",
      precio: 13,
    },
    {
      id: 5,
      categoria: "locion",
      foto: "https://depilogros.000webhostapp.com/img/Locion%20astringente%20seborreguladora.jpeg",
      nombre: "Locion astringente seborreguladora",
      descripcion:
        "La loción seborreguladora es un producto de cuidado de la piel diseñado específicamente para ayudar a regular la producción de sebo en la piel.",
      precio: 22,
    },
    {
      id: 6,
      categoria: "gel",
      foto: "https://depilogros.000webhostapp.com/img/Gel%20de%20limpieza%20extrasuave%20con%20avena%20y%20tea%20tree.jpeg",
      nombre: "Gel de limpieza extrasuave con avena y tea tree",
      descripcion:
        "El gel de limpieza extrasuave con avena y tea tree es un producto de cuidado facial especialmente formulado para proporcionar una limpieza delicada pero efectiva. ",
      precio: 43,
    }
  ];

  const {id} = useParams()

  return (
    <div>
    <h1 style={{margin: "50px"}}>Mas informacion acerca de {cards[id-1].nombre}</h1>
    <div style={{ margin: "auto" }} className="col-sm-8 col-md-5">
    <img className="card-img-top" src={cards[id-1].foto} alt="Card image"/>
    <div className="card-body">
        <h4 className="card-title" style={{margin: "50px"}}>{cards[id-1].nombre}</h4>
        <p className="card-text">{cards[id-1].descripcion}</p>
        <h5 className="card-text">$ {cards[id-1].precio} USD</h5>
        <button id={cards[id-1].id} className="btn btn-primary">Comprar</button>
    </div>
    </div>
  </div>
  )
}

export default ItemDetailContainer