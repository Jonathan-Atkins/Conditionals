!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e11122ea-0e96-45e9-930b-a3bdd2d0a053",e._sentryDebugIdIdentifier="sentry-dbid-e11122ea-0e96-45e9-930b-a3bdd2d0a053")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"83fc2cd4"};"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3311],{93008:function(e,t,n){n.d(t,{q:function(){return g}});var l=n(42516),r=n(3796),i=n(41733),o=n(21262),a=n(71440),c=n(9122);function s(){var e=(0,o._)(["\n  query SitewideBanner {\n    siteBanner {\n      id\n      message\n    }\n  }\n"]);return s=function(){return e},e}var d={},u=(0,a.Ps)(s()),p=n(93245),h=n(36809),f=n(63163),m=(0,h.X)({container:[f.l0.rowWithGap(8),f.l0.display.flex,f.l0.align.center,f.l0.justify.center,f.l0.backgroundColor.accentPrimaryDimmest,f.l0.minHeight(58),f.l0.width("100%"),f.l0.p(12),f.l0.flex.growAndShrink(1),(0,l._)({},f.BC.max("mobileMax"),[f.l0.colWithGap(16)])]});function g(){var e,t,n,l=(null===(n=(e=(0,i._)({},d,void 0),c.a(u,e)).data)||void 0===n?void 0:null===(t=n.siteBanner)||void 0===t?void 0:t.message)||null;return l?(0,r.tZ)(p.G,{css:m.container,children:(0,r.tZ)("span",{dangerouslySetInnerHTML:{__html:l}})}):null}},75941:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(66626),r=n(3796),i=n(24766),o=n(93245),a=n(36809),c=n(39031),s=n(63163),d=n(97420),u=n(43540),p=n(75271),h=n(9602),f=n(7935);function m(){var e=(0,l._)((0,p.useState)(!1),2),t=e[0],n=e[1],a=(0,u.Z)("announcement","incident-20240219-action-required-banner"),s=a.shouldDisplay,m=a.dismiss,y=a.register;return((0,p.useEffect)(function(){y()},[y]),!s||t)?null:(0,r.BX)(o.G,{css:g.actionRequiredMessage,children:[(0,r.BX)(o.G,{css:g.actionRequiredHeader,children:[(0,r.BX)(o.G,{css:g.actionRequiredTitle,children:[(0,r.tZ)(c.Z,{color:d.TV.accentPrimaryDefault}),(0,r.tZ)(i.xv,{multiline:!0,css:g.actionRequiredTitleText,children:"Verify Your Reserved VM Deployments"})]}),(0,r.tZ)(h.hU,{css:g.actionRequiredDismiss,alt:"Dismiss",onClick:function(){m(),n(!0)},children:(0,r.tZ)(f.Z,{})})]}),(0,r.BX)(i.xv,{color:"dimmer",children:["Due to a recent incident, your Reserved VM Deployments might be affected. Please check your Deployments for any disruptions and manually redeploy if needed. For help, contact"," ",(0,r.tZ)("a",{href:"mailto:support@repl.it?subject=2024-02-19%20Reserved%20VM%20Deployments%20Incident",children:"support@repl.it"}),". Expect an email from Replit with more details."]})]})}var g=(0,a.X)({actionRequiredMessage:[s.l0.colWithGap(4),s.l0.px(12),s.l0.py(8),s.l0.border({color:d.TV.accentPrimaryStronger}),s.l0.borderRadius(4)],actionRequiredHeader:[s.l0.rowWithGap(4),s.l0.align.start],actionRequiredTitle:[s.l0.rowWithGap(6),s.l0.align.center,s.l0.flex.growAndShrink(1)],actionRequiredTitleText:[s.l0.flex.growAndShrink(1)],actionRequiredDismiss:[{marginLeft:"auto"}]})},83743:function(e,t,n){n.d(t,{Kt:function(){return u},NJ:function(){return h}});var l=n(41733),r=n(21262),i=n(71440),o=n(39537),a=n(9122);function c(){var e=(0,r._)(["\n  fragment HomeDeploymentsSectionCurrentUserLoadingInfo on CurrentUser {\n    id\n    hostingDeployments(input: $hostingDeploymentsInput) {\n      items {\n        id\n      }\n    }\n  }\n"]);return c=function(){return e},e}function s(){var e=(0,r._)(["\n  query HomeDeploymentsSection($input: CurentUserHostingDeploymentsInput) {\n    currentUser {\n      id\n      hostingDeployments(input: $input) {\n        items {\n          id\n          ...DeploymentItem\n        }\n      }\n      requiresActionToRedeploy\n    }\n  }\n  ","\n"]);return s=function(){return e},e}var d={},u=(0,i.Ps)(c()),p=(0,i.Ps)(s(),o.r5);function h(e){var t=(0,l._)({},d,e);return a.a(p,t)}},70918:function(e,t,n){n.d(t,{h:function(){return eT},w:function(){return eA}});var l,r,i,o,a,c,s=n(42516),d=n(3796),u=n(46735),p=n(63752),h=n(41733),f=n(21262),m=n(71440),g=n(9122);function y(){var e=(0,f._)(["\n  fragment RecentReplsAndDeploymentsModuleFavoriteTemplateRepl on Repl {\n    id\n    iconUrl\n    title\n  }\n"]);return y=function(){return e},e}function v(){var e=(0,f._)(["\n  query RecentReplsAndDeploymentsModuleCurrentUser {\n    currentUser {\n      id\n      favoriteCreateReplOptions {\n        __typename\n        ... on Repl {\n          id\n          ...RecentReplsAndDeploymentsModuleFavoriteTemplateRepl\n        }\n      }\n    }\n  }\n  ","\n"]);return v=function(){return e},e}var Z={},R=(0,m.Ps)(y()),b=(0,m.Ps)(v(),R),w=n(79904),x=n(85468),k=n(93245),B=n(36809),C=n(30043),D=n(63163),G=n(7391),A=n(75941),T=n(17843),E=n(95188),S=n(39808),X=n(22893),_=n(24766),I=n(42427),U=n(39031),O=n(41780),P=n(97081),q=n(18301),M=n(68951),W=n(35574),V=n(86466),H=n(14548),L=n(75271),F=n(23137);function N(e){return null!=e.replitAppSubdomain}var j=(0,B.X)({loadingBlock:[D.l0.p(4),D.l0.height(52),D.l0.width("100%"),D.l0.flex.shrink(1),D.l0.borderRadius()],self:[D.l0.p(4),D.l0.borderRadius(),V.gU.listItem,D.l0.rowWithGap(16),D.l0.justify.spaceBetween,D.l0.position.relative,D.l0.align.center,D.l0.flex.growAndShrink(1)],leftColumn:[D.l0.rowWithGap(8),D.l0.align.center,D.l0.flex.growAndShrink(1)],rightColumn:[D.l0.rowWithGap(8),D.l0.align.center],titleInfo:[D.l0.colWithGap(0),D.l0.flex.growAndShrink(1)],lastDeployedText:[D.l0.flex.growAndShrink(1)],deploymentInfo:[D.l0.rowWithGap(8),D.l0.align.center],externalLinkButton:[D.l0.zIndex(1),{background:"transparent"}]});function z(e){var t=e.deployment;return(0,d.BX)(H.Tg,{css:j.self,tag:"li",children:[(0,d.BX)(k.G,{css:j.leftColumn,children:[(0,d.tZ)(p.Z,{alt:t.repl.title,size:20,iconUrl:t.repl.iconUrl}),(0,d.BX)(k.G,{css:j.titleInfo,children:[(0,d.tZ)(M.U,{variant:"card-link",deployment:t}),(0,d.BX)(k.G,{css:j.deploymentInfo,children:[(0,d.tZ)(O.b,{provider:t.currentBuild.provider}),(0,d.BX)(_.xv,{multiline:!1,maxLines:1,variant:"small",color:"dimmest",css:j.lastDeployedText,children:["last deployed ",(0,W.F)(t.currentBuild.timeCreated)]})]})]})]}),(0,d.BX)(k.G,{css:j.rightColumn,children:[(0,d.tZ)(q.i,{deployment:t}),(0,d.tZ)(H.Tg,{elevated:!0,css:j.externalLinkButton,children:(0,d.tZ)(P.X,{deployment:t})})]})]})}function Y(e){var t=e.className,n=(0,L.useId)();return(0,d.tZ)(H.Tg,{css:j.loadingBlock,className:t,children:(0,d.BX)(F.ZP,{speed:2,backgroundColor:D.TV.backgroundHighest,foregroundColor:D.TV.backgroundHigher,uniqueKey:n,children:[(0,d.tZ)("rect",{x:"0",y:"16",rx:"4",ry:"4",width:"20",height:"20"}),(0,d.tZ)("rect",{x:"30",y:"3",rx:"4",ry:"4",width:"200",height:"18"}),(0,d.tZ)("rect",{x:"30",y:"26",rx:"4",ry:"4",width:"75",height:"18"})]})})}var K=n(83743),$=(0,B.X)({self:[D.l0.colWithGap(12),D.l0.flex.growAndShrink(1)],seeAllButton:[{alignSelf:"start"}],headerRow:[D.l0.rowWithGap(12),D.l0.justify.spaceBetween,D.l0.align.center,D.l0.minHeight(32)],emptyStateBanner:[{alignItems:"start"}]});function J(e){var t,n,l,r=e.currentUser,i=(0,K.NJ)({variables:{input:{count:T.V}},ssr:!1,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),o=i.data,a=i.loading,c=null!==(l=null==o?void 0:null===(t=o.currentUser)||void 0===t?void 0:t.hostingDeployments.items.filter(N))&&void 0!==l?l:[],s=Math.min(r.hostingDeployments.items.length,T.V);return(0,d.BX)(k.G,{css:$.self,children:[(0,d.tZ)(k.G,{css:$.headerRow,children:(0,d.tZ)(_.h4,{variant:"subheadBig",level:2,children:"Deployments"})}),a?(0,E.UV)(s).map(function(e,t){return(0,d.tZ)(Y,{},t)}):(0,d.BX)(d.HY,{children:[(null==o?void 0:null===(n=o.currentUser)||void 0===n?void 0:n.requiresActionToRedeploy)?(0,d.tZ)(A.Z,{}):null,0===c.length?(0,d.BX)(d.HY,{children:[(0,d.tZ)(k.G,{css:$.emptyStateBanner,children:(0,d.tZ)(X.E,{icon:(0,d.tZ)(U.Z,{}),text:"You don't have any deployments"})}),(0,d.tZ)(S.Z,{as:"/my-deployments",href:"/my-deployments",prefetch:!1,iconLeft:(0,d.tZ)(I.Z,{}),text:"Deploy",variant:"outlined",css:$.seeAllButton})]}):(0,d.BX)(d.HY,{children:[(0,d.tZ)(k.G,{tag:"ol",children:c.map(function(e){return(0,d.tZ)(z,{deployment:e},e.id)})}),(0,d.tZ)(S.Z,{as:"/my-deployments",href:"/my-deployments",prefetch:!1,iconLeft:(0,d.tZ)(I.Z,{}),text:"See all Deployments",variant:"outlined",css:$.seeAllButton})]})]})]})}var Q=n(66626),ee=n(30509),et=n(43769),en=n(9834),el=n.n(en),er=n(63257),ei=n(36200),eo=n(34925),ea=n(75613),ec=n(47576),es=n(58532),ed=n(89313),eu=n(16865),ep=n(4135),eh=n(19602);function ef(e){var t=e.repl,n=(0,Q._)((0,L.useState)(null),2),l=n[0],r=n[1],i=(0,eo.g)(),o=i.fork,a=i.isForking,c=t.authorizations,s=[{label:"Cover page",value:"CoverPage",link:(0,et.j3)(t),icon:(0,d.tZ)(eu.Z,{})},{label:"Edit",value:"Edit",icon:(0,d.tZ)(ed.Z,{})}].concat((0,er._)(c.fork.isAuthorized?[{label:"Fork",value:"Fork",icon:(0,d.tZ)(ep.Z,{})}]:[]),(0,er._)(c.deleteRepl.isAuthorized?[{label:"Delete",value:"Delete",isDestructive:!0,icon:(0,d.tZ)(eh.Z,{})}]:[]));return(0,d.BX)(d.HY,{children:[(0,d.tZ)(ei.Z,{label:"Repl Actions",orientation:"vertical",items:s,onItemClick:function(e){switch(e.value){case"CoverPage":break;case"Edit":r("Edit");break;case"Delete":r("Delete");break;case"Fork":a||o()}}}),(0,d.tZ)(es.u,{isOpen:"Delete"===l,onRequestClose:function(){return r(null)},children:(0,d.tZ)(ea.q,{repl:t,onDone:function(){return r(null)}})}),(0,d.tZ)(es.u,{isOpen:"Edit"===l,onRequestClose:function(){return r(null)},children:(0,d.tZ)(ec.K,{repl:t,onDone:function(){return r(null)}})})]})}function em(e){var t,n=e.repl;return(0,d.tZ)(eo.b,{forkParams:{trackingData:{forkSource:"homeRecentRepls"}},repl:n,teamContext:(null===(t=n.owner)||void 0===t?void 0:t.__typename)==="Team"?n.owner.id:void 0,children:(0,d.tZ)(ef,{repl:n})})}(l=o||(o={})).CoverPage="CoverPage",l.Delete="Delete",l.Edit="Edit",l.Fork="Fork",(r=a||(a={})).Delete="Delete",r.Edit="Edit",r.Fork="Fork";var eg=(0,B.X)({loadingBlock:[D.l0.p(4),D.l0.height(52),D.l0.width("100%"),D.l0.flex.shrink(1),D.l0.borderRadius()],self:[D.l0.p(4),D.l0.borderRadius(),V.gU.listItem,D.l0.rowWithGap(16),D.l0.justify.spaceBetween,D.l0.position.relative,D.l0.align.center,D.l0.flex.growAndShrink(1)],leftColumn:[D.l0.rowWithGap(8),D.l0.align.center,D.l0.flex.growAndShrink(1)],rightColumn:[D.l0.rowWithGap(8),D.l0.align.center],titleInfo:[D.l0.colWithGap(0),D.l0.flex.growAndShrink(1)],subheading:[D.l0.rowWithGap(4),D.l0.align.center,D.l0.flex.growAndShrink(1)],subheadingText:[D.l0.flex.shrink(1)],replTitle:[D.l0.focusRingOnAfter,{outline:"none",color:"inherit","::after":{borderRadius:D.TV.borderRadiusDefault,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,display:"block",zIndex:1}}],replSettingButton:[D.l0.zIndex(1),{background:"transparent"}]});function ey(e){var t=e.repl,n=(0,et.aq)(t);return(0,d.BX)(H.Tg,{css:eg.self,tag:"li",children:[(0,d.BX)(k.G,{css:eg.leftColumn,children:[(0,d.tZ)(p.Z,{alt:t.title,size:20,iconUrl:t.iconUrl}),(0,d.BX)(k.G,{css:eg.titleInfo,children:[(0,d.tZ)(el(),(0,ee._)((0,h._)({legacyBehavior:!0,passHref:!0},n),{children:(0,d.tZ)("a",{css:eg.replTitle,children:(0,d.tZ)(_.xv,{multiline:!1,maxLines:1,children:t.title})})})),(0,d.BX)(k.G,{css:eg.subheading,children:[t.owner?(0,d.BX)(d.HY,{children:[(0,d.BX)(_.xv,{multiline:!1,maxLines:1,variant:"small",color:"dimmest",css:eg.subheadingText,children:["@",t.owner.username]}),(0,d.tZ)(_.xv,{color:"dimmest",variant:"small","aria-hidden":!0,multiline:!1,maxLines:1,children:"•"})]}):null,(0,d.tZ)(_.xv,{multiline:!1,maxLines:1,variant:"small",color:"dimmest",css:eg.subheadingText,children:(0,W.F)(t.timeUpdated)})]})]})]}),(0,d.tZ)(k.G,{css:eg.rightColumn,children:(0,d.tZ)(H.Tg,{elevated:!0,css:eg.replSettingButton,children:(0,d.tZ)(em,{repl:t})})})]})}function ev(e){var t=e.className,n=(0,L.useId)();return(0,d.tZ)(H.Tg,{css:eg.loadingBlock,className:t,children:(0,d.BX)(F.ZP,{speed:2,backgroundColor:D.TV.backgroundHighest,foregroundColor:D.TV.backgroundHigher,uniqueKey:n,children:[(0,d.tZ)("rect",{x:"0",y:"16",rx:"4",ry:"4",width:"20",height:"20"}),(0,d.tZ)("rect",{x:"30",y:"3",rx:"4",ry:"4",width:"150",height:"18"}),(0,d.tZ)("rect",{x:"30",y:"26",rx:"4",ry:"4",width:"120",height:"18"})]})})}var eZ=n(96214),eR=n(82383),eb=n(66791),ew=n(55419),ex=(0,B.X)({self:[D.l0.colWithGap(12),D.l0.flex.growAndShrink(1)],seeAllButton:[{alignSelf:"start"}],headerRow:[D.l0.rowWithGap(12),D.l0.justify.spaceBetween,D.l0.align.center,D.l0.minHeight(32)],filter:[D.l0.rowWithGap(8),D.l0.align.center],emptyStateBanner:[{alignItems:"start"}]});(i=c||(c={})).AllRepls="AllRepls",i.OwnRepls="OwnRepls",i.MultiplayerRepls="MultiplayerRepls";var ek=[{title:"All Repls",value:"AllRepls"},{title:"My Repls",value:"OwnRepls"},{title:"Multiplayer Repls",value:"MultiplayerRepls"}];function eB(e){var t,n=e.currentUser,l=(0,ew.kl)({variables:{count:T.V},ssr:!1,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),r=l.data,i=l.loading,o=(0,Q._)((0,L.useState)("AllRepls"),2),a=o[0],c=o[1],s=null!==(t=null==r?void 0:r.currentUser)&&void 0!==t?t:null,u=function(e){var t,n,l,r=e.filter,i=e.data,o=null!==(t=null==i?void 0:i.multiplayerRecentRepls)&&void 0!==t?t:[],a=null!==(n=null==i?void 0:i.ownRecentRepls)&&void 0!==n?n:[],c=null!==(l=null==i?void 0:i.allRecentRepls)&&void 0!==l?l:[];switch(r){case"AllRepls":return c;case"OwnRepls":return a;case"MultiplayerRepls":return o;default:(0,eb.Z)(r)}}({filter:a,data:r}),p=function(e){var t,n=e.filter,l=e.loadingInfo;switch(n){case"AllRepls":case"MultiplayerRepls":t=l.allRecentReplsCount;break;case"OwnRepls":t=l.ownRecentReplsCount;break;default:(0,eb.Z)(n)}return Math.min(t,T.V)}({filter:a,loadingInfo:n}),h=(null==r?void 0:r.allRecentRepls)?0!==r.allRecentRepls.length:0!==n.allRecentReplsCount,f="You don't have any ".concat("MultiplayerRepls"===a?"multiplayer":""," Repls");return(0,d.BX)(k.G,{css:ex.self,children:[(0,d.BX)(k.G,{css:ex.headerRow,children:[(0,d.tZ)(_.h4,{variant:"subheadBig",level:2,children:"Recent Repls"}),(0,d.tZ)(k.G,{css:ex.filter,children:(0,d.tZ)(eZ.P,{"aria-label":"Filter recent Repls",selectedItem:ek.find(function(e){return e.value===a}),items:ek,onChange:function(e){return c(e.value)}})})]}),i?(0,E.UV)(p).map(function(e,t){return(0,d.tZ)(ev,{},t)}):(0,d.BX)(d.HY,{children:[0===u.length?(0,d.tZ)(k.G,{css:ex.emptyStateBanner,children:(0,d.tZ)(X.E,{icon:(0,d.tZ)(U.Z,{}),text:f})}):(0,d.tZ)(k.G,{tag:"ol",children:u.map(function(e){return(0,d.tZ)(ey,{repl:e},e.id)})}),s&&h?(0,d.tZ)(S.Z,{href:"/replsDashboard",as:"/repls",prefetch:!1,iconLeft:(0,d.tZ)(eR.Z,{}),text:"See all Repls",variant:"outlined",css:ex.seeAllButton}):null]})]})}var eC=n(39182),eD=n(14118),eG=(0,B.X)({self:[D.l0.colWithGap(16)],createRow:[D.l0.colWithGap(8),D.l0.flex.growAndShrink(1),(0,s._)({},D.BC.min("tabletMin"),[D.l0.colWithGap(0),D.l0.rowWithGap(8),D.l0.flex.growAndShrink(1)])],startWithAiRow:[D.l0.p(16),D.l0.borderRadius("container"),D.l0.border({color:D.TV.outlineDimmest})],recentReplsAndDeploymentsRow:[(0,s._)({display:"grid",gridTemplateColumns:"1fr",gap:D.TV.space16,"& > .divider":{display:"none"}},D.BC.min("tabletMax"),{gridTemplateColumns:"50% min-content 50%","& > .divider":{display:"unset"}})]}),eA=function(){return!!(0,G.useRouter)().query.create};function eT(e){var t,n,l,r=e.currentUser,i=eA(),o=(t=(0,h._)({},Z,void 0),g.a(b,t)).data,a=null!==(l=null==o?void 0:null===(n=o.currentUser)||void 0===n?void 0:n.favoriteCreateReplOptions.filter(function(e){return"Repl"===e.__typename}).slice(0,2))&&void 0!==l?l:[],c=(0,eD.P5)({controlName:"flag-porygon-button"});return(0,d.BX)(k.G,{tag:"section",css:eG.self,children:[(0,d.BX)(k.G,{css:eG.createRow,children:[(0,d.tZ)(u.Z,{trackingContext:"home",defaultOpen:i,children:(0,d.tZ)(w.zx,{colorway:"primary",text:"Create Repl",iconLeft:(0,d.tZ)(C.Z,{})})}),a.map(function(e){return(0,d.tZ)(u.Z,{trackingContext:"home",initialSelectedLanguageOrReplId:e.id,children:(0,d.tZ)(w.zx,{text:"Create ".concat(e.title),iconLeft:(0,d.tZ)(p.Z,{alt:"",iconUrl:e.iconUrl})})},e.id)})]}),c?(0,d.tZ)(H.Tg,{elevated:!0,css:eG.startWithAiRow,children:(0,d.tZ)(eC.ye,{hasAccessToAdvancedModel:!1,trackingSource:"homePage",shouldAutoFocus:!1})}):null,(0,d.BX)(k.G,{css:eG.recentReplsAndDeploymentsRow,children:[(0,d.tZ)(eB,{currentUser:r}),(0,d.tZ)(x.X,{className:"divider"}),(0,d.tZ)(J,{currentUser:r})]})]})}},95188:function(e,t,n){n.d(t,{UV:function(){return i},fN:function(){return r}});var l=n(63257);function r(e,t){for(var n=0;n<t.length;n+=1e4)e.push.apply(e,(0,l._)(t.slice(n,n+1e4)))}function i(e){return(0,l._)(Array(e))}},85468:function(e,t,n){n.d(t,{X:function(){return a}});var l=n(3796),r=n(62279),i=n(63163),o=(0,r.iv)({backgroundColor:i.TV.outlineDimmest,width:1});function a(e){var t=e.className;return(0,l.tZ)("div",{className:t,css:o})}},23137:function(e,t,n){var l=n(75271),r=function(){return(r=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e){var t=e.animate,n=void 0===t||t,i=e.animateBegin,o=e.backgroundColor,a=void 0===o?"#f5f6f7":o,c=e.backgroundOpacity,s=void 0===c?1:c,d=e.baseUrl,u=void 0===d?"":d,p=e.children,h=e.foregroundColor,f=e.foregroundOpacity,m=e.gradientRatio,g=void 0===m?2:m,y=e.gradientDirection,v=e.uniqueKey,Z=e.interval,R=e.rtl,b=e.speed,w=e.style,x=e.title,k=void 0===x?"Loading...":x,B=e.beforeMask,C=void 0===B?null:B,D=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]]);return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),G=v||Math.random().toString(36).substring(6),A=G+"-diff",T=G+"-animated-diff",E=G+"-aria",S="0; "+(void 0===Z?.25:Z)+"; 1",X=(void 0===b?1.2:b)+"s";return(0,l.createElement)("svg",r({"aria-labelledby":E,role:"img",style:r(r({},void 0===w?{}:w),void 0!==R&&R?{transform:"scaleX(-1)"}:null)},D),k?(0,l.createElement)("title",{id:E},k):null,C&&(0,l.isValidElement)(C)?C:null,(0,l.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+A+")",style:{fill:"url("+u+"#"+T+")"}}),(0,l.createElement)("defs",null,(0,l.createElement)("clipPath",{id:A},p),(0,l.createElement)("linearGradient",{id:T,gradientTransform:"top-bottom"===(void 0===y?"left-right":y)?"rotate(90)":void 0},(0,l.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:s},n&&(0,l.createElement)("animate",{attributeName:"offset",values:-g+"; "+-g+"; 1",keyTimes:S,dur:X,repeatCount:"indefinite",begin:i})),(0,l.createElement)("stop",{offset:"50%",stopColor:void 0===h?"#eee":h,stopOpacity:void 0===f?1:f},n&&(0,l.createElement)("animate",{attributeName:"offset",values:-g/2+"; "+-g/2+"; "+(1+g/2),keyTimes:S,dur:X,repeatCount:"indefinite",begin:i})),(0,l.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:s},n&&(0,l.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+g),keyTimes:S,dur:X,repeatCount:"indefinite",begin:i})))))},o=function(e){return e.children?(0,l.createElement)(i,r({},e)):(0,l.createElement)(a,r({},e))},a=function(e){return(0,l.createElement)(o,r({viewBox:"0 0 476 124"},e),(0,l.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,l.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,l.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,l.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,l.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,l.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=o}}]);
//# sourceMappingURL=3311-1aa0cd9547b0d767.js.map