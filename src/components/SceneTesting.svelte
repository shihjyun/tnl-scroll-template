<style>
</style>

<script>
  import { onMount } from 'svelte'

  import { sceneInfo } from '../stores/SceneDataStore.js'

  onMount(() => {
    let sceneInfoContainer = {}
    sceneInfo.update(() => sceneInfoContainer)
  })
</script>

<div class="w-screen h-screen z-0 bg-green-200" />
