import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os Dados:" + username + " - " + password);
  };

  return (
    <div
      id="formLogin"
      className="row h-100 justify-content-center align-items-center ms-2 me-2"
    >
      <div className="container m-0">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="input-field" />
          <label htmlFor="email ou cpf">E-mail ou CPF</label>
          <div>
            <input
              id="email"
              className="rounded-4 ps-2 w-100 fs-3"
              type="email ou cpf"
              // placeholder="E-mail ou Telefone"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label htmlFor="senha">Senha</label>
          <div>\
            <input
              id="senha"
              className="rounded-4 ps-2 w-100 fs-3"
              type="password"
              required
              // placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
            <div id="esqueceuSenha" className="text-center">
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button href="/" id="btnEntrar" className="btn btn-primary p-0 m-0 w-50 ps-3 pe-3 pt-1 pb-1">ENTRAR</button>
           
              <p>
                Não tem uma conta?{" "}
                <Link to={"../registro"}>Criar uma conta!</Link>
              </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
