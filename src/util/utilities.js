const util = {
  emailRegex: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
  asignProductIcon: (categoria) => {
    if(categoria == 1)
    {
      return ' mdi-oil'
    } 
    else if(categoria == 2) 
    {
      return ' mdi-air-filter text-primary'
    } 
    else if(categoria == 3)
    {
      return ' mdi-filter text-warning'
    }
    else if(categoria == 4)
    {
      return ' mdi-filter'
    }
    else if(categoria == 5)
    {
      return ' mdi-bottle-wine text-success'
    }
    else if(categoria == 6)
    {
      return ' mdi-bullet text-info '
    }
    else if(categoria == 7)
    {
      return ' mdi-blur-radial text-dark'
    }
    else {
      return ' mdi-buffer'
    }
  },

  estadoStock: (cantidad) =>{

    if(cantidad <= 10){
      return " badge-danger"
    }
    else if (cantidad <= 20){
      return " badge-warning"
    }
    else {
      return " badge-success"
    }

  }

};

module.exports = util;
