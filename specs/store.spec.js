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
var path = require('path');
var rimraf = require('rimraf');

var Store = require('../lib/store');

var tmp = path.join(__dirname, '.tmp');
var file = path.join(tmp, 'test.json');

describe('The store module', function () {
    beforeEach(function (done) {
        fs.mkdir(tmp, done);
    });
    
    afterEach(function (done) {
        rimraf(tmp, done)
    });
    
    it('should be able to put an entry to the store', function (done) {
        var store = Store.create(file);
        
        store.put('foo', 'bar', function (err) {
            expect(err).toBeNull();
            
            done();
        });
    });
    
    it('should be able to get an entry from the store', function (done) {
        var store = Store.create(file);
        var key = 'foo';
        var value = 'bar';

        store.put(key, value, function (err) {
            expect(err).toBeNull();
            
            store.get(key, function (err, v) {
                expect(err).toBeNull();

                expect(v).toBe(value);
                
                done();
            });
        });
    });
});