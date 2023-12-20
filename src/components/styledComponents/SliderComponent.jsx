import React, { useState } from "react";
import { Slider } from "@mui/material";
// import colors from "../../../constants/colors";
// import * as style from '../Slider/Slider.module.css'

const SliderComponent = ({ type, coin, size, classes, value, onValueChange, limit, step, min, title }) => {

    const onSlide = (e, newValue) => {
        e.preventDefault()
        onValueChange(newValue)
        console.log(newValue);
    }

    const formatValue = value.toLocaleString('es-MX')

    return (
        <div className={`flex flex-col justify-center items-center`}>
            <h4>{title} ${formatValue}</h4>
            <Slider
                min={min}
                max={limit}
                step={step}
                // className={classes ? classes : null}
                onChange={onSlide}
                value={value}
                // defaultValue={value}
                aria-label="Default"
                valueLabelDisplay="off"
                style={{
                    color: "#42838A",
                    height: 8,
                }}
                sx={{
                    color: '#276296',
                    '& .MuiSlider-rail': {
                        backgroundColor: '#276296',
                    },
                }}
            />
        </div>
    )
}

export default SliderComponent