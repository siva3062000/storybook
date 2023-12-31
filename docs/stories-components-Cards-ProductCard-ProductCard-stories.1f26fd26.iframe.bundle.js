"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[301],{"./src/stories/components/Cards/ProductCard/ProductCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoatAirDrop:()=>BoatAirDrop,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProductCard_stories});__webpack_require__("./node_modules/react/index.js");const ProductCard_module={card:"ProductCard_card__-xSfw","boat-lifestyle-product-card":"ProductCard_boat-lifestyle-product-card__fzoSg",imageWrapper:"ProductCard_imageWrapper__ppVg5",imageContainer:"ProductCard_imageContainer__aCg6Q",tag:"ProductCard_tag__d7fzs",label:"ProductCard_label__w-y5I",productImage:"ProductCard_productImage__+uu80",details:"ProductCard_details__pdha-",productName:"ProductCard_productName__QgLhD",colors:"ProductCard_colors__UApmv",colorOption:"ProductCard_colorOption__iwjz1",remaingColorsCount:"ProductCard_remaingColorsCount__7tbWL",price:"ProductCard_price__5Owei",discountPrice:"ProductCard_discountPrice__konch",actualPrice:"ProductCard_actualPrice__Ln5xW",discountPercentage:"ProductCard_discountPercentage__EimLN",ratingsAndReviews:"ProductCard_ratingsAndReviews__329kU",ratings:"ProductCard_ratings__1bLi7",reviews:"ProductCard_reviews__hgZws",buttons:"ProductCard_buttons__zkn4p",button:"ProductCard_button__95Gyp"};__webpack_require__("./src/types/index.js");var helper=__webpack_require__("./src/helper/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),md_index_esm=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),constants=__webpack_require__("./src/constants/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProductCard=props=>{var _colors$values;const{tag,productImage,label,productName,price,ratings,reviews,buttons,colors,variant=constants.S}=props;return(0,jsx_runtime.jsxs)("div",{className:"".concat(ProductCard_module.card," ").concat(ProductCard_module[variant]),children:[(0,jsx_runtime.jsxs)("div",{className:ProductCard_module.imageWrapper,children:[productImage&&(0,jsx_runtime.jsxs)("a",{className:ProductCard_module.imageContainer,children:[" ",(0,jsx_runtime.jsx)("img",{className:ProductCard_module.productImage,...productImage})]}),tag&&(0,jsx_runtime.jsx)("div",{className:ProductCard_module.tag,children:tag}),label&&(0,jsx_runtime.jsx)("div",{className:ProductCard_module.label,children:label})]}),(0,jsx_runtime.jsxs)("div",{className:ProductCard_module.details,children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[productName&&(0,jsx_runtime.jsx)("div",{className:ProductCard_module.productName,children:productName}),(null==colors||null===(_colors$values=colors.values)||void 0===_colors$values?void 0:_colors$values.length)>0&&(0,jsx_runtime.jsxs)("div",{className:ProductCard_module.colors,children:[colors.values.map(((color,index)=>(0,jsx_runtime.jsx)("span",{style:{backgroundColor:color},className:ProductCard_module.colorOption},index))),(0,jsx_runtime.jsxs)("span",{className:ProductCard_module.remaingColorsCount,children:["+".concat(colors.totalColors-colors.values.length)," "]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between mt-3",children:[(0,jsx_runtime.jsxs)("div",{children:[price&&(0,jsx_runtime.jsxs)("div",{className:ProductCard_module.price,children:[(0,jsx_runtime.jsxs)("span",{className:ProductCard_module.discountPrice,children:["₹",(0,helper.Pi)(price.discountPrice)]}),(0,jsx_runtime.jsxs)("span",{className:ProductCard_module.actualPrice,children:["₹",(0,helper.Pi)(price.actualPrice)]}),(0,jsx_runtime.jsxs)("span",{className:ProductCard_module.discountPercentage,children:[(0,helper.G1)(price.actualPrice,price.discountPrice)," ","% off"]})]}),reviews&&ratings&&(0,jsx_runtime.jsxs)("div",{className:ProductCard_module.ratingsAndReviews,children:[(0,jsx_runtime.jsx)(index_esm.QJe,{color:"#F4C730"}),(0,jsx_runtime.jsx)("span",{className:ProductCard_module.ratings,children:ratings})," ",(0,jsx_runtime.jsx)("span",{className:ProductCard_module.reviews,children:reviews}),(0,jsx_runtime.jsx)(md_index_esm.vr,{color:"#12b985"})]})]}),(null==buttons?void 0:buttons.length)>0&&(0,jsx_runtime.jsx)("div",{className:ProductCard_module.buttons,children:buttons.map(((button,index)=>button.url?(0,jsx_runtime.jsx)("a",{className:ProductCard_module.button,href:button.url,children:button.label},index):(0,jsx_runtime.jsx)("button",{className:ProductCard_module.button,children:button.label},index)))})]})]})]})};ProductCard.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{tag:{description:"",type:{name:"string"},required:!1},productImage:{description:"",type:{name:"custom",raw:"ImagePropType"},required:!1},label:{description:"",type:{name:"string"},required:!1},productName:{description:"",type:{name:"string"},required:!1},price:{description:"",type:{name:"shape",value:{discountPrice:{name:"number",required:!1},actualPrice:{name:"number",required:!1}}},required:!1},ratings:{description:"",type:{name:"number"},required:!1},reviews:{description:"",type:{name:"number"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"LinkPropType"}},required:!1},colors:{description:"",type:{name:"shape",value:{values:{name:"array",required:!1},totalColors:{name:"number",required:!1}}},required:!1},variant:{description:"",type:{name:"string"},required:!1}}};const ProductCard_ProductCard=ProductCard,boat_airdrop_namespaceObject=__webpack_require__.p+"42c8ca449fad9b2ac727.webp";var _BoatAirDrop$paramete,_BoatAirDrop$paramete2,_BoatAirDrop$paramete3;const ProductCard_stories={title:"Components/Cards/Product Card",component:ProductCard_ProductCard,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{productImage:{control:"file",accept:[".png",".jpg","webp","jpeg"]},buttons:{control:"object"},variant:{options:["default","boat-lifestyle-product-card"],control:{type:"select"}}}},BoatAirDrop={args:{tag:"✍️ Engraving Available",label:"60 Hours Playback",productImage:{src:boat_airdrop_namespaceObject,alt:"Boat AirDrop"},productName:"Airdopes 131",colors:{values:["#d1d1d1","#22201f"],totalColors:7},price:{discountPrice:899,actualPrice:2990},ratings:4.8,reviews:1336,buttons:[{label:"Add to Cart"}],variant:"boat-lifestyle-product-card"}};BoatAirDrop.parameters={...BoatAirDrop.parameters,docs:{...null===(_BoatAirDrop$paramete=BoatAirDrop.parameters)||void 0===_BoatAirDrop$paramete?void 0:_BoatAirDrop$paramete.docs,source:{originalSource:'{\n  args: {\n    tag: "✍️ Engraving Available",\n    label: "60 Hours Playback",\n    productImage: {\n      src: boatAirDropImg,\n      alt: "Boat AirDrop"\n    },\n    productName: "Airdopes 131",\n    colors: {\n      values: ["#d1d1d1", "#22201f"],\n      totalColors: 7\n    },\n    price: {\n      discountPrice: 899,\n      actualPrice: 2990\n    },\n    ratings: 4.8,\n    reviews: 1336,\n    buttons: [{\n      label: "Add to Cart"\n    }],\n    variant: "boat-lifestyle-product-card"\n  }\n}',...null===(_BoatAirDrop$paramete2=BoatAirDrop.parameters)||void 0===_BoatAirDrop$paramete2||null===(_BoatAirDrop$paramete3=_BoatAirDrop$paramete2.docs)||void 0===_BoatAirDrop$paramete3?void 0:_BoatAirDrop$paramete3.source}}};const __namedExportsOrder=["BoatAirDrop"]},"./src/constants/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>DEFAULT_VARIANT});const DEFAULT_VARIANT="default"},"./src/helper/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G1:()=>findDisCountPercentage,Pi:()=>formatRupeesWithCommas,p6:()=>formatDate});const findDisCountPercentage=(actualPrice,discountPrice)=>Math.ceil(100-discountPrice/actualPrice*100),formatRupeesWithCommas=amount=>amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),formatDate=d=>new Date(d).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})},"./src/types/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().objectOf({src:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,alt:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number,height:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number}),prop_types__WEBPACK_IMPORTED_MODULE_0___default().objectOf({label:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,link:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})}}]);