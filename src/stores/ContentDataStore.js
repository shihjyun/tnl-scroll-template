import {writable} from 'svelte/store'

const contentDataUrl = `https://datastore.thenewslens.com/infographic/test/scrolly-demo.json?${Date.now()}`

const ContentDataStore = writable(undefined, async set => {
  const res = await fetch(contentDataUrl)
  const data = await res.json()
  set(data)
  return () => {}
});

export default ContentDataStore