import React from "react";
import styles from "./WeatherCard.module.css";

interface WeatherCardProps {
  city: string;
  temp: number;
  condition: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temp, condition }) => {
  return (
    <div className={styles.weathercard}>
      <h2>{city}</h2>
      <p>Temperature: {temp} Celcius</p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default WeatherCard;
