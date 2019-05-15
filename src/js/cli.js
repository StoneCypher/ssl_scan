#!/usr/bin/env node

const arghelp = require('./cli_arg_help.js'),
      cli     = require('command-line-args')(arghelp.args),
      clu     = require('command-line-usage'),
      ssl_c   = require('ssl-checker');



if (cli.help !== undefined) {  // because it's null in 5, sigh

  console.log(clu(arghelp.sections));

} else {



}