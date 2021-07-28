/*
 * @Author: iChengbo
 * @Date: 2021-07-19 15:54:39
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-28 18:31:21
 * @FilePath: /taro-react-native/src/pages/about/index.tsx
 */
import { Component, Fragment } from 'react'
import { SafeAreaView } from 'react-native';
import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';

export default class Index extends Component<any, any> {
  linksList = [
    {
      name: 'Taro 官方网站',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=Taro 官方网站',
        })
      }
    },
    // {
    //   name: 'Apache 软件基金会',
    //   onPress: () => {
    //     Taro.showToast({ title: '敬请期待', icon: 'none' });
    //   }
    // },
    {
      name: '官方交流群',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=官方交流群&link=https://github.com/NervJS/taro/issues/198',
        })
      }
    },
    {
      name: '参与贡献',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=参与贡献&link=https://docs.taro.zone/docs/join-in',
        })
      }
    },
    {
      name: '版本变更',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=版本变更&link=https://github.com/NervJS/taro/releases'
        })
      },
    },
    {
      name: '常见问题',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?link=https://github.com/wuba/taro-react-native/issues'
        })
      },
    }
  ];

  render() {
    return (
      <SafeAreaView className='page'>
        <View className='page'>
          <View className='page-header'>
            <Image
              src={require('../asset/common/taro_logo.png')}
              className='page-header-img'
            />
            <View className='page-header-desc'>
              <Text className='page-header-desc-text'>Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。</Text>
            </View>
          </View>
          <View className='page-links'>
            {this.linksList.map((item, index) => {
              return (
                <Fragment key={index}>
                  <View className='page-links-item' onClick={item.onPress}>
                    <Text className='page-links-item-text'>{item.name}</Text>
                    <Image
                      src={require('../../assets/common/icon_downarrow.png')}
                      className='page-links-item-arrow'
                      style={{ transform: [{ rotate: '-90deg' }] }}
                    ></Image>
                  </View>
                  {index != this.linksList.length - 1 && <View className='page-links-sep' />}
                </Fragment>
              )
            })}
          </View>
          {/* <View className='page-footer'>
            <Text className='page-footer-text'>Copyright(c) XXXXXXXXXXXXXXXXXXXXXX</Text>
          </View> */}
        </View>
      </SafeAreaView>
    )
  }
}
