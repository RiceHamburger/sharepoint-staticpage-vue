<script>
export default {

}
</script>

<template>
  <header>
        <div class="slideshowContainer">
            <div class="mySlides fade">
              <img src="_asset/img/header/photo-top-1.jpg">
            </div>

            <div class="mySlides fade">
              <img src="_asset/img/header/photo-top-2.jpg">
            </div>

            <div class="mySlides fade">
              <img src="_asset/img/header/photo-top-3.jpg">
            </div>

            <h2 class="title">領域で<br>革新的なサービスを。</h2>

            <div class="dotWrap">
              <span class="controldot dot"></span>
              <span class="controldot dot"></span>
              <span class="controldot dot"></span>
            </div>
        </div><!-- slideshowContainer -->

        <div class="searchRow">
            <div class="searchWrap">
              <label>困った時は…</label>
              <form class="search-form">
                  <input type="text" id="search" name="search" placeholder="キーワードの検索" class="icon">
                  <button type="submit" class="primary">検索</button>
              </form>
            </div>
        </div><!-- searchRow -->
    </header>
</template>

<style lang="scss">
@import "@/assets/scss/header.scss";
</style>