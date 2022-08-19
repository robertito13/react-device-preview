import React, { ReactNode } from 'react';
import './devices.min.css';

interface ReactDevicePreviewProps {
  children: ReactNode

  device: 'iphonex' | 'galaxynote8' | 'iphone8' | 'iphone8plus' | 'iphone5s' | 'iphone5c' | 'ipadmini' | 'nexus5' | 'galaxys5' | 'macbookpro';
  color?: string;
  position?: string;
  scale?: number;
}

export default function ReactDevicePreview(props: ReactDevicePreviewProps) {
  const { device = 'iphonex', position = '', color = '', scale = 1.0, children } = props

  const scaleView = {
    WebkitTransform: `scale(${ scale })`,
    transform: `scale(${ scale })`
  };

  const wrp = (name: string) => `marvel-device ${ name } ${ position } ${ color }`;

  const iphonex = () => (
    <div className={ wrp('iphone-x') } style={ scaleView }>
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="bottom-bar"></div>
      <div className="volume"></div>
      <div className="overflow">
        <div className="shadow shadow--tr"></div>
        <div className="shadow shadow--tl"></div>
        <div className="shadow shadow--br"></div>
        <div className="shadow shadow--bl"></div>
      </div>
      <div className="inner-shadow"></div>
      <div className="screen">
        { children }
      </div>
    </div>
  )

  const galaxynote8 = () => (
    <div className={ wrp('note8') }>
      <div className="inner"></div>
      <div className="overflow">
        <div className="shadow"></div>
      </div>
      <div className="speaker"></div>
      <div className="sensors"></div>
      <div className="more-sensors"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="screen">
        { children }
      </div>
    </div>
  )

  const iphone8 = () => (
    <div className={ wrp('iphone8') }>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        { children }
      </div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>
  )

  const iphone8plus = () => (
    <div className={ wrp('iphone8plus') }>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        { children }
      </div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>
  )

  const iphone5c = () => (
    <div className={ wrp('iphone5c') }>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        { children }
      </div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>
  )

  const iphone5s = () =>  (
    <div className={ wrp("iphone5s") }>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        { children }
      </div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>
  )

  const ipadmini = () => (
    <div className={ wrp('ipad') }>
      <div className="camera"></div>
      <div className="screen">
        { children }
      </div>
      <div className="home"></div>
    </div>
  )

  const macbookpro = () => (
    <div className={ wrp("macbook") }>
      <div className="top-bar"></div>
      <div className="camera"></div>
      <div className="screen">
        { children }
      </div>
      <div className="bottom-bar"></div>
    </div>
  )

  const galaxys5 = () => (
    <div className={ wrp('s5') }>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="camera"></div>
      <div className="sensor"></div>
      <div className="speaker"></div>
      <div className="screen">
        { children }
      </div>
      <div className="home"></div>
    </div>
  )

  const nexus5 = () => (
    <div className={ wrp('nexus5') }>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="screen">
        { children }
      </div>
    </div>
  )

  const deviceList = {
    'iphonex': iphonex,
    'galaxynote8': galaxynote8,
    'iphone8': iphone8,
    'iphone8plus': iphone8plus,
    'iphone5s': iphone5s,
    'iphone5c': iphone5c,
    'ipadmini': ipadmini,
    'nexus5': nexus5,
    'galaxys5': galaxys5,
    'macbookpro': macbookpro
  }

  return device in deviceList ? deviceList[device] : null;
}
