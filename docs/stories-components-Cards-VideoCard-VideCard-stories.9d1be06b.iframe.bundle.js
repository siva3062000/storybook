/*! For license information please see stories-components-Cards-VideoCard-VideCard-stories.9d1be06b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5],{"./src/stories/components/Cards/VideoCard/VideCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoatLifeStyleVideoCard:()=>BoatLifeStyleVideoCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VideCard_stories});__webpack_require__("./node_modules/react/index.js");var constants=__webpack_require__("./src/constants/index.js");const VideoCard_module={card:"VideoCard_card__KZkyb","boat-lifestyle-video-card":"VideoCard_boat-lifestyle-video-card__tAO2K",imageWrapper:"VideoCard_imageWrapper__X3ItT",detailsSection:"VideoCard_detailsSection__C6UAs",heading:"VideoCard_heading__Td8+a",price:"VideoCard_price__nordf",discountPrice:"VideoCard_discountPrice__Mp2TO",actualPrice:"VideoCard_actualPrice__oCL6N",discountPercentage:"VideoCard_discountPercentage__40sqO"};var helper=__webpack_require__("./src/helper/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VideoCard=props=>{const{video,image,heading,price,variant=constants.Sz}=props;return(0,jsx_runtime.jsxs)("div",{className:"".concat(VideoCard_module.card," ").concat(VideoCard_module[variant]),children:[video&&(0,jsx_runtime.jsx)("div",{class:VideoCard_module.videoWrapper,children:(0,jsx_runtime.jsx)("video",{className:VideoCard_module.video,...video})}),image&&(0,jsx_runtime.jsx)("div",{className:VideoCard_module.imageWrapper,children:(0,jsx_runtime.jsx)("img",{className:VideoCard_module.image,...image})}),(0,jsx_runtime.jsxs)("div",{class:VideoCard_module.detailsSection,children:[heading&&(0,jsx_runtime.jsx)("div",{class:VideoCard_module.heading,children:heading}),price&&(0,jsx_runtime.jsxs)("div",{className:VideoCard_module.price,children:[(0,jsx_runtime.jsxs)("span",{className:VideoCard_module.discountPrice,children:["₹",(0,helper.Pi)(price.discountPrice)]}),(0,jsx_runtime.jsxs)("span",{className:VideoCard_module.actualPrice,children:["₹",(0,helper.Pi)(price.actualPrice)]}),(0,jsx_runtime.jsxs)("span",{className:VideoCard_module.discountPercentage,children:[(0,helper.G1)(price.actualPrice,price.discountPrice)," % off"]})]})]})]})};VideoCard.__docgenInfo={description:"",methods:[],displayName:"VideoCard"};const VideoCard_VideoCard=VideoCard,nirvana_ion_anc_namespaceObject=__webpack_require__.p+"3febc8a71f2503e05dc5.png",stories_assets_nirvana_ion_anc_namespaceObject=__webpack_require__.p+"0bca5fc509fd456fa758.mp4";var _BoatLifeStyleVideoCa,_BoatLifeStyleVideoCa2,_BoatLifeStyleVideoCa3;const VideCard_stories={title:"Components/Cards/Video Card",component:VideoCard_VideoCard,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{image:{src:{control:"file",accept:[".png",".jpg","webp","jpeg"]}},variant:{options:["default","boat-lifestyle-video-card"],control:{type:"select"}}}},BoatLifeStyleVideoCard={args:{video:{src:stories_assets_nirvana_ion_anc_namespaceObject,alt:"Nirvana Ion ANC",loop:!0,autoPlay:!0,preload:"none",muted:!0,playsInline:!0},image:{src:nirvana_ion_anc_namespaceObject,alt:"Nirvana Ion ANC",width:50,height:50},heading:"Nirvana Ion ANC",price:{discountPrice:2898,actualPrice:9990},variant:"boat-lifestyle-video-card"}};BoatLifeStyleVideoCard.parameters={...BoatLifeStyleVideoCard.parameters,docs:{...null===(_BoatLifeStyleVideoCa=BoatLifeStyleVideoCard.parameters)||void 0===_BoatLifeStyleVideoCa?void 0:_BoatLifeStyleVideoCa.docs,source:{originalSource:'{\n  args: {\n    video: {\n      src: NirvanaIonANCVideo,\n      alt: "Nirvana Ion ANC",\n      loop: true,\n      autoPlay: true,\n      preload: "none",\n      muted: true,\n      playsInline: true\n    },\n    image: {\n      src: NirvanaIonANCImg,\n      alt: "Nirvana Ion ANC",\n      width: 50,\n      height: 50\n    },\n    heading: "Nirvana Ion ANC",\n    price: {\n      discountPrice: 2898,\n      actualPrice: 9990\n    },\n    variant: "boat-lifestyle-video-card"\n  }\n}',...null===(_BoatLifeStyleVideoCa2=BoatLifeStyleVideoCard.parameters)||void 0===_BoatLifeStyleVideoCa2||null===(_BoatLifeStyleVideoCa3=_BoatLifeStyleVideoCa2.docs)||void 0===_BoatLifeStyleVideoCa3?void 0:_BoatLifeStyleVideoCa3.source}}};const __namedExportsOrder=["BoatLifeStyleVideoCard"]},"./src/constants/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sz:()=>DEFAULT_VARIANT,Uy:()=>PRODUCT_CARD_TYPE,j$:()=>BREAKPOINTS});const DEFAULT_VARIANT="default",PRODUCT_CARD_TYPE="PRODUCT_CARD_TYPE",BREAKPOINTS={sm:480,md:768,lg:1024,xl:1440}},"./src/helper/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G1:()=>findDisCountPercentage,Pi:()=>formatRupeesWithCommas,p6:()=>formatDate});const findDisCountPercentage=(actualPrice,discountPrice)=>Math.ceil(100-discountPrice/actualPrice*100),formatRupeesWithCommas=amount=>amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),formatDate=d=>new Date(d).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);