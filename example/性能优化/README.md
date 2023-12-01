### 目录

- [1.图片 Sprite](#1-雪碧图)

- [2.webpack 压缩](#2webpack-压缩)

- [3.减少 http 拉资源次数(强缓存和协商缓存)-lastModified,Cache-control,Etag](#3减少-http-拉资源次数强缓存和协商缓存-lastmodifiedcache-controletag)

- [4.css 的 background-url](#4css-的-background-url)

- [5.预加载和懒加载](#5预加载和懒加载)

- [6.CDN 部署](#6cdn-部署)

- [7.Treeshaking](#7treeshaking)

- [8.引入 websocket，减少轮询](#8引入-websocket减少轮询)

- [9.SPA](#9spa)

- [10.解决 SEO 用 SSR]()

- [11.使用 SASS 或者 LESS]()

- [12.减少 JS 修改 style 引起回流]()

- [13.渲染分层，用 RAF 内的函数去替代异步函数]()

- [14.封装高阶函数做超时]()

- [15.利用 ReactFiber 的 requestIdleCallback+迭代器实现大计算分块]()

- [16.生成器函数实现同步]()

- [17.优化设计模式]()

- [18.采用新规装饰器]()

- [19.元编程]()

### 1 雪碧图

雪碧图（CSS sprites）是一种前端优化技术，用于将多个小图像合并到一个大的图像中，从而减少浏览器需要加载的图像数量，提高页面加载速度。以下是作为前端程序员，如何使用雪碧图优化性能的几个步骤：

收集小图像：将需要合并的图像收集到一个文件夹中。这些图像可以是你的网站图标、按钮背景等。

创建雪碧图：使用图像编辑软件（如 Photoshop、GIMP 等）将所有小图像合并成一个大的图像。这个大的图像就是你的雪碧图。

导出雪碧图：将雪碧图导出为 PNG 或 SVG 格式。导出时，可以设置不同尺寸的版本，以满足不同设备的需求。

使用雪碧图：将雪碧图应用到你的网站中。你可以将雪碧图作为一个背景图像，并通过 CSS 来设置显示的部分。

调整 CSS 样式：为了显示雪碧图中的某个图像，你需要使用 CSS 来设置相应的样式。例如，你可以使用 background-position 属性来指定要显示的部分。

监控性能：使用性能分析工具来监控你的网站性能。通过比较使用雪碧图前后的性能数据，你可以看到是否有所改善。
需要注意的是，虽然雪碧图可以优化性能，但它们也有一些缺点，例如增加了 CSS 的复杂性、难以维护等。因此，在使用雪碧图时，需要权衡利弊，并根据实际情况做出决策。

### 2.webpack 压缩

通过在 optimization.minimizer 中添加 TerserPlugin 插件来对 JavaScript 代码进行压缩。在 plugins 中添加 HtmlWebpackPlugin 插件来对 HTML 文件进行压缩，并使用其 minify 选项来去除空格、注释、冗余属性、脚本类型属性、样式链接类型属性和使用短 DOCTYPE。在 module.rules 中添加 CSS 相关规则，并使用 MiniCssExtractPlugin 插件来将 CSS 提取到单独的文件中。

### 3.减少 http 拉资源次数(强缓存和协商缓存)-lastModified,Cache-control,Etag

HTTP 强缓存和协商缓存是浏览器缓存机制中的两种主要方式，它们在处理缓存和请求的过程中有所不同。

HTTP 强缓存： 强缓存是指浏览器在获取到资源后，会根据响应头中的 Expires 和 Cache-Control 进行缓存。
当浏览器再次需要获取该资源时，会先检查缓存中是否存在该资源，如果存在并且没有过期，则直接从缓存中获取，不再向服务器发送请求。
这种方式可以减少网络请求，提高网页加载速度，但有可能因为缓存时间过长导致资源过期，从而无法获取最新资源。

HTTP 协商缓存： 协商缓存是指浏览器在获取到资源后，将资源放入缓存中，但并不一定会立即使用该资源。
当浏览器再次需要获取该资源时，会先检查缓存中是否存在该资源，如果存在但没有过期，则发送一个带有特殊参数的请求到服务器，询问服务器该资源是否已经过期。
如果服务器返回“未过期”，则浏览器直接从缓存中获取资源；如果服务器返回“已过期”，则浏览器会从服务器重新获取最新的资源。
这种方式可以确保获取到的资源是最新的，但会增加网络请求的次数。
总的来说，HTTP 强缓存和协商缓存各有优缺点，需要根据具体的应用场景进行选择和使用。

### 4.css 的 background-url

### 5.预加载和懒加载

一、懒加载和预加载的定义
懒加载也称为延迟加载，指在页面初始加载时并不加载所有内容，而是在用户某个操作发生后再去加载内容。预加载则是在页面加载完成后，提前加载其他页面或资源，以提高用户体验。

二、懒加载的优点

1. 减少页面加载时间，提高页面打开速度：由于懒加载在页面初始加载时并不加载所有内容，所以可以减少页面的初始加载时间，提高页面的打开速度。

2. 节约带宽资源，减轻服务器压力：由于懒加载只在用户触发操作时才会加载内容，所以可以节约带宽和服务器资源，减轻服务器的压力。

3. 提高用户体验：懒加载可以使页面更快地响应用户操作，提高用户体验。

三、懒加载的实现方式
懒加载的实现通常需要使用 JavaScript，可以通过以下几种方式实现：

1. IntersectionObserver API

```html
<img src="placeholder.jpg" data-src="image.jpg" class="lazy" />
```
```javascript
const lazyImages = document.querySelectorAll('.lazy');
const observer = new IntersectionObserver((entries, observer) =&gt; {
  entries.forEach(entry =&gt; {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.src;
      observer.unobserve(image);
    }
  });
});
lazyImages.forEach(image =&gt; observer.observe(image));
```

2. scroll事件
```html
<img src="placeholder.jpg" data-src="image.jpg" class="lazy">
```
```javascript
function lazyLoad() {
  const lazyImages = document.querySelectorAll('.lazy');
  lazyImages.forEach(image =&gt; {
    if (image.getBoundingClientRect().top &lt;= window.innerHeight) {
      image.src = image.dataset.src;
      image.classList.remove('lazy');
    }
  });
}
window.addEventListener('scroll', lazyLoad);
```

四、预加载的优点
1. 提高网页速度：预加载可以在页面加载完成后，提前加载其他页面或资源，以提高用户体验。

2. 减少用户等待时间：由于预加载已经将页面所需的资源提前加载，用户在访问页面时就可以获得更快的响应速度，减少用户等待时间。

五、预加载的实现方式
预加载的实现通常需要使用JavaScript，可以通过以下几种方式实现：

1. 创建Image对象进行预加载

```javascript
const image = new Image();
image.src = 'image.jpg';
```
六、懒加载和预加载的区别
1. 时间点不同：懒加载是在用户操作发生后再加载，而预加载是在页面加载完成后提前加载。

2. 加载内容不同：懒加载是在页面中某些元素进入可视区后才加载相关内容，而预加载是已经将页面所需的内容提前加载。

3. 对用户体验的影响不同：懒加载可以提高页面的响应速度并节约带宽和服务器资源，预加载可以提高用户体验并减少用户等待时间。

七、总结
懒加载和预加载都是优化Web性能及提高用户体验的重要手段，根据页面的实际需求和性能瓶颈选择合适的方式进行优化。


### 6.CDN 部署
>CDN（内容分发网络）是一种通过将网站的静态资源（如图片、脚本、样式表等）分发到全球各地的服务器上，从而加速网站内容传输的技术。CDN加速利用就近访问原则，将网站内容缓存到离用户最近的服务器上，加快了内容的加载速度。

CDN加速的优势
1. 提升网页加载速度：通过将内容分发到全球各地的服务器上，用户可从就近服务器获取资源，减少了网络延迟，提升了网页加载速度。
2. 减轻源服务器负载：CDN服务器可以缓存网站的静态资源，减少了对源服务器的请求，减轻了源服务器的负载压力。
3. 提高网站稳定性：源服务器发生故障时，CDN服务器可以提供备用资源，保证网站的可用性和稳定性。

如何使用CDN加速
1. 选择合适的CDN供应商：市面上有很多CDN服务提供商，根据自己的需求选择合适的CDN供应商，比如Akamai、Amazon 阿里云、七牛云、腾讯云等。
2. 配置CDN加速：根据CDN供应商提供的文档和指引，将自己的网站接入CDN服务，配置CDN加速。
3. 优化网站资源：在接入CDN后，继续优化网站的静态资源，比如对图片进行压缩、合并CSS和Javascript文件等，减少资源大小和数量，进一步提升网页加载速度。

CDN加速的进一步优化
1. 使用HTTPS加密：为网站启用HTTPS协议，保护用户数据的安全性，并通过CDN加速HTTPS内容传输，提升网站的安全性和加载速度。
2. 预加载资源：利用浏览器的预加载机制，在网页加载完成后，预加载下一页需要的资源，提升用户的使用体验。
3. 动态内容加速：CDN不仅可以加速静态资源的传输，也可以对动态内容进行加速。通过设置缓存策略和使用CDN提供的动态加速功能，进一步提升动态内容的传输速度。

### 7.Treeshaking

>tree-shaking 是一个通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code) 行为的术语。  
它依赖于 ES2015 中的 import 和 export 语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。  
在现代 JavaScript 应用程序中，我们使用模块打包(如 webpack 或 Rollup)将多个 JavaScript 文件打包为单个文件时自动删除未引用的代码。这对于准备预备发布代码的工作非常重要，这样可以使最终文件具有简洁的结构和最小化大小。

#### tree-shaking VS dead code elimination
说起 tree-shaking 不得不说起 dead code elimination，简称 DCE。

dead code 一般具有以下几个特征:

- 代码不会被执行，不可到达
- 代码执行的结果不会被用到
- 代码只会影响死变量（只写不读）
使用 webpack 在 mode: development 模式下对以下代码进行打包

```javascript
function app() {
    var test = '我是app';
    function set() {
        return 1;
    }
    return test;
    test = '无法执行';
    return test;
}

export default app;
```

最终打包结果:
```javascript
eval(
    "function app() {\n    var test = '我是app';\n    function set() {\n        return 1;\n    }\n    return test;\n    test = '无法执行';\n    return test;\n}\n\napp();\n\n\n//# sourceURL=webpack://webpack/./src/main.js?"
);
```
可以看到打包的结果内，还是存在无法执行到的代码块。

webpack 不支持 dead code elimination 吗？是的，webpack 不支持。

原来，在 webpack 中实现 dead code elimination 功能并不是 webpack 本身, 而是大名鼎鼎的 uglify。

通过阅读源码发现，在 mode: development 模式下，不会加载 terser-webpack-plugin 插件。

### 8.引入 websocket，减少轮询


### 9.SPA