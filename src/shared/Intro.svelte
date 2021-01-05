<style>
  .cover-container {
    position: relative;
    max-width: 100%;
    max-height: 80vh;
    width: 100vw;
    height: calc(60vw);
    overflow: hidden;
  }

  #main-cover {
    width: 100vw;
  }
</style>

<script>
  import ContentDataStore from '../stores/ContentDataStore.js'
</script>

<div class="cover-container">
  <div class="overflow-hidden">
    <img
      class="absolute"
      src="https://tnl-static.s3-ap-northeast-1.amazonaws.com/2020/12/ltgr5utt4pvow45zz1a0qzmg2pizai.png"
      id="main-cover"
      alt="cover-image"
    />
  </div>
</div>
{#if $ContentDataStore}
  <div class="pt-2 pb-1 pl-2 sm:pl-4 text-xs sm:text-sm text-gray-500">封面設計：Loso Kao</div>
  <h1 class="text-center pt-4 sm:pt-10 pb-2 sm:pb-6">{$ContentDataStore.title}</h1>
  <div class="text-center">
    <div class="inline-block text-left text-xs sm:text-sm leading-relaxed sm:leading-7 pb-4 sm:pb-10">
      製作：<a
        class="underline text-gray-500 hover:text-gray-400"
        href={$ContentDataStore.author_articles_page}
        target="_blank"
        rel="noreferrer noopener"
      >{$ContentDataStore.author}</a>
      ｜核稿編輯：{$ContentDataStore.sub_editor}
    </div>
  </div>
{/if}
