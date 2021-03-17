import { useEffect, useState } from "react";
import ReactPannellum, { addScene, getHfov, getPitch, getYaw } from "react-pannellum";
// import { scenes } from '../scenes'
export default function Viewer3D() {
  const [coordinate, setCoordinate] = useState("")
  const [viewportWidth, setViewPortWidth] = useState(window.screen.width)

  const scenes = [

    //house tunneld
    {
      id: 'houseTunnel',
      source: {
        preview: '/preview/tunnel.jpg',
        showControls: false,
        imageSource: '/panoPic/tunnel.jpg',
        hfov: getRelativeHfov(),
        pitch: 0,
        yaw: -49,
        type: "equirectangular",
        hotSpots: [
          {
            //livingroom
            pitch: -15,
            yaw: -69,
            type: "scene",
            text: "Living Room",
            sceneId: 'livingroom'
          },
          {
            //bringspring room
            pitch: 0,
            yaw: 50,
            type: "scene",
            text: "Bringspring Storage Room",
            sceneId: 'bringspring'
          },
          {
            //1st toilet
            pitch: 0,
            yaw: 170,
            type: "scene",
            text: "1st floor Toilet",
            sceneId: '1stToilet'
          },
          {
            //1st toilet
            pitch: -14,
            yaw: -150,
            type: "scene",
            text: "Washing Area",
            sceneId: 'washing'
          },
        ],

      }
    },

    //bringspringWarehouse
    {
      id: 'bringspring',
      source: {
        showControls: false,
        preview: '/preview/bringspring.jpg',
        imageSource: '/panoPic/bringspring.jpg',
        hfov: getRelativeHfov(),
        pitch: -3,
        yaw: 43,
        type: "equirectangular",
        hotSpots: [
          {
            //housetunnel
            pitch: 0,
            yaw: -80,
            type: "scene",
            text: "Exit Bringspring Storage",
            sceneId: 'houseTunnel'
          },
          {
            //housetunnel
            pitch: 5,
            yaw: 29,
            type: "info",
            text: "Bring Spring Product",
            URL: 'https://www.bringspringid.com'
          },
        ],

      }
    },

    //1stFloorToiletW
    {
      id: '1stToilet',
      source: {
        showControls: false,
        preview: '/preview/toiletlt1.jpg',
        imageSource: '/panoPic/toiletlt1.jpg',
        hfov: getRelativeHfov(),
        pitch: -3,
        yaw: 43,
        type: "equirectangular",
        hotSpots: [
          {
            //tunnel
            pitch: 0,
            yaw: -80,
            type: "scene",
            text: "Exit Toilet",
            sceneId: 'houseTunnel'
          },
          {
            //tunnel
            pitch: -49,
            yaw: 2.8,
            type: "info",
            text: "Just a regular Toilet",
          },
        ],

      }
    },

    //Washing
    {
      id: 'washing',
      source: {
        showControls: false,
        preview: '/preview/washing.jpg',
        imageSource: '/panoPic/washing.jpg',
        hfov: getRelativeHfov(),
        pitch: 0,
        yaw: -58,
        type: "equirectangular",
        hotSpots: [
          {
            //tunnel
            pitch: 0,
            yaw: -58,
            type: "scene",
            text: "Exit Washing Area",
            sceneId: 'houseTunnel'
          },
          {
            //Washing Machine
            pitch: -46,
            yaw: 6,
            type: "info",
            text: "Portable Washing Machine",
            URL: 'https://www.tokopedia.com/arthurshopbless/mesin-cuci-portable-mito-wm1?src=topads'
          },
          {
            //Shadow
            pitch: -38,
            yaw: 128,
            type: "info",
            text: "Insta 360 Shadow",
          },
        ],

      }
    },

    //Upstairs
    {
      id: 'upstrairs',
      source: {
        showControls: false,
        preview: '/preview/stairlow.jpg',
        imageSource: '/panoPic/stairlow.jpg',
        hfov: getRelativeHfov(),
        pitch: -18,
        yaw: -100,
        type: "equirectangular",
        hotSpots: [
          {
            //livingroom
            pitch: -38,
            yaw: -92,
            type: "scene",
            text: "LivingRoom",
            sceneId: 'livingroom'
          },
          {
            //2ndFloor
            pitch: 8,
            yaw: -144,
            type: "scene",
            text: "2nd Floor",
            sceneId: '2ndFloor'
          },
          {
            //Washing Area
            pitch: -58,
            yaw: 15,
            type: "scene",
            text: "Washing Area",
            sceneId: 'washing'
          },

          {
            //Cable
            pitch: -12,
            yaw: -124,
            type: "info",
            text: "Hanging LAN Cable",

          },
        ],


      }
    },

    //2nd Floor
    {
      id: '2ndFloor',
      source: {
        showControls: false,
        preview: '/preview/stairhigh.jpg',
        imageSource: '/panoPic/stairhigh.jpg',
        hfov: getRelativeHfov(),
        pitch: -13,
        yaw: -131,
        type: "equirectangular",
        hotSpots: [
          {
            //bedroomMarc
            pitch: -2.2,
            yaw: -120,
            type: "scene",
            text: "Marc's Bedroom",
            sceneId: 'marcBedroom'
          },
          {
            //2ndFloorToilet
            pitch: -5,
            yaw: 173,
            type: "scene",
            text: "2nd Floor Toilet",
            sceneId: '2ndFloorToilet'
          },
          {
            //totheFirstFloor
            pitch: -42,
            yaw: -76,
            type: "scene",
            text: "To the first floor",
            sceneId: 'upstrairs'
          },

          {
            //router
            pitch: -56,
            yaw: -140,
            type: "info",
            text: "Wifi Router",

          },
          {
            //dirtyCothes
            pitch: -21,
            yaw: -103,
            type: "info",
            text: "Dirty Towel",

          },
        ],


      }
    },
    //2nd Floor Toilet
    {
      id: '2ndFloorToilet',
      source: {
        showControls: false,
        preview: '/preview/toiletlt2.jpg',
        imageSource: '/panoPic/toiletlt2.jpg',
        hfov: getRelativeHfov(),
        pitch: -13,
        yaw: -131,
        type: "equirectangular",
        hotSpots: [
          {
            //exit
            pitch: -2.2,
            yaw: -120,
            type: "scene",
            text: "Exit Toilet",
            sceneId: '2ndFloor'
          },
          {
            //Shower
            pitch: -13,
            yaw: -18,
            type: "info",
            text: "Shower Area",

          },

        ],


      }
    },

    //Marc's Toilet
    {
      id: 'marcBedroom',
      source: {
        showControls: false,
        preview: '/preview/iyoBedroom.jpg',
        imageSource: '/panoPic/iyoBedroom.jpg',
        hfov: getRelativeHfov(),
        pitch: -13,
        yaw: -131,
        type: "equirectangular",
        hotSpots: [
          {
            //exit
            pitch: -2.2,
            yaw: -134,
            type: "scene",
            text: "Exit Bedroom",
            sceneId: '2ndFloor'
          },

          {
            //guitar
            pitch: -28,
            yaw: 82,
            type: "info",
            text: "Rusted String Guitar",

          },
          {
            //belt
            pitch: 1,
            yaw: 113,
            type: "info",
            text: "Birthday Belt",

          },
          {
            //laptop
            pitch: -20,
            yaw: -52,
            type: "info",
            text: "New Compact Laptop",
            URL: 'https://www.asus.com/Laptops/For-Home/ZenBook/ZenBook-14-UX425/'
          },
          {
            //unused batik
            pitch: 1,
            yaw: 37,
            type: "info",
            text: "Unused Batik",
          },
          {
            //unused batik
            pitch: 14,
            yaw: -130,
            type: "info",
            text: "Dangerous Pull Up Bar",
            URL: 'https://www.tokopedia.com/idolasport/pull-up-bar-door-chin-up-door-way-gymbar-alat-fitnes-pull-up?whid=0'
          },

        ],


      }
    },
  ]
  useEffect(() => {

    scenes.map((scene) => {
      addScene(scene.id, scene.source)
    })
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