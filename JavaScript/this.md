

<b style="color:red">this指向当前代码执行的上下文对象。</b>

**this绑定规则可以从应用和规范两种角度来解读**



## 应用角度
1. 默认绑定  
    >函数调用，this指向全局对象。  
    >严格模式下，this为undefined
   
2. 隐式绑定
   >调用对象方法  
   >注意绑定丢失

3. 显式绑定
    >call, apply, bind  
    >显示地指定函数的this值  
    >tips：
    >1. 当用bind绑定this值后，call和apply不会改变this值
    >2. 当this的参数是null或undefined时，会使用默认规则，即this会是window。另外严格模式下，this就是所传递的参数，不会进行改变。

4. new绑定
    >this值会绑定到内部创建的对象



### 绑定优先级

> new > 显式 > 隐式 > 默认

### 箭头函数

>箭头函数没有this值，当在箭头函数内部访问this时，取的是箭头函数定义的代码块的this值。

>简而言之，箭头函数的this值是继承上层代码块的this


## 规范角度
