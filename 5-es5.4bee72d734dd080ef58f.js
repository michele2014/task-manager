function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,a=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{S1vP:function(t,e,n){"use strict";n.r(e),n.d(e,"TasksModule",(function(){return at}));var a,i,r=n("3Pt+"),s=n("ofXK"),c=n("tyNb"),o=n("XNiG"),l=n("LRne"),b=n("z6cu"),d=n("lJxs"),u=n("JIr8"),f=n("VmFB"),k=n("fXoL"),h=n("tk/3"),p=((i=function(t){_inherits(n,t);var e=_createSuper(n);function n(t){var a;return _classCallCheck(this,n),(a=e.call(this)).http=t,a.task=new o.a,a.tasks=new Array,a.URL=a.BASE_URL+"/tasks",a.task.subscribe((function(t){a.tasks.push(t)})),a}return _createClass(n,[{key:"findTask",value:function(t){return 0===t?Object(l.a)({id:0}):this.http.get("".concat(this.URL,"/").concat(t)).pipe(Object(d.a)(this.extractData),Object(u.a)(this.handleError))}},{key:"getTasks",value:function(t){return this.http.get(this.URL).pipe(Object(d.a)((function(t){return t||[]})),Object(u.a)(this.handleError))}},{key:"saveTask",value:function(t){return t.id?this.updateTask(t):this.addTask(t)}},{key:"addTask",value:function(t){return this.http.post(this.URL,t,this.options).pipe(Object(d.a)((function(t){return t})),Object(u.a)((function(t){return Object(b.a)(t.json().error||"Server error")})))}},{key:"updateTask",value:function(t){return this.http.put("".concat(this.URL,"/").concat(t.id),t,this.options).pipe(Object(u.a)((function(t){return Object(b.a)(t.json().error||"Server error")})))}},{key:"removeTask",value:function(t){return this.http.delete("".concat(this.URL,"/").concat(t),this.options).pipe(Object(u.a)(this.raiseServerError))}}]),n}(f.a)).\u0275fac=function(t){return new(t||i)(k.Zb(h.b))},i.\u0275prov=k.Mb({token:i,factory:i.\u0275fac}),i),g=((a=function(){function t(e,n){_classCallCheck(this,t),this.taskService=e,this.router=n}return _createClass(t,[{key:"resolve",value:function(t,e){var n=this,a=t.params.id;return isNaN(a)?(console.warn("Task id is not a number:".concat(a)),this.router.navigate(["/tasks"]),Object(l.a)(null)):this.taskService.findTask(+a).pipe(Object(d.a)((function(t){return t||(console.log("task was not found ".concat(a)),n.router.navigate(["/tasks"]),null)})),Object(u.a)((function(t){return console.warn("Server erro retriving ".concat(t)),n.router.navigate(["/tasks"]),Object(l.a)(null)})))}}]),t}()).\u0275fac=function(t){return new(t||a)(k.Zb(p),k.Zb(c.g))},a.\u0275prov=k.Mb({token:a,factory:a.\u0275fac}),a),v=n("xoyZ");function y(t,e){if(1&t){var n=k.Wb();k.Vb(0,"a",13),k.dc("click",(function(){return k.rc(n),k.gc().delete()})),k.yc(1,"Delete"),k.Ub()}}var m,V,U=function(){return["info"]},C=function(t){return{"fa fa-exclamation-circle text-danger":t}},w=function(){return["tags"]},O=function(){return["/tasks"]},_=((V=function(){function t(e,n,a,i){_classCallCheck(this,t),this.taskService=e,this.messageService=n,this.route=a,this.router=i,this.pageTitle="Task Edit",this.errorMessage="",this.dataIsValid={}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.data.subscribe((function(e){t.onTaskRetrieved(e.task)}))}},{key:"isValid",value:function(t){var e=this;return this.validate(),t?this.dataIsValid[t]:this.dataIsValid&&Object.keys(this.dataIsValid).every((function(t){return!0===e.dataIsValid[t]}))}},{key:"onTaskRetrieved",value:function(t){this.task=this.route.snapshot.data.task,this.pageTitle=0===this.task.id?"Add Task":"Edit Task: ".concat(this.task.title)}},{key:"reset",value:function(){this.dataIsValid=null,this.currentTask=null,this.originalTask=null}},{key:"save",value:function(){var t=this;this.isValid(null)?this.taskService.saveTask(this.task).subscribe((function(){return t.onSaveComplete("".concat(t.task.title," was saved"))}),(function(e){return t.errorMessage=e})):this.errorMessage="Please correct the validation errors."}},{key:"delete",value:function(){var t=this;0===this.task.id?this.onSaveComplete():confirm("Really delete the task: ".concat(this.task.title,"?"))&&this.taskService.removeTask(this.task.id).subscribe((function(){return t.onSaveComplete("".concat(t.task.title," was deleted"))}),(function(e){return t.errorMessage=e}))}},{key:"onSaveComplete",value:function(t){t&&this.messageService.addMessage(t),this.reset(),this.router.navigate(["/tasks"])}},{key:"validate",value:function(){this.dataIsValid={},this.dataIsValid.info=this.task.title&&""!==this.task.title&&!this.task.title.startsWith(" "),this.dataIsValid.tags=this.task.categoryId&&this.task.categoryId>0}},{key:"task",get:function(){return this.currentTask},set:function(t){this.currentTask=t,this.originalTask=Object.assign({},t)}},{key:"isDirty",get:function(){return JSON.stringify(this.originalTask)!==JSON.stringify(this.currentTask)}}]),t}()).\u0275fac=function(t){return new(t||V)(k.Qb(p),k.Qb(v.a),k.Qb(c.a),k.Qb(c.g))},V.\u0275cmp=k.Kb({type:V,selectors:[["task-edit"]],decls:21,vars:15,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-block"],[1,"wizard"],[1,"nav","nav-pills"],["routerLinkActive","active",1,"nav-link",3,"routerLink"],[3,"ngClass"],[1,"card-footer"],[1,"row"],[1,"col-md-6","col-md-offset-2"],["type","button",1,"btn","btn-primary",2,"width","80px","margin-right","10px",3,"disabled","click"],["href","#",1,"btn","btn-secondary",3,"routerLink"],["class","btn btn-secondary",3,"click",4,"ngIf"],[1,"btn","btn-secondary",3,"click"]],template:function(t,e){1&t&&(k.Vb(0,"div",0),k.Vb(1,"div",1),k.yc(2),k.Ub(),k.Vb(3,"div",2),k.Vb(4,"div",3),k.Vb(5,"nav",4),k.Vb(6,"a",5),k.yc(7," Basic Information "),k.Rb(8,"i",6),k.Ub(),k.Vb(9,"a",5),k.yc(10," Search Tags "),k.Rb(11,"i",6),k.Ub(),k.Ub(),k.Ub(),k.Rb(12,"router-outlet"),k.Ub(),k.Vb(13,"div",7),k.Vb(14,"div",8),k.Vb(15,"div",9),k.Vb(16,"button",10),k.dc("click",(function(){return e.save()})),k.yc(17,"Save"),k.Ub(),k.Vb(18,"a",11),k.yc(19,"Cancel"),k.Ub(),k.xc(20,y,2,0,"a",12),k.Ub(),k.Ub(),k.Ub(),k.Ub()),2&t&&(k.Eb(2),k.Ac(" ",e.pageTitle," "),k.Eb(4),k.lc("routerLink",k.mc(8,U)),k.Eb(2),k.lc("ngClass",k.nc(9,C,!e.isValid("info"))),k.Eb(1),k.lc("routerLink",k.mc(11,w)),k.Eb(2),k.lc("ngClass",k.nc(12,C,!e.isValid("tags"))),k.Eb(5),k.lc("disabled",!e.isValid(null)),k.Eb(2),k.lc("routerLink",k.mc(14,O)),k.Eb(2),k.lc("ngIf",e.task.id>0))},directives:[c.i,c.h,s.i,c.k,s.k],styles:['form[_ngcontent-%COMP%]{padding:10px}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-radius:0 8px 0 0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#efefef;display:inline-block;margin-right:5px;min-width:150px;outline:none;padding:10px 40px;position:relative;text-decoration:none}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#007acc;color:#fff}.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after{border-left-color:#007acc}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{width:0;height:0;border-top:20px inset transparent;border-bottom:20px inset transparent;border-left:20px solid #fff;position:absolute;content:"";top:0;left:0}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:before, .wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after{border:none}.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{width:0;height:0;border-top:20px inset transparent;border-bottom:20px inset transparent;border-left:21px solid #efefef;position:absolute;content:"";top:0;right:-20px;z-index:2}']}),V),T=((m=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e){return(e=e?e.toLocaleLowerCase():null)?t.filter((function(t){return-1!==(t.title||"").toLocaleLowerCase().indexOf(e)})):t}}]),t}()).\u0275fac=function(t){return new(t||m)},m.\u0275pipe=k.Pb({name:"taskFilter",type:m,pure:!0}),m),M=function(t){return["/tasks",t]},E=function(t){return{filterBy:t}},x=function(t){return["/tasks",t,"edit"]};function P(t,e){if(1&t){var n=k.Wb();k.Vb(0,"tr",13),k.dc("click",(function(){k.rc(n);var t=e.index;return k.gc().setSelectedRow(t)})),k.Vb(1,"th",14),k.yc(2),k.Ub(),k.Vb(3,"td"),k.Vb(4,"a",15),k.yc(5),k.Ub(),k.Ub(),k.Vb(6,"td"),k.yc(7),k.Ub(),k.Vb(8,"td"),k.yc(9),k.hc(10,"date"),k.Ub(),k.Vb(11,"td"),k.yc(12),k.hc(13,"date"),k.Ub(),k.Vb(14,"td"),k.Vb(15,"a",16),k.yc(16,"Edit"),k.Ub(),k.Ub(),k.Vb(17,"td"),k.Vb(18,"button",17),k.dc("click",(function(){k.rc(n);var t=e.$implicit;return k.gc().removeTask(t.id)})),k.yc(19,"Delete"),k.Ub(),k.Ub(),k.Ub()}if(2&t){var a=e.$implicit,i=e.index,r=k.gc();k.Hb("active",i==r.selectedRow),k.Eb(2),k.zc(i+1),k.Eb(2),k.lc("routerLink",k.nc(16,M,a.id))("queryParams",k.nc(18,E,r.listFilter)),k.Eb(1),k.zc(a.title),k.Eb(2),k.zc(a.description),k.Eb(2),k.zc(k.ic(10,10,a.startDate,"dd/MM/yyyy")),k.Eb(3),k.zc(k.ic(13,13,a.endDate,"dd/MM/yyyy")),k.Eb(3),k.lc("routerLink",k.nc(20,x,a.id))}}var I,R,S=((I=function(){function t(e,n){_classCallCheck(this,t),this.taskService=e,this.route=n,this.pageTitle="Task List",this.selectedRow=-1,this.selectedId=-1,this.listFilter=""}return _createClass(t,[{key:"ngOnInit",value:function(){this.searchTasks()}},{key:"searchTasks",value:function(){var t=this;this.taskService.getTasks().subscribe((function(e){t.tasks=e,t.listFilter=t.route.snapshot.queryParams.filterBy||""}),(function(t){console.error("Error Server: ".concat(t))}))}},{key:"removeTask",value:function(t){var e=this;this.taskService.removeTask(t).subscribe((function(t){console.log(t),e.searchTasks()}),(function(t){console.log(t)}))}},{key:"setSelectedRow",value:function(t){this.selectedId=this.tasks[t].id,this.selectedRow=t===this.selectedRow?-1:t}}]),t}()).\u0275fac=function(t){return new(t||I)(k.Qb(p),k.Qb(c.a))},I.\u0275cmp=k.Kb({type:I,selectors:[["task-list"]],decls:36,vars:8,consts:[[1,"card","card-default"],[1,"card-header"],[1,"container"],[1,"card-block"],[1,"form-inline","mb-2","mt-2"],[1,"col-2"],[1,"btn","btn-primary",3,"click"],[1,"col-form-label"],[1,"col-3"],["type","text","placeholder","type task title",1,"form-control",3,"ngModel","ngModelChange"],[1,"table","table-hover","table-striped"],[3,"active","click",4,"ngFor","ngForOf"],[1,"card-footer"],[3,"click"],["scope","row"],[3,"routerLink","queryParams"],["href","#","role","button",1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(k.Vb(0,"div",0),k.Vb(1,"div",1),k.Vb(2,"div",2),k.yc(3),k.Ub(),k.Ub(),k.Vb(4,"div",3),k.Vb(5,"div",3),k.Vb(6,"div",4),k.Vb(7,"div",5),k.Vb(8,"button",6),k.dc("click",(function(){return e.searchTasks()})),k.yc(9," Refresh "),k.Ub(),k.Ub(),k.Vb(10,"div",5),k.Vb(11,"label",7),k.yc(12,"Filter by:"),k.Ub(),k.Ub(),k.Vb(13,"div",8),k.Vb(14,"input",9),k.dc("ngModelChange",(function(t){return e.listFilter=t})),k.Ub(),k.Ub(),k.Ub(),k.Ub(),k.Vb(15,"div",2),k.Vb(16,"table",10),k.Vb(17,"thead"),k.Vb(18,"tr"),k.Vb(19,"th"),k.yc(20,"#"),k.Ub(),k.Vb(21,"th"),k.yc(22,"Title"),k.Ub(),k.Vb(23,"th"),k.yc(24,"Description"),k.Ub(),k.Vb(25,"th"),k.yc(26,"Start date"),k.Ub(),k.Vb(27,"th"),k.yc(28,"End date"),k.Ub(),k.Rb(29,"th"),k.Rb(30,"th"),k.Ub(),k.Ub(),k.Vb(31,"tbody"),k.xc(32,P,20,22,"tr",11),k.hc(33,"taskFilter"),k.Ub(),k.Ub(),k.Ub(),k.Ub(),k.Vb(34,"div",12),k.yc(35),k.Ub(),k.Ub()),2&t&&(k.Eb(3),k.Bc(" ",e.pageTitle," - total tasks: ",null==e.tasks?null:e.tasks.length," "),k.Eb(11),k.lc("ngModel",e.listFilter),k.Eb(18),k.lc("ngForOf",k.ic(33,5,e.tasks,e.listFilter)),k.Eb(3),k.Ac(" total tasks: ",null==e.tasks?null:e.tasks.length,""))},directives:[r.b,r.h,r.k,s.j,c.i],pipes:[T,s.d],styles:[""]}),I),D=function(){return["/tasks"]},j=function(t){return["/tasks",t,"edit"]},F=((R=function(){function t(e){_classCallCheck(this,t),this.route=e,this.pageTitle="Task Detail"}return _createClass(t,[{key:"ngOnInit",value:function(){this.task=this.route.snapshot.data.task,this.pageTitle=this.task.id?"Edit Task: ".concat(this.task.title):"Add Task"}}]),t}()).\u0275fac=function(t){return new(t||R)(k.Qb(c.a))},R.\u0275cmp=k.Kb({type:R,selectors:[["task-detail"]],decls:37,vars:17,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-block"],[1,"row"],[1,"col-md-2"],[1,"col-md-6"],[1,"card-footer"],["queryParamsHandling","preserve",1,"btn","btn-secondary",3,"routerLink"],[1,"fa","fa-chevron-left"],[1,"btn","btn-primary",2,"width","80px","margin-left","10px",3,"routerLink"]],template:function(t,e){1&t&&(k.Vb(0,"div",0),k.Vb(1,"div",1),k.yc(2),k.Ub(),k.Vb(3,"div",2),k.Vb(4,"div",3),k.Vb(5,"div",4),k.yc(6,"Title:"),k.Ub(),k.Vb(7,"div",5),k.yc(8),k.Ub(),k.Ub(),k.Vb(9,"div",3),k.Vb(10,"div",4),k.yc(11,"Description:"),k.Ub(),k.Vb(12,"div",5),k.yc(13),k.Ub(),k.Ub(),k.Vb(14,"div",3),k.Vb(15,"div",4),k.yc(16,"Start Date:"),k.Ub(),k.Vb(17,"div",5),k.yc(18),k.hc(19,"date"),k.Ub(),k.Ub(),k.Vb(20,"div",3),k.Vb(21,"div",4),k.yc(22,"End Date:"),k.Ub(),k.Vb(23,"div",5),k.yc(24),k.hc(25,"date"),k.Ub(),k.Ub(),k.Vb(26,"div",3),k.Vb(27,"div",4),k.yc(28,"Assigne:"),k.Ub(),k.Vb(29,"div",5),k.yc(30),k.Ub(),k.Ub(),k.Ub(),k.Vb(31,"div",6),k.Vb(32,"a",7),k.Rb(33,"i",8),k.yc(34," Back "),k.Ub(),k.Vb(35,"a",9),k.yc(36," Edit "),k.Ub(),k.Ub(),k.Ub()),2&t&&(k.Eb(2),k.Ac(" ",e.pageTitle+": "+e.task.title," "),k.Eb(6),k.zc(e.task.title),k.Eb(5),k.zc(e.task.description),k.Eb(5),k.zc(k.ic(19,8,e.task.startDate,"mediumDate")),k.Eb(6),k.zc(k.ic(25,11,e.task.endDate,"mediumDate")),k.Eb(6),k.zc(e.task.assigneeId),k.Eb(2),k.lc("routerLink",k.mc(14,D)),k.Eb(3),k.lc("routerLink",k.nc(15,j,e.task.id)))},directives:[c.i],pipes:[s.d],styles:[""]}),R),L=n("kmnG"),N=n("qFsG"),z=n("iadO"),A=n("d3UM"),q=n("FKr1");function Q(t,e){1&t&&(k.Vb(0,"span",22),k.yc(1,"Title is required"),k.Ub())}function B(t,e){if(1&t&&(k.Vb(0,"mat-option",23),k.yc(1),k.Ub()),2&t){var n=e.$implicit;k.lc("value",n.id),k.Eb(1),k.Ac(" ",n.fullName," ")}}var W,K=function(t){return{"has-danger":t}},J=((W=function(){function t(e){_classCallCheck(this,t),this.route=e,this.assigneeUsers=[{userName:"michele@taskmanager.tax",fullName:"Michele Tester",passWord:"",id:1,isAdmin:!0},{userName:"miguel@taskmanager.tax",fullName:"Miguel Tester",passWord:"",id:2,isAdmin:!1},{userName:"patrick@taskmanager.tax",fullName:"Patrick Tester",passWord:"",id:3,isAdmin:!1},{userName:"aitor@taskmanager.tax",fullName:"Aitor Tester",passWord:"",id:4,isAdmin:!1},{userName:"gerard@taskmanager.tax",fullName:"Gerard Tester",passWord:"",id:5,isAdmin:!1}]}return _createClass(t,[{key:"formValuesChage",value:function(t){console.warn(t),console.warn(this.taskForm.invalid)}},{key:"ngOnInit",value:function(){var t=this;this.route.parent.data.subscribe((function(e){t.task=e.task,t.taskForm&&t.taskForm.reset()}))}}]),t}()).\u0275fac=function(t){return new(t||W)(k.Qb(c.a))},W.\u0275cmp=k.Kb({type:W,selectors:[["task-edit-info"]],viewQuery:function(t,e){var n;1&t&&k.Dc(r.j,!0),2&t&&k.pc(n=k.ec())&&(e.taskForm=n.first)},decls:46,vars:14,consts:[[1,"card-block"],[1,"container"],["name","task"],["taskForm","ngForm"],[1,"form-group","row",3,"ngClass"],[1,"col-2","col-form-label"],[1,"col-10"],["type","text","required","","name","title",1,"form-control",3,"ngModel","ngModelChange"],["title","ngModel"],["class","col-10 offset-2 form-text",4,"ngIf"],[1,"form-group","row"],["type","text","name","description",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-2","form-control"],["name","startDate","matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["startDate",""],["name","endDate","matInput","",3,"matDatepicker","ngModel","ngModelChange"],["endDate",""],[1,"col-4","form-control"],["name","category",3,"ngModel","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"col-10","offset-2","form-text"],[3,"value"]],template:function(t,e){if(1&t&&(k.Vb(0,"div",0),k.Vb(1,"div",1),k.Vb(2,"form",2,3),k.Vb(4,"fieldset"),k.Vb(5,"legend"),k.yc(6,"Basic Task Information"),k.Ub(),k.Vb(7,"div",4),k.Vb(8,"label",5),k.yc(9,"Title "),k.Ub(),k.Vb(10,"div",6),k.Vb(11,"input",7,8),k.dc("ngModelChange",(function(t){return e.task.title=t})),k.Ub(),k.Ub(),k.xc(13,Q,2,0,"span",9),k.Ub(),k.Vb(14,"div",10),k.Vb(15,"label",5),k.yc(16,"Description "),k.Ub(),k.Vb(17,"div",6),k.Vb(18,"input",11),k.dc("ngModelChange",(function(t){return e.task.description=t})),k.Ub(),k.Ub(),k.Ub(),k.Vb(19,"div",10),k.Vb(20,"label",5),k.yc(21,"Start Date "),k.Ub(),k.Vb(22,"div",6),k.Vb(23,"mat-form-field",12),k.Vb(24,"input",13),k.dc("ngModelChange",(function(t){return e.task.startDate=t})),k.Ub(),k.Rb(25,"mat-datepicker-toggle",14),k.Rb(26,"mat-datepicker",null,15),k.Ub(),k.Ub(),k.Ub(),k.Vb(28,"div",10),k.Vb(29,"label",5),k.yc(30,"End Date"),k.Ub(),k.Vb(31,"div",6),k.Vb(32,"mat-form-field",12),k.Vb(33,"input",16),k.dc("ngModelChange",(function(t){return e.task.endDate=t})),k.Ub(),k.Rb(34,"mat-datepicker-toggle",14),k.Rb(35,"mat-datepicker",null,17),k.Ub(),k.Ub(),k.Ub(),k.Vb(37,"div",10),k.Vb(38,"label",5),k.yc(39,"Assignee"),k.Ub(),k.Vb(40,"div",6),k.Vb(41,"mat-form-field",18),k.Vb(42,"mat-select",19),k.dc("ngModelChange",(function(t){return e.task.assigneeId=t})),k.Vb(43,"mat-option",20),k.yc(44,"None"),k.Ub(),k.xc(45,B,2,2,"mat-option",21),k.Ub(),k.Ub(),k.Ub(),k.Ub(),k.Ub(),k.Ub(),k.Ub(),k.Ub()),2&t){var n=k.qc(12),a=k.qc(27),i=k.qc(36);k.Eb(7),k.lc("ngClass",k.nc(12,K,n.invalid&&n.touched&&n.dirty)),k.Eb(4),k.lc("ngModel",e.task.title),k.Eb(2),k.lc("ngIf",n.invalid&&n.touched&&n.dirty),k.Eb(5),k.lc("ngModel",e.task.description),k.Eb(6),k.lc("matDatepicker",a)("ngModel",e.task.startDate),k.Eb(1),k.lc("for",a),k.Eb(8),k.lc("matDatepicker",i)("ngModel",e.task.endDate),k.Eb(1),k.lc("for",i),k.Eb(8),k.lc("ngModel",e.task.assigneeId),k.Eb(3),k.lc("ngForOf",e.assigneeUsers)}},directives:[r.n,r.i,r.j,s.i,r.b,r.l,r.h,r.k,s.k,L.b,N.b,z.b,z.d,L.e,z.a,A.a,q.i,s.j],styles:[""]}),W);function G(t,e){if(1&t&&(k.Vb(0,"mat-option",15),k.yc(1),k.Ub()),2&t){var n=e.$implicit;k.lc("value",n.id),k.Eb(1),k.Ac(" ",n.description," ")}}function Z(t,e){1&t&&(k.Vb(0,"span",16),k.yc(1,"Category is required"),k.Ub())}var $,X,H,Y=function(t){return{"has-danger":t}},tt=((X=function(){function t(e){_classCallCheck(this,t),this.route=e,this.categories=[{id:1,description:"Bug"},{id:2,description:"Epic"},{id:3,description:"Story"},{id:4,description:"Improvement"}]}return _createClass(t,[{key:"formValuesChage",value:function(t){console.warn(t),console.warn(this.taskForm.invalid)}},{key:"ngOnInit",value:function(){var t=this;this.route.parent.data.subscribe((function(e){t.task=e.task,t.taskForm&&t.taskForm.reset(),console.log(t.task)}))}}]),t}()).\u0275fac=function(t){return new(t||X)(k.Qb(c.a))},X.\u0275cmp=k.Kb({type:X,selectors:[["task-edit-tags"]],viewQuery:function(t,e){var n;1&t&&k.Dc(r.j,!0),2&t&&k.pc(n=k.ec())&&(e.taskForm=n.first)},decls:24,vars:6,consts:[[1,"card-block"],[1,"container"],["name","task"],["form","ngForm"],[1,"form-group","row",3,"ngClass"],[1,"col-2","col-form-label"],[1,"col-4"],["required","",1,"form-control"],["name","category",3,"ngModel","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["class","col-8 offset-2 form-text",4,"ngIf"],[1,"form-group","row"],["type","text","name","tags",1,"form-control"],[1,"btn","btn-secondary"],[3,"value"],[1,"col-8","offset-2","form-text"]],template:function(t,e){1&t&&(k.Vb(0,"div",0),k.Vb(1,"div",1),k.Vb(2,"form",2,3),k.Vb(4,"fieldset"),k.Vb(5,"legend"),k.yc(6,"Task Search Tags"),k.Ub(),k.Vb(7,"div",4),k.Vb(8,"label",5),k.yc(9,"Category"),k.Ub(),k.Vb(10,"div",6),k.Vb(11,"mat-form-field",7),k.Vb(12,"mat-select",8),k.dc("ngModelChange",(function(t){return e.task.categoryId=t})),k.Vb(13,"mat-option",9),k.yc(14,"None"),k.Ub(),k.xc(15,G,2,2,"mat-option",10),k.Ub(),k.Ub(),k.Ub(),k.xc(16,Z,2,0,"span",11),k.Ub(),k.Vb(17,"div",12),k.Vb(18,"label",5),k.yc(19,"Search Tags "),k.Ub(),k.Vb(20,"div",6),k.Rb(21,"input",13),k.Ub(),k.Vb(22,"button",14),k.yc(23,"Add"),k.Ub(),k.Ub(),k.Ub(),k.Ub(),k.Ub(),k.Ub()),2&t&&(k.Eb(7),k.lc("ngClass",k.nc(4,Y,0==e.task.categoryId)),k.Eb(5),k.lc("ngModel",e.task.categoryId),k.Eb(3),k.lc("ngForOf",e.categories),k.Eb(1),k.lc("ngIf",0==e.task.categoryId))},directives:[r.n,r.i,r.j,s.i,L.b,A.a,r.h,r.k,q.i,s.j,s.k],styles:[""]}),X),et=(($=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canDeactivate",value:function(t){return!t.isDirty||confirm("Navigate away and lose all changes to ".concat(t.task.title||"New Task"))}}]),t}()).\u0275fac=function(t){return new(t||$)},$.\u0275prov=k.Mb({token:$,factory:$.\u0275fac}),$),nt=n("ilih"),at=((H=function t(){_classCallCheck(this,t)}).\u0275mod=k.Ob({type:H}),H.\u0275inj=k.Nb({factory:function(t){return new(t||H)},providers:[p,g,et],imports:[[nt.a,c.j,r.d,s.b,c.j.forChild([{path:"",component:S},{path:":id",component:F,resolve:{task:g}},{path:":id/edit",component:_,canDeactivate:[et],resolve:{task:g},children:[{path:"",redirectTo:"info",pathMatch:"full"},{path:"info",component:J},{path:"tags",component:tt}]}])]]}),H)}}]);