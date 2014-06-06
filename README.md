# octobrain

If you live in the shell most of the time, then it is very annoying to switch to the browser in order to open up a GitHub project page. It is a lot to type, right? `octobrain` is your little friend to help you in this regard. This friendly helper allows you to save aliases for repos and access them via your command line interpreter. Want to test-drive? Cool!

## Installation

Install with [npm](https://npmjs.org/package/octobrain) globally.

    npm install -g octobrain

## Usage

Create an alias (the aliases will be saved in ~/.octobrain)

    octobrain npma npmawesome/npmawesome.com

access the repo page (will open the GitHub `code` view in your browser)

    octobrain npma

or open up a specific issue (will open the issue #10 of the respective repo)

    octobrain npma -i 10

## All the options

    usage:
    
        octobrain alias [namespace] [options]
    
    options: 
    
        -i, --issue: Open up a specific issue in the browser. 
        -l, --list: Lists all saved aliases.
        -h, --help: Print this usage information.
        -v, --version: Version information
    
    usage examples: 
    
        octobrain [alias] [namespace] 
            Will create an alias of the given GitHub namespace (e.g. "octobrain im akoenig/imacss").
    
        octobrain [alias] 
            Will open the GitHub project page in your default browser (e.g. "octobrain im").
    
        octobrain [alias] --issue 10 
            Will open the issue 10 (e.g. "octobrain im -i 10").

## Changelog

See the [HISTORY.md](https://github.com/akoenig/imacss/blob/master/HISTORY.md) for further information.

## Author

Copyright 2014, [André König](http://andrekoenig.info) (andre.koenig@posteo.de)