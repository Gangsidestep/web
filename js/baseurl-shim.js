/* baseurl-shim.js
   Safely convert protocol-relative resource URLs ("//host/...") to explicit https:
   This helps static/audit tools and avoids mixed-content when pages are served over https.
*/
(function(){
  try{
    var desc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
    if(desc && desc.set){
      var origSet = desc.set;
      Object.defineProperty(HTMLScriptElement.prototype, 'src', {
        set: function(v){
          try{ if(typeof v === 'string' && v.indexOf('//') === 0) v = 'https:' + v; }catch(e){}
          return origSet.call(this, v);
        }
      });
    }
  }catch(e){}

  // Fallback: intercept appendChild to rewrite script/link src/href starting with //
  try{
    var origAppend = Element.prototype.appendChild;
    Element.prototype.appendChild = function(child){
      try{
        if(child && child.tagName){
          var t = child.tagName.toLowerCase();
          if((t === 'script' && child.src && child.src.indexOf('//') === 0) ||
             (t === 'link' && child.href && child.href.indexOf('//') === 0)){
            if(child.src) child.src = (child.src.indexOf('http')===0?child.src:'https:'+child.src);
            if(child.href) child.href = (child.href.indexOf('http')===0?child.href:'https:'+child.href);
          }
        }
      }catch(e){}
      return origAppend.call(this, child);
    };
  }catch(e){}
})();
