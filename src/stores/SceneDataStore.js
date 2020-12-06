import { writable } from 'svelte/store'

let sceneInfo = writable([])
let backgroundColor = writable('green')

export {sceneInfo, backgroundColor}