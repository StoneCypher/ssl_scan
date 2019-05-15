
const ssl_c = require('ssl-checker');



const vet      = url => console.log(`todo: test ${url}`),
      get_list = ()  => [ 'a', 'b', 'c' ],
      vet_list = ()  => get_list().map(vet);



module.exports = {
  vet,
  get_list,
  vet_list
};
