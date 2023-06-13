<script>
import Cadastrar from './telas/Cadastrar.vue'
import Ver from './telas/Ver.vue'
import Editar from './telas/Editar.vue'
import Excluir from './telas/Excluir.vue'

export default {
    components: {
        Cadastrar,
        Ver,
        Editar,
        Excluir
    },
    methods: {
        trocarComponente(comp) {
            this.componenteSelecionada = comp
            console.log(this.componenteSelecionada)
        }
    },
    data() {
        return {
            componenteSelecionada: 'Cadastrar'
        }
    }
}
</script>

<template>
    <div>
        <div>
            <button @click="trocarComponente('Cadastrar')">Cadastrar</button>
            <button @click="trocarComponente('Ver')">Ver</button>
            <button @click="trocarComponente('Editar')">Editar</button>
            <button @click="trocarComponente('Excluir')">Excluir</button>
        </div>
        <div>
            <KeepAlive>
                <component :is="componenteSelecionada"></component>
            </KeepAlive>
        </div>
    </div>
</template>

<style scoped>
button {
    color: black;
    background-color: gray;
    font-size: 1.5rem;
    border: 0;
    margin: 0.5rem;
    margin-left: 0;
    width: 10rem;
    cursor: pointer;
}

button:hover {
    background-color: rgb(255, 255, 94);
}

</style>