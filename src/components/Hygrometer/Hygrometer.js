import ReactSlider from "react-slider";
import {useClimate} from "../../context/ClimateContext"
import "./Hygrometer.css";
  // import { useClimate } from "../../context/ClimateContext";

function Hygrometer() {

  const {Humidity, setHumidity} = useClimate()
  console.log(ReactSlider.onAfterChange)
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {Humidity}%</div>
      <ReactSlider
        value={Humidity}
        onAfterChange={(val) => setHumidity(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;
