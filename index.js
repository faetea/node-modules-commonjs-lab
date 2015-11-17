'use strict';

// to import modules registered with npm, give a name
// to import our own files, give relative path

var ourModule = require('./module');

ourModule.name = "Coriander";
ourModule.greeting();
