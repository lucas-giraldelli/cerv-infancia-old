import type { LinksFunction } from '@remix-run/node';
import stylesUrl from '~/styles/login.css';
import logo from '../../public/images/logo.png';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function LoginRoute() {
  return (
    <main className="flex-parent">
      <div className="left">
        <img
          className="logo"
          src={logo}
          alt="CERV | Casa espírita Rafael Verlangieri"
        />
        <form className="login-box">
          <label>Usuário</label>
          <input type="text" placeholder="Nome de usuário" />
          <label>Senha</label>
          <input type="password" placeholder="Sua senha" />
          <button type="submit">Entrar</button>
        </form>
      </div>
      <div className="hero"></div>
    </main>
  );
}
