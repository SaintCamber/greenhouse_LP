import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext'

function LightSwitch() {
  const { themeName, setThemeName } = useTheme()
    console.log(useTheme());
  // themeName = "day"
  function changeLight(e) {
    if (themeName === "day") setThemeName('night')
    if (themeName === 'night') setThemeName('day')
  }

  return (
    <div onClick={ changeLight} className={ `light-switch ${themeName}`} >
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
