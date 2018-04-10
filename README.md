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
-

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
>
>> 实例化完成后的更新

>>> getInitialState  
>>> componentWillMount  
>>> render  
>>> componentDidMount  

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


***
#### <p id='question4'>4.用Node做中间层的好处？</p>


***
#### <p id='question5'>5.什么是Babel，你为什么使用Babel？</p>


***
#### <p id='question6'>6.什么是闭包，闭包有什么作用？</p>


***
#### <p id='question7'>7.从浏览器输入Url开始</p>
