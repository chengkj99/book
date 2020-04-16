## adb 命令

### 什么是 adb

Android 调试桥 (adb) 是一种功能多样的命令行工具，可让您与设备进行通信。

- adb devices 显示设备列表

- adb install xxx.apk 安装应用

- adb install -r xxx.apk 强制重装

### 相关链接

[Android 调试桥 (adb)](https://developer.android.com/studio/command-line/adb)

## Android Studio

Android Studio 是一个为 Android 平台开发程序的集成开发环境。


## gradle

gradle 是一个自动化构建工具。

在进行 React Native APK 打包时，由于 gradle 版本较低，导致打包失败。

## ReactNative

* expo init [APPName]
* 打包配置（https://reactnative.dev/docs/signed-apk-android.html）
* 执行构建命令 `cd android && gradle assembleRelease`
