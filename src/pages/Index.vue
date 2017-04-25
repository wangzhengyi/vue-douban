<template>
<div>
  <router-view></router-view>
  <mt-tabbar v-model="selected" @input="selectTab">
    <mt-tab-item v-for="item in navList" :key="item.id" :id="item.id">
      <img slot="icon" :src="tabImg(item)">
      {{item.title}}
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      selected: 'home',
      navList: [
        {
          id: 'home',
          title: '首页',
          imgNormal: require('../assets/images/ic_tab_home_normal.png'),
          imgActive: require('../assets/images/ic_tab_home_active.png')
        },
        {
          id: 'media',
          title: '书影音',
          imgNormal: require('../assets/images/ic_tab_subject_normal.png'),
          imgActive: require('../assets/images/ic_tab_subject_active.png')
        },
        {
          id: 'status',
          title: '广播',
          imgNormal: require('../assets/images/ic_tab_status_normal.png'),
          imgActive: require('../assets/images/ic_tab_status_active.png')
        },
        {
          id: 'group',
          title: '小组',
          imgNormal: require('../assets/images/ic_tab_group_normal.png'),
          imgActive: require('../assets/images/ic_tab_group_active.png')
        },
        {
          id: 'profile',
          title: '我的',
          imgNormal: require('../assets/images/ic_tab_profile_normal.png'),
          imgActive: require('../assets/images/ic_tab_profile_active.png')
        }
      ]
    }
  },
  methods: {
    tabImg: function (item) {
      console.log(item.id + ',' + this.selected)
      if (item.id === this.selected) {
        return item.imgActive
      } else {
        return item.imgNormal
      }
    },
    selectTab (val) {
      this.$router.push(val)
    }
  }
}
</script>

<style>
</style>
