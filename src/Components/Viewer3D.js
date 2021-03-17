import { useEffect, useState } from "react";
import ReactPannellum, { addHotSpot, addScene, getAllScenes, getConfig, getHfov, getHfovBounds, getPitch, getYaw, getYawBounds, isLoaded, loadScene, setHfov, setPitch, setYaw } from "react-pannellum";
import { scenes } from '../scenes'
export default function Viewer3D() {
  const [coordinate, setCoordinate] = useState("")
  const [viewportWidth, setViewPortWidth] = useState(window.screen.width)

  useEffect(() => {

    scenes.map((scene) => {
      addScene(scene.id, scene.source)
    })
    console.log(getAllScenes())
  }, [])
  function tryFunc() {
    setCoordinate(getPitch() + '/' + getYaw() + '/' + getHfov())
  }

  function getRelativeHfov() {
    return viewportWidth > 500 ? 120 : 50
  }
  const config = {
    preview: '/preview/livingroom.jpg',
    pitch: 0,
    yaw: 78,
    hfov: getRelativeHfov(),
    autoRotate: 0,
    autoLoad: true,
    showControls: false,
    hotSpots: [
      {
        //house tunnel
        pitch: 0,
        yaw: 42.5,
        type: "scene",
        text: "Deeper into the House",
        sceneId: 'houseTunnel'
      },
      {
        //house tunnel
        pitch: 20,
        yaw: 105,
        type: "scene",
        text: "Upstairs",
        sceneId: 'upstrairs'
      },
      {
        //House Owner
        pitch: -20,
        yaw: -64,
        type: "info",
        text: "House Owner till today",
        URL: 'https://www.instagram.com/laviolaflorence/'
      },
      {
        //Bringspring
        pitch: -12,
        yaw: 138,
        type: "info",
        text: "BringSpring Products",
        URL: 'https://www.bringspringid.com/'
      },
      {
        //Bambi
        pitch: -35,
        yaw: -80,
        type: "info",
        text: "Bambi the Dog",
        URL: 'https://www.instagram.com/bambiithepoodle/'
      },
      {
        //CoffeeMaker
        pitch: -8,
        yaw: -4,
        type: "info",
        text: "Coffee Machine",
        URL: 'https://excelso-coffee.com/product/excelso-unakaffe-ventura-xs200-red/'
      },
    ]
  }
  const style = {
    minWidth: '300px',
    width: "100%",
    height: "100%",
  }
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactPannellum
        id="1"
        style={style}
        sceneId="livingroom"
        imageSource="/panoPic/livingroom.jpg"
        config={config}

      />
      <div className="infoButton">
        {/* <button onClick={tryFunc}>Click me</button>
        <p className="getCoordinate">{coordinate}</p> */}
        <img src='/label.png' />
      </div>
    </div>
  )
}