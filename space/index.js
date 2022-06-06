if (navigator.userAgent.match(/OS X 10_([789]|1[01234])/)) {
    console.log("It's M1")
} else {
    console.log("No, it's not M1")
}

var w = document.createElement("canvas").getContext("webgl");
var d = w.getExtension('WEBGL_debug_renderer_info');
var g = d && w.getParameter(d.UNMASKED_RENDERER_WEBGL) || "";
if (g.match(/Apple/) && !g.match(/Apple GPU/)) {
   console.log("definitely arm")
} else {console.log("not definitely")}

if (w.getSupportedExtensions().indexOf("WEBGL_compressed_texture_s3tc_srgb") == -1) {
    console.log("probably arm")
  } else {console.log("not probably")}