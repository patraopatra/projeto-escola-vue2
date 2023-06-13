<script>
import TheHeader from './components/TheHeader.vue'
import TheBarraNav from './components/TheBarraNav.vue'

export default {
  components: {
    TheHeader,
    TheBarraNav,
  },
  data() {
    return {
      alunos: [
        {
          id: '0',
          nome: 'Patrick Santos Piotrowski',
          nascimento: '01/06/2000',
          materias: {
            m1: {
              nome: 'Português',
              provas: {
                p1: '10'
              }
            }
          }
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <TheHeader>
      <h2>CRUD de matérias, provas e alunos</h2>
    </TheHeader>
    <TheBarraNav></TheBarraNav>
  </div>
</template>

<style>
* {
  color: rgb(255, 255, 255);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

body {
  background-color: rgb(40, 40, 40);
  align-items: center;
  justify-content: center;
  margin: 1rem;
}

.container{
  display: flex;
  flex-direction: column;
}

</style>
