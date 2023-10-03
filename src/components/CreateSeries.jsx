import classes from './CreateSeries.module.css';
import { Link } from 'react-router-dom';

const CreateSeries = () => {
  return (
    <form className={classes.formContainer}>
      <h2>Adicione uma série ou um filme</h2>

      <div>
        <label htmlFor="Name">Nome</label>
        <input type="text" placeholder="Digite o nome" />
      </div>

      <div>
        <label htmlFor="plataform">Plataforma</label>
        <input type="text" name="plat" id="plat" />
      </div>

      <div>
        <label htmlFor="status">Status</label>
        <select name="status" id="status">
          <option value="" disabled selected>
            Escolha uma opção
          </option>
          <option value="concluido">Concluído</option>
          <option value="assistindo">Assistindo</option>
          <option value="comecar_a_assistir">Começar a assistir</option>
        </select>
      </div>

      <div>
        <label htmlFor="minhaNota">Nota</label>
        <input type="number" max={10} min={0} step={0.5} />
      </div>

      <div>
        <label htmlFor="detalhes">Observações</label>
      </div>
      <div>
        <textarea
          className={classes.boxText}
          name="obs"
          id="obs"
          cols="50"
          rows="15"
        ></textarea>
      </div>

      <button>Add</button>
      <Link to="/">
        <button>Cancelar</button>
      </Link>
    </form>
  );
};

// CONTINUAR EM 12:29 CRIAR ESTILO PARA O FORMULARIO

export default CreateSeries;
