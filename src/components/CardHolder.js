import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";


function CardHolder(){

const [nasaPhoto, setNasaPhoto] = useState([]);

useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=AH9tPyQSKjGmzaegzXjRh93jslZdCQEdyRGbiFhY`)
    .then (response =>{
        console.log(response);
        setNasaPhoto(response.data);
    })
    .catch(err =>{
        console.log(`The error was: ${err}`);
    });
}, []);

    return(
        <div>
            <PhotoCard title = {nasaPhoto.title} imgurl = {nasaPhoto.hdurl} explanation ={nasaPhoto.explanation}
                date = {nasaPhoto.date}/>
        </div>
    );
}

export default CardHolder;




