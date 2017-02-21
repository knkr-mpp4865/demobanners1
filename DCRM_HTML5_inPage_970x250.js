// JavaScript Document
// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google
//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var dcLogo;
var bgExit;
var isFirstPlay = false;
window.onload = function(){
	scrollTrap();
if (Enabler.isInitialized()) {
enablerInitHandler();
} else {
Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
}
if (Enabler.isPageLoaded()){
pageLoadedHandler();

} 
else {
Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,pageLoadedHandler);
}
}
enablerInitHandler = function(e) {
if(Enabler.isVisible()) {
init();
} else {
Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
} 
}

var creative = {};

/**
 * Window onload handler.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Initializes the ad components
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('videoPlay');
  creative.dom.exit = document.getElementById('exit');
}

/**
 * Ad initialisation.
 */
function init() {

  addListeners();

  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.exit.style.display = "block";
  showYTPlayer0('feature');
 }

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  if (creative.dom.ytplayer0 != null) {
    creative.dom.ytplayer0.pause();
	
    // creative.dom.ytplayer0.seek(0);
  }
  
}
/**
 * Shows the YT player.
 */

function showYTPlayer0(containerId) {
	
  if (!creative.dom.ytplayer0) {
    creative.ytplayer0Ended = false;
    creative.dom.ytplayer0 = document.createElement('gwd-youtube');
    var ytp = creative.dom.ytplayer0;
    ytp.setAttribute('id', 'ytp-0');
    ytp.setAttribute('video-url', 'https://www.youtube.com/watch?v=u2uLFSsEK_Y');
    ytp.setAttribute('preview-duration', '10'); // Only for &#39;preview&#39; autoplay mode.
    ytp.setAttribute('muted', 'true');
	
	
	
    // Adformat parameter for Mastheads.
    ytp.setAttribute('adformat', '1_8');
	 ytp.setAttribute('height', '200px');
    ytp.setAttribute('controls', 'autohide'); // none, show, autohide.
    document.getElementById(containerId).appendChild(ytp);
	
    ytp.addEventListener('playpressed', function() {
      if (ytp.a.isMuted()) {
		 ytp.toggleMute();
		
      }
	  
      if (creative.ytplayer0Ended) {
        creative.ytplayer0Ended = false;
        Enabler.counter('YTP 0 replay', true);
      }
      Enabler.counter('YTP 0 play pressed', true);
    }, false);
    ytp.addEventListener('paused', function() {
      Enabler.counter('YTP 0 paused', true);
    }, false);
    ytp.addEventListener('ended', function() {
      Enabler.counter('YTP 0 ended', true);
      creative.ytplayer0Ended = true;
    }, false);
    ytp.addEventListener('viewed0percent', function() {
      Enabler.counter('YTP 0 viewed 0%');
    }, false);
    ytp.addEventListener('viewed25percent', function() {
      Enabler.counter('YTP 0 viewed 25%');
    }, false);
    ytp.addEventListener('viewed50percent', function() {
      Enabler.counter('YTP 0 viewed 50%');
    }, false);
    ytp.addEventListener('viewed75percent', function() {
      Enabler.counter('YTP 0 viewed 75%');
    }, false);
    ytp.addEventListener('viewed100percent', function() {
      Enabler.counter('YTP 0 viewed 100%');
    }, false);
    ytp.addEventListener('previewed0percent', function() {
      Enabler.counter('YTP 0 previewed 0%');
      if (!ytp.a.isMuted()) {
		 ytp.toggleMute();
		
		 }
    }, false);
    ytp.addEventListener('previewed25percent', function() {
      Enabler.counter('YTP 0 previewed 25%');
    }, false);
    ytp.addEventListener('previewed50percent', function() {
      Enabler.counter('YTP 0 previewed 50%');
    }, false);
    ytp.addEventListener('previewed75percent', function() {
      Enabler.counter('YTP 0 previewed 75%');
    }, false);
    ytp.addEventListener('previewed100percent', function() {
      Enabler.counter('YTP 0 previewed 100%');
    }, false);
  }
  else {
    creative.dom.ytplayer0.style.display = 'block';
  }
}

/**
 * Removes the YTPlayer from the DOM.
 */
function hideYTPlayer0(containerId) {
  if (creative.dom.ytplayer0 != null) {
    creative.dom.ytplayer0.pause();
    creative.dom.ytplayer0.style.display = 'none';
	}
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);