const unauthorized = {
  icon: "error",
  title: "¡Error!",
  text: "Sin permiso",
};

const expiredInvalidToken = {
  icon: "error",
  title: "¡Error!",
  text: "Token invalido o expirado",
  code: 0,
};

const invalidToken = {
  icon: "error",
  title: "¡Error!",
  text: "Sesión expirada",
  code: 0,
};

const withoutAuthenticationHeader = {
  icon: "error",
  title: "¡Error!",
  text: "Sin cabecera de autenticación",
  code: 0,
};

const addSuccess = {
  icon: "success",
  title: "¡Éxito!",
  text: "Agregado Correctamente",
};

const updateSuccess = {
  icon: "success",
  title: "¡Éxito!",
  text: "Actualizado Correctamente",
};

const deleteSuccess = {
  icon: "success",
  title: "¡Éxito!",
  text: "Eliminado Correctamente",
};

const errorServer = {
  icon: "error",
  title: "¡Error!",
  text: "Error al procesar su solicitud",
};

const duplicateEmail = {
  icon: "error",
  title: "¡Error!",
  text: "El email ya esta en uso",
};
const wrongCurrentPassword = {
  icon: "error",
  title: "¡Error!",
  text: "Contraseña actual incorrecta",
};

const notFound = {
  icon: "error",
  title: "¡Error!",
  text: "El registro no existe",
};

const alreadyExists = {
  icon: "error",
  title: "¡Error!",
  text: "La información ya se encuentra registrada",
};

const duplicateRol = {
  icon: "error",
  title: "¡Error!",
  text: "El rol ya esta registrado",
};

const duplicateUser = {
  icon: "error",
  title: "¡Error!",
  text: "El usuario ya fue registrado",
};

const resetPassSuccess = {
  alert: "success",
  title: "¡Éxito!",
  text: "Te enviamos un correo electrónico con un enlace para restablecer tu contraseña.",
};

export default {
  addSuccess,
  updateSuccess,
  deleteSuccess,
  errorServer,
  duplicateEmail,
  wrongCurrentPassword,
  notFound,
  alreadyExists,
  duplicateRol,
  withoutAuthenticationHeader,
  invalidToken,
  unauthorized,
  resetPassSuccess,
  expiredInvalidToken,
  duplicateUser,
};
