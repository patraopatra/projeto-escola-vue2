<script>
export default{
  methods:{
  },
  data(){
    return {
      alunos: [
        {
          id: '0',
          materias: {
            m1:{
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
  <TheHeader>
    <h2>CRUD de matérias, provas e alunos</h2>
  </TheHeader>

  

</template>

<style>
*{
  color: rgb(255,255,255);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
}
body{
  display: flex;
  background-color: rgb(40, 40, 40);
  margin: 1rem;
  align-items: center;
  justify-content: center;
}
</style>
