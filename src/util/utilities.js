const date = new Date();

let amPm = (hora, minuto) => {
  if (hora < 12) {
    return "a.m.";
  } else if (hora == 12 && minuto == 0) {
    return "m";
  } else {
    return "p.m.";
  }
};

let convertMonth = () => {
  if (date.getMonth() + 1 < 10) {
    return `0${date.getMonth() + 1}`;
  }
  return date.getMonth() + 1;
};

let convertDay = () => {
  if (date.getDate() < 10) {
    return `0${date.getDate()}`;
  }
  return date.getDate();
};

let convertHours = () => {
  if (date.getHours() < 10) {
    return `0${date.getHours()}`;
  }
  return date.getHours();
};

let convertMinutes = () => {
  if (date.getMinutes() < 10) {
    return `0${date.getMinutes()}`;
  }
  return date.getMinutes();
};

let convertSeconds = () => {
  if (date.getSeconds() < 10) {
    return `0${date.getSeconds()}`;
  }
  return date.getSeconds();
};

const util = {
  emailRegex: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
  validarCorreo: correo => {
    if (util.emailRegex.test(correo)) {
      return " is-valid";
    }
    return " is-invalid";
  },
  asignProductIcon: categoria => {
    if (categoria == 1) {
      return " mdi-oil";
    } else if (categoria == 2) {
      return " mdi-air-filter text-primary";
    } else if (categoria == 3) {
      return " mdi-filter text-warning";
    } else if (categoria == 4) {
      return " mdi-filter";
    } else if (categoria == 5) {
      return " mdi-bottle-wine text-success";
    } else if (categoria == 6) {
      return " mdi-bullet text-info ";
    } else if (categoria == 7) {
      return " mdi-blur-radial text-dark";
    } else {
      return " mdi-buffer";
    }
  },

  estadoStock: cantidad => {
    if (cantidad <= 10) {
      return " badge-danger";
    } else if (cantidad <= 20) {
      return " badge-warning";
    } else {
      return " badge-success";
    }
  },

  date: () => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  },
  hour: () => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${amPm(
      date.getHours(),
      date.getMinutes()
    )}`;
  },
  getserial: () => {
    return `SG-${convertDay()}${convertMonth()}${date.getFullYear()}${convertHours()}${convertMinutes()}${convertSeconds()}`;
  }
};

export default util;
