<script>
import TheHeader from './components/UI/TheHeader.vue'
import TheBarraNav from './components/UI/TheBarraNav.vue'


export default {
  components: {
    TheHeader,
    TheBarraNav,
  },
  provide() {
    return { //passando os objetos de data()
      alunos: this.alunos,
    }
  },
  data() {
    return {
      alunos: [
        {
          matricula: 1,
          nome: "João",
          materias: [
            {
              nome: "Matemática", 
              notas: [8, 7, 9]
            },
            {
              nome: "História", 
              notas: [7.5, 6, 8.5]
            }
          ]
        },
        {
          matricula: 2,
          nome: "Maria",
          materias: [
            {
              nome: "Português", notas: [9, 8, 9.5]
            },
            {
              nome: "Ciências", notas: [7, 8, 7.5]
            }
          ]
        }
      ]
    }
  }

}
</script>

<template>
  <div class="container">
    <TheHeader>
      <h2>Sistema escolar</h2>
    </TheHeader>
    <TheBarraNav></TheBarraNav>
  </div>
</template>

<style>
* {
  color: rgb(255, 255, 255);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
}

body {
  background-color: rgb(29, 29, 29);
  align-items: center;
  justify-content: center;
  margin: 1rem;
}

.container {
  display: flex;
  flex-direction: column;
}

input {
  color: black;
  margin: 0.3rem;
}

label {
  margin: 0.3rem;
}
</style>
