<style>
  p {
    max-width: 350px;
  }
</style>

<script>
  import ContentDataStore from '../stores/ContentDataStore.js'
</script>

<div class="sm:py-6">
  {#if $ContentDataStore}
    <div class="text-center text-lg mx-auto pt-10 px-8 sm:px-12 sm:p-0" style="max-width: 530px">資料附註說明</div>
    <div class="text-sm  py-3 px-3">
      {#each $ContentDataStore.data_explained as { text }}
        <p class="pb-2  mx-auto">{text}</p>
      {/each}
    </div>
  {/if}
</div>
