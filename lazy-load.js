(function(b){b.fn.lazyload=function(a){var g={threshold:0,failurelimit:0,event:&quot;scroll&quot;,effect:&quot;show&quot;,container:window};if(a){b.extend(g,a)}var f=this;if(&quot;scroll&quot;==g.event){b(g.container).bind(&quot;scroll&quot;,function(c){var h=0;f.each(function(){if(b.abovethetop(this,g)||b.leftofbegin(this,g)){}else{if(!b.belowthefold(this,g)&amp;&amp;!b.rightoffold(this,g)){b(this).trigger(&quot;appear&quot;)}else{if(h++&gt;g.failurelimit){return false}}}});var d=b.grep(f,function(i){return !i.loaded});f=b(d)})}this.each(function(){var c=this;if(undefined==b(c).attr(&quot;original&quot;)){b(c).attr(&quot;original&quot;,b(c).attr(&quot;src&quot;))}if(&quot;scroll&quot;!=g.event||undefined==b(c).attr(&quot;src&quot;)||g.placeholder==b(c).attr(&quot;src&quot;)||b.abovethetop(c,g)||b.leftofbegin(c,g)||b.belowthefold(c,g)||b.rightoffold(c,g)){if(g.placeholder){b(c).attr(&quot;src&quot;,g.placeholder)}else{b(c).removeAttr(&quot;src&quot;)}c.loaded=false}else{c.loaded=true}b(c).one(&quot;appear&quot;,function(){if(!this.loaded){b(&quot;&lt;img /&gt;&quot;).bind(&quot;load&quot;,function(){b(c).hide().attr(&quot;src&quot;,b(c).attr(&quot;original&quot;))[g.effect](g.effectspeed);c.loaded=true}).attr(&quot;src&quot;,b(c).attr(&quot;original&quot;))}});if(&quot;scroll&quot;!=g.event){b(c).bind(g.event,function(d){if(!c.loaded){b(c).trigger(&quot;appear&quot;)}})}});b(g.container).trigger(g.event);return this};b.belowthefold=function(a,g){if(g.container===undefined||g.container===window){var f=b(window).height()+b(window).scrollTop()}else{var f=b(g.container).offset().top+b(g.container).height()}return f&lt;=b(a).offset().top-g.threshold};b.rightoffold=function(a,g){if(g.container===undefined||g.container===window){var f=b(window).width()+b(window).scrollLeft()}else{var f=b(g.container).offset().left+b(g.container).width()}return f&lt;=b(a).offset().left-g.threshold};b.abovethetop=function(a,g){if(g.container===undefined||g.container===window){var f=b(window).scrollTop()}else{var f=b(g.container).offset().top}return f&gt;=b(a).offset().top+g.threshold+b(a).height()};b.leftofbegin=function(a,g){if(g.container===undefined||g.container===window){var f=b(window).scrollLeft()}else{var f=b(g.container).offset().left}return f&gt;=b(a).offset().left+g.threshold+b(a).width()};b.extend(b.expr[&quot;:&quot;],{&quot;below-the-fold&quot;:&quot;$.belowthefold(a, {threshold : 0, container: window})&quot;,&quot;above-the-fold&quot;:&quot;!$.belowthefold(a, {threshold : 0, container: window})&quot;,&quot;right-of-fold&quot;:&quot;$.rightoffold(a, {threshold : 0, container: window})&quot;,&quot;left-of-fold&quot;:&quot;!$.rightoffold(a, {threshold : 0, container: window})&quot;})})(jQuery);$(function(){$(&quot;img&quot;).lazyload({placeholder:&quot;http://i22.servimg.com/u/f22/15/42/72/40/grey10.gif&quot;,effect:&quot;fadeIn&quot;,threshold:&quot;-50&quot;})});
