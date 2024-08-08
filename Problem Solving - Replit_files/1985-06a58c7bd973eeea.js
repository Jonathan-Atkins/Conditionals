!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b53aeb0d-1fcd-4b30-8ebe-5ead827ab26a",e._sentryDebugIdIdentifier="sentry-dbid-b53aeb0d-1fcd-4b30-8ebe-5ead827ab26a")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"83fc2cd4"};"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1985],{71985:function(e,t,r){r.d(t,{Z:function(){return eW},V:function(){return eN}});var n,o,i,a=r(27387),s=r(66626),c=r(63257),l=r(96583),u=r(3796),d=r(83989),p=r(25722),h=r(67998),m=r(41733),f=r(30509),g=r(47892),v=r(60202),y=r(96949),b=function(e){if(e.isLoggedIn){var t;(0,y.yV)((0,f._)((0,m._)({id:e.id.toString(),email:e.email,roles:e.roles,verified:e.isVerified,emailPreference:e.emailNotifications,createdAt:e.timeCreated},!!e.loginMethod&&{loginMethod:e.loginMethod}),{signupMethod:null!==(t=e.signupMethod)&&void 0!==t?t:v.OU}))}};function w(){return(w=(0,a._)(function(e){var t,r,n,o,i,a,s,c,u,d;return(0,l.Jh)(this,function(l){switch(l.label){case 0:t=e.username,r=e.password,n=e.teacher,o=e.hCaptchaResponse,i=e.hCaptchaSiteKey,l.label=1;case 1:return l.trys.push([1,3,,4]),[4,(0,g.uz)("/login",(0,f._)((0,m._)({username:t,password:r},n?{teacher:n}:{}),{hCaptchaResponse:o,hCaptchaSiteKey:i}))];case 2:return a=l.sent(),[3,4];case 3:return(null===(u=(d=s=l.sent()).extras)||void 0===u?void 0:null===(c=u.responseData)||void 0===c?void 0:c.status)===401&&(s.status=d.extras.responseData.status),[2,{isLoggedIn:!1,error:s}];case 4:return b(a),[2,a]}})})).apply(this,arguments)}var C=r(87422),_=r(7258),S=r.n(_);function E(e){var t=e.redirectUrl,r=S().get("shouldUseMobileAppAuthComplete");return"string"!=typeof r||r.length<1?t:"/authComplete?redirectUrl=".concat(encodeURI(t))}var Z=r(23626),I=r(31385),T=r(42965),k=r(43062),R=r(16457),A=r(22510),P=r(93245),U=r(36809),x=r(27840),G=r(10578),L=r(63163),M=r(7391),D=r(75271);r(14224);var B=(0,U.X)({form:[L.l0.colWithGap(8),L.l0.width("100%")],buttonWrapper:[L.l0.colWithGap(24)],input:[L.l0.borderRadius(4)],secondaryAction:[L.l0.width("100%"),L.l0.textAlign.center,L.cv.typography.caption.medium,L.l0.color.brandAccentStrongest,{":hover":{color:L.TV.brandAccentStronger,backgroundColor:"transparent"}}],passwordWrapper:[L.l0.position.relative],togglePasswordVisibilityButton:[L.l0.position.absolute,L.l0.minWidth(55),L.l0.right(L.TV.space4),L.l0.top("50%"),{transform:"translate(0, -50%)"}]});function N(e){var t,r,n,o=e.onSubmit,i=e.trackSource,c=(0,s._)((0,D.useState)(!1),2),d=c[0],m=c[1],f=(0,s._)((0,D.useState)(!1),2),g=f[0],v=f[1],b=(0,s._)((0,D.useState)(""),2),_=b[0],S=b[1],U=(0,s._)((0,D.useState)(""),2),L=U[0],N=U[1],W=(0,M.useRouter)(),O=(t=(0,a._)(function(e){return(0,l.Jh)(this,function(t){switch(t.label){case 0:if(e.preventDefault(),d)return[2];return m(!0),[4,F({emailOrUsername:_,password:L})];case 1:if(!t.sent().fallthrough)return[3,3];return[4,H()];case 2:t.sent(),t.label=3;case 3:return[2]}})}),function(e){return t.apply(this,arguments)}),F=(r=(0,a._)(function(e){var t,r,n,a,s,c,u;return(0,l.Jh)(this,function(l){switch(l.label){case 0:t=e.emailOrUsername,r=e.password,l.label=1;case 1:return l.trys.push([1,3,,4]),[4,(0,Z.Uj)({action:"signInWithPassword"})];case 2:return n=l.sent(),[3,4];case 3:return l.sent(),[2,{fallthrough:!0}];case 4:return[4,(0,C.yP)({emailOrUsername:t,rawPassword:r,clientType:"CLIENT_TYPE_WEB",recaptchaToken:n})];case 5:if("error"===(a=l.sent()).type)return v(!1),m(!1),o({error:a.message}),[2,{fallthrough:!1}];return[4,(0,Z.Np)({response:a.session})];case 6:if("error"===(s=l.sent()).type)return v(!1),m(!1),o({error:s.message}),[2,{fallthrough:!1}];return[4,(0,C.d8)(s.user,{source:i})];case 7:return"success"===(c=l.sent()).type?(m(!1),v(!0),u=c.redirectUrl?E({redirectUrl:c.redirectUrl}):void 0,o({user:{id:c.userId,postLoginRedirectUrl:u},isLogin:!0})):(v(!1),m(!1),o({error:c.message,reauth:c.reauth})),[2,{fallthrough:!1}]}})}),function(e){return r.apply(this,arguments)}),H=(n=(0,a._)(function(){var e,t,r,n,i;return(0,l.Jh)(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,I.ZP)(void 0,function(){(0,y.j)(y.U3.AUTH_FORM_CAPTCHA_TRIGGERED,{authenticationType:"login"})})];case 1:return e=a.sent(),[3,3];case 2:return t=a.sent(),p.Tb(t,function(e){return e.setTag("bonsai",(0,T.Fj)(W))}),o({error:"Something went wrong trying to submit. Please try again."}),m(!1),[2];case 3:return[4,function(e){return w.apply(this,arguments)}({username:_,password:L,hCaptchaResponse:e,hCaptchaSiteKey:I.wE})];case 4:if("error"in(r=a.sent())){if(n=r.error,m(!1),o({error:n.message||"Something went wrong"}),n.status&&n.status>=500)throw n;return[2]}return i=r.postLoginRedirectUrl?E({redirectUrl:r.postLoginRedirectUrl}):void 0,o({user:{id:r.id,postLoginRedirectUrl:i},isLogin:!0}),[2]}})}),function(){return n.apply(this,arguments)});return(0,u.BX)(A.l0,{onSubmit:O,css:B.form,children:[(0,u.tZ)(h.Z,{type:"text",label:"Email or username",name:"username",value:_,onChange:S,autoComplete:"email"}),(0,u.tZ)(h.Z,{type:"password",label:"Password",name:"password",value:L,onChange:N}),(0,u.BX)(P.G,{css:B.buttonWrapper,children:[(0,u.tZ)(k.ZP,{type:"submit",variant:"primary",size:"large",stretch:!0,loading:d,disabled:!L||!_||g,iconRight:d?(0,u.tZ)(G.Z,{}):g?(0,u.tZ)(x.Z,{}):void 0,dataCy:"log-in-btn",text:"Log In"}),(0,u.tZ)(R.S,{variant:"clean",css:B.secondaryAction,legacyBehavior:!0,href:"/forgot",passHref:!0,text:"Forgot password?"}),!1]})]})}var W=r(43748),O=r(84864),F=r(10777),H=r(14224);(n=o||(o={}))[n.Loaded=0]="Loaded",n[n.Skipped=1]="Skipped",n[n.Failed=2]="Failed";var X="https://elements.stytch.com/telemetry.js";function V(){return"true"===H.env.IS_CYPRESS_AUTOMATED_TEST}var Y=window.location.pathname;function J(){return(J=(0,a._)(function(){var e,t,r;return(0,l.Jh)(this,function(n){return e=performance.now(),(t=document.createElement("script")).src=X,t.async=!0,r=new Promise(function(e){setTimeout(function(){F.kg.error("Timeout while loading Stytch script"),e()},4e3)}),i=Promise.race([new Promise(function(r){t.onload=function(){var t=performance.now();F.kg.time("time to load Stytch script",t-e),r()},t.onerror=function(){F.kg.error("Error loading Stytch script at ".concat(X)),r()},document.head.appendChild(t)}),r]),[2]})})).apply(this,arguments)}function j(){return(j=(0,a._)(function(){return(0,l.Jh)(this,function(e){switch(e.label){case 0:if(V())return[2,1];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,i];case 2:return e.sent(),[2,0];case 3:return e.sent(),[2,2];case 4:return[2]}})})).apply(this,arguments)}function z(e){return $.apply(this,arguments)}function $(){return($=(0,a._)(function(e){var t;return(0,l.Jh)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Promise.race([function(e){return q.apply(this,arguments)}(e),new Promise(function(e,t){return setTimeout(function(){return t(Error("Could not process device fingerprint in 4s"))},4e3)})])];case 1:return r.sent(),[3,3];case 2:return t=r.sent(),F.kg.error("Error fetching device fingerprint data ".concat(t.message)),[2,"N/A"];case 3:return[2]}})})).apply(this,arguments)}function q(){return(q=(0,a._)(function(e){var t;return(0,l.Jh)(this,function(r){switch(r.label){case 0:return[4,function(){return j.apply(this,arguments)}()];case 1:if(r.sent()!==o.Loaded)return[2];return[4,window.GetTelemetryID("public-token-live-88edc789-05cb-440a-a321-dab99f475524")];case 2:return t=r.sent(),F.kg.info("Received the following telemetryId from Stytch ".concat(t," for user ").concat(e)),[4,fetch("/telemetry",{method:"GET",headers:{"Content-Type":"application/json","telemetry-id":t,"user-id":e}})];case 3:return r.sent(),[2]}})})).apply(this,arguments)}!V()&&["/signup"].some(function(e){return Y.startsWith(e)})&&(function(){return J.apply(this,arguments)})().catch(function(e){return p.Tb(e)});var K=r(16110),Q=r(79904),ee=r(22893);function et(e){return e.error?[{message:e.error.message,state:"error"}]:e.warning?[{message:e.warning.message,state:"warning"}]:e.value?e.isValid?[{message:"",state:"success"}]:e.touched?[{message:"",state:"loading"}]:void 0:void 0}var er=(0,U.X)({form:[L.l0.colWithGap(8),L.l0.width("100%")],buttonWrapper:[L.l0.colWithGap(4)]}),en=function(e){var t,r=e.onSubmit,n=e.privacyInviteCode,o=e.seededEmail,i=e.seededUsername,c=e.trackSource,d=void 0===c?"explicit":c,p=(0,s._)((0,D.useState)(!1),2),m=p[0],f=p[1],g=(0,s._)((0,D.useState)(!1),2),v=g[0],y=g[1],b=(0,O.Y)(n&&i?i:"",n?K.Z.username:function(){return null}),w=(0,O.Y)(n?"".concat(i,"@teams.noreply.replit.com"):o||"",K.Z.email),_=(0,O.Y)("",K.Z.password),S=(t=(0,a._)(function(e){var t,o,i,a,s;return(0,l.Jh)(this,function(c){switch(c.label){case 0:if(e.preventDefault(),f(!0),b.isValid)return[3,2];return[4,b.validate()];case 1:if(c.sent())return f(!1),[2];c.label=2;case 2:if(w.isValid)return[3,4];return[4,w.validate()];case 3:if(c.sent())return f(!1),[2];c.label=4;case 4:if(_.isValid)return[3,6];return[4,_.validate()];case 5:if(c.sent())return f(!1),[2];c.label=6;case 6:return c.trys.push([6,8,,9]),[4,(0,Z.Uj)({action:"signUpPassword"})];case 7:return t=c.sent(),[3,9];case 8:return c.sent(),r({error:"We failed to evaluate your browser integrity. Please refresh the page and try again. If the problem persists, check your browser and network configuration."}),[2];case 9:return[4,(0,C.xF)({email:w.value,privacyInviteCode:n,rawPassword:_.value,clientType:"CLIENT_TYPE_WEB",recaptchaToken:t,source:d})];case 10:if("error"===(o=c.sent()).type)return y(!1),f(!1),r({error:o.message}),[2];return[4,(0,Z.Np)({response:o.session})];case 11:if("error"===(i=c.sent()).type)return y(!1),f(!1),r({error:i.message}),[2];return[4,(0,C.d8)(i.user,{source:d})];case 12:if("success"===(a=c.sent()).type)return[3,13];return[3,15];case 13:return f(!1),y(!0),[4,z(a.userId.toString())];case 14:return c.sent(),s=a.redirectUrl?E({redirectUrl:a.redirectUrl}):void 0,r({user:{id:a.userId,postLoginRedirectUrl:s},isLogin:!1}),[3,16];case 15:return y(!1),f(!1),r({error:a.message,reauth:a.reauth}),[3,16];case 16:return[2]}})}),function(e){return t.apply(this,arguments)}),I=n&&!w.value;return(0,u.tZ)("form",{onSubmit:S,css:er.form,children:(0,u.BX)(P.G,{css:er.form,children:[n?(0,u.BX)(u.HY,{children:[(0,u.tZ)(ee.E,{text:"Use our default username or pick something that's not your real name."}),(0,u.tZ)(h.Z,{type:"text",name:"username",label:"Username",onBlur:b.handleBlur,validationResults:et(b),onChange:b.setValue,value:b.value,autoComplete:"on"})]}):(0,u.tZ)(h.Z,{type:"text",name:"email",label:"Email",onBlur:w.handleBlur,validationResults:et(w),onChange:w.setValue,value:w.value,autoComplete:"email"}),(0,u.tZ)(h.Z,{type:"password",label:"Password",name:"password",showToggle:!1,onBlur:_.handleBlur,validationResults:et(_),onChange:_.setValue,value:_.value}),(0,u.tZ)(P.G,{css:er.buttonWrapper,children:(0,u.tZ)(k.ZP,{type:"submit",variant:"primary",size:"large",stretch:!0,loading:m,disabled:!_.value||I||v,iconLeft:m?(0,u.tZ)(G.Z,{}):v?(0,u.tZ)(x.Z,{}):void 0,dataCy:"signup-create-account",text:"Create Account"})}),null]})})},eo=r(51619),ei=r(8039),ea=(0,U.X)({ssoWrapper:[L.l0.rowWithGap(8),L.l0.align.center,L.l0.justify.center],ssoButton:[L.l0.backgroundColor.brandBackgroundDarker,L.l0.minHeight(40)],ssoIconWrapper:[L.l0.p(2),L.l0.borderRadius(4)],ssoIcon:[L.l0.width(20),L.l0.height(20),{backgroundSize:"contain"}]}),es=function(e){var t=e.onClick,r=e.iconLeft,n=e.text;return(0,u.tZ)(k.ZP,{css:ea.ssoButton,variant:"secondary",onClick:t,stretch:!0,iconLeft:r,text:n})},ec=function(e){var t=e.onClick,r=e.provider,n="oauth"===r.type?(0,u.tZ)(P.G,{css:ea.ssoIconWrapper,children:(0,u.tZ)("div",{style:{backgroundImage:"url(/public/images/".concat(r.providerId.replace(".com",""),".png)")},css:ea.ssoIcon})}):(0,u.tZ)(eo.Z,{}),o="oauth"===r.type?"Continue with ".concat(ei.tn[r.providerId]):"Continue with SAML";return(0,u.tZ)(es,{onClick:t,iconLeft:n,text:o})},el=[ei.b$,ei._i],eu=(0,c._)(el).concat([ei.mG,ei.V$]),ed=function(e){var t,r,n=e.isGoogleClassroom,o=e.mode,i=e.onRedirectingChange,s=e.onSubmit,c=e.tenantId,d=(t=(0,a._)(function(e){var t,r,n;return(0,l.Jh)(this,function(a){switch(a.label){case 0:return t=e.replace(".com",""),(0,y.j)(y.U3.AUTH_FORM_SSO_REQUESTED,{provider:t,authenticationType:o,isTeacher:"false"}),[4,i(!0)];case 1:if(a.sent(),"saml"!==e)return[3,4];if(void 0===c)return s({error:"Something went wrong, please try again. If you continue to experience issues, you may have a browser setting or extension installed that is interfering with the redirect."}),[2];return[4,(0,C.g8)({type:"tenantId",tenantId:c})];case 2:if("error"===(n=a.sent()).type)return s({error:n.message}),[2];return[4,(0,Z.IG)({tenantId:n.tenantId,provider:{type:"saml",providerId:n.samlProviderId}})];case 3:return r=a.sent(),[3,6];case 4:return[4,(0,Z.IG)({tenantId:c,provider:{type:"oauth",providerId:e}})];case 5:r=a.sent(),a.label=6;case 6:return"error"===r.type&&s({error:"Something went wrong, please try again. If you continue to experience issues, you may have a browser setting or extension installed that is interfering with the redirect."}),[2]}})}),function(e){return t.apply(this,arguments)});return n?r=[(0,u.tZ)(ec,{provider:{type:"oauth",providerId:ei.b$},onClick:function(){return d(ei.b$)}},ei.b$)]:"login"===o?(r=eu.map(function(e){return(0,u.tZ)(ec,{onClick:function(){return d(e)},provider:{type:"oauth",providerId:e}},e)}),void 0!==c&&r.push((0,u.tZ)(ec,{onClick:function(){return d("saml")},provider:{type:"saml",providerId:"No Provider"}},"saml"))):r=el.map(function(e){return(0,u.tZ)(ec,{onClick:function(){return d(e)},provider:{type:"oauth",providerId:e}},e)}),(0,u.tZ)(u.HY,{children:r})},ep=r(24909),eh=r(91466),em=r(38387),ef=r(24766),eg=r(68140),ev=(0,U.X)({signupFormEmailDisclaimerContainer:[L.l0.width("100%")],signupFormEmailDisclaimer:[L.l0.color.brandText,L.l0.font.brandVariable,L.cv.typography.caption.small,L.l0.textAlign.center,L.l0.width("100%")],link:[L.l0.color.foregroundDefault,{fontWeight:700,textDecoration:"none"}]}),ey=function(){return(0,u.tZ)(P.G,{css:ev.signupFormEmailDisclaimerContainer,children:(0,u.BX)(ef.xv,{css:ev.signupFormEmailDisclaimer,children:["By continuing, you agree to Replit's",(0,u.tZ)("br",{}),(0,u.tZ)("a",{css:ev.link,href:"/site/terms",target:"_blank",children:"Terms of Service"})," ","and"," ",(0,u.tZ)("a",{css:ev.link,href:eg.Gu.PRIVACY_POLICY,target:"_blank",children:"Privacy Policy"})]})})},eb=[L.l0.align.center,L.l0.colWithGap(16)],ew=(0,U.X)({signupDisclaimerWrapper:[L.l0.pb(24)],footerLinkWrapper:[L.cv.typography.caption.small,L.l0.textAlign.center],footerLink:[L.cv.typography.caption.small,L.l0.color.brandAccentStrongest,{":hover":{color:L.TV.brandAccentStronger,backgroundColor:"transparent"}}],footerContainerNotModal:(0,c._)(eb).concat([L.l0.bottom(24)]),footerContainerModal:(0,c._)(eb).concat([L.l0.pt(24)]),cssLastRow:[L.l0.rowWithGap(16),L.l0.align.center],heightWrapper:[L.l0.height(132)],recaptchaDisclaimer:[L.l0.textAlign.center,L.cv.typography.caption.small,L.l0.color.foregroundDimmest,{"& > a":{color:"inherit",textDecoration:"underline"},"& > a:hover":{textDecoration:"none"}}]}),eC=function(e){var t=e.mode,r=e.isModal,n=e.onModeChange,o=function(e){e.preventDefault(),(0,ep.uk)({isLogin:"login"===t,authFormPlacement:r?"modal":"auth-page"}),n("login"===t?"signup":"login")};return(0,u.BX)(ef.xv,{css:ew.footerLinkWrapper,variant:"small",multiline:!1,children:["login"===t?"New to Replit? ":"Already have an account? ",(0,u.tZ)("a",{role:"button",tabIndex:0,onKeyDown:function(e){"Enter"===e.key&&o(e)},onClick:function(e){return o(e)},css:ew.footerLink,children:"login"===t?"Sign up":"Log in"})]})},e_=function(){return(0,u.BX)(ef.xv,{variant:"small",color:"dimmest",css:ew.recaptchaDisclaimer,children:["This site is protected by reCAPTCHA Enterprise and the Google"," ",(0,u.tZ)("a",{href:"https://policies.google.com/privacy",children:"Privacy Policy"})," and"," ",(0,u.tZ)("a",{href:"https://policies.google.com/terms",children:"Terms of Service"})," apply."]})},eS=function(e){var t=e.isModal,r=e.mode,n=e.onModeChange,o=t?void 0:ew.heightWrapper;return(0,u.tZ)(P.G,{css:o,children:(0,u.BX)(P.G,{css:t?ew.footerContainerModal:ew.footerContainerNotModal,children:[(0,u.tZ)(eh.R,{}),"signup"===r?(0,u.tZ)(P.G,{css:ew.signupDisclaimerWrapper,children:(0,u.tZ)(ey,{})}):null,(0,u.tZ)(eC,{mode:r,isModal:t,onModeChange:n}),(0,u.tZ)(P.G,{css:ew.cssLastRow,children:(0,u.tZ)(ef.xv,{css:ew.footerLinkWrapper,variant:"small",multiline:!1,children:(0,u.tZ)("a",{href:"https://replit.com/help",target:"_blank",rel:"noopener noreferrer",css:ew.footerLink,children:"Get help"})})}),(0,u.tZ)(e_,{})]})})},eE=(0,U.X)({self:[L.l0.font.brandDefault,{fontWeight:512,fontSize:24,lineHeight:32/24}]}),eZ=function(e){var t=e.mode,r=e.privateDeployment,n="Create a Replit account";return"login"===t&&(n="Log in to your account"),r&&(n="Log in to access a private website"),(0,u.tZ)(ef.h4,{variant:"headerDefault",level:1,css:eE.self,children:n})},eI=(0,U.X)({mainControls:[L.l0.colWithGap(12),L.l0.width("100%"),L.l0.px(12)],switchFormTypeContainer:[L.l0.display.flex,L.l0.align.center],switchFormType:[L.l0.color.brandAccentStrongest,{backgroundColor:"transparent",":hover":{color:L.TV.brandAccentStronger,backgroundColor:"transparent"}}],ssoContainer:[L.l0.width("100%"),L.l0.colWithGap(8)],samlLoginForm:[L.l0.pb(64)]}),eT=function(e){var t=e.isGoogleClassroom,r=e.onRedirectingChange,n=e.onSubmit,o=e.tenantId,i=e.tracking,a=(0,s._)((0,D.useState)("password"),2),c=a[0],l=a[1];return(0,u.BX)(u.HY,{children:["password"===c?(0,u.tZ)(N,{onSubmit:n,trackSource:i.from}):null,"saml"===c?(0,u.tZ)(P.G,{css:eI.samlLoginForm,children:(0,u.tZ)(W.Z,{onSubmit:n,mode:"login",onRedirectingChange:r})}):null,(0,u.BX)(P.G,{css:eI.ssoContainer,children:[(0,u.tZ)(eR,{emailLoginType:c,setEmailLoginType:l}),(0,u.tZ)(ed,{isGoogleClassroom:t,mode:"login",onRedirectingChange:r,onSubmit:n,tenantId:o})]})]})},ek=function(e){var t=e.isGoogleClassroom,r=e.mode,n=e.onRedirectingChange,o=e.onSubmit,i=e.privacyInviteCode,a=e.seededEmail,c=e.seededUsername,l=e.tenantId,d=e.tracking,p=void 0!==i,h=(0,s._)((0,D.useState)("password"),2),m=h[0],f=h[1];return(0,u.BX)(u.HY,{children:[p?null:(0,u.BX)(P.G,{css:eI.ssoContainer,children:[(0,u.tZ)(ed,{isGoogleClassroom:t,mode:r,onRedirectingChange:n,onSubmit:o,tenantId:l}),(0,u.tZ)(eR,{emailLoginType:m,setEmailLoginType:f})]}),t||p?null:(0,u.tZ)(eh.R,{}),t||"password"!==m?null:(0,u.tZ)(en,{onSubmit:o,privacyInviteCode:i,seededEmail:a,seededUsername:c,trackSource:d.from}),t||"saml"!==m?null:(0,u.tZ)(W.Z,{onSubmit:o,mode:"signup",onRedirectingChange:n})]})},eR=function(e){var t=e.emailLoginType,r=e.setEmailLoginType;return(0,u.tZ)(es,{onClick:function(){return r("password"===t?"saml":"password")},iconLeft:"password"===t?(0,u.tZ)(eo.Z,{size:20}):(0,u.tZ)(em.Z,{size:20}),text:"Continue with ".concat("password"===t?"SSO":"password")})},eA=function(e){var t=e.children,r=e.customHeader,n=e.isGoogleClassroom,o=e.isModal,i=e.mode,a=e.onModeChange,s=e.onRedirectingChange,c=e.onSubmit,l=e.privacyInviteCode,d=e.seededEmail,p=e.seededUsername,h=e.tenantId,m=e.tracking,f=(e.clearError,e.privateDeployment);return(0,D.useEffect)(function(){var e=o?"modal":"auth-page";"login"===i?(0,ep.vF)({from:m.from,location:m.location,authFormPlacement:e}):(0,ep.P9)({from:m.from,location:m.location,authFormPlacement:e})},[i,o,m.from,m.location]),(0,u.BX)(u.HY,{children:[r||n?null:(0,u.tZ)(eZ,{mode:i,privateDeployment:f}),(0,u.BX)(P.G,{css:eI.mainControls,children:[t,"login"===i?(0,u.tZ)(eT,{isGoogleClassroom:n,onRedirectingChange:s,onSubmit:c,tenantId:h,tracking:m}):(0,u.tZ)(ek,{isGoogleClassroom:n,mode:i,onRedirectingChange:s,onSubmit:c,privacyInviteCode:l,seededEmail:d,seededUsername:p,tenantId:h,tracking:m}),(0,u.tZ)(eS,{mode:i,isModal:o,onModeChange:a})]})]})},eP=r(42516),eU=(0,U.X)({container:[L.l0.pt(128),(0,eP._)({margin:"auto"},L.BC.max("mobileMax"),[L.l0.pt(96)]),L.l0.colWithGap(32)],message:[L.l0.colWithGap(16)],button:[L.l0.color.foregroundDimmest]}),ex=function(e){var t,r=e.email,n=e.providerId,o=e.onCancel;return t=ei.QT.some(function(e){return e===n})?ei.tn[n]:n===ei.N7?"your password":"this provider",(0,u.BX)(P.G,{css:eU.container,children:[(0,u.tZ)(ef.h4,{variant:"headerDefault",level:1,children:"Verification required"}),(0,u.BX)(P.G,{css:eU.message,children:[(0,u.BX)(ef.xv,{variant:"subheadDefault",multiline:!0,children:["In order to log in with ",t,", you must verify"," ",r||"your email","."]}),(0,u.tZ)(ef.xv,{multiline:!0,children:"We've sent an email with a verification link. If you don't see it, check your spam folder, or contact support for assistance."})]}),(0,u.tZ)(Q.zx,{size:"big",variant:"outlined",css:eU.button,onClick:function(){return o()},text:"Back to log in"})]})},eG=r(97320),eL=r(40490),eM=r(66791),eD=[L.l0.width(470),L.l0.maxWidth("100%"),L.l0.colWithGap(32),L.l0.align.center,{margin:"auto","& *":[L.rA]}],eB=(0,U.X)({error:[L.l0.mb(16)],container:(0,c._)(eD).concat([L.l0.p(24)]),containerModal:(0,c._)(eD),loadingContainer:[L.l0.colWithGap(8),L.l0.align.center],loadingText:[L.l0.fontSize(16),L.l0.flex.shrink(1)]}),eN="redirecting",eW=function(e){var t,r,n,o=e.customHeader,i=e.isGoogleClassroom,c=e.isModal,h=e.mode,m=e.onModeChange,f=e.onSuccess,g=e.privacyInviteCode,v=e.seededEmail,y=e.seededUsername,b=e.tenantId,w=e.tracking,_=e.privateDeployment,S=(0,d.x)(),I=(0,M.useRouter)(),T=(0,eL.Wd)(eN,"boolean"),k=(0,s._)((0,D.useState)(T?{type:"redirecting"}:{type:"form"}),2),R=k[0],A=k[1],U=(0,s._)((0,D.useState)(),2),x=U[0],L=U[1],B=(0,D.useCallback)((t=(0,a._)(function(e){return(0,l.Jh)(this,function(t){switch(t.label){case 0:if(!e)return[3,2];return A({type:"redirecting"}),[4,(0,eL.pg)({router:I,params:[{mode:"add",key:eN,value:"1"}]})];case 1:return t.sent(),[3,3];case 2:A({type:"form"}),(0,eL.pg)({router:I,params:[{mode:"delete",key:eN}]}),t.label=3;case 3:return[2]}})}),function(e){return t.apply(this,arguments)}),[I]),N=function(e){A({type:"redirecting",message:"SAML SSO required. Redirecting to the SSO login page..."}),setTimeout((0,a._)(function(){return(0,l.Jh)(this,function(t){switch(t.label){case 0:return[4,(0,Z.IG)({tenantId:e.tenantId,provider:{type:"saml",providerId:e.samlProviderId}})];case 1:return"error"===t.sent().type&&(L({message:"Something went wrong. Please try logging in again.",colorway:"negative"}),A({type:"form"})),[2]}})}),3e3)},W=(0,D.useCallback)((r=(0,a._)(function(e){var t,r;return(0,l.Jh)(this,function(n){switch(n.label){case 0:if(!("error"in e&&e.error))return[3,2];if(e.reauth)return N(e.reauth),[2];return L({message:e.error,colorway:null!==(t=e.colorway)&&void 0!==t?t:"negative"}),[4,B(!1)];case 1:return n.sent(),[2];case 2:if(!("user"in e&&e.user))throw Error("Expected error or user object");if(null!=(r=e.user.postLoginRedirectUrl)&&r.length>0)return window.location.href=r,[2];return e.isLogin||(0,ep.jw)(e.user.id.toString()),f(e),[2]}})}),function(e){return r.apply(this,arguments)}),[B,f,L]),O=(0,eG.J)(),F=function(){return L(void 0)};switch((0,D.useEffect)(function(){var e;(0,Z.WT)().then((e=(0,a._)(function(e){var t,r,n,o;return(0,l.Jh)(this,function(i){switch(i.label){case 0:if("success"!==e.type)return[3,13];if(null===e.result)return[2];return"redirecting"!==R.type&&B(!0),[4,(0,C.d8)(e.result.user,{privacyInviteCode:g,source:w.from})];case 1:switch((t=i.sent()).type){case"success":return[3,2];case"needs_email_verification":return[3,7];case"error":return[3,9]}return[3,11];case 2:if((null===(r=e.result)||void 0===r?void 0:r.providerId)!==ei._i)return[3,4];return[4,O({userCredential:e.result,oauthProviderId:ei._i,scopes:[]})];case 3:i.sent(),i.label=4;case 4:if(n=t.redirectUrl?E({redirectUrl:t.redirectUrl}):void 0)return window.location.href=n,[2];if(!(t.isNewUser&&e.result.providerId===ei.b$))return[3,6];return[4,z(t.userId.toString())];case 5:i.sent(),i.label=6;case 6:return f({user:{id:t.userId},isLogin:!t.isNewUser}),[3,12];case 7:return B(!1),A({type:"needs-email-verification",email:e.result.user.email,providerId:e.result.providerId}),[4,(0,Z.w7)(S)];case 8:case 10:return i.sent(),[3,12];case 9:if(t.reauth)return N(t.reauth),[2];return B(!1),L({message:t.message,colorway:"negative"}),[4,(0,Z.w7)(S)];case 11:(0,eM.Z)(t),i.label=12;case 12:return[2];case 13:switch(B(!1),e.treatment){case"requires-provider-link":return[3,14];case"credential-conflict":return[3,15];case"email-conflict":return[3,16];case"forbidden-operation":return[3,17];case"user-needs-email":return[3,18];case"timeout":case"unhandled":case"unknown":return[3,20]}return[3,21];case 14:return L({message:"Please log in to ".concat(e.context.email," with another method and link ").concat(ei.tn[e.context.credential.providerId]," from the account page."),colorway:"negative"}),[3,22];case 15:return L({message:"This provider cannot be used, please try another method.",colorway:"negative"}),[3,22];case 16:return L({message:"This email cannot be used, please try another method.",colorway:"negative"}),[3,22];case 17:return L({message:"That action is not permitted",colorway:"negative"}),[3,22];case 18:return o=ei.tn[e.credential.providerId],L({message:"Your ".concat(o," account is missing an email address. To use it for Replit, you'll need to ").concat("login"===h?"log in":"sign up"," with another method and connect ").concat(o," from the account page."),colorway:"negative"}),[4,(0,Z.w7)(S)];case 19:return i.sent(),[3,22];case 20:return L({message:"Something unexpected happened, please try again.",colorway:"negative"}),[3,22];case 21:(0,eM.Z)(e),i.label=22;case 22:return[2]}})}),function(t){return e.apply(this,arguments)})).catch(function(e){return p.Tb(e)})},[]),R.type){case"form":n=(0,u.tZ)(eA,{customHeader:o,isGoogleClassroom:i,isModal:c,mode:h,onModeChange:function(e){F(),m(e)},onRedirectingChange:B,onSubmit:W,privacyInviteCode:g,seededEmail:v,seededUsername:y,tenantId:b,tracking:w,clearError:F,privateDeployment:_,children:x?(0,u.tZ)(ee.E,{css:eB.error,colorway:x.colorway,text:x.message}):null});break;case"needs-email-verification":n=(0,u.tZ)(ex,{email:R.email,providerId:R.providerId,onCancel:function(){return A({type:"form"})}});break;case"redirecting":n=(0,u.BX)(P.G,{css:eB.loadingContainer,children:[(0,u.tZ)(G.Z,{size:32}),R.message?(0,u.tZ)(ef.xv,{multiline:!0,css:eB.loadingText,children:R.message}):null]})}return(0,u.tZ)(P.G,{css:c?eB.containerModal:eB.container,children:n})}},24909:function(e,t,r){r.d(t,{P9:function(){return l},jw:function(){return a},uk:function(){return s},vF:function(){return c}});var n=r(41733),o=r(8344),i=r(96949),a=function(e){var t=o.Z.get("gfa_ref")||void 0,r=o.Z.get("gfa_campaign")||void 0,n=o.Z.get("gfa_landed_on")||void 0;(0,i.yV)({id:e,firstAcquisitionSource:t,firstAcquisitionCampaign:r,firstAcquisitionLandedOn:n})},s=function(e){var t=e.isLogin,r=e.authFormPlacement;(0,i.j)(i.U3.AUTH_FORM_MODE_TOGGLED,t?{from:"login",to:"signup",authFormPlacement:r}:{from:"signup",to:"login",authFormPlacement:r})},c=function(e){var t=e.from,r=e.location,o=e.authFormPlacement,a=e.extras;(0,i.j)(i.U3.LOGIN_REQUESTED,(0,n._)({from:t,location:r,authFormPlacement:o},void 0===a?{}:a))},l=function(e){var t=e.from,r=e.location,o=e.authFormPlacement,a=e.extras;(0,i.j)(i.U3.SIGNUP_REQUESTED,(0,n._)({from:t,location:r,authFormPlacement:o},void 0===a?{}:a))}},97320:function(e,t,r){r.d(t,{J:function(){return v}});var n=r(27387),o=r(66626),i=r(96583),a=r(25722),s=r(23626),c=r(41733),l=r(21262),u=r(71440),d=r(82303);function p(){var e=(0,l._)(["\n  mutation SaveUserAuth($input: SaveUserAuthInput!) {\n    saveUserAuth(input: $input) {\n      ... on CurrentUser {\n        id\n      }\n      ... on UnauthorizedError {\n        message\n      }\n      ... on UserError {\n        message\n      }\n      ... on TooManyRequestsError {\n        message\n      }\n      ... on ServiceUnavailable {\n        message\n      }\n    }\n  }\n"]);return p=function(){return e},e}var h={},m=(0,u.Ps)(p()),f=r(75271),g={type:"error",message:"Something unexpected happened, please try again."};function v(){var e,t,r=(0,o._)((e=(0,c._)({},h,void 0),d.D(m,e)),1)[0];return(0,f.useCallback)((t=(0,n._)(function(e){var t,n,o,c,l;return(0,i.Jh)(this,function(i){switch(i.label){case 0:if(t=e.userCredential,n=e.oauthProviderId,o=e.scopes,!(c=(0,s.mM)(n,t))||!c.accessToken)return a.Tb(Error("Failed to extract token from ".concat(n," credential"))),[2,g];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,r({variables:{input:{provider:n,token:c.accessToken,scopes:o}}})];case 2:return l=i.sent(),[3,4];case 3:return i.sent(),a.Tb(Error("Failed to save ".concat(n," Auth state"))),[2,g];case 4:if(!l.data)return a.Tb(Error("Unexpected error trying to save ".concat(n," Auth state"))),[2,g];if("CurrentUser"!==l.data.saveUserAuth.__typename)return[2,{type:"error",message:l.data.saveUserAuth.message}];return[2,{type:"success"}]}})}),function(e){return t.apply(this,arguments)}),[r])}},31385:function(e,t,r){r.d(t,{ZP:function(){return d},wE:function(){return a}});var n=r(27387),o=r(96583),i=r(14224),a="473079ba-e99f-4e25-a635-e9b661c7dd3e",s=0,c=null;function l(){return u.apply(this,arguments)}function u(){return(u=(0,n._)(function(){var e;return(0,o.Jh)(this,function(t){return(e=document.createElement("script")).src="https://js.hcaptcha.com/1/api.js?render=explicit&host=repl.it",[2,new Promise(function(t,r){e.onload=function e(t){return function(){void 0===window.hcaptcha?setTimeout(function(){e(t)},100):t()}}(function(){c=null,t()}),e.onerror=function(){s++,c=new Promise(function(e,t){setTimeout(function(){l().then(e,t)},1e3*Math.pow(1.7,s)+Math.floor(500*Math.random()))}),5===s&&r(Error("Failed to load captcha script after ".concat(5," times")))},window.document.head.appendChild(e)})]})})).apply(this,arguments)}function d(e,t){return p.apply(this,arguments)}function p(){return(p=(0,n._)(function(e,t){var r;return(0,o.Jh)(this,function(n){switch(n.label){case 0:if("true"===i.env.IS_CYPRESS_AUTOMATED_TEST||"true"===i.env.SKIP_HCAPTCHA)return[2,"bypassed"];if(!c)return[3,2];return[4,c];case 1:n.sent(),n.label=2;case 2:return r=window.hcaptcha,[2,new Promise(function(n,o){var i=document.createElement("div"),s=r.render(i,{sitekey:e||a,size:"invisible",callback:function(e){r.reset(s),window.document.body.contains(i)&&window.document.body.removeChild(i),n(e)},"open-callback":function(){t&&t()},"close-callback":function(){r.reset(s),window.document.body.contains(i)&&window.document.body.removeChild(i),o(Error("HCaptcha closed"))},"chalexpired-callback":function(){r.reset(s),window.document.body.contains(i)&&window.document.body.removeChild(i),o(Error("HCaptcha challenge expired"))},"error-callback":function(){r.reset(s),window.document.body.contains(i)&&window.document.body.removeChild(i),o(Error("HCaptcha render error"))},"expired-callback":function(){r.reset(s),window.document.body.contains(i)&&window.document.body.removeChild(i),o(Error("HCaptcha render expired"))}});window.document.body.appendChild(i),r.execute(s)})]}})})).apply(this,arguments)}c=l()},16457:function(e,t,r){r.d(t,{H:function(){return h},S:function(){return m}});var n=r(41733),o=r(30509),i=r(98924),a=r(3796),s=r(43062),c=r(93245),l=r(9834),u=r.n(l),d=r(75271),p=c.K.a,h=d.forwardRef(function(e,t){var r=e.href,c=(0,i._)(e,["href"]),l=(0,s.Q7)(c),u=(0,a.tZ)(s.dI,(0,n._)({},c));return c.disabled?(0,a.tZ)(p,(0,o._)((0,n._)({ref:t,href:r,"aria-disabled":c.disabled,css:l,role:"link"},c),{children:u})):(0,a.tZ)(p,(0,o._)((0,n._)({ref:t,css:l,role:"link",href:r},c),{children:u}))}),m=d.forwardRef(function(e,t){var r=e.href,c=(0,i._)(e,["href"]),l=(0,s.Q7)(c),d=(0,a.tZ)(s.dI,(0,n._)({},c));return c.disabled?(0,a.tZ)(p,(0,o._)((0,n._)({ref:t,"aria-disabled":c.disabled,css:l,role:"link"},c),{children:d})):(0,a.tZ)(u(),(0,o._)((0,n._)({legacyBehavior:!0,passHref:!0,href:r},c),{children:(0,a.tZ)(p,(0,o._)((0,n._)({ref:t,css:l,role:"link"},c),{children:d}))}))})},91466:function(e,t,r){r.d(t,{R:function(){return s}});var n=r(3796),o=r(62279),i=r(63163),a=(0,o.iv)(i.l0.backgroundColor.outlineDimmest,i.l0.height(1),i.l0.minHeight(1),i.l0.width("100%"));function s(e){var t=e.className;return(0,n.tZ)("div",{className:t,css:a})}},51619:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(41733),o=r(30509),i=r(3796),a=r(28065);function s(e){return(0,i.tZ)(a.ZP,(0,o._)((0,n._)({},e),{children:(0,i.tZ)("path",{fillRule:"evenodd",d:"M23.31 11.753a.75.75 0 0 1-.75.75h-1.523v2.698a.75.75 0 0 1-1.5 0v-2.698h-2.476v3.698a.75.75 0 0 1-1.5 0v-3.698h-3.219a5.168 5.168 0 0 1-10.285-.755v-.008a5.168 5.168 0 0 1 10.268-.737H22.56a.75.75 0 0 1 .75.75Zm-12.417.043-.002-.03a3.668 3.668 0 0 0-7.334-.004 3.668 3.668 0 1 0 7.336.034Z",clipRule:"evenodd"})}))}},38387:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(41733),o=r(30509),i=r(3796),a=r(28065);function s(e){return(0,i.tZ)(a.ZP,(0,o._)((0,n._)({},e),{children:(0,i.tZ)("path",{fillRule:"evenodd",d:"M2.802 5.646 12 12.085l9.198-6.44A1.258 1.258 0 0 0 20 4.75H4c-.563 0-1.044.38-1.198.896ZM21.25 7.44l-8.82 6.174a.75.75 0 0 1-.86 0L2.75 7.44V18c0 .686.564 1.25 1.25 1.25h16c.686 0 1.25-.564 1.25-1.25V7.44ZM1.25 6A2.756 2.756 0 0 1 4 3.25h16A2.756 2.756 0 0 1 22.75 6v12A2.756 2.756 0 0 1 20 20.75H4A2.756 2.756 0 0 1 1.25 18V6Z",clipRule:"evenodd"})}))}},68140:function(e,t,r){r.d(t,{B9:function(){return u},Cr:function(){return d},Gu:function(){return c},IU:function(){return p},K5:function(){return s},S$:function(){return o},TT:function(){return l},av:function(){return a},m7:function(){return h},x0:function(){return m},xz:function(){return i}}),(n=o||(o={})).Buy="buy",n.SetUpAutoRefill="set-up-auto-refill";var n,o,i="https://ask.replit.com",a="https://replit.com/support",s="https://status.replit.com",c={CYCLES_TERMS:"https://replit.com/site/cycles-terms",EXTENSIONS_TERMS:"https://replit.com/site/extensions-terms",EXTENSIONS_USER_TERMS:"https://replit.com/site/extensions-terms/#replit-extensions-store-user-terms",EXTENSIONS_DEVELOPER_TERMS:"https://replit.com/site/extensions-terms/#replit-extensions-store-developer-terms",REPLIT_TERMS:"https://replit.com/site/terms",REPLIT_TEAMS_TERMS:"https://replit.com/site/teams-agreement",PRIVACY_POLICY:"https://replit.com/privacy-policy",DATA_PROCESSING_AGREEMENT:"https://replit.com/site/dpa",LICENSING_INFORMATION:"https://docs.replit.com/legal-and-security-info/licensing-info",TAKEDOWN_REQUESTS:"https://docs.replit.com/legal-and-security-info/copyright-claims-takedown-requests"},l={HOME:"https://docs.replit.com",CHANGELOG:"https://docs.replit.com/updates",ABOUT_BOOSTED_REPLS:"https://docs.replit.com/additional-resources/boosts",REPL_DATABASE:"https://docs.replit.com/cloud-services/storage-and-databases/replit-database",EXTENSIONS:"https://docs.replit.com/extensions",ABOUT_USAGE_BASED_BILLING:"https://docs.replit.com/replit-core/about-usage-based-billing",REPL_AUTH:"https://docs.replit.com/additional-resources/repl-auth-sidebar",DEPENDENCY_MANAGEMENT:"https://docs.replit.com/replit-workspace/dependency-management",SAML_SSO:"https://docs.replit.com/teams/identity-and-access-management/saml",ORG_GROUPS:"https://docs.replit.com/teams/identity-and-access-management/groups-and-permissions",SECRETS:"https://docs.replit.com/replit-workspace/workspace-features/secrets",SECRETS_SAFETY:"https://docs.replit.com/replit-workspace/workspace-features/secrets#handling-secrets-in-a-collaborative-environment"},u="paymentMethod",d="https://replit.com/teams#inlineForm",p="replit",h=63,m="__use_no_org__"}}]);
//# sourceMappingURL=1985-06a58c7bd973eeea.js.map