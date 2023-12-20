import React, { useState } from "react"
import "./LandingPage.css"
import { Button, FormControl } from "@mui/material"
import SelectComponent from "../styledComponents/SelectComponent"
import SliderComponent from "../styledComponents/SliderComponent"
import { FaSearch } from "react-icons/fa"
import waves from "../../assets/wave.svg"
import HomeCards from "./HomeCards"
import building from "../../assets/building.svg"


const LandingPage = () => {

  const [precio, setPrecio] = useState(150000)
  const sayHola = () => {
    console.log("Hola ")
  }
  return (
    <div className="bg-image flex flex-col justify-center items-center">
      <div className=" bg-p6 h-full w-full bg-opacity-30">
        <div className="flex w-full flex-col justify-center items-center md:items-start md:flex-row-reverse pt-12 gap-16 pb-16">

          <div className="w-full md:w-[50%] flex flex-col gap-10 ">
            <h1 className="text-5xl md:text-7xl font-afacad text-center md:text-left w-full">
              Lorem ipsum dolor 
            </h1>
            <span className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos laboriosam impedit ratione dolorem nihil fugit modi corrupti. At impedit, eveniet enim iusto non explicabo? Illo tenetur molestiae dolores esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque veniam suscipit est fugiat, commodi ducimus esse consequuntur eos incidunt itaque saepe cupiditate, velit sunt corrupti tenetur impedit asperiores sequi.</span>
           </div>

            <div className="bg-white w-72 md:w-80 h-72 flex flex-col justify-center items-center rounded-md border-2 border-p2">
              <FormControl
                sx={{
                  minWidth: 220,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <SelectComponent
                  items={["Zacanco", "Piedra Rosa", "Salida"]}
                  title="Encuentra tu terreno"
                  name="terrenos"
                  key={1}
                  label="Encuentra tu terreno"
                />
                <SliderComponent limit={400000} min={150000} step={10000} title="Desde" value={precio} onValueChange={setPrecio} />
                <Button
                  onClick={sayHola}
                  variant="outlined"
                  startIcon={<FaSearch />}
                >
                  Buscar...
                </Button>
              </FormControl>
            </div>
          
        </div>
        <div className="w-full h-full">
          <img src={waves} alt="waves" className="" />
        </div>

        <HomeCards/>
      </div>
    </div>
  )
}

export default LandingPage
