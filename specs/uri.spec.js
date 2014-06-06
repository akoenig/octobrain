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

var uri = require('../lib/uri');

describe('The URIs module', function () {

    it('should return a GitHub code URI for a given namespace', function (done) {
        var namespace = 'akoenig/octobrain';
        var expected = 'https://github.com/akoenig/octobrain/';
        
        expect(uri.code(namespace)).toBe(expected);
        
        done();
    });
    
    it('should return undefined if no namespace has been defined for a GitHub code URI', function (done) {
       
        expect(uri.code()).toBeUndefined();
        
        done();
    });
    
    it('should return the GitHub issue URI for a given namespace', function (done) {
        var namespace = 'akoenig/octobrain';
        var expected = 'https://github.com/akoenig/octobrain/issues/';
        
        expect(uri.issues(namespace)).toBe(expected);
        
        done();
    });
    
    it('should return the GitHub issue URI for a given namespace and issue ID', function (done) {
        var namespace = 'akoenig/octobrain';
        var id = '1';
        var expected = 'https://github.com/akoenig/octobrain/issues/1';

        expect(uri.issues(namespace, id)).toBe(expected);
        
        done();
    });
    
   it('should return undefined if no namespace has been defined for a GitHub issue URI', function (done) {
      
       expect(uri.issues()).toBeUndefined();
       
       done();
   });
});