import React from "react"
import CardsComponent from "../components/cards/CardsComponent"
import Layout from "../components/layout"

const Propiedades = () => {
  return (
    <Layout>
      <div className="w-full p-3 flex flex-col md:p-12 bg-red-300">
        <CardsComponent />
      </div>
    </Layout>
  )
}

export default Propiedades
