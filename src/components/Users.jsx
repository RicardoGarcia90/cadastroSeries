import { useState } from 'react';
import classes from './Users.module.css';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      nomeDaSerie: 'Game of thrones',
      plataforma: 'HBO Max',
      status: 'Terminado',
      minhaNota: 10,
    },
  ]);
  return (
    <div className={classes.tableContainer}>
      {/* AJUSTAR LINK, ESTÁ SENDO ATIVADO QUANDO CLICO EM QUALQUER LUGAR DA DIV, QUERO QUE ELE SEJÁ ATIVADO SOMENTE QUANDO CLICO EM CIMA DO BOTÃO 'Add+' */}

      {/* CONTINUAR EM 11:49 */}

      <Link className={classes['btn-create']} to="/create">
        <button className={classes['btn-create_text']}>Add+</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nome da série</th>
            <th>Plataforma</th>
            <th>Status</th>
            <th>Minha nota</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.nomeDaSerie}</td>
              <td>{user.plataforma}</td>
              <td>{user.status}</td>
              <td>{user.minhaNota}</td>
              <td>
                <button className={classes.btnEditar}>Editar</button>
                <button className={classes.btnDeletar}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
