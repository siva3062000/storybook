/*! For license information please see stories-components-Cards-ProfileCard-ProfileCard-stories.337bc562.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[183],{"./src/stories/components/Cards/ProfileCard/ProfileCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoatLifeJemimahRodriguesProfile:()=>BoatLifeJemimahRodriguesProfile,HiroProfile:()=>HiroProfile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProfileCard_stories});__webpack_require__("./node_modules/react/index.js");const ProfileCard_module={card:"ProfileCard_card__RNVUT",default:"ProfileCard_default__igM5-",details:"ProfileCard_details__T0H14",title:"ProfileCard_title__ajC1J",description:"ProfileCard_description__-1f3G",buttons:"ProfileCard_buttons__QydJP","boat-lifeStyle":"ProfileCard_boat-lifeStyle__88ttx",profileImage:"ProfileCard_profileImage__1y3kx",bottomSection:"ProfileCard_bottomSection__zC0Iy"};__webpack_require__("./src/types/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ProfileCard(props){const{profileImage,title,subTitle,description,buttons,variant="default"}=props;return(0,jsx_runtime.jsxs)("div",{className:"".concat(ProfileCard_module.card," ").concat(ProfileCard_module[variant]),children:[profileImage&&(0,jsx_runtime.jsx)("img",{src:profileImage.src,alt:profileImage.alt,className:ProfileCard_module.profileImage,width:profileImage.width,height:profileImage.height}),(0,jsx_runtime.jsxs)("div",{className:ProfileCard_module.bottomSection,children:[(0,jsx_runtime.jsxs)("div",{className:ProfileCard_module.details,children:[title&&(0,jsx_runtime.jsx)("div",{className:ProfileCard_module.title,children:title}),subTitle&&(0,jsx_runtime.jsx)("h5",{children:subTitle}),description&&(0,jsx_runtime.jsx)("div",{class:ProfileCard_module.description,children:description})]}),(null==buttons?void 0:buttons.length)>0&&(0,jsx_runtime.jsx)("div",{className:ProfileCard_module.buttons,children:buttons.map(((button,index)=>button.url?(0,jsx_runtime.jsx)("a",{href:button.url,children:button.label},index):(0,jsx_runtime.jsx)("button",{children:button.label},index)))})]})]})}ProfileCard.defaultProps={},ProfileCard.__docgenInfo={description:"",methods:[],displayName:"ProfileCard",props:{profileImage:{description:"",type:{name:"custom",raw:"ImagePropType"},required:!1},title:{description:"",type:{name:"string"},required:!1},subTitle:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"LinkPropType"}},required:!1},variant:{description:"",type:{name:"string"},required:!1}}};const ProfileCard_ProfileCard=ProfileCard,hiro_namespaceObject=__webpack_require__.p+"4fd8e847452ebe10c08f.jpg",BoatLifeJemimahRodrigues_namespaceObject=__webpack_require__.p+"d9faf69050d4045d4c9d.webp";var _HiroProfile$paramete,_HiroProfile$paramete2,_HiroProfile$paramete3,_BoatLifeJemimahRodri,_BoatLifeJemimahRodri2,_BoatLifeJemimahRodri3;const ProfileCard_stories={title:"Components/Cards/Profile Card",component:ProfileCard_ProfileCard,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{profileImage:{control:"file",accept:[".png",".jpg","webp","jpeg"]},buttons:{control:"object"},variant:{options:["default","boat-lifeStyle"],control:{type:"select"}}}},HiroProfile={args:{profileImage:{src:hiro_namespaceObject,alt:"Hiro image"},title:"Hiro hamada",subTitle:"Full-stack Developer",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",buttons:[{label:"Hire me",url:"/hire"},{label:"View",url:"/view"}]}},BoatLifeJemimahRodriguesProfile={args:{profileImage:{src:BoatLifeJemimahRodrigues_namespaceObject,alt:"Jemimah Rodrigues Image",width:320,height:476},title:"Jemimah Rodrigues",buttons:[{label:"View All",url:"/to-products"}],variant:"boat-lifeStyle"}};HiroProfile.parameters={...HiroProfile.parameters,docs:{...null===(_HiroProfile$paramete=HiroProfile.parameters)||void 0===_HiroProfile$paramete?void 0:_HiroProfile$paramete.docs,source:{originalSource:'{\n  args: {\n    profileImage: {\n      src: hiroImg,\n      alt: "Hiro image"\n    },\n    title: "Hiro hamada",\n    subTitle: "Full-stack Developer",\n    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",\n    buttons: [{\n      label: "Hire me",\n      url: "/hire"\n    }, {\n      label: "View",\n      url: "/view"\n    }]\n  }\n}',...null===(_HiroProfile$paramete2=HiroProfile.parameters)||void 0===_HiroProfile$paramete2||null===(_HiroProfile$paramete3=_HiroProfile$paramete2.docs)||void 0===_HiroProfile$paramete3?void 0:_HiroProfile$paramete3.source}}},BoatLifeJemimahRodriguesProfile.parameters={...BoatLifeJemimahRodriguesProfile.parameters,docs:{...null===(_BoatLifeJemimahRodri=BoatLifeJemimahRodriguesProfile.parameters)||void 0===_BoatLifeJemimahRodri?void 0:_BoatLifeJemimahRodri.docs,source:{originalSource:'{\n  args: {\n    profileImage: {\n      src: JemimahRodriguesProfileImg,\n      alt: "Jemimah Rodrigues Image",\n      width: 320,\n      height: 476\n    },\n    title: "Jemimah Rodrigues",\n    buttons: [{\n      label: "View All",\n      url: "/to-products"\n    }],\n    variant: "boat-lifeStyle"\n  }\n}',...null===(_BoatLifeJemimahRodri2=BoatLifeJemimahRodriguesProfile.parameters)||void 0===_BoatLifeJemimahRodri2||null===(_BoatLifeJemimahRodri3=_BoatLifeJemimahRodri2.docs)||void 0===_BoatLifeJemimahRodri3?void 0:_BoatLifeJemimahRodri3.source}}};const __namedExportsOrder=["HiroProfile","BoatLifeJemimahRodriguesProfile"]},"./src/types/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().objectOf({src:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,alt:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number,height:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number}),prop_types__WEBPACK_IMPORTED_MODULE_0___default().objectOf({label:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,link:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);