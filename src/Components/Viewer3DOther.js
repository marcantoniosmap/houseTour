import { useEffect, useState } from "react";
import { Pannellum, pannellum } from 'pannellum-react'
import { scenes } from '../scenesOther'

export default function Viewer3D() {
  const [coordinate, setCoordinate] = useState("")
  const [viewportWidth, setViewPortWidth] = useState(window.screen.width)
  const [activeState, setActiveState] = useState(scenes[0])


  useEffect(() => {



  }, [])

  function changeScreen(currentId) {
    const temp = scenes.filter((scene) => {
      return scene.id === currentId
    })
    setActiveState(temp[0])
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {
        activeState &&

        <Pannellum
          width='100%'
          height='100%'
          preview={activeState.source.preview}
          image={activeState.source.imageSource}
          pitch={activeState.source.pitch}
          yaw={activeState.source.yaw}
          hfov={activeState.source.hfov}
          autoLoad
          showControls={false}
          type="equirectangular"
        >
          {
            activeState.source.hotSpots.map((hotspot) => (
              <Pannellum.Hotspot
                type={hotspot.type === 'scene' ? 'custom' : 'info'}
                pitch={hotspot.pitch}
                yaw={hotspot.yaw}
                handleClick={(e) => changeScreen(hotspot.sceneId ? hotspot.sceneId : '')}
                text={hotspot.text ? hotspot.text : ''}
              ></Pannellum.Hotspot>
            ))
          }


        </Pannellum>
      }
      <div className="infoButton">
        <img src='/label.png' />
      </div>
    </div>

  )
}