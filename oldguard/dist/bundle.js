(()=>{var __commonJS=(cb,mod)=>function __require(){return mod||(0,cb[Object.keys(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports};var require_dom=__commonJS({"src/util/dom.js"(exports,module){module.exports={make:name=>document.createElement(name),makeDiv:_=>make`div`,button:_=>make`button`}}});var{make:make2}=require_dom();var div=make2`div`;div.innerText="test";document.body.append(div);})();
