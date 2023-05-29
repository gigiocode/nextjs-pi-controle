'use client'
import { useState, useEffect } from "react"

const useAlunos = () => {
	const [alunos, setAlunos] = useState([])

	useEffect(() => {
		setAlunos([
			{
				nome: 'Alberto de Andrade',
				presenca: true,
			},
			{
				nome: 'Ana Beatriz Moreira',
				presenca: true,
			},
			{
				nome: 'Ana Carolina de Castro',
				presenca: true,
			},
			{
				nome: 'Bruna Carvalho',
				presenca: true,
			},
			{
				nome: 'Bruno Oliveira',
				presenca: true,
			},
			{
				nome: 'Carolina Toledo',
				presenca: true,
			},
			{
				nome: 'Fiamma Gonçalves',
				presenca: true,
			},
			{
				nome: 'Giovane Soares',
				presenca: true,
			},
			{
				nome: 'Johnatan Felipe',
				presenca: true,
			},
			{
				nome: 'Jivago Nogueira',
				presenca: true,
			},
			{
				nome: 'Larissa de Carvalho',
				presenca: true,
			},
			{
				nome: 'Luiz Felipe Ribeiro',
				presenca: true,
			},
			{
				nome: 'Mariana Trindade',
				presenca: true,
			},
			{
				nome: 'Michael Pereira',
				presenca: true,
			},
			{
				nome: 'Thales Sanchez',
				presenca: true,
			}
		])
	}, [])

	return {
		alunos,
		setAlunos
	}
}

export default useAlunos