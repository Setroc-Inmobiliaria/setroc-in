import React from "react"
import "./LandingPage.css"
import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import SelectComponent from "../styledComponents/SelectComponent"
import SliderComponent from "../styledComponents/SliderComponent"
import { FaSearch } from "react-icons/fa"
// import {SelectComponent} from '../styledComponents/SelectComponent'
// import CardsComponent from "../cards/CardsComponent";

const LandingPage = () => {
  const sayHola = () => {
    console.log("Hola ")
  }
  return (
    <div className="bg-image h-screen w-full flex flex-col justify-center items-center">
      <div className=" bg-p6 bg-opacity-30 w-full h-screen flex flex-col gap-12 justify-center items-center">
        <h1 className="text-5xl md:text-8xl text-center p-12 font-afacad">Encuentra el terreno de tus suenos, papure</h1>
        <div className="bg-white w-80 h-96 flex flex-col justify-center items-center rounded-md border-2 border-p2">
          <FormControl
            sx={{
              minWidth: 220,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <SelectComponent
              items={["Zacanco", "Piedra Rosa", "Salida"]}
              title="Encuentra tu terreno"
              name="terrenos"
              key={1}
              label="Encuentra tu terreno"
            />
            <SliderComponent limit={150} min={0} title="Desde" />
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
    </div>
  )
}

export default LandingPage
