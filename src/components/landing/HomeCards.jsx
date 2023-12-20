import React from "react"
import building from "../../assets/building.svg"
import CardsComponent from "../cards/CardsComponent"


const HomeCards = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full h-full">
        <img src={building} alt="building" className="" />
      </div>

      <CardsComponent/>
    </div>
  )
}

export default HomeCards

