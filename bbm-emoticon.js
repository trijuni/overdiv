//<![CDATA[
// ---------------------------------------------------------------
// Copyright (c) 2016
// BBM Emoticons
// Published by : MAS JUNI - http://overdiv.blogspot.com
// Date & Place : 09 February 2016 - Tegal, Central Java - Indonesia
// ---------------------------------------------------------------
window.emoticonx = (function () {
    var b = function (m) {
        var j = m || {}, 
		    l = j.emoRange;
        var i = function (c, d, e) {
		$(l).each(function () {$(this).html($(this).html().replace(/<br>:/g, "<br> :").replace(/<br>;/g, "<br> ;").replace(/<br>=/g, "<br> =").replace(/<br>\^/g, "<br> ^").replace(/<i rel="image">(.*?)<\/i>/ig, "<img class='cm-image' src='$1' alt='loading...' \/>").replace(/\[img\](.*?)\[\/img\]/ig, "<img class='cm-image' src='$1' alt='loading...' \/>").replace(/<i rel="youtube">http:\/\/www\.youtube\.com\/embed\/(.*?)<\/i>/ig, "<iframe class='cm-youtube' src='http://www.youtube.com/embed/$1'><\/iframe>").replace(/<i rel="youtube">(http:\/\/youtu\.be\/|http:\/\/www\.youtube\.com\/watch\?v\=)(.*?)<\/i>/ig, "<iframe class='cm-youtube' src='http://www.youtube.com/embed/$2'><\/iframe>").replace(/\[youtube\]http:\/\/www\.youtube\.com\/embed\/(.*?)\[\/youtube\]/ig, "<iframe class='cm-youtube' src='http://www.youtube.com/embed/$1'><\/iframe>").replace(/\[youtube\](http:\/\/youtu\.be\/|http:\/\/www\.youtube\.com\/watch\?v\=)(.*?)\[\/youtube\]/ig, "<iframe class='cm-youtube' src='http://www.youtube.com/embed/$2'><\/iframe>").replace(/<i rel="code">(.*?)<\/i>/ig, "<code>$1<\/code>").replace(/<i rel="pre">(.*?)<\/i>/ig, "<pre>$1<\/pre>").replace(/<b rel="quote">(.*?)<\/b>/ig, "<blockquote>$1<\/blockquote>").replace(/\[code\](.*?)\[\/code\]/ig, "<code>$1<\/code>").replace(/\[pre\](.*?)\[\/pre\]/ig, "<pre>$1<\/pre>").replace(/\[blockquote\](.*?)\[\/blockquote\]/ig, "<blockquote>$1<\/blockquote>").replace(/&amp;feature=[0-9a-zA-Z-_]*/ig, "").replace(/\/s(640|1600)/g, "/s400").replace(c, " <img src='" + d + "' class='emosmile' alt='" + e + "' title='" + e + "' />"))})};
i(/\s:a/ig, "https://s13.postimg.org/otfpgpwyf/emoticon_001.png", ":a");
i(/\s:b/ig, "https://s13.postimg.org/cg2v9t79z/emoticon_002.png", ":b");
i(/\s:c/ig, "https://s13.postimg.org/sscwzjllj/emoticon_004.png", ":c");
i(/\s:d/ig, "https://s13.postimg.org/rela48mc7/emoticon_005.png", ":d");
i(/\s:e/ig, "https://s13.postimg.org/vozxztrfb/emoticon_006.png", ":e");
i(/\s:f/ig, "https://s13.postimg.org/4sfyri8lz/emoticon_007.png", ":f");
i(/\s:g/ig, "https://s13.postimg.org/ooby71pnb/emoticon_010.png", ":g");
i(/\s:h/ig, "https://s13.postimg.org/a6eqz1yc7/emoticon_012.png", ":h");
i(/\s:i/ig, "https://s13.postimg.org/j2pj2zoyf/emoticon_017.png", ":i");
i(/\s:j/ig, "https://s13.postimg.org/fx4xcs6c7/emoticon_028.png", ":j");
i(/\s:k/ig, "https://s13.postimg.org/73im9f8rb/emoticon_030.png", ":k");
i(/\s:l/ig, "https://s13.postimg.org/fztedczdj/emoticon_034.png", ":l");
i(/\s:m/ig, "https://s13.postimg.org/6tb3q2u53/emoticon_035.png", ":m");
i(/\s:n/ig, "https://s13.postimg.org/mg2d3g7x3/emoticon_047.png", ":n");
i(/\s:o/ig, "https://s13.postimg.org/xtowenifr/emoticon_059.png", ":o");
i(/\s:p/ig, "https://s13.postimg.org/joj3cu9ef/emoticon_074.png", ":p");
i(/\s:q/ig, "https://s13.postimg.org/oogjksf13/emoticon_076.png", ":q");
i(/\s:r/ig, "https://s13.postimg.org/rwl0xu1av/emoticon_081.png", ":r");
i(/\s:s/ig, "https://s13.postimg.org/cp51dh9g7/emoticon_083.png", ":s");
i(/\s:t/ig, "https://s13.postimg.org/4xobex5av/emoticon_087.png", ":t");
i(/\s:u/ig, "https://s13.postimg.org/lzlqur9jr/emoticon_104.png", ":u");
i(/\s:v/ig, "https://s13.postimg.org/v8nx4vifr/emoticon_110.png", ":v");
i(/\s:w/ig, "https://s13.postimg.org/qo1qpxyqf/emoticon_111.png", ":w");
i(/\s:x/ig, "https://s13.postimg.org/4ddvpz1g7/emoticon_115.png", ":x");
i(/\s:y/ig, "https://s13.postimg.org/m4pi4fguv/emoticon_117.png", ":y");
i(/\s:z/ig, "https://s13.postimg.org/6ki4dw6qf/emoticon_118.png", ":z");
i(/\s=a/ig, "https://s13.postimg.org/kfgewd15j/emoticon_120.png", "=a");
i(/\s=b/ig, "https://s13.postimg.org/4ihmzn8rb/emoticon_124.png", "=b");
i(/\s=c/ig, "https://s13.postimg.org/z17fklxxz/emoticon_132.png", "=c");
i(/\s=d/ig, "https://s13.postimg.org/a97tddgrb/emoticon_149.png", "=d");
i(/\s=e/ig, "https://s13.postimg.org/jv5z7exav/emoticon_151.png", "=e");
i(/\s=f/ig, "https://s13.postimg.org/6saco572v/emoticon_159.png", "=f");
i(/\s=g/ig, "https://s13.postimg.org/chql8gd93/emoticon_160.png", "=g");
i(/\s=h/ig, "https://s13.postimg.org/t6s14d9uf/emoticon_161.png", "=h");
i(/\s=i/ig, "https://s13.postimg.org/8b5qt4dnb/emoticon_173.png", "=i");
i(/\s=j/ig, "https://s13.postimg.org/pppz1eas7/emoticon_174.png", "=j");
i(/\s=k/ig, "https://s13.postimg.org/hlhuwnod3/emoticon_181.png", "=k");
i(/\s=l/ig, "https://s13.postimg.org/fuytv66tz/emoticon_186.png", "=l");
i(/\s=m/ig, "https://s13.postimg.org/6bp51pjbr/emoticon_187.png", "=m");
i(/\s=n/ig, "https://s13.postimg.org/3vnbnv193/emoticon_188.png", "=n");
i(/\s=o/ig, "https://s13.postimg.org/u5czkeck7/emoticon_189.png", "=o");
i(/\s=p/ig, "https://s13.postimg.org/g076il3iv/emoticon_191.png", "=p");
i(/\s=q/ig, "https://s13.postimg.org/l04mqj95j/emoticon_192.png", "=q");
i(/\s=r/ig, "https://s13.postimg.org/ik2tcor2v/emoticon_193.png", "=r");
    };
    return function (a) {
        b(a)
    }
})();
//]]>
