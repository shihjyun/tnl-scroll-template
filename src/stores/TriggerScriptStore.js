import { readable } from "svelte/store"
import * as sceneInfo from '../stores/SceneDataStore.js'

// subscribe data from sceneInfo
sceneInfo.sceneInfo.subscribe(() => {
})

const stepInfo  = readable([
  {
    onEnter: function(){console.log('onEnter1')},
    onLeave: function(){console.log('onLeave1')},
    onEnterBack: function(){console.log('onEnterBack1')},
    onLeaveBack: function(){console.log('onLeaveBack1')}
  },
  {
    onEnter: function(){console.log('onEnter2')},
    onLeave: function(){console.log('onLeave2')},
    onEnterBack: function(){console.log('onEnterBack2')},
    onLeaveBack: function(){console.log('onLeaveBack2')}
  },
  {
    onEnter: function(){console.log('onEnter3')},
    onLeave: function(){console.log('onLeave3')},
    onEnterBack: function(){console.log('onEnterBack3')},
    onLeaveBack: function(){console.log('onLeaveBack3')}
  },
  {
    onEnter: function(){console.log('onEnter4')},
    onLeave: function(){console.log('onLeave4')},
    onEnterBack: function(){console.log('onEnterBack4')},
    onLeaveBack: function(){console.log('onLeaveBack4')}
  },
  {
    onEnter: function(){console.log('onEnter5')},
    onLeave: function(){console.log('onLeave5')},
    onEnterBack: function(){console.log('onEnterBack5')},
    onLeaveBack: function(){console.log('onLeaveBack5')}
  },
])


export {stepInfo}