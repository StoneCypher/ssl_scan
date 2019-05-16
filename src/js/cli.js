#!/usr/bin/env node

const fs      = require('fs');

const arghelp = require('./cli_arg_help.js'),
      cli     = require('command-line-args')(arghelp.args),
      clu     = require('command-line-usage'),
      lib     = require('./lib.js'),

      chalk   = require('chalk');



const def_cfg = { targets   : ['www.microsoft.com', 'www.google.com', 'www.amazon.com'],
                  warn_days : 14,
                  color     : true,
                  output    : 'json' },

      cfg_tgt = cli.config || './.ssl_scan.json',
      cfg     = fs.existsSync(cfg_tgt)? JSON.parse(fs.readFileSync(cfg_tgt)) : def_cfg;





const fdays = (days, width) => days.toString().padStart(width);






function table(r) {

  console.log('days url\n---- ---');

  r.map(ri =>
    console.log(`${fdays(ri.days_remaining, 4)} ${ri.url}`)
  );

}






function color_table(r) {

  console.log('\ndays url\n---- ---');

  r.map(ri => {

    let acceptable = ri.days_remaining > cfg.warn_days,
        url_color  = acceptable? chalk.cyan : chalk.red,
        day_color  = acceptable? chalk.whiteBright : chalk.red;

    console.log(`${day_color(fdays(ri.days_remaining, 4))} ${chalk.underline(url_color(ri.url))}`);

  });

  console.log('');

}





const reporters = {

  "table": r => { console.log('\ndays url\n---- ---');
                  r.map(ri => console.log(`${fdays(ri.days_remaining, 4)} ${ri.url}`));
                  console.log(''); },

  "color table": color_table

}





async function run() {

  if (cli.help !== undefined) {  // because it's null in 5, sigh

    console.log(clu(arghelp.sections));

  } else {

    let results,
        report = reporters[cli.reporter] || reporters[cfg.reporter] || reporters['color table'];

    results = cli.once
      ? await lib.vet(cli.once, results).catch(e => console.log(`once error: ${e}`))
      : await lib.vet_list(cfg, results).catch(e => console.log(`non-once error: ${e}`));

    function result_sort(l, r) {
      if (l.days_remaining > r.days_remaining) { return -1; }  // yes, these are reverse sorted
      if (l.days_remaining < r.days_remaining) { return  1; }
      if (l.url < r.url) { return -1; }                        // ... yes, these are forward sorted
      if (l.url > r.url) { return  1; }
      return 0;
    }

    Promise.all(results).then(r => report(r.sort(result_sort)) );

  }

}

run();
