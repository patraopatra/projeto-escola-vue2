<script>

export default {
    inject: ['alunos'],
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<template>
    <ul>
        <li v-for="aluno in alunos" :key="aluno.nome">
            <h2>{{ aluno.nome }}</h2>
            <ul>
                <li v-for="materia in aluno.materias" :key="materia.nome">
                    <h3>{{ materia.nome }}</h3>
                    <p>Notas: {{ materia.notas.join(', ') }}</p>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}

* {
    font-size: 1rem;
}

li {
    list-style: none;
    background-color: rgb(75, 75, 75);
}
</style>