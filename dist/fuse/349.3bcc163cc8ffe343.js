"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[349],{73836:(v,d,p)=>{p.d(d,{D:()=>r});class r{constructor(){}}},2274:(v,d,p)=>{p.d(d,{u:()=>l});var r=p(65938),a=p(94650),s=p(18998),o=p(24006);class l{constructor(u,g,e){this.data=u,this.leaveService=g,this.dialogRef=e}setDecision(u){console.log(this.data.result),this.validation="APPROVED"!==u||this.data.result.isManager1?u:"PARTIALLY_APPROVED"}validate(){this.leaveService.validateLeave(this.data.result.uuid,this.validation).subscribe(u=>this.dialogRef.close(u))}}l.\u0275fac=function(u){return new(u||l)(a.Y36(r.WI),a.Y36(s.t),a.Y36(r.so))},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-leave-agreement"]],decls:25,vars:0,consts:[["mat-dialog-content",""],[1,"mt-0","mb-2","p-2"],[1,"flex","justify-center","mb-2"],["src","assets/imgs/edit.svg",1,"w-[45px]","h-[45px]"],[1,"flex","justify-center","mb-4"],[1,"text-black","dark:text-white"],[1,"text-center"],[3,"ngSubmit"],[1,"grid","grid-cols-2","text-center"],[1,"grid-rows-2"],["type","radio","name","example",1,"option-input","radio",3,"click"],[1,"text-slate-900","font-semibold","text-center"],["mat-dialog-actions","",1,"flex","justify-center","mb-2"],["type","submit","mat-dialog-close","",1,"button-yellow"]],template:function(u,g){1&u&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2),a._UZ(3,"img",3),a.qZA(),a.TgZ(4,"div",4)(5,"label",5),a._uU(6,"Gestion de status"),a.qZA()(),a.TgZ(7,"div",4),a._UZ(8,"br"),a.TgZ(9,"p",6),a._uU(10,"Veuillez accorder la demande de cong\xe9"),a.qZA()()(),a.TgZ(11,"form",7),a.NdJ("ngSubmit",function(){return g.validate()}),a.TgZ(12,"div",8)(13,"div",9)(14,"input",10),a.NdJ("click",function(){return g.setDecision("DENIED")}),a.qZA(),a.TgZ(15,"p",11),a._uU(16,"R\xe9fuser"),a.qZA()(),a.TgZ(17,"div",9)(18,"input",10),a.NdJ("click",function(){return g.setDecision("APPROVED")}),a.qZA(),a.TgZ(19,"p",11),a._uU(20,"Accepter"),a.qZA()()(),a._UZ(21,"br"),a.TgZ(22,"div",12)(23,"button",13),a._uU(24,"Sauvegarder"),a.qZA()()()())},dependencies:[o._Y,o.JL,o.F,r.ZT,r.xY,r.H8],styles:['@charset "UTF-8";.option-input[_ngcontent-%COMP%]{-webkit-appearance:none;-o-appearance:none;appearance:none;inset:13.33333px 0 0;height:40px;width:40px;transition:all .15s ease-out 0s;background:#cbd1d8;border:none;color:#fff;cursor:pointer;display:inline-block;outline:none;z-index:1000}.option-input[_ngcontent-%COMP%]:hover{background:#9faab7}.option-input[_ngcontent-%COMP%]:checked{background:#EFCC0B}.option-input[_ngcontent-%COMP%]:checked:before{width:40px;height:40px;display:flex;content:"\\2713";font-size:25px;font-weight:700;position:absolute;align-items:center;justify-content:center}.option-input[_ngcontent-%COMP%]:checked:after{animation:_ngcontent-%COMP%_click-wave .65s;background:#EFCC0B;content:"";display:block;z-index:100}.option-input.radio[_ngcontent-%COMP%]{border-radius:50%}.option-input.radio[_ngcontent-%COMP%]:after{border-radius:50%}@keyframes _ngcontent-%COMP%_click-wave{0%{height:40px;width:40px;opacity:.35;position:relative}to{height:200px;width:200px;margin-left:-80px;margin-top:-80px;opacity:0}}']})},44223:(v,d,p)=>{p.d(d,{S:()=>o});var r=p(65938),a=p(94650),s=p(97392);class o{constructor(c){this.data=c}}o.\u0275fac=function(c){return new(c||o)(a.Y36(r.WI))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-leave-reason"]],decls:14,vars:2,consts:[["mat-dialog-content",""],[1,"mt-0","mb-2","p-2"],[1,"flex","justify-center","mb-2"],[1,"icon-display"],[1,"text-slate-900","text-center","font-semibold"],[1,"flex","justify-center","mb-4"],["mat-dialog-actions","",1,"flex","justify-center","mb-2"],["type","button",1,"button-yellow",3,"mat-dialog-close"]],template:function(c,u){1&c&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),a._uU(4,"remove_red_eye"),a.qZA()(),a._UZ(5,"br"),a.TgZ(6,"p",4),a._uU(7,"Raison d'un demande de cong\xe9 : "),a.qZA(),a.TgZ(8,"div",5),a._UZ(9,"br"),a._uU(10),a.qZA()(),a.TgZ(11,"div",6)(12,"button",7),a._uU(13,"Fermer"),a.qZA()()()),2&c&&(a.xp6(10),a.hij("\xa0 ",u.data.contract," "),a.xp6(2),a.Q6J("mat-dialog-close",u.data))},dependencies:[s.Hw,r.ZT,r.xY,r.H8],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(2)}"]})},18998:(v,d,p)=>{p.d(d,{t:()=>u});var r=p(80529),a=p(73836),s=p(54004),o=p(17414),l=p(70262),c=p(94650);class u{constructor(e){this.http=e,this.tenantId=localStorage.getItem("CURRENT_TENANT"),this.LeaveByCollaborator=[],this.collaboratorResult=new a.D,this.baseUrl="http://localhost:8762/wind-leaves"}addLeave(e){return this.http.post(`${this.baseUrl}/collaborator-leave-rules/collaborator/${e.uuid}/sickrule/${e.sickuuid}/payedrule/${e.payeduuid}`,null)}getAllcompanyHoliday(){return this.http.get(`${this.baseUrl}/company-holidays`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(e=>e))}getAllcompanyEnabledLeaveList(){return this.http.get(`${this.baseUrl}/leaves`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(e=>this.CompanyEnabledLeaveResultList=e))}getAllByTenantId(){return this.http.get(`${this.baseUrl}/leaves/tenantlist`,{headers:(new r.WM).set("Content-Type","application/json")})}getAllCompanyHolidayByTenantId(){return this.http.get(`${this.baseUrl}/company-holidays/tenantList`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(e=>e))}getAllcompanyEnabledLeaveByType(e){return this.http.get(`${this.baseUrl}/leaves/tenant-config/${e}`).pipe((0,s.U)(t=>t))}getLeaveByCollaborator(e){return this.http.get(`${this.baseUrl}/collaborator-leave-rules/collaborator/${e}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(t=>t))}getAllLeaveApprovedByCollaborator(e){return this.http.get(`${this.baseUrl}/leave-requests/collaborator/${e}?status=APPROVED`).pipe((0,s.U)(t=>t))}getAllLeaveByCollab(e){return this.http.get(`${this.baseUrl}/leave-requests/collaborator/${e}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(t=>t))}getAllLeaveByBoss(e){return this.http.get(`${this.baseUrl}/leave-requests/findAllByBoss/${e}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(t=>t))}getAllLeaveRules(){return this.http.get(`${this.baseUrl}/company-leave-rules/tenantlist/`)}getLeaveRules(e){return this.http.get(`${this.baseUrl}/company-leave-rules/${e}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(t=>t))}getAllLeaveRequest(e,t){return this.http.get(`${this.baseUrl}/leave-requests/period?fd=${e}&td=${t}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(n=>n))}getAllLeaveRequestbyperiodandtype(e,t,n){let i="";return i=""===n&&"Invalid date"!==e&&"Invalid date"!==t?`${this.baseUrl}/leave-requests/period-type?fd=${e}&td=${t}`:"Invalid date"===t&&"Invalid date"!==e&&""!==n?`${this.baseUrl}/leave-requests/period-type?fd=${e}&type=${n}`:"Invalid date"===e&&"Invalid date"!==t&&""!==n?`${this.baseUrl}/leave-requests/period-type?td=${t}&type=${n}`:"Invalid date"===e&&"Invalid date"===t&&""!==n?`${this.baseUrl}/leave-requests/period-type?type=${n}`:""===n&&"Invalid date"===t&&"Invalid date"!==e?`${this.baseUrl}/leave-requests/period-type?fd=${e}`:""===n&&"Invalid date"===e&&"Invalid date"!==t?`${this.baseUrl}/leave-requests/period-type?td=${t}`:""===n&&"Invalid date"===e&&"Invalid date"===t?`${this.baseUrl}/leave-requests/period?td=&td=`:`${this.baseUrl}/leave-requests/period-type?fd=${e}&td=${t}&type=${n}`,this.http.get(i,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(h=>h))}getAllLeaveRequestByCollaborator(e){return this.http.get(`${this.baseUrl}/leave-requests/collaborator/${e}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(t=>t))}getAllLeaveByCollaborator(){return this.http.get(`${this.baseUrl}/collaborator-leave-rules/tenantlist`)}getAllLeaveByTenantId(){return this.http.get(`${this.baseUrl}/leave-requests/tenantlist`).pipe((0,s.U)(e=>e))}getAllAbsencesByTenantAndDateBetween(e,t,n){return this.http.get(`${this.baseUrl}/absences/getAllByTenantId/v2/${e}/${t}/${n}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`)}).pipe((0,s.U)(i=>i))}getAllAbsencesByTenantIdAndStatusDateBetween(e,t,n,i){return this.http.get(`${this.baseUrl}/absences/getAllByTenantIdAndStatus/${e}/${t}/${n}/${i}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`)}).pipe((0,s.U)(h=>h))}getAllAbsencesByTenantIdAndStatusNotApprouvedDateBetween(e,t,n,i){return this.http.get(`${this.baseUrl}/absences/getAllByTenantIdAndStatusNotApprouved/${e}/${t}/${n}/${i}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`)}).pipe((0,s.U)(h=>h))}getAllAbsencesByCollaboratorAndDateBetween(e,t,n){return this.http.get(`${this.baseUrl}/absences/getAllByCollab/${e}/${t}/${n}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`)}).pipe((0,s.U)(i=>i))}getAllAbsencesByCollaboratorAndStatusAndDateBetween(e,t,n,i){return this.http.get(`${this.baseUrl}/absences/getAllByCollabAndStatus/${e}/${t}/${n}/${i}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`)}).pipe((0,s.U)(h=>h))}getAllAbsencesByCollaboratorAndStatusNotApprouvedAndDateBetween(e,t,n,i){return this.http.get(`${this.baseUrl}/absences/getAllByCollabAndStatusNotApprouved/${e}/${t}/${n}/${i}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`)}).pipe((0,s.U)(h=>h))}updateAbsenceStatus(e,t){return this.http.patch(`${this.baseUrl}/absences/updateStatus/${e}/${t}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(n=>n))}getValidByMatricule(e){return this.http.get(`${this.baseUrl}/collaborator-leave-rules/getValidByMatricule/${e}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(t=>t))}ValiderScore(e){return this.http.post(`${this.baseUrl}/collaborator-leave-rules/collaborator/treatScoring`,e,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}FilterPointageNotValid(e,t){return this.http.get(`${this.baseUrl}/collaborator-leave-rules/collaborator/filter-not-valid`,{headers:(new r.WM).set("Content-Type","application/json"),params:(new r.LE).set("registrationNumber",String(e)).set("entryDate",String(t))}).pipe((0,s.U)(n=>n))}getPointageNonValide(){return this.http.get(`${this.baseUrl}/collaborator-leave-rules/collaborator/get-not-valid-score`,{headers:(new r.WM).set("Content-Type","application/json")})}getRttByCollaborator(e,t){return this.http.get(`${this.baseUrl}/collaborator-leave-rules/RttByCollaborator/${e}/${t}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(n=>n))}getAllLeaveByCollaboratorbyUuid(e){return this.http.get(`${this.baseUrl}/collaborator-leave-rules/collaborator/${e}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,s.U)(t=>t))}createCompanyEnabledLeaves(e){return this.http.post(`${this.baseUrl}/leaves`,e,{headers:(new r.WM).set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}createCompanyHoliday(e){return this.http.post(`${this.baseUrl}/company-holidays`,e,{headers:(new r.WM).set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}uploadFilePointage(e){return this.http.post(`${this.baseUrl}/collaborator-leave-rules/collaborator/uploadCsvFile`,e)}cloture(e){return this.http.post(`${this.baseUrl}/collaborator-leave-rules/collaborator/Valider/${e}`,{},{headers:(new r.WM).set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}createRulesForCollaborator(e){return this.http.post(`${this.baseUrl}/collaborator-leave-rules`,e).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}assignRulesForCollaborator(e){return console.log(e),this.http.post(`${this.baseUrl}/collaborator-leave-rules/collaborator/${e.uuid}/sickrule/${e.sick_uuid}/payedrule/${e.payed_uuid}`,e,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}revokeRulesForCollaborator(e){return this.http.delete(`${this.baseUrl}/collaborator-leave-rules/collaborator/${e.uuid}/rule/${e.rule_uuid}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}createLeaveRule(e){return console.log("Create Leave Rule",e),this.http.post(`${this.baseUrl}/company-leave-rules`,e).pipe((0,s.U)(t=>t))}createLeaveRequest(e){return this.http.post(`${this.baseUrl}/leave-requests`,e,{headers:(new r.WM).set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[t]),(0,s.U)(t=>t))}deletecompanyEnabledLeaveList(e){return this.http.delete(`${this.baseUrl}/leaves/${e}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}getLeaveByUuid(e){return this.http.get(`${this.baseUrl}/leaves/${e}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}deletecompanyHoliday(e){return this.http.delete(`${this.baseUrl}/company-holidays/${e}`).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}deletecompanyLeaveRule(e){return this.http.delete(`${this.baseUrl}/company-leave-rules/${e}`,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}deletecompanyLeaveRequest(e){return this.http.delete(`${this.baseUrl}/leave-requests/${e}`,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}updatecompanyEnabledLeaveList(e){return this.http.put(`${this.baseUrl}/leaves`,e,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}updatecompanyHoliday(e){return this.http.put(`${this.baseUrl}/company-holidays`,e).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}updatecompanyLeaveRule(e){return this.http.put(`${this.baseUrl}/company-leave-rules`,e,{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}updatecompanyLeaveRequest(e){return this.http.put(`${this.baseUrl}/leave-requests/${e.uuid}`,e.status,{headers:(new r.WM).set("Content-Type","application/json")}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}decidecompanyLeaveRequest(e){return this.http.patch(`${this.baseUrl}/leave-requests/${e.uuid}?decision=${e.decision}`,{},{headers:(new r.WM).set("Content-Type","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")} `)}).pipe((0,o.V)(6e4),(0,l.K)((t,n)=>[]),(0,s.U)(t=>t))}filterLeave(e){return this.http.get(`${this.baseUrl}/leave-requests/filter`,{params:this.setLeaveSearchParams(e)})}setLeaveSearchParams(e){let t=new r.LE;return null!==e.leave.type&&(t=t.set("type",e.leave.type)),null!==e.start_date&&(t=t.set("start_date",e.start_date.toString())),null!==e.end_date&&(t=t.set("end_date",e.end_date.toString())),null!==e.status&&(t=t.set("status",e.status)),t}setLeaveRequestStatus(e){let t=new r.LE;return t=t.set("decision",e),t}validateLeave(e,t){return this.http.put(`${this.baseUrl}/leave-requests/${e}?decision=${t}`,{})}getCollableveRule(e){return this.http.get(`${this.baseUrl}/collaborator-leave-rules/collaborator/${e}`)}}u.\u0275fac=function(e){return new(e||u)(c.LFG(r.eN))},u.\u0275prov=c.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}}]);