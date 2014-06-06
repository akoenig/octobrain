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

var fs = require('fs');

/**
 * The JSON-based key-value-store.
 * 
 * @param (String) file The key-value-store file.
 *
 */
function Store (file) {
    this.$$file = file;
}

/**
 * @private
 * 
 * An internal method for reading the content of the store.
 * 
 * @param (Function) callback Node style callback
 *
 */
Store.prototype.$$read = function $$read (callback) {
    function onRead (err, data) {
        if (err) {
            return callback(err);
        }
        
        try {
            data = JSON.parse(data);
        } catch (e) {
            return callback(new Error('Error while parsing the store file. Did you manipulate it?'));
        }
        
        callback(null, data);
    }
    
    fs.readFile(this.$$file, onRead);
};

/**
 * @private
 * 
 * An internal method for writing the content of the store.
 * 
 * @param (Object) data The data to be written.
 * @param (Function) callback Node style callback
 *
 */
Store.prototype.$$write = function $$write (data, callback) {
    data = JSON.stringify(data);
    
    fs.writeFile(this.$$file, data, callback);
};

/**
* Saves a new entry.
* 
* @param (String) key The identifier
* @param (String) value
* @param (function) callback Node style callback
*
*/
Store.prototype.put = function put (key, value, callback) {
    var self = this;

    function onLoad (err, data) {
        if (err && 34 !== err.errno) {
            return callback(err);
        }
        
        data = data || {};
        
        if (data[key]) {
            return callback(new Error('This entry exists already.'));
        }

        data[key] = value;
        
        self.$$write(data, callback);
    }

    this.$$read(onLoad);
};

/**
* @private
* 
* Returns a value from the store.
* 
* @param (String) key
* @param (Function) callback Node style callback
*
*/
Store.prototype.get = function get (key, callback) {
    
    function onLoad (err, data) {
        if (err) {
            return callback(err);
        }
        
        callback(null, data[key]);
    }
    
    this.$$read(onLoad);
};

/**
 * Instantiate a new store object.
 * 
 * @param (String) file The key-value-store file.
 * 
 */
exports.create = function create (file) {
    return new Store(file);
};