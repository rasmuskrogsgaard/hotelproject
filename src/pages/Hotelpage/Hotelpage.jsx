import { Link, Route, Routes } from "react-router-dom";
import { Danmark } from "./Hotels/Danmark";
import { Sverige } from "./Hotels/Sverige";
import { Finland } from "./Hotels/Finland";
import { Island } from "./Hotels/Island";
import { Tyskland } from "./Hotels/Tyskland";
import { Polen } from "./Hotels/Polen";
import style from "./hotel.module.scss" 
import { useState } from "react";
export const HotelPage = () =>  {
    const [selecetedCountry, setSelectedCountry] = useState("Danmark");

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    const renderHotels = () => {
        switch (selecetedCountry) {
            case "Danmark":
                return <Danmark />;
            case "Sverige":
                return <Sverige />;
            case "Finland":
                return <Finland />;
            case "Island":
                return <Island />;
            case "Tyskland":
                return <Tyskland />;
            case "Polen":
                return <Polen />;
            default:
                return <Danmark />;
        }
    };




    return (
        <div className={style.hotelContainer}>
            

            <ul className={style.hotelNav}>
                <li onClick={() => handleCountryClick("Danmark")}>Danmark</li>
                <li onClick={() => handleCountryClick("Sverige")}>Sverige</li>
                <li onClick={() => handleCountryClick("Finland")}>Finland</li>
                <li onClick={() => handleCountryClick("Island")}>Island</li>
                <li onClick={() => handleCountryClick("Tyskland")}>Tyskland</li>
                <li onClick={() => handleCountryClick("Polen")}>Polen</li>
            </ul>
           <h1>Vores hoteller i: {selecetedCountry}</h1>
           {renderHotels()}
           


        </div>
    )
}