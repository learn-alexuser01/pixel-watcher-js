/**
 * Morgan Reece Phillips @linuxpoetry mrrrgn.com @2014
 *
 * Hooks any video element into an active webcam.
 * 
 * Example: 
 *  <video id="vid-1" autoplay></video>
 *  <script>
 *    // Feed it my webcam data
 *    new WebCam(document.getElementById("vid-1"));
 *  </script>
 */
var WebCam = function (videoObject) {
    var self = this;

    self.videoSource = videoObject;
    self.webcamInitialized = false;

    self.webcamError = function(e) {
    console.error('Webcam error!', e);
    };

    if (navigator.getUserMedia) {
      navigator.getUserMedia({audio: false, video: true}, function(stream) {
        self.webcamInitialized = true;
        self.videoSource.src = stream
      }, self.webcamError);
    } else if (navigator.webkitGetUserMedia) {
      navigator.webkitGetUserMedia({audio:false, video:true}, function(stream) {
        self.webcamInitialized = true;
        self.videoSource.src = window.webkitURL.createObjectURL(stream);
      }, self.webcamError);
    }
}
