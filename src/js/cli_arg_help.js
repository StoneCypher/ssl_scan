
const args = [

  { name: "help", alias: "h",                                                  description: "Print this help text" },
  { name: "add",  alias: "a", type: String,  typelabel: '{underline address}', description: "Add a URL to the persistent check list" },
  { name: "once", alias: "o", type: String,  typelabel: '{underline address}', description: "Vet just one URL" }

];





const sections = [

  { header: 'ssl_scan', content: '   {underline ssl_scan} can check your servers\' ssl certificates, looking for things which are out of date, and warn you if a certificate is about to expire.' },
  { header: 'Options',   optionList: args },

  { header: 'Examples',  content: [
    { desc: '{bold Basic usage} - scan {underline https://www.google.com/} one time',
      example: '$ ssl_scan --once https://www.google.com/' },
    { desc: '{bold Add persistent} - add {underline https://www.microsoft.com/} to the persistent scan list',
      example: '$ ssl_scan --add https://www.microsoft.com/' },
    { desc: '{bold Scan} - scan the persistent scan list',
      example: '$ ssl_scan' },
    { desc: '{bold Remove persistent} - remove {underline https://www.microsoft.com/} from the persistent scan list',
      example: '$ ssl_scan --remove https://www.microsoft.com/' }
  ] },

  { header: 'Reference', content: 'Find reference and a bug tracker at the {bold ssl_scan} webpage, {underline {cyan https://github.com/StoneCypher/ssl_scan/}}' }

];





module.exports = {

  args,
  sections

};
