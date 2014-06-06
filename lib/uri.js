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

var t = require('./utilities').t;

var GH_BASE   = 'https://github.com/{namespace}/';
var GH_ISSUES = GH_BASE + 'issues/{id}';
var GH_PR     = GH_BASE + 'pulls/{id}';

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
 * Returns the GitHub URI to the pull request page.
 * 
 * @param (String) namespace The GitHub namespace of the requested PR page.
 * @param (Number) id The respective pull request id (optional).
 *
 */
exports.pr = function pr (namespace, id) {
    var data = {
        namespace: namespace,
        id: id || ''
    };
    
    if (data.namespace) {
        return t(GH_PR, data);
    }
};