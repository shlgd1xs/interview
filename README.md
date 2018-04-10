### 前言

最近考虑换工作，在参与各个公司面试的过程中遇到了不少问题，在此记录下来。希望在今后的面试中能有能派上用场。


### 目录
- [Webpack/Gulp/Grunt区别，为什么选择Webpack？](#question1)
- [React的生命周期？](#question2)
- [如何提升React性能？](#question3)
- [用Node做中间层的好处？](#question4)
- [什么是Babel，你为什么使用Babel？](#question5)
- [什么是闭包，闭包有什么作用？](#question6)
- [从浏览器输入Url开始](#question7)
- [异步处理方式？使用过那些Promise库](#question8)

***
#### <p id='question1'>1.Webpack/Gulp/Grunt区别，为什么选择Webpack？</p>

> Gulp和Grunt基于任务流的自动化构建工具  
> Webpack已模块化的形式进行静态资源的构建

Gulp和Grunt属于同类型的构建工具，Grunt按顺序执行任务，效率不及Gulp  
Webpack模块化思想非常适用于大型复杂的webapp的场景。Webpack当下热门，生态完善，文档优秀。  

***
#### <p id='question2'>2.React的生命周期？</p>

React组件生命周期依次为：
> 实例化
>> 首次实例化  
>>> constructor  
>>> componentWillMount  
>>> render  
>>> componentDidMount  
>>
>> 实例化完成后的更新  
>>> componentWillMount  
>>> render  
>>> componentDidMount  
>
> 存在期    
>> 组件已存在时的状态改变
>>> componentWillReceiveProps  
>>> shouldComponentUpdate  
>>> componentWillUpdate  
>>> render  
>>> componentDidUpdate
>
> 销毁&清理期  
>> componentWillUnmount


***
#### <p id='question3'>3.如何提升React性能？</p>
+ 使用**PureComponent**(PureRenderMixin)  
+ 子组件执行 **shouldComponentUpdate** 方法，自行决定是否更新
+ 给列表中的组件添加key属性


***
#### <p id='question4'>4.用Node做中间层的好处？</p>


***
#### <p id='question5'>5.什么是Babel，你为什么使用Babel？</p>
> Babel 通过语法转换器支持最新版本的**JavaScript** 。 这些插件允许你立刻使用新语法，无需等待浏览器支持。



***
#### <p id='question6'>6.什么是闭包，闭包有什么作用？</p>
> 闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成**“定义在一个函数内部的函数”。  

当我们需要在模块中定义一些变量，并希望这些变量一直保存在内存中*（不被GC回收）*但又不会“污染”全局的变量时，就可以用闭包来定义这个模块。

***
#### <p id='question7'>7.从浏览器输入Url开始</p>
- 网络通信
  - 输入域名
  - 浏览器通过DNS服务去查找域名对应的IP地址
  - 客户端发动HTTP请求
  - 传输层TCP传输报文
  - 网络层IP协议查询MAC地址*（物理地址）*
  - 数据到达数据链路层
  - 服务器接收数据
  - 服务器响应请求
  - 服务器返回相应文件
- 页面渲染
  - 解析Html构建DOM树
  - 构建渲染树
  - 布局渲染树
  - 绘制渲染树

***
#### <p id='question8'>8.异步处理方式？使用过那些Promise库</p>
- 回调函数（CallBack)
- 事件监听
  - 监听函数有：on，bind，listen，addEventListener，observe
- 发布/订阅（观察者模式）
- Promise
  - es6-promise
  - promise-polyfill
- async/await
