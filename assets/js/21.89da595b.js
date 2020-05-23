(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{351:function(t,s,n){"use strict";n.r(s);var a=n(33),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"原型与原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型链"}},[t._v("#")]),t._v(" 原型与原型链")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/dee9f8b14771",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("在js中，有一句话叫做万物皆对象。这个对象，分为普通对象和函数对象，那么什么是函数对象呢？凡是通过 new Function() 创建的对象都是函数对象，其他的都是普通对象。比如我们常用的function，还有原生Object、Array等。")]),t._v(" "),n("p",[t._v("首先复习一下构造函数")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" job")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("job "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Zaxlct'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Software Engineer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Doctor'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("在上述例子中，person1和person2都是构造函数Person的一个实例。这两个实例都拥有一个 constructor  属性，该属性指向其构造函数Person，由此我们可以得出一个概念：")]),t._v(" "),n("p",[n("strong",[t._v("实例的构造函数属性（constructor）指向构造函数。")])]),t._v(" "),n("p",[t._v("在JavaScript 中，每当定义一个对象（函数也是对象）时候，对象中都会包含一些预定义的属性。其中每个函数对象，都拥有一个原型对象属性：prototype，指向该函数对象所拥有的的原型对象，同时，不管是函数对象，还是普通对象，都会拥有一个__proto__属性指向该对象的构造函数的原型对象。这句话可能有点绕口，简单来说，上述的person1的__proto__属性指向的是，构造函数的原型对象也就是Person的prototype。那么我们又可以得出一个概念：")]),t._v(" "),n("p",[n("strong",[t._v("每个对象都拥有 "),n("strong",[t._v("proto")]),t._v(" 属性，但是只有函数对象拥有prototype")])]),t._v(" "),n("p",[t._v("接下来我们将关注点放在prototype上，大部分情况下，原型对象其实就是一个普通对象，它也有个constructor指针，会指向自身所归属的那个函数对象，回顾一下第一条概念，"),n("strong",[t._v("实例的构造函数属性（constructor）指向构造函数。")]),t._v(" 那么我们是否可以将原型对象看成是构造函数的一个实例呢？当然可以，那么我们得出以下结论：")]),t._v(" "),n("p",[n("strong",[t._v("原型对象（Person.prototype）是 构造函数（Person）的一个实例")])]),t._v(" "),n("p",[t._v("那么这边问题来了，原生的Function，它的原型对象是普通对象呢还是函数对象呢？答案是：函数对象，同时，它也很特殊，它没有prototype。我相信理解了上面所说的东西这边应该没有什么疑问。")]),t._v(" "),n("p",[t._v("那么原型对象是拿来做什么的呢？主要作用用于继承。请看以下代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tip: 当函数执行时这个 this 指的是谁？")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getName")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tip: 当函数执行时这个 this 指的是谁？")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n person1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Mick")]),t._v("\n")])])]),n("p",[t._v("从这个例子可以看出，通过给 Person.prototype 设置了一个函数对象的属性，那由 Person 的实例（person1）出来的普通对象就继承了这个属性。")]),t._v(" "),n("p",[t._v("在这要说一下，js的一个属性查找机制是，会沿着对象的__protp__和prototype进行查找，直到null。这同时也是原型链的一个本质。")]),t._v(" "),n("p",[t._v("接下来，我们再详细说一下，Function.prototype，前面说过，它是一个函数对象，那么它的__proto__属性指向哪里呢？根据前面所学的知识，你可能会说，它指向自身，然而，实际上，它指向的是Object.prototype，你不用特意去纠结为什么，就像你不用纠结先有鸡还是先有蛋一样，如果一定想知道，那么你可以认为，原型链要有一个终点，如果它指向自身，不就无限循环了吗？")]),t._v(" "),n("p",[t._v("最后，Object.prototype的proto是谁？答案是，null，也就是，原型链的终点。")]),t._v(" "),n("p",[t._v("让我们来总结一下：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("每个对象都拥有 "),n("strong",[t._v("proto")]),t._v(" 属性，但是只有函数对象拥有prototype")])]),t._v(" "),n("li",[n("p",[t._v("每个实例都拥有constructor，同时原型对象也有")])]),t._v(" "),n("li",[n("p",[t._v("在正常情况下原型对象就是普通对象，但是Function是特殊的，因为，将原型对象看成构造函数的实例的话，那么Function的原型对象是，new Function")])]),t._v(" "),n("li",[n("p",[t._v("尽管Function的prototype是函数对象，但是这个函数对象的__proto__指向的却是Object.prototype")])]),t._v(" "),n("li",[n("p",[t._v("Object.prototype."),n("strong",[t._v("proto")]),t._v("  === null，你可以理解为，万物皆有头")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);