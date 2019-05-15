#!/usr/bin/env node

const arghelp = require('./cli_arg_help.js'),
      cli     = require('command-line-args')(arghelp.args),
      clu     = require('command-line-usage'),
      lib     = require('./lib.js');



const def_cfg = { targets: ['www.microsoft.com', 'www.google.com', 'www.amazon.com'],
                  color:   true,
                  output:  'json' },

      cfg_tgt = cli.config || './.ssl_scan.json',
      cfg     = require('fs').existsSync(cfg_tgt)? require('fs').readFileSync(cfg_tgt) : def_cfg;



if (cli.help !== undefined) {  // because it's null in 5, sigh

  console.log(clu(arghelp.sections));

} else {

  if (cli.once) {
  	lib.vet(cli.once);
  } else {
  	lib.vet_list(cfg);
  }

}