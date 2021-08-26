<script>
export default {

}
</script>

<template>
  <section class="news">
          <div class="vessel">
              <div class="row">
                  <div class="imageWrap">
                    <h2>ニュース</h2>
                    <a href="./news/index.aspx" class="primary">新着情報一覧</a>
                  </div>

                  <div class="listWrap">
                      <ul class="listTab">
                        <li class="active"><button type="button" data-filter="ALL">ALL</button></li>
                        <li><button type="button" data-filter="WIL">WIL</button></li>
                        <li><button type="button" data-filter="STM">STM</button></li>
                        <li><button type="button" data-filter="FAJ">FAJ</button></li>
                        <li><button type="button" data-filter="BOL">BOL</button></li>
                        <li><button type="button" data-filter="MRS">MRS</button></li>
                      </ul>
                      <dl class="newsList"></dl>
                  </div>
              </div>
          </div>
    </section>
    <!-- news section -->
</template>

<style lang="scss">
@import "@/assets/scss/News.scss";
</style>