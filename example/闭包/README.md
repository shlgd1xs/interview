# 闭包

闭包是指在一个函数内部创建另一个函数，并且内部函数可以访问外部函数的变量、参数以及其他内部函数，即使外部函数已经执行完毕。这种机制使得内部函数保留了对外部作用域的引用，即使外部作用域已经不再活跃。

## JavaScript 闭包的特点
- 闭包可以访问外部函数的变量，即使外部函数已经返回了。
- 闭包保存外部函数变量的引用，而不是实际的值。
- 每当一个函数在另一个函数中被创建时，就会产生闭包。

## JS闭包的用途

闭包常被用于:

- 封装 - 内部函数可以访问外部变量,但外部函数不能访问内部变量。这提供了封装和数据私密性。
- 状态持续 - 闭包可以在函数调用之间保持状态(例如计数器)。函数的变量在调用之间持续存在。
- 偏函数应用 - 闭包可以用于偏函数应用和柯里化函数。这涉及到创建一个捕获一些参数但保留其他参数未设置的函数。

## JS闭包的类型

### 1. 普通闭包
普通闭包是指一个函数内部定义了另一个函数，并且内部函数引用了外部函数的变量。这种情况下，内部函数会捕获外部函数的变量，并可以在外部函数执行完毕后继续使用。

```javascript
function outer() {
  var outerVar = 'I am from outer';
  
  function inner() {
    console.log(outerVar);
  }
  
  return inner;
}

var closureFunction = outer();
closureFunction(); // 输出：I am from outer
```

### 2. 立即调用函数表达式（IIFE）闭包
IIFE 是一种创建闭包的常见模式。通过将函数定义包裹在括号内并立即调用它，你可以创建一个在执行后仍然具有访问外部作用域的函数。


## 注意
缺点1：导致变量不会被垃圾回收机制回收，造成内存消耗

缺点2：不恰当的使用闭包可能会造成内存泄漏的问题
