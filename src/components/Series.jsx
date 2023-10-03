import { useState } from 'react';
import classes from './Users.module.css';
import { Link } from 'react-router-dom';

const Series = () => {
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
      <button className={classes['btn-create']}>
        <Link className={classes['btn-create_text']} to="/create">
          Add+
        </Link>
      </button>
      <table>
        <thead>
          <tr className={classes.thBackground}>
            <th>Nome</th>
            <th>Plataforma</th>
            <th>Status</th>
            <th>Minha nota</th>
            <th>Ações</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nomeDaSerie}</td>
              <td>{user.plataforma}</td>
              <td>{user.status}</td>
              <td>{user.minhaNota}</td>
              <td>
                <button className={classes.btnEditar}>Editar</button>
                <button className={classes.btnDeletar}>Deletar</button>
              </td>
              <td>
                <Link to="/details">Abrir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Series;
