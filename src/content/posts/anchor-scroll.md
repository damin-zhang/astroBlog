---
title: "锚点跳转过渡动画"
date: "2026-03-11 15:08:55"
author: "张大敏"
tags:
  - "JavaScript"
  - "jQuery"
readTime: "4 min read"
---
## jQuery实现

此技术非常简单。

1. 像往常一样设置链接，
   例如: `href =“＃comments” `*（comments是目标的ID）*

2. 在link元素上添加一个class =“ scroll”属性，现在看起来像这样：

   ```html
   <a href="#comments" class="scroll">
       滚动到评论
   </a>
   ```
<!--more-->
3. 最后，在合适的位置添加以下jQuery代码：

   ```javascript
   jQuery(document).ready(function($) {
   	$(".scroll").click(function(event){		
   		event.preventDefault();
   		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
   	});
   });
   ```

为了方便，$('.scroll') 选择器可以使用 $('a[href\*=#]')，并且多个元素间可以用逗号隔开 $('a[href\*=#]','a[href\*=#]')。

> 这就是全部🙂

实施此脚本的一个常见错误是为目标使用“命名锚”，而不是目标元素上的id属性。如果由于某种原因（例如，由于所见即所得的限制）而被命名锚定卡住，则可以尝试从Giles进行以下修改：

```js
$('html,body').animate({scrollTop:$('[name="'+this.hash.substring(1)+'"]').offset().top}, 500);
```

参考链接：http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links



## scroll-behavior属性(不建议)

如果您不介意不[支持所有主流浏览器](https://caniuse.com/#search=scroll-behavior)（仅Firefox 36 +，Chrome 61+和Opera 48+），请使用锚点链接和此单个属性作为滚动容器：

`scroll-behavior: smooth;`

像这样使用它：

```css
<head>
  <style type="text/css">
    html {
      scroll-behavior: smooth;
    }
  </style>
</head>
<body id="body">
  <a href="#foo">Go to foo!</a>

  <!-- Some content -->

  <div id="foo">That's foo.</div>
  <a href="#body">Back to top</a>
</body>
```

示例：[垂直滚动](http://jsfiddle.net/hf4gap4v/)、[斜向滚动](http://jsfiddle.net/1Lfybv56/2/)、[演示Demo](https://zhangdamin.cn/demo/css-scroll.html)*（但它不支持移动端）*

