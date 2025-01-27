import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1>Weather Bot</h1>
      <WeatherCard city="Wellington" temp={22} condition="windy" />
    </div>
  );
};

export default HomePage;
