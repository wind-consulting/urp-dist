"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[134],{8134:(E,f,o)=>{o.r(f),o.d(f,{AuthResetPasswordModule:()=>m});var p=o(30144),u=o(4859),l=o(59549),g=o(97392),h=o(284),w=o(51572),v=o(85804),y=o(77775),Z=o(24300),i=o(24006),A=o(28746),P=o(28288);class C{static isEmptyInputValue(s){return null==s||0===s.length}static mustMatch(s,r){return a=>{const d=a.get(s),n=a.get(r);if(!d||!n||(n.hasError("mustMatch")&&(delete n.errors.mustMatch,n.updateValueAndValidity()),this.isEmptyInputValue(n.value)||d.value===n.value))return null;const x={mustMatch:!0};return n.setErrors(x),x}}}var t=o(94650),T=o(88951),U=o(98214),I=o(36895);const J=["resetPasswordNgForm"];function R(e,s){if(1&e&&(t.TgZ(0,"fuse-alert",41),t._uU(1),t.qZA()),2&e){const r=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),t.xp6(1),t.hij(" ",r.alert.message," ")}}function b(e,s){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function F(e,s){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function Q(e,s){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function N(e,s){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function _(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password confirmation is required "),t.qZA())}function M(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Passwords must match "),t.qZA())}function j(e,s){1&e&&(t.TgZ(0,"span"),t._uU(1," Reset your password "),t.qZA())}function Y(e,s){1&e&&t._UZ(0,"mat-progress-spinner",43),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const q=function(){return["/sign-in"]};class c{constructor(s,r){this._authService=s,this._formBuilder=r,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",i.kI.required],passwordConfirm:["",i.kI.required]},{validators:C.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe((0,A.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(s=>{this.alert={type:"success",message:"Your password has been reset."}},s=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}}c.\u0275fac=function(s){return new(s||c)(t.Y36(T.e),t.Y36(i.QS))},c.\u0275cmp=t.Xpm({type:c,selectors:[["auth-reset-password"]],viewQuery:function(s,r){if(1&s&&t.Gf(J,5),2&s){let a;t.iGM(a=t.CRH())&&(r.resetPasswordNgForm=a.first)}},decls:66,vars:16,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(s,r){if(1&s){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Reset your password"),t.qZA(),t.TgZ(7,"div",6),t._uU(8,"Create a new password for your account"),t.qZA(),t.YNc(9,R,2,5,"fuse-alert",7),t.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",11,12),t.TgZ(17,"button",13),t.NdJ("click",function(){t.CHM(a);const n=t.MAs(16);return t.KtG(n.type="password"===n.type?"text":"password")}),t.YNc(18,b,1,1,"mat-icon",14),t.YNc(19,F,1,1,"mat-icon",14),t.qZA(),t.TgZ(20,"mat-error"),t._uU(21," Password is required "),t.qZA()(),t.TgZ(22,"mat-form-field",10)(23,"mat-label"),t._uU(24,"Password (Confirm)"),t.qZA(),t._UZ(25,"input",15,16),t.TgZ(27,"button",13),t.NdJ("click",function(){t.CHM(a);const n=t.MAs(26);return t.KtG(n.type="password"===n.type?"text":"password")}),t.YNc(28,Q,1,1,"mat-icon",14),t.YNc(29,N,1,1,"mat-icon",14),t.qZA(),t.YNc(30,_,2,0,"mat-error",17),t.YNc(31,M,2,0,"mat-error",17),t.qZA(),t.TgZ(32,"button",18),t.NdJ("click",function(){return r.resetPassword()}),t.YNc(33,j,2,0,"span",17),t.YNc(34,Y,1,2,"mat-progress-spinner",19),t.qZA(),t.TgZ(35,"div",20)(36,"span"),t._uU(37,"Return to"),t.qZA(),t.TgZ(38,"a",21),t._uU(39,"sign in "),t.qZA()()()()(),t.TgZ(40,"div",22),t.O4$(),t.TgZ(41,"svg",23)(42,"g",24),t._UZ(43,"circle",25)(44,"circle",26),t.qZA()(),t.TgZ(45,"svg",27)(46,"defs")(47,"pattern",28),t._UZ(48,"rect",29),t.qZA()(),t._UZ(49,"rect",30),t.qZA(),t.kcU(),t.TgZ(50,"div",31)(51,"div",32)(52,"div"),t._uU(53,"Welcome to"),t.qZA(),t.TgZ(54,"div"),t._uU(55,"our community"),t.qZA()(),t.TgZ(56,"div",33),t._uU(57," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),t.qZA(),t.TgZ(58,"div",34)(59,"div",35),t._UZ(60,"img",36)(61,"img",37)(62,"img",38)(63,"img",39),t.qZA(),t.TgZ(64,"div",40),t._uU(65,"More than 17k people joined us, it's your turn"),t.qZA()()()()()}if(2&s){const a=t.MAs(16),d=t.MAs(26);t.xp6(9),t.Q6J("ngIf",r.showAlert),t.xp6(1),t.Q6J("formGroup",r.resetPasswordForm),t.xp6(5),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(6),t.Q6J("formControlName","passwordConfirm"),t.xp6(3),t.Q6J("ngIf","password"===d.type),t.xp6(1),t.Q6J("ngIf","text"===d.type),t.xp6(1),t.Q6J("ngIf",r.resetPasswordForm.get("passwordConfirm").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),t.xp6(1),t.Q6J("color","primary")("disabled",r.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",!r.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",r.resetPasswordForm.disabled),t.xp6(4),t.Q6J("routerLink",t.DdM(15,q))}},dependencies:[p.rH,u.lW,u.RK,l.KE,l.hX,l.TO,l.R9,g.Hw,h.Nt,w.Ou,U.W,I.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],encapsulation:2,data:{animation:P.L}});const k=[{path:"",component:c}];class m{}m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[p.Bz.forChild(k),u.ot,l.lN,g.Ps,h.c,w.Cq,v.J,y.fC,Z.m]})}}]);