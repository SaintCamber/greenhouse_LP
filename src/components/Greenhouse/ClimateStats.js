import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
function ClimateStats() {
const {Temperature,setTemperature} = useClimate()
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {Temperature}°F
      </div>
      <div className="humidity">
        Humidity {"y"}%
      </div>
    </div>
  )
}

export default ClimateStats;