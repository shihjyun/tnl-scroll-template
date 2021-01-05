<style>
  .container-width {
    width: 100%;
  }
</style>

<script>
  import Header from './shared/Header.svelte'
  import Footer from './shared/Footer.svelte'
  import Intro from './shared/Intro.svelte'
  import SocialBoxInArticle from './shared/SocialBoxArticle.svelte'
  import BasicParagraphs from './shared/BasicParagraphs.svelte'
  import TeamCreatorList from './shared/TeamCreatorList.svelte'
  import MobileDetector from './utils/MobileDetector.svelte'
  import ArticleList from './shared/ArticleList.svelte'
  import DataExplained from './shared/DataExplained.svelte'
  import StepScroller from './components/StepScroller.svelte'
  import SceneTesting from './components/SceneTesting.svelte'
  import ContentDataStore from './stores/ContentDataStore.js'
  import { stepInfo } from './stores/TriggerScriptStore.js'
  import { sceneInfo } from './stores/SceneDataStore.js'
</script>

<!-- utils components -->
<MobileDetector />

<!-- content -->
<Header />
<Intro />
<main>
  <article class="main-grid-template">
    <section class="container-width mx-auto grid-full-cols">
      <BasicParagraphs sectionName="intro" />
    </section>
    <section class="relative container-width mx-auto grid-full-cols">
      <StepScroller sceneName="scene_demo_1" showMarker={true} sceneScript={$stepInfo} sceneInfo={$sceneInfo}>
        <SceneTesting />
      </StepScroller>
    </section>
  </article>
  {#if $ContentDataStore}
    <!-- social box -->
    <DataExplained />
    <div class="text-center text-lg mx-auto pt-10 px-8 sm:px-12 sm:p-0" style="max-width: 530px">分享這篇文章</div>
    <SocialBoxInArticle shareUrl={$ContentDataStore.article_url} />
    <!-- read more -->
    <h2 class="text-center font-bold text-lg sm:text-2xl text-black pt-12">推薦文章</h2>
    <ArticleList projectName={$ContentDataStore.project_name} articleData={$ContentDataStore.read_more_articles} />
  {/if}
</main>
<!-- footer -->
<Footer />
