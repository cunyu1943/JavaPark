---
isOriginal: true
category:
  - Vue 3 系列
tag:
    - Vue
---

# 常用指令

##  插值

###  文本

要进行文本部分替换，可以用 `{{}}` 将变量元素括起来；

```html
<div id = "app">
    {{message}}
</div>
```

```js
// Vue实例
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue'
    }
})
```
要进行文本全部替换，则可以用 `v-text` 来进行，比如下面的“测试”将会被 `message `的内容所替代；

```html
<div id = "app">
	<h2 v-text="message">测试</h2>
</div>
```

```js
var app = new Vue({
    el: "#app",
    data: {
        message: "公众号：村雨遥"
    }
})
```

###  原始 HTML

双大括号会将数据解释为普通文本，但如果我们要插入原始的 HTMl 内容，此时就需要使用 `v-html` 指令；

```html
<div id="app">
    <p v-html="rawHtml">
    </p>
</div>
```

```js
var app = new Vue({
    el: "#app",
    data: {
        rawHtml: "<span style="color:red">内容标红</span>"
    }
})
```



## 绑定元素属性

要实现给元素绑定属性，可以使用 `v-bind` 指令，其完整写法是 `v-bind:属性名="表达式"`，简写则可以直接省略掉 `v-bind`，只保留 `:属性名="表达式"`，但它属于单向绑定；

```html
<div id = "app">
    <h2 v-bind:title="message">Vue In Action！</h2>
</div>
```

```js
var app = new Vue({
    el: "#app",
    data: {
        message : "Vue 实战！"
    }
})
```

##  条件与循环

条件指令，也就是我们日常开发中所使用的 `if`，用 `v-if` 指令来进行绑定；

```html
<div id="app">
    <p v-if="found">
         我被你发现了！
    </p>
</div>
```

```js
var app = new Vue({
    el: "app",
    data: {
        found: true
    }
})
```

此外，还可以使用 `v-else` 指令来表示 `v-if` 的 `else` 块，它必须紧跟在 `v-if` 或 `v-else-if` 元素的后面，否则它将不会被识别；

```html
<div v-if="type === 'A'">
  The answer is A
</div>
<div v-else-if="type === 'B'">
  The answer is B
</div>
<div v-else-if="type === 'C'">
  The answer is C
</div>
<div v-else>
  The answer is D
</div>
```



循环指令，也就是我们经常用到的 `for` 循环，用 `v-for` 指令来进行绑定，根据数据生成列表结构，其语法是 `(item, index) in 数据`；

```html
<div id="app">
    <ul>
        <li v-for="num in nums">
        	{{num.text}}
        </li>
    </ul>
</div>
```

```js
var app = new Vue({
    el: "#app",
    data: {
        nums: [1, 2, 4]
    }
})
```

##  处理用户输入

要进行用户与应用之间的交互，可以使用 `v-on` 指令来添加事件监听器，通过它来调用 Vue 实例中定义的方法，此外为了减少开发过程中的代码量，我们还可以使用 `@` 来替换 `v-on` ，它俩可以达到同样的效果；

```html
<div id = "app">
    <p>
        {{message}}
    </p>
    <button v-on:click="reverseMessage">
    <!-- <button @click="revuerseMessage"> -->
        消息反转
    </button>
</div>
```

```js
var app = new Vue({
    el: "#app",
    data: {
        message: "wechat cunyu1943"
    },
    methods: {
        reverseMessage:function(){
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})
```

为了处理不去处理 DOM 事件细节，而只用纯粹的数据逻辑来进行操作，Vue 中为 `v-on` 又提供了 **事件修饰符**，常见时间修饰符如下：

| 事件修饰符 | 说明                             |
| ---------- | -------------------------------- |
| `.stop`    | 表示阻止事件继续传播             |
| `.prevent` | 表示时间不再重载                 |
| `.capture` | 表示使用事件捕获模式             |
| `.self`    | 表示是当前元素自身时触发处理函数 |
| `.once`    | 表示事件只触发一次               |
| `.passive` | 表示事件立即触发                 |

同时，为了实现表单输入和应用状态之间的双向绑定，我们可以使用 `v-model` 指令；

通过 `v-model` 指令，能够便捷的设置和获取表单元素的值，而且绑定的数据会和表单元素值相关联；

```html
<div id="app">
    <p>你的公众号是：{{ message }}</p>
    更新你的公众号：<input type="text" v-model="message">
</div>
```

```js
var app = new Vue({
    el: "#app",
    data: {
        message: "村雨遥"
    }
})
```

## 元素的显示与隐藏

要实现元素的显示与隐藏，我们可以通过 `v-show` 这个指令，它会根据表达式的真假，来切换元素的显示和隐藏状态。

```html
<div id="app">
    <img src="https://gitee.com/cunyu1943/images/raw/master/ImgsUbuntu/20200510234310.png" v-show="isShow">
</div>
```

```js
var app = new Vue({
    el: "#app",
    data: {
        isShow: true
    }
})
```