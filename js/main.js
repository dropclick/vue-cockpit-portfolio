var cockpitUrl = location.hostname == 'localhost' ? 'http://localhost:8000/admin' : location.protocol + '//' + location.hostname + location.pathname + 'admin';
var apiKey = 'fcfaf298e1e7ba680da3ca07af3dda';
var selector = '#app';

vueCockpit.init(cockpitUrl, apiKey, selector);