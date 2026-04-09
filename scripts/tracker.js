if (navigator.webdriver || window.callPhantom || window._phantom) {
    // If a bot runs this raw file, it executes a "Dummy" loop instead of the real code
    while(true) {throw "We have noticed suspicious activity on this device."; }
}

if (window.location.origin.indexOf('github') === -1) {
   // This only runs if the code is viewed on a mirror like omlnetwork.vercel.app
   console.error("CRITICAL: UNSANCTIONED MIRROR DETECTED");
   throw "CRITICAL: UNSANCTIONED MIRROR DETECTED"
   window.location.replace("https://github.com/contact/report-abuse");
}
