import React, {Component} from 'react'
import { createRoot } from 'react-dom/client';

import ReactDevicePreview from '../../src'

class Demo extends Component {
  render() {

    const screen = {
      background: 'linear-gradient(to bottom, #0d3477 0%, #adf3de 100%)',
      width: '100%',
      height: '100%',
      color: '#fff',
      padding: '80px 0px 0px 0px'
    }

    return <div>
      <h1>react-device-preview Demo</h1>
      <ReactDevicePreview
        device="iphonex"
        color="black"
        scale="0.7"
      >
        <div style={ screen }>
          <center>
            <br />
            <h1> Hello World </h1>
          </center>
        </div>

      </ReactDevicePreview>
    </div>
  }
}

const container = document.getElementById('demo');
const root = createRoot(container);
root.render(<Demo />)
