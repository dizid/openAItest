<script setup>
  import { ref, onMounted } from 'vue'

  let answer = ref(null)

  async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const tmp = res.json()
    console.log ("Answer from openai: ", tmp )
    answer = tmp
    
  }
onMounted(() => {
      getData()
    })

</script>

<template>
   <Suspense>
  <div>
  Antwoord van openAI  {{ answer }}
  </div>
</Suspense>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
