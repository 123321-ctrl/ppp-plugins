# ppp-pre-img

### 安装

```bash
npm i vpay -S
```

### 使用
```js
import Vue from 'vue';
import vpay from 'vpay';

Vue.use(vpay);

// 组件使用
<vpay v-model="show" />
```

### API
| 参数 | 说明 | 类型 | 默认值 |
| - | :- | :- | :-: |
| v-model | 密码框的显示隐藏 | Boolean | false |
| digit | 密码的位数| Number | 6 |
| ref | 获取当前插件实例 | String | - |
| title | 弹窗标题 | String | 请输入支付密码 |
| loading-text | 正在支付的文字提示 | String | 正在支付 |
| finished-text | 支付成功的文字提示 | String | 支付成功 |
| duration | 支付成功提示的显示时间 | Number | 500 |

### Events

| 事件名 | 说明 | 参数 |
| :- | :- | :- |
| input-end | 密码输入完成后的回调函数 | 用户输入的密码 |
| close | 密码弹窗关闭后的回调函数 | - |
| forget | 点击忘记密码的回调函数 | - |