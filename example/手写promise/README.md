# 手写Promise

## Promise/A+
1、promise 有三个状态：pending，fulfilled，or rejected；「规范 Promise/A+ 2.1」  
2、new promise时， 需要传递一个executor()执行器，执行器立即执行；  
3、executor接受两个参数，分别是resolve和reject；  
4、promise 的默认状态是 pending；  
5、promise 有一个value保存成功状态的值，可以是undefined/thenable/promise；「规范 Promise/A+ 1.3」  
6、promise 有一个reason保存失败状态的值；「规范 Promise/A+ 1.5」  
7、promise 只能从pending到rejected, 或者从pending到fulfilled，状态一旦确认，就不会再改变；  
8、promise 必须有一个then方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 和promise 失败的回调 onRejected；「规范 Promise/A+ 2.2」  
9、如果调用 then 时，promise 已经成功，则执行onFulfilled，参数是promise的value；  
10、如果调用 then 时，promise 已经失败，那么执行onRejected, 参数是promise的reason；  
11、如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调onRejected；

按照上面的特征，我们试着勾勒下 Promise 的形状：

```javascript
// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;

    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];
    

    // 调用此方法就是成功
    let resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;

        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    // 调用此方法就是失败
    let reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;

        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者  
      executor(resolve,reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      })
    }
  }
}
```