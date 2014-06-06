/*
 * octobrain
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var https = require('https');
var t = require('./utilities').t;

var GH_BASE   = 'https://github.com/{namespace}/';
var GH_ISSUES = GH_BASE + 'issues/{id}';

/**
 * Returns the GitHub URI to the code page.
 * 
 * @param (String) namespace The GitHub namespace of the requested code page.
 *
 */
exports.code = function code (namespace) {
    var data = {
        namespace: namespace
    };

    if (data.namespace) {
        return t(GH_BASE, data);
    }
};

/**
 * Returns the GitHub URI to the issue page.
 * 
 * @param (String) namespace The GitHub namespace of the requested issue page.
 * @param (Number) id The respective issue id (optional).
 *
 */
exports.issues = function issues (namespace, id) {
    var data = {
        namespace: namespace,
        id: id || ''
    };
    
    if (data.namespace) {
        return t(GH_ISSUES, data);
    }
};

/**
 * Checks if the given GitHub namespace is valid.
 *
 * @param (String) namespace The GitHub namespace that should be checked.
 * @param (Function) callback Node style callback
 *
 */
exports.exists = function exists (namespace, callback) {
    var errMsg = 'Invalid GitHub namespace.';
    var uri;
    
    if (!~namespace.indexOf('/')) {
        process.nextTick(function onTick () {
            return callback(new Error(errMsg));
        });
    }
    
    uri = exports.code(namespace);

    https.get(uri, function onResponse (res) {
        if (200 !== res.statusCode) {
            return callback(new Error(errMsg));
        }
        
        callback(null);
    }).on('error', callback);
};