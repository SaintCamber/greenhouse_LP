import { useEffect } from "react";
import ReactSlider from "react-slider";
import { useClimate, useChange } from "../../context/ClimateContext";
import './Thermometer.css';

function Thermometer() {
  let { Temperature, setTemperature, DesiredTemperature, setDesiredTemperature } = useClimate()




  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {Temperature}°F</div>

      <ReactSlider
        value={DesiredTemperature}
        onAfterChange={(val) => {setDesiredTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
