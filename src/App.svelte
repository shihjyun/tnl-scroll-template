<style>
  .container-width {
    width: 100%;
  }
</style>

<script>
  import Header from './shared/Header.svelte'
  import Footer from './shared/Footer.svelte'
  import BasicParagraphs from './shared/BasicParagraphs.svelte'
  import TeamCreatorList from './shared/TeamCreatorList.svelte'
  import MobileDetector from './utils/MobileDetector.svelte'
  import ArticleList from './shared/ArticleList.svelte'
  import StepScroller from './components/StepScroller.svelte'
  import SceneTesting from './components/SceneTesting.svelte'
  import { stepInfo } from './stores/TriggerScriptStore.js'
  import { sceneInfo } from './stores/SceneDataStore.js'
</script>

<!-- utils components -->
<MobileDetector />

<!-- content -->
<Header />
<main>
  <article class="main-grid-template">
    <section class="container-width mx-auto grid-full-cols">
      <BasicParagraphs />
    </section>
    <section class="relative container-width mx-auto grid-full-cols">
      <StepScroller sceneName="scene_1_content" showMarker={true} sceneScript={$stepInfo} sceneInfo={$sceneInfo}>
        <SceneTesting />
      </StepScroller>
    </section>
    <section class="container-width mx-auto grid-full-cols">
      <BasicParagraphs />
    </section>
    <section class="relative container-width mx-auto grid-full-cols">
      <StepScroller sceneName="scene_2_content" showMarker={true} sceneScript={$stepInfo}>
        <SceneTesting />
      </StepScroller>
    </section>
  </article>
  <!-- read more -->
  <div class="mx-auto">
    <ArticleList projectName="us-election-2020-article-lists-tc">
      <h2 class="text-center">延伸閱讀</h2>
    </ArticleList>
  </div>
</main>
<!-- creator -->
<TeamCreatorList />
<!-- footer -->
<Footer />
