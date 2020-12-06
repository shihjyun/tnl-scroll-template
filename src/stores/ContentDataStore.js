import {writable} from 'svelte/store'

const contentDataUrl = 'https://datastore.thenewslens.com/infographic/house-price-2020/house-price-2020.json?1'

const ContentDataStore = writable(undefined, async set => {
  const res = await fetch(contentDataUrl)
  const data = await res.json()
  set(data)
  return () => {}
});

export default ContentDataStore