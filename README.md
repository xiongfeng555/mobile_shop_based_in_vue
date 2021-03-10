# 这是一个移动商城项目

##这里我没有接口，模拟数据在 data.json 里面
效果图：
![image-20210310190229697](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210310190229697.png)
![image-20210310190254949](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210310190254949.png)
![image-20210310190316802](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210310190316802.png)
![image-20210310190345342](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210310190345342.png)

## 开发工具

vscode

## 开发框架

vue vue-router vuex

## 打包工具

webpack

## ui 框架

1.mint-ui
2.mui 3.

## 运行方法

1.npm install
2.npm run dev

## 移除严格模式

[babel-plugin-transform-remove-strict-mode](https://github.com/genify/babel-plugin-transform-remove-strict-mode)

## 问题解决

1.滑动的时候报警告：`Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080`

```
解决方法，可以加上* { touch-action: none; } 这句样式去掉。
```

原因：（是 chrome 为了提高页面的滑动流畅度而新折腾出来的一个东西） http://www.cnblogs.com/pearl07/p/6589114.html
https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action


