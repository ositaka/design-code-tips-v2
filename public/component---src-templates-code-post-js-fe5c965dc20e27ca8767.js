(self.webpackChunkdesign_code_tips_v2=self.webpackChunkdesign_code_tips_v2||[]).push([[852],{3031:function(t,e,n){"use strict";n.d(e,{p:function(){return u}});var r=n(7294),u=function(t){var e=t.content,n=t.className;return r.createElement("div",{className:n,dangerouslySetInnerHTML:{__html:e}})};e.Z=function(t){var e=t.content,n=t.className;return r.createElement("div",{className:n},e)}},1068:function(t,e,n){"use strict";n.r(e),n.d(e,{CodePostTemplate:function(){return l}});var r=n(1804),u=n.n(r),o=n(7294),c=n(5414),f=n(1597),a=n(17),i=n(3031),l=function(t){var e=t.content,n=t.contentComponent,r=t.description,c=t.tags,a=t.title,l=t.helmet,s=n||i.Z;return o.createElement("section",{className:"section"},l||"",o.createElement("article",{className:"single-post"},o.createElement("h1",{className:"title-h1"},a),o.createElement("p",null,r),o.createElement(s,{content:e}),c&&c.length?o.createElement("div",{style:{marginTop:"4rem"}},o.createElement("h2",null,"Tags"),o.createElement("ul",{className:"taglist"},c.map((function(t){return o.createElement("li",{key:t+"tag"},o.createElement(f.Link,{to:"/tags/"+u()(t)+"/"},"#",t))})))):null))};e.default=function(t){var e=t.data.markdownRemark;return o.createElement(a.Z,null,o.createElement(l,{content:e.html,contentComponent:i.p,description:e.frontmatter.description,helmet:o.createElement(c.q,{titleTemplate:"%s | Code"},o.createElement("title",null,""+e.frontmatter.title),o.createElement("meta",{name:"description",content:""+e.frontmatter.description})),tags:e.frontmatter.tags,title:e.frontmatter.title}))}},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,u=Array(r);++n<r;)u[n]=e(t[n],n,t);return u}},2663:function(t){t.exports=function(t,e,n,r){var u=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++u]);++u<o;)n=e(n,t[u],u,t);return n}},9029:function(t){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},4239:function(t,e,n){var r=n(2705),u=n(9607),o=n(2333),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?u(t):o(t)}},8674:function(t){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},531:function(t,e,n){var r=n(2705),u=n(9932),o=n(1469),c=n(3448),f=r?r.prototype:void 0,a=f?f.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return u(e,t)+"";if(c(e))return a?a.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},5393:function(t,e,n){var r=n(2663),u=n(3816),o=n(8748),c=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(u(e).replace(c,"")),t,"")}}},9389:function(t,e,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),u=Object.prototype,o=u.hasOwnProperty,c=u.toString,f=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(a){}var u=c.call(t);return r&&(e?t[f]=n:delete t[f]),u}},3157:function(t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),u="object"==typeof self&&self&&self.Object===Object&&self,o=r||u||Function("return this")();t.exports=o},2757:function(t){var e="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+u+"]",c="\\d+",f="[\\u2700-\\u27bf]",a="["+n+"]",i="[^\\ud800-\\udfff"+u+c+e+n+r+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",x="(?:"+a+"|"+i+")",p="(?:"+d+"|"+i+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",E=b+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,s].join("|")+")"+b+g+")*"),h="(?:"+[f,l,s].join("|")+")"+E,y=RegExp([d+"?"+a+"+"+m+"(?="+[o,d,"$"].join("|")+")",p+"+"+v+"(?="+[o,d+x,"$"].join("|")+")",d+"?"+x+"+"+m,d+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",c,h].join("|"),"g");t.exports=function(t){return t.match(y)||[]}},3816:function(t,e,n){var r=n(9389),u=n(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,c=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=u(t))&&t.replace(o,r).replace(c,"")}},1469:function(t){var e=Array.isArray;t.exports=e},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),u=n(7005);t.exports=function(t){return"symbol"==typeof t||u(t)&&"[object Symbol]"==r(t)}},1804:function(t,e,n){var r=n(5393)((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}},8748:function(t,e,n){var r=n(9029),u=n(3157),o=n(9833),c=n(2757);t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?u(t)?c(t):r(t):t.match(e)||[]}}}]);
//# sourceMappingURL=component---src-templates-code-post-js-fe5c965dc20e27ca8767.js.map