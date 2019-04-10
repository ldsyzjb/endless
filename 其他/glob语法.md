npm：https://www.npmjs.com/package/glob  
wiki： https://en.wikipedia.org/wiki/Glob_(programming)  
一般用于linux中sheel命令进行路径匹配，后续被大部分语言实现，例如nodejs，go，python等等

### 1.基本通配符
`*?[]` 这三个通配符是最基本的通配符，其他的则有可能没有被其他语言实现；

基本通配符只能匹配一个单独的路径部分，即一个文件名或目录名，而不能匹配多层路径，即不匹配路径分隔符（linux中/，windows中\）；
```
例如有着一个路径：one/two/three
我们不能用
one?two?three
one*three
one[.]two/three
来进行匹配这个路径，
需要用/显式声明不同的路径部分，或**来匹配多层路径；
```
1. `*` 匹配0或多个字符
```
1. `Law*` 匹配 Lawfds，Lawabc
2. `*Law*` 匹配 abcLawdef
```
2. `?`匹配0或1个字符
```
1. a?bc 匹配 abc,akbc,asbc,a.bc
```
3. `[...]` 匹配中括号中任意一个字符，或者相匹配的一个范围，这类似于正则表达式。如果中括号中以!或^开始，则表示不匹配相应的字符；
```
1. [abc] 可以匹配a,b,c
2. [a-d] 可以匹配a,b,c,d
3. [2-9] 可以匹配2,3,4,9
3. [!abc] 匹配除了a,b,c以外的任意字符
4. [!a-d] 匹配除了a,b,c,d以外的任意字符
```

### 2.可拓展的模式(brace expansion)
`pattern1{pattern2, pattern3}`  
当使用这种语法，这个表达式会被拓展为多个表达式去执行  
```
pattern1{pattern2, pattern3} 
=>
pattern1patter2
pattern1patter3

example:
file1{/src,/source}
=>
file1/src
file1/source
```
example:
```sh
执行shell命令
ls simpleImg/{upload,frontEnd}

结果为：
simpleImg/frontEnd:
index.css  index.html  index.js  src

simpleImg/upload:
026a05.jpg  image2.jpg

```

### 3.多层路径匹配（**）
使用**可以匹配0或多层路径，和*相比**可以匹配路径分隔符（\/），而*不能
```
**/*.js
可以匹配
one/two/three/fir.js
four/five/sec.js
six/thi.js
fou.js

```

### 4.小括号匹配
1. !(pattern|pattern|pattern)   
    匹配不包含括号内的字符
2. ?(pattern|pattern|pattern)   
    匹配包含或不包含括号内的字符
3. +(pattern|pattern|pattern)  
    匹配包含1个或多个括号内的字符
4. *(a|b|c)  
    匹配包含0个或多个括号内的字符
5. @(pattern|pat*|pat?erN)  
    匹配包含1个括号内的字符


### 5.注意
基本通配符都不能匹配第一个字符为.的路径
```
file/*.jpg
不能匹配
file/.one.jpg
应该写为
file/.*.jpg
```
