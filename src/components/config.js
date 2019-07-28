/**
 * Created by Tw93 on 2016/11/4.
 */

export default {

  // 正常模式的tab title配置
  tabTitles: [
    {
      title: '聊天',
      icon: 'http://47.105.74.119:8080/聊天-未选中.svg',
      activeIcon: 'http://47.105.74.119:8080/聊天-选中.svg',
      badge: 10
    },
    {
      title: '群聊',
      icon: 'http://47.105.74.119:8080/群聊-未选中.svg',
      activeIcon: 'http://47.105.74.119:8080/群聊-选中.svg'
    },
    {
      title: '我的',
      icon: 'http://47.105.74.119:8080/我的／未选中.svg',
      activeIcon: 'http://47.105.74.119:8080/我的／选中.svg'
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#9d9d9d',
    activeTitleColor: '#3975ff',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
}
