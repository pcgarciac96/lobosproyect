import store from "../store";

async function useToken(token) {
  store.dispatch("saveToken", token);
}
async function useRefreshToken(refreshToken) {
  store.dispatch("saveRefreshToken", refreshToken);
}
async function autoLogin() {
  await store.dispatch("autoLogin");
}
async function signOff() {
  store.dispatch("signOff");
}

export { useToken, autoLogin, useRefreshToken, signOff };


