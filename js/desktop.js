$(function(){
    var tools=[
        {name:'灰色轨迹导航',url:'https://oiio-nav.pages.dev/',icon:'./img/imageres_2.ico'},
        {name:'newtab',url:'https://newtab-uqg.pages.dev/',icon:'./img/k.webp'},
        {name:'枳晓个人项目主页',url:'https://skysite.rainsky.cc.cd/',icon:'./img/a.webp'},
        {name:'skyblog',url:'https://skyblog-dju.pages.dev/',icon:'./img/j.webp'},
        {name:'图床',url:'https://imgbed.stimi.cc.cd/',icon:'./img/aigcpage.png'},
        {name:'HTML渲染器',url:'https://ai2html.rainsky.cc.cd/',icon:'./img/firsthometop.png'},
        {name:'X-主页',url:'https://so.13145219.xyz/',icon:'./img/zaobao.jpg'},
        {name:'myhub',url:'https://zhixiaotx.github.io/myhub/',icon:'./img/c.webp'},
        {name:'药研导航3合1',url:'https://dh-drug.wasmer.app/',icon:'./img/d.webp'},
        {name:'aurora-tab',url:'https://aurora-tab.rainsky.cc.cd/',icon:'./img/website-allpage.jpg'},
        {name:'ai-navigator',url:'https://ai-navigator.wasmer.app/',icon:'./img/luyaohome.jpg'},
        {name:'wechatformatter-排版',url:'https://wechatformatter.pages.dev/',icon:'./img/bzstudy.png'},
        {name:'墨滴排版',url:'https://editor.mdnice.com/',icon:'./img/luyaohonepage.png'},
        {name:'魔法1',url:'https://szyyds.13145219.xyz/login',icon:'./img/everyday60s.jpg'},
        {name:'魔法2',url:'https://jd.rainsky.cc.cd/login',icon:'./img/iphone-search.jpg'},
        {name:'工具箱',url:'https://tool.browser.qq.com/',icon:'./img/qbtool-latest.png'},
        {name:'drugsitenav',url:'https://drugsitenav.pages.dev/',icon:'./img/status.png'},
        {name:'drugrd',url:'https://drugnavs.pages.dev/',icon:'./img/1girl.jpg'},
        {name:'allfordrug',url:'https://allfordrug.pages.dev/',icon:'./img/2girl.jpg'},
        {name:'druggogogo',url:'https://drugnav.pages.dev/',icon:'./img/g.webp'},
        {name:'drug123',url:'https://drugw.netlify.app/',icon:'./img/yikmxbw.jpg'},
        {name:'drugsites-canbigou',url:'https://drugsites.pages.dev/',icon:'./img/h.webp'},
        {name:'jsonlint工具箱',url:'https://jsonlint-f1q.pages.dev/',icon:'./img/yuanjueyingshi.png'},
        {name:'nav-site（泫然）',url:'https://nav-site.rainsky.cc.cd/#/',icon:'./img/fxys.jpg'},
        {name:'webdesk-pro',url:'https://webdesk-pro.13145219.xyz/',icon:'./img/l.webp'},
        {name:'pintree书签',url:'https://pro-pintree.vercel.de5.net//',icon:'./img/dianshitv.jpg'},
        {name:'网盘导航',url:'https://pan.vercel.de5.net/',icon:'./img/music.jpg'},
        {name:'xiaoshuai-site',url:'https://zxsla.wasmer.app/xiaoshuai-navigation.html',icon:'./img/music1.jpg'},
        {name:'xiaoshuai-xydh',url:'https://zxsla.wasmer.app/ilinks-navigation.html',icon:'./img/music3.jpg'},
        {name:'noisedh',url:'https://zxsla.wasmer.app/noise-navigation.html',icon:'./img/qingyinyueclub.png'},
        {name:'全网ai合集',url:'https://zxsla.wasmer.app/ai-navigation-%E5%85%A8%E7%BD%91AI%E5%90%88%E9%9B%86-%E4%B8%83%E5%AE%9D%E6%95%B4%E7%90%86.html',icon:'./img/music5.jpg'},
        {name:'音乐自建',url:'https://zxsla.wasmer.app/get/',icon:'./img/music2.jpg'},
        {name:'ziyuandh',url:'https://ziyuandh.rainsky.cc.cd/',icon:'./img/music4.jpg'},
        {name:'markhub',url:'https://markhub-eb6.pages.dev/,icon:'./img/bilibili.png'},
        {name:'Rainbow-泫然导航',url:'https://xydh.fun/Rainbow',icon:'./img/hy123.jpg'},
        {name:'home-imsyy',url:'https://home.stimi.cc.cd/',icon:'./img/rjyspan.png'},
        {name:'lib导航',url:'https://lib-6z1.pages.dev/',icon:'./img/imageres_5.ico'},
        {name:'shuyi',url:'https://shuyi.pages.dev/',icon:'./img/newpage.png'},
        {name:'zxsla',url:'https://zxsla.wasmer.app/',icon:'./img/luyaotx.png'},
        {name:'navit-前后端开发',url:'https://navit.pages.dev/',icon:'./img/xiaobaihometop.png'},
        {name:'前端导航',url:'https://next-web-nav.vercel.de5.net/',icon:'./img/3dys.jpg'},
        {name:'aigc',url:'https://aigcnav-ev7.pages.dev/',icon:'./img/xiaobaitimehome.png'},
        {name:'小白Win办公桌面1',url:'https://xiaobai-all-webwindows.vercel.app/',icon:'./img/hy123.jpg'},
        {name:'小白Win办公桌面2',url:'https://xiaobai-simple-webwindown.vercel.app/',icon:'./img/rjyspan.png'},
        
        

    ]
    for(var i in tools){
        var tool=tools[i]
        var item="<li class='pc-icon desktoptools' data='"+JSON.stringify(tool)+"'>"+
        '<img class="mypc" src="'+tool.icon+'" />'+
        '<div>'+tool.name+'</div>'+
        '</li>';
        $('.desktop-list').append(item)
    }

   
    $('.desktoptools').click(function(){
        var data =JSON.parse($(this).attr('data'))
       // $('.right-top img').eq(0).click()
        layer.open({
            type: 2,
            title: data.name,
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['88%', '95%'],
            content: data.url
          });
    })



})
