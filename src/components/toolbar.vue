<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">

        <!--The first page content-->
        <div class="item-container" :style="contentStyle">
        </div>

        <!--The second page content-->
        <div class="item-container" :style="contentStyle">
            <text>Hot</text>
        </div>

        <!-- The third page content-->
        <div class="item-container" :style="contentStyle">
            <text>Message</text>
        </div>

        <!-- The fourth page content-->
        <div class="item-container" :style="contentStyle">

        </div>
    </wxc-tab-bar>
</template>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: center;
    }

</style>
<script>
import { Utils, WxcTabBar, WxcCell, WxcSearchbar } from 'weex-ui'
import Config from './config'
export default {
  components: { WxcTabBar, WxcCell, WxcSearchbar },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    value: ''
  }),
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    const {tabStyles} = this
    this.contentStyle = {height: (tabPageHeight - tabStyles.height) + 'px'}
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page
      console.log(index)
    }
  }
}
</script>
