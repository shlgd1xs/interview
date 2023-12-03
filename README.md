### 前言

最近考虑换工作，在参与各个公司面试的过程中遇到了不少问题，在此记录下来。希望在今后的面试中能派上用场。


### 目录
- [Webpack/Gulp/Grunt区别，为什么选择Webpack？](#question1)
- [React的生命周期？](#question2)
- [如何提升React性能？](#question3)
- [用Node做中间层的好处？](#question4)
- [什么是Babel，你为什么使用Babel？](#question5)
- [什么是闭包，闭包有什么作用？](#question6)
- [从浏览器输入Url开始](#question7)
- [异步处理方式？使用过那些Promise库](#question8)
- [CMD AMD区别](#question9)
- [Webpack模块化原理 Code Splitting](#question10)
- [JS继承的实现方式](#question11)

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
- 可以进行接口访问的监控（流量监控、报错监控等等）
- 解决跨域问题
-

***
#### <p id='question5'>5.什么是Babel，你为什么使用Babel？</p>
> Babel 通过语法转换器支持最新版本的**JavaScript** 。 这些插件允许你立刻使用新语法，无需等待浏览器支持。



***
#### <p id='question6'>6.什么是闭包，闭包有什么作用？</p>
> 闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成**“定义在一个函数内部的函数”。  

当我们需要在模块中定义一些变量，并希望这些变量一直保存在内存中*（不被GC回收）*但又不会“污染”全局的变量时，就可以用闭包来定义这个模块。

```javascript
//例如
function foo(){
  var count=0;
  return function(){
    return count++;
  }
};
var a=foo();
a();
```

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


#### <p id='question9'>9.CMD与AMD的区别</p>

1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。
2. CMD 推崇依赖就近，AMD 推崇依赖前置。
3. Webpack为CMD

#### <p id='question10'>10.Webpack模块化原理 Code Splitting</p>

webpack通过__webpack_require__.e函数实现了动态加载，再通过webpackJsonp函数实现异步加载回调，把模块内容以promise的方式暴露给调用方，从而实现了对code splitting的支持。

#### <p id='question11'>11.JS继承的实现方式</p>
```javascript
// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};
```
1.原型链继承  
核心： 将父类的实例作为子类的原型  
```javascript
function Cat(){
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat); //true
```
2.构造继承  
核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）  
```javascript
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
```
3.实例继承   
核心：为父类实例添加新特性，作为子类实例返回  
```javascript
function Cat(name){
  var instance = new Animal();
  instance.name = name || 'Tom';
  return instance;
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // false
```

4.拷贝继承
```javascript
function Cat(name){
  var animal = new Animal();
  for(var p in animal){
    Cat.prototype[p] = animal[p];
  }
  Cat.prototype.name = name || 'Tom';
}

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
```


5.组合继承  
核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
```JavaScript
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
Cat.prototype = new Animal();

// 感谢 @学无止境c 的提醒，组合继承也是需要修复构造函数指向的。

Cat.prototype.constructor = Cat;

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true
```


6.寄生组合继承
```JavaScript
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = Animal.prototype;
  //将实例作为子类的原型
  Cat.prototype = new Super();
})();

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true
```
