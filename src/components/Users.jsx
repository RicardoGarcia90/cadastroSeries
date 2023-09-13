import { useState } from 'react';
import classes from './Users.module.css';

function Users() {
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
      <table>
        <thead>
          <tr>
            <th>Nome da série</th>
            <th>Plataforma</th>
            <th>Status</th>
            <th>Minha nota</th>
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
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
