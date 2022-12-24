<template>
  <div>
   <div class="form-group">
     <label for="prompt">Je vraag:</label>
     <input type="text" class="form-control" v-model="prompt">
      <button class="btn btn-primary" @click="callAPI">Submit!</button> 
 </div>
     <div>
   Antwoord van openAI: <p>{{ data }}</p>
   </div>
  <div>
 <p>TEST Prompt:    {{ prompt }}</p>
 <p>TEST api url {{  apiurl  }}</p>
  </div></div>
 </template>
 <script async setup>
import { ref} from "vue"

    const data = ref(null)

    const prompt = ref("the planets")
    const apiurl = "http://localhost:3000/openai?prompt=" + prompt.value

    async function callAPI() {
      await new Promise((r) => setTimeout(r, 2000))

    try {
      const res = await fetch(apiurl)
      data.value = await res.json()
    } catch (e) {
      console.error(e)
    }
    return { data,}
    }

</script>

