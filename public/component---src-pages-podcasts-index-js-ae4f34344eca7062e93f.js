"use strict";(self.webpackChunkdesign_code_tips_v2=self.webpackChunkdesign_code_tips_v2||[]).push([[457],{7436:function(e,t,a){var r=a(7294),n=a(8945);t.Z=function(e){var t=e.imageInfo,a={borderRadius:"5px"},l=t.alt,s=void 0===l?"":l,i=t.childImageSharp,m=t.image;return m&&m.childImageSharp?r.createElement(n.G,{image:m.childImageSharp.gatsbyImageData,style:a,alt:s}):i?r.createElement(n.G,{image:i.gatsbyImageData,style:a,alt:s}):m?r.createElement("img",{style:{imageStyle:a},src:m,alt:s}):null}},3476:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(1721),n=a(7294),l=a(17),s=a(5414),i=a(1597),m=a(7436),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,a=e.site.siteMetadata.title;return n.createElement(n.Fragment,null,n.createElement(s.q,{title:"Podcasts | "+a}),n.createElement("section",{className:"section"},n.createElement("div",{className:"cards-list four-columns"},t&&t.map((function(e){var t=e.node;return n.createElement(i.Link,{to:t.fields.slug,key:t.id,className:"card has-image"},n.createElement("article",{className:"post "+(t.frontmatter.featuredpost?"is-featured":"")},n.createElement("div",{className:"post-image"},t.frontmatter.featuredimage?n.createElement("div",{className:"featured-thumbnail"},n.createElement(m.Z,{imageInfo:{image:t.frontmatter.featuredimage,alt:"featured image thumbnail for post "+t.frontmatter.title,width:t.frontmatter.featuredimage.childImageSharp.gatsbyImageData.width,height:t.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height}})):null),n.createElement("div",{className:"post-info"},n.createElement("h3",{className:"post-title title-h3"},t.frontmatter.title),n.createElement("div",{className:"post-details"},n.createElement("span",{className:"post-date"},t.frontmatter.date),t.frontmatter.tags&&t.frontmatter.tags.length?n.createElement("ul",{className:"post-tags"},t.frontmatter.tags.map((function(e){return n.createElement("li",{key:e+"tag"},"#",e)}))):null))))})))))},t}(n.Component);function o(){return n.createElement(i.StaticQuery,{query:"3002795290",render:function(e,t){return n.createElement(c,{data:e,count:t})}})}var u=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return n.createElement(l.Z,null,n.createElement("div",{className:"page-title"},n.createElement("h1",{className:"title-h1"},'You are browsing all "Podcasts"')),n.createElement("div",{className:"container"},n.createElement(o,null)))},t}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-podcasts-index-js-ae4f34344eca7062e93f.js.map