'use client'
import './styles.css'
import useAlunos from './hooks/useAlunos'

const Alunos = () => {
	const {alunos, setAlunos} = useAlunos()
	return (
		<div>
			<h1>Alunos da Turma 1º A</h1>
			<table colspace="0">
				<thead>
					<tr>
						<th>
							Nome
						</th>
						<th className="col-presenca">
							Presenca
						</th>
					</tr>
				</thead>
				<tbody>
					{
						alunos.map((aluno, index) => (
							<tr key={index}> 
								<td>{aluno.nome}</td>
								<td className="elu col-presenca" >
									<label>
										Sim
										<input
											type="radio" 
											name={index} 
											value="true" 
											checked={aluno.presenca}
											onChange={(e)=> {
												aluno.presenca = true
												setAlunos([...alunos]) 
												// e.target.checked = true
												// console.log(aluno.presenca == "true")
											}}
										/>
									</label>
									<label>
										Nao
										<input
											type="radio" 
											name={index} 
											value="false"
											checked={!aluno.presenca} 
											onChange={(e)=> {
												aluno.presenca = false
												setAlunos([...alunos]) 
												// e.target.checked = true
												// console.log(aluno.presenca == "false")
											}}
											/>
									</label>
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