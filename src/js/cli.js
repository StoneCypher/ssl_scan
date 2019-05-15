#!/usr/bin/env node

const arghelp = require('./cli_arg_help.js'),
      cli     = require('command-line-args')(arghelp.args),
      clu     = require('command-line-usage'),
      lib     = require('./lib.js');



if (cli.help !== undefined) {  // because it's null in 5, sigh

  console.log(clu(arghelp.sections));

} else {

  if (cli.once) {
  	lib.vet(cli.once);
  } else {
  	lib.vet_list();
  }

}