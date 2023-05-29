'use client'
import './styles.css'
import useAlunos from './hooks/useAlunos'

function getAlunos() {
    // Supondo que você tenha uma matriz chamada 'alunos' contendo os dados dos alunos
    return Alunos;
}

const Alunos = () => {

    const { alunos, setAlunos } = useAlunos()
    return (

        <div className="calendar__title">
            Selecione a Data
            <div class="back-button-container">
                <a href="/" className="back-button">Voltar</a>
            </div>
            <div>
                <table className="calendario">
                    <thead>
                        <tr>
                            <th colspan="7">Junho</th>
                        </tr>
                        <tr>
                            <th>Domingo</th>
                            <th>Segunda</th>
                            <th>Terça</th>
                            <th>Quarta</th>
                            <th>Quinta</th>
                            <th>Sexta</th>
                            <th>Sábado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1 className="table__title">Alunos da Turma 1º A</h1>
            <table colspace="0">
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th className="col-presenca">
                            Presença
                        </th>
                        <th className="col-freq">
                            Frequência
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map((aluno, index) => (
                            <tr key={index}>
                                <td>{aluno.nome}</td>
                                <td className="elu col-presenca" >
                                    <label className="sim">
                                        Sim
                                        <input
                                            type="radio"
                                            name={index}
                                            value="true"
                                            checked={aluno.presenca}
                                            onChange={(e) => {
                                                aluno.presenca = true
                                                setAlunos([...alunos])
                                                // e.target.checked = true
                                                // console.log(aluno.presenca == "true")
                                            }}
                                        />
                                    </label>
                                    <label className="nao">
                                        Nao
                                        <input
                                            type="radio"
                                            name={index}
                                            value="false"
                                            checked={!aluno.presenca}
                                            onChange={(e) => {
                                                aluno.presenca = false
                                                setAlunos([...alunos])
                                                // e.target.checked = true
                                                // console.log(aluno.presenca == "false")
                                            }}

                                        />
                                    </label>
                                </td>
                                <td>
                                    <span>{aluno.presenca ? '100%' : '0%'}</span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>


    )
}

export default Alunos