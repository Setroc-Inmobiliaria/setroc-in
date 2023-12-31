import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CardComponent = ({ ...props }) => {
  const carouselItems = props.imagenes.map((imagen, index) => {
    return (
      <div className="w-full">
        <img className="w-full" src={imagen} alt="imagen" key={index} />
      </div>
    )
  })

  return (
    <div className=" w-full flex flex-col md:flex-row items-center justify-evenly rounded-md bg-p6 p-5">
      <div className="w-full md:w-[30%] flex flex-col rounded-md">
        <Slider
          adaptiveHeight={true}
          arrows={false}
          dots={false}
          autoplay="true"
          fade="true"
          infinite={true}
          autoplaySpeed={3000}
          className="rounded-md"
        >
          {carouselItems}
        </Slider>
        <h1 className="p-4 relative bottom-2 text-center">
          {props.nombreDeTerreno}
        </h1>
      </div>
      <div className="p-4 flex flex-col gap-10">
        <span>{props.descripcion}</span>

        <div className="w-full flex flex-row justify-evenly text-center">
          <div>
            <h1>Servicios</h1>
            <ul>
              <li>Pavimentado: {props.servicios.pavimentado ? "icono true" : "icono false"}</li>
              <li>Electricidad: {props.servicios.electricidad ? "icono true" : "icono false"}</li>
            </ul>
          </div>

          <div>
          <h1>Financiamiento</h1>
            <ul>
              <li>Precio: {props.precio}</li>
              <li>Enganche: {props.enganche}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
