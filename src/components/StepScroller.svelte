<style>
</style>

<script>
  import { onMount } from 'svelte'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import ContentDataStore from '../stores/ContentDataStore.js'

  // props
  export let sceneName
  export let sceneScript
  export let showMarker = false
  export let sceneInfo

  let stepScrollerIntro

  // regist scrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  $: if ($ContentDataStore) {
    stepScrollerIntro = $ContentDataStore[sceneName]
  }

  onMount(() => {
    setTimeout(() => {
      ScrollTrigger.create({
        trigger: `#scene-wrapper-${sceneName}`,
        endTrigger: getLastStepElement(),
        start: 'center center',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        markers: showMarker,
      })

      gsap.utils.toArray('.' + sceneName + '-trigger').forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top center',
          end: 'bottom bottom',
          markers: showMarker,
          // script actions
          onEnter: () => sceneScript[i].onEnter(sceneInfo),
          onLeave: () => sceneScript[i].onLeave(sceneInfo),
          onEnterBack: () => sceneScript[i].onEnterBack(sceneInfo),
          onLeaveBack: () => sceneScript[i].onLeaveBack(sceneInfo),
        })
      })
    }, 500)
  })

  function getLastStepElement() {
    const stepElements = document.querySelectorAll('.' + sceneName + '-trigger')
    const lastElement = stepElements[stepElements.length - 1]
    return lastElement
  }
</script>

{#if $ContentDataStore}
  <div class="absolute" id="scene-wrapper-{sceneName}">
    <slot />
  </div>
  <div class="step-trigger-container z-100">
    {#each stepScrollerIntro as { text }, i}
      <div class="step-trigger-wrapper {sceneName}-trigger" id="step-{i + 1}">
        {#if text && text !== 'no text'}
          <div class="step-trigger-box">
            {@html text}
          </div>
        {/if}
      </div>
    {/each}
  </div>
{/if}
