declare namespace Api.Auth {
  interface LoginParams {
    username: string;
    password: string;
  }

  interface LoginResult {
    username: string
    token: string;
    role: string;
  }
}
