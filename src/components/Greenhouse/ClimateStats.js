import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
function ClimateStats() {

  const { Temperature, setTemperature, Humidity, SetHumidity } = useClimate()

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {Temperature}°F
      </div>
      <div className="humidity">
        Humidity {Humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
