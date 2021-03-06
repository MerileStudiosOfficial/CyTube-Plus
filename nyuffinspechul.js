
with (typeof __commandLineAPI !== 'undefined' ? __commandLineAPI : { __proto__: null }) {
/*
** One shot for various scripts that don't need repeated
*/

(()=>{ if(CLIENT.runOnce){return}CLIENT.runOnce=true;
socket.on("changeMedia",function(){
   $('#currenttitle').html(String().concat($('#currenttitle').html().split("Currently Playing: ").pop()," <span id='currentblame'>via ",$(".pluid-"+PL_CURRENT).data("blame"),"</span>"));

   document.title = PAGETITLE = String().concat(decodeURIComponent('%E2%96%B6')," - ",CHANNEL.name,': ',$(".pluid-"+PL_CURRENT).data('media')["title"],' via ',$(".pluid-"+PL_CURRENT).data('blame'));

});

$('#currenttitle').html($('#currenttitle').html().split("Currently Playing: ").pop());

$("<button>").addClass("btn btn-default btn-sm").text("Toggle Video").on("click", ()=>{if($('a[onClick*="unremoveVideo"]').length>0){$('a[onClick*="removeVideo"]').click();}else{$('a[onclick*="removeUntilNext"]').click();}}).prependTo('#videocontrols');

$('#leftcontrols').prepend('<button title="" class="btn btn-default btn-sm">Check it out</button>');
if(CLIENT.rank>2){$('button:contains("Check it out")').attr('onclick','$("#cs-chat_antiflood").click()');}
else{$('button:contains("Check it out")').attr('onclick','location.href="http://www.nfl.com/";');}
})();




/*!
**|   Xaekai's Sequenced Module Loader
**|
**|  All code written by Xaekai ? except where otherwise noted.
**|  Copyright 2014-2016 All Rights Reserved
**|
**@preserve
*/

// -- Channel Namespace --
if (!this[CHANNEL.name])
    this[CHANNEL.name] = {};

// -- Channel Favicon --
if (!this[CHANNEL.name].favicon) {
    this[CHANNEL.name].favicon = $('<link/>')
        .prop('id', 'favicon')
        .attr('rel', 'shortcut icon')
        .attr('type', 'image/png')
        .attr('sizes', '64x64')
        .attr('href', 'http://i.imgur.com/DmMh2O9.png')
        .appendTo('head');
}

// -- Module Options
CLIENT.thumbnail_scanner=true;  // Short circuit thumbnailer
window[CHANNEL.name].modulesOptions = {
    guest: {
        // -- Guest name assignment seed source
        assignGuestNamePostfix: "IP"   ,
        assignGuestNameTimeout: 180000 , 
    },
    emoteModal: {
        tableColumns        : 5     ,
        tableRows           : 4     ,
        tableSorted         : false ,
        separateNameColumns : false ,
        allowPersistent     : false ,
    },
    chatAvatar: {
        profileFallback     : false ,
        identiconFallback   : false ,
    },
    searches: {
        imdb                : true  ,
        kickass             : true  ,
        rotten              : true  ,
        urban               : true  ,
    },
    playlistEnhancer: { 
        moveReporting       : true  ,
        recentMedia         : true ,
    },
    userlist: { 
        scrutinize          : true  ,
        trustedHosts        : []
    }

};

// -- The Module Library
window[CHANNEL.name].sequenceList = {
    'audio':      { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_audiolib.js",              callback: true },
    'privmsg':    { active: 1, rank:  1, url: "https://resources.pink.horse/scripts/external_privmsg.js",               callback: true },
    'userlist':   { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_userlist_overrides.js",    callback: true },
    'remove':     { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_remove.js",                callback: true },
    'scroll':     { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_scroll.js",                callback: true },
    'repoll':     { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_repoll.js",                callback: true },
    'whispers':   { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_whispers.js",              callback: true },
    'notes':      { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_notes.js",                 callback: true },
    'color_chat': { active: 1, rank:  1, url: "https://resources.pink.horse/scripts/external_chat_color.js",            callback: true },
    'color_drop': { active: 1, rank:  3, url: "https://resources.pink.horse/scripts/external_color_selector.js",        callback: true },
    'control':    { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_controlpanel.js",          callback: true },

    'tabbing':    { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_extended_tab_complete.js", callback: true },
    'hotkeys':    { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_hotkeys.js",               callback: true },
    'playlist':   { active: 1, rank:  0, url: "https://resources.pink.horse/scripts/external_playlist.js",              callback: true },
    'alerts':     { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_alerts.js",                callback: true },
    'volume':     { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_volume.js",                callback: true },
    'webms':      { active: 1, rank: -1, url: "https://resources.pink.horse/scripts/external_webm_embedding.js",        callback: true },

    'csspad':     { active: !!localStorage[CHANNEL.name + "_pad_css_load"]
                             , rank: -1, url: "https://resources.pink.horse/scripts/external_devcss.js",                callback: true },

    'navhide':    { active: 1, rank: -1, url: "https://googledrive.com/host/0ByRxu6QFyA4sbTVXa1JPV3JicTA",              callback: true }, 
    'animbutton': { active: 1, rank: -1, url: "https://googledrive.com/host/0B4SJFbg0lbcWaDJfVWNpa2E2cXc",              callback: true },
    'navclock':   { active: 1, rank: -1, url: "https://rawgit.com/MerileStudiosOfficial/CyTube-Plus/master/nyuffinclock.js",              callback: true },

// New update to deploy: http://paste.pink.horse/bubumaseta.js
    'banners':    { active: 1, rank: -1, url: "https://googledrive.com/host/0B5VbuD1Jaw15Y1dWd1VGUlpzQUU",              callback: true },

};


window[CHANNEL.name].sequencePrev = window[CHANNEL.name].sequencePrev || "";
window[CHANNEL.name].sequenceState = window[CHANNEL.name].sequenceState || 0;
window[CHANNEL.name].sequenceIndex = Object.keys(window[CHANNEL.name].sequenceList);

window[CHANNEL.name].sequencerLoader = function (){
    // After first run we curry the previous modules callback
    // This is mainly used to reassign variables in modules/scripts that don't use module options
    if(window[CHANNEL.name].sequencePrev){
        setTimeout(window[CHANNEL.name].sequenceList[window[CHANNEL.name].sequencePrev].callback, 0);
        window[CHANNEL.name].sequencePrev = "";
    }

    if(window[CHANNEL.name].sequenceState >= window[CHANNEL.name].sequenceIndex.length){
        return (function(){ console.info("Xaekai's Script Sequencer: Loading Complete."); })();
    }

    var currKey = window[CHANNEL.name].sequenceIndex[window[CHANNEL.name].sequenceState];
    if(window[CHANNEL.name].sequenceState < window[CHANNEL.name].sequenceIndex.length){
        if(window[CHANNEL.name].sequenceList[currKey].active
            && window[CHANNEL.name].sequenceList[currKey].rank <= CLIENT.rank
        ){
            console.info("Xaekai's Script Sequencer: Loading " + currKey);
            window[CHANNEL.name].sequencePrev = currKey;
            window[CHANNEL.name].sequenceState++;
            $.getScript(window[CHANNEL.name].sequenceList[currKey].url, window[CHANNEL.name].sequencerLoader);
        } else {
            window[CHANNEL.name].sequenceState++;
            window[CHANNEL.name].sequencerLoader();
        }
    }
};window[CHANNEL.name].sequencerLoader();



/*
**  Xaekai's WIP emote transmuter
**
**/
$("#messagebuffer").unbind("click.transmote");
$("#messagebuffer").on("click.transmote","img.channel-emote",function(ev){
    function _snd(snd, vol) { snd.volume = vol; return snd; }
    switch($(this).attr("title")){


        case '/feel'     : $(this).attr('title',"/feelsgud").attr('src',"https://i.imgur.com/miFcyXz.png"); break;
        case '/feelsgud' : $(this).attr('title',"/feel").attr('src',"https://i.imgur.com/1MJdYMA.png"); break;

        case '/wakemeup'   : $(this).attr('title',"/cantwakeup").attr('src',"https://i.imgur.com/gAqA8PP.png"); break;
        case '/cantwakeup' : $(this).attr('title',"/wakemeup").attr('src',"https://i.imgur.com/rpFA4eT.png"); break;

        case '/go'     : $(this).attr('title',"/gigago").attr('src',"https://i.imgur.com/nA1oTnX.gif");
                        _snd(new Audio('https://www.myinstants.com/media/sounds/gal-o-sengen.mp3'), .7).play(); 
                        break;

        case '/gigago' : $(this).attr('title',"/go").attr('src',"https://i.imgur.com/aqhrV.gif"); break;
                        _snd(new Audio('https://www.myinstants.com/media/sounds/gal-o-sengen.mp3'), .7).play(); 
                        break;

     
        case '/homo'  : $(this).attr('title',"/homo2").attr('src',"https://i.imgur.com/Ns8g8lB.gif"); break;
        case '/homo2' : $(this).attr('title',"/homo").attr('src',"https://i.imgur.com/vaQn3RC.gif"); break;

        case '/neverever'        : $(this).attr('title',"/neverfuckingever").attr('src',"https://i.imgur.com/X8wgq2k.png"); break;
        case '/neverfuckingever' : $(this).attr('title',"/neverever").attr('src',"https://i.imgur.com/MJnWGHV.png"); break;

        case '/burd' : $(this).attr('title',"/burd2").attr('src',"https://i.imgur.com/Hp3ypPj.gif"); break;
        case '/burd2' : $(this).attr('title',"/burd3").attr('src',"https://i.imgur.com/jSlcr.gif"); break;
        case '/burd3' : $(this).attr('title',"/burd").attr('src',"http://i.imgur.com/O9ZKezB.gif"); break;

        case '/aniki' : $(this).attr('title',"/aniki").attr('src',"http://i.imgur.com/VRE07P7.png"); break;

        case '/mysides' : $(this).attr('title',"/mysides2").attr('src',"https://i.imgur.com/DtINozi.gif"); break;
        case '/mysides2' : $(this).attr('title',"/mysides").attr('src',"https://i.imgur.com/vETtK.png"); break;


        case '/chen'  : 
                        $(this).attr('title',"/chen2").attr('src',"https://i.imgur.com/TGHRo8W.gif"); 
                        _snd(new Audio('http://drowngaben.x10.mx/unused/bikehorn.ogg'), .4).play(); 
                        break;
        case '/chen2' : 
                        $(this).attr('title',"/chen3").attr('src',"https://i.imgur.com/MSoQrxX.gif"); 
                        _snd(new Audio('https://resources.pink.horse/sounds/trainhorn-k5la.ogg'), .4).play(); 
                        break;
        case '/chen3' :
                        $(this).attr('title',"/chen").attr('src',"https://i.imgur.com/j55EMQt.png"); 
                        _snd(new Audio('http://drowngaben.x10.mx/unused/bikehorn.ogg'), .4).play(); 
                        break; 

        
        case '/notbad'  : 
                        $(this).attr('title',"/john").attr('src',"https://i.imgur.com/LXaCgmO.png"); 
                        _snd(new Audio('https://www.myinstants.com/media/sounds/divorce1.mp3'), .85).play(); 
                        break;

        //AUDIO TEST!
        case '/!'               : _snd(new Audio('https://www.myinstants.com/media/sounds/metalgearsolid.mp3'),                .9).play(); break;
        case '/4u'              : _snd(new Audio('https://www.myinstants.com/media/sounds/bane-1.mp3'),                        .5).play(); break;
        case '/aesthetic'       : _snd(new Audio('https://www.myinstants.com/media/sounds/succ.mp3'),                          .4).play(); break;
        case '/aesthetic'       : _snd(new Audio('https://www.myinstants.com/media/sounds/succ.mp3'),                          .4).play(); break;
        case '/alarm'           : _snd(new Audio('https://www.myinstants.com/media/sounds/sirene_1.mp3'),                      .9).play(); break;
        case '/bestgames'             : _snd(new Audio('http://drowngaben.x10.mx/unused/gayniggas.mp3'),                      .33).play(); break;
        case '/birry'           : _snd(new Audio('http://soundboard.ass-we-can.com/static/music/BillyH/Like%20embarrassing%20me.mp3'),          .9).play(); break;
        case '/berd'            : _snd(new Audio('https://resources.pink.horse/sounds/berd.ogg'),                             .33).play(); break;
        case '/bomb'           : _snd(new Audio('https://www.myinstants.com/media/sounds/bomb2.mp3'),                          .7).play(); break;
        case '/chen4'           : _snd(new Audio('http://drowngaben.x10.mx/unused/bikehorn.ogg'),                              .4).play(); break;
        case '/deepdarkfantasy' : _snd(new Audio('https://www.myinstants.com/media/sounds/van-darkholme-says-fuck-you.mp3'),   .5).play(); break;
        case '/dio'             : _snd(new Audio('https://resources.pink.horse/sounds/v4c/dio.mp3'),                           .5).play(); break;
        case '/doit'            : _snd(new Audio('https://www.myinstants.com/media/sounds/do-it_2.mp3'),                       .3).play(); break;
        case '/doot'            : _snd(new Audio('http://drowngaben.x10.mx/unused/dootdoot.mp3'),                              .5).play(); break;
        case '/doomguy'         : _snd(new Audio('https://resources.pink.horse/sounds/doom.music.ogg'),        .5).play(); break;
        case '/duane'           : _snd(new Audio('https://www.myinstants.com/media/sounds/videoplayback-1-mp3cut_6.mp3'),      .7).play(); break;
        case '/duckgif'         : _snd(new Audio('https://www.myinstants.com/media/sounds/quack_5.mp3'),                       .9).play(); break;
        case '/eey'             : _snd(new Audio('https://www.myinstants.com/media/sounds/pa_1.mp3'),                          .9).play(); break;
        case '/fuckyou'             : _snd(new Audio('https://www.myinstants.com/media/sounds/dmc-fuck-you-1.mp3'),            .9).play(); break;
        case '/gaben'             : _snd(new Audio('https://www.myinstants.com/media/sounds/gaben.mp3'),                       .9).play(); break;
        case '/gigadoot'        : _snd(new Audio('http://drowngaben.x10.mx/unused/dootdoot.mp3'),                              .5).play(); break;
        case '/he'             : _snd(new Audio('https://www.myinstants.com/media/sounds/he_5.mp3'),                           .9).play(); break;
        case '/john'             : _snd(new Audio('https://www.myinstants.com/media/sounds/divorce1.mp3'),                     .5).play(); break;
        case '/jotaro'          : _snd(new Audio('https://www.myinstants.com/media/sounds/oraoraoraoraora-sound-effect.mp3'),  .5).play(); break;
        case '/kefka'             : _snd(new Audio('https://www.myinstants.com/media/sounds/kefkas-laugh.mp3'),                .5).play(); break;
        case '/nice2'           : _snd(new Audio('https://www.myinstants.com/media/sounds/joseph-joestar-nice.mp3'),           .9).play(); break;
        case '/no'              : _snd(new Audio('http://drowngaben.x10.mx/unused/no.mp3'),                                    .4).play(); break;
        case '/nogaems'              : _snd(new Audio('https://www.myinstants.com/media/sounds/videoplayback-2-mp3cut_2.mp3'), .7).play(); break;
        case '/noh'             : _snd(new Audio('https://www.myinstants.com/media/sounds/noh_1.mp3'),                        .33).play(); break;
        case '/objection'             : _snd(new Audio('https://www.myinstants.com/media/sounds/phoenix-objection.mp3'),       .3).play(); break;
        case '/percy'           : _snd(new Audio('https://www.myinstants.com/media/sounds/thomas-whistle.mp3'),                .5).play(); break;
        case '/pew'             : _snd(new Audio('https://www.myinstants.com/media/sounds/efectos-de-sonido-street-fight-ii-ryus-hadouken.mp3'),                    .9).play(); break;
        case '/push'            : _snd(new Audio('https://www.myinstants.com/media/sounds/bad-gay-porn-acting-4.mp3'),         .5).play(); break;
        case '/push2'           : _snd(new Audio('https://www.myinstants.com/media/sounds/bad-gay-porn-acting-4.mp3'),         .7).play(); break;
        case '/ree'             : _snd(new Audio('https://www.myinstants.com/media/sounds/reeeeeeeee.mp3'),                    .7).play(); break;
        case '/rekt'            : _snd(new Audio('https://www.myinstants.com/media/sounds/pistol_fire3.mp3'),                  .77).play(); break;
        case '/rekt2'           : _snd(new Audio('https://www.myinstants.com/media/sounds/mp5_smg-gunguru-703432894.mp3'),     .9).play(); break;
        case '/rekt3'           : _snd(new Audio('https://www.myinstants.com/media/sounds/rifle-shot-echo.mp3'),               .9).play(); break;
        case '/sanic'           : _snd(new Audio('https://www.myinstants.com/media/sounds/come-on-step-it-up.mp3'),            .9).play(); break;
        case '/shazbot'         : _snd(new Audio('https://www.myinstants.com/media/sounds/vgs-shazbot-mp3cut.mp3'),            .9).play(); break;
        case '/shieeet'         : _snd(new Audio('https://www.myinstants.com/media/sounds/shiet_1.mp3'),                       .66).play(); break;
        case '/swooce'          : _snd(new Audio('http://drowngaben.x10.mx/snd/swooce.mp3'),                                   .8).play(); break;
        case '/spurdo'          : _snd(new Audio('https://resources.pink.horse/sounds/fug.ogg'),                               .5).play(); break;
        case '/teedus'          : _snd(new Audio('https://www.myinstants.com/media/sounds/tidus-laugh-japanese.mp3'),          .9).play(); break; 
        case '/tidus'           : _snd(new Audio('https://www.myinstants.com/media/sounds/tiduss-laugh.mp3'),                  .9).play(); break; 
        case '/van'             : _snd(new Audio('https://www.myinstants.com/media/sounds/van-darkholme-says-fuck-you.mp3'),   .5).play(); break;
        case '/wooo'            : _snd(new Audio('https://www.myinstants.com/media/sounds/woo.mp3'),                           .9).play(); break;
        case '/wow2'            : _snd(new Audio('https://www.myinstants.com/media/sounds/wow-.mp3'),                          .9).play(); break;
        case '/wry'             : _snd(new Audio('https://www.myinstants.com/media/sounds/wryyyyyy.mp3'),                      .5).play(); break;
        case '/yee'             : _snd(new Audio('https://www.myinstants.com/media/sounds/combobreak.mp3'),                    .9).play(); break;
        case '/yes'             : _snd(new Audio('https://www.myinstants.com/media/sounds/m_6.mp3'),                           .9).play(); break; 
        case '/yoo'             : _snd(new Audio('https://www.myinstants.com/media/sounds/yoooooooooooooooooooooooooooohhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.mp3'),                    .9).play(); break;
    }

});





}
