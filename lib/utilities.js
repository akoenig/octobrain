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

/*
 * A little template engine for inserting data into strings with placeholders.
 *
 * @param (String) str The string with placeholders.
 * @param (Object) data The hashmap for replacing the placeholders with actual data.
 *
 */
exports.t = function t (str, data) {
    var p;
    
    for (p in data) {
       str = str.replace(new RegExp('{'+p+'}','g'), data[p]);
    }
    
    return str;
};

/**
 * Returns the users home directory.
 *
 * @returns (String) The path to the home directory.
 */
exports.getUsersHome = function getUsersHome () {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
};