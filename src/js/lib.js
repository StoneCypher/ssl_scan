
const ssl_c = require('ssl-checker');



const vet      = async url => ssl_c(url).then(console.log),
      get_list = async cfg => cfg.targets,
      vet_list = async cfg => (await get_list(cfg)).map(vet);



module.exports = {
  vet,
  get_list,
  vet_list
};
