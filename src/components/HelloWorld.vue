<template>
  <div>
   <div class="form-group">
     <label for="prompt">Je vraag aan chatGPT:</label>
      <input type="text" class="form-control" v-model="prompt">
      <button class="btn btn-primary" @click="callAPI">Submit!</button> 
 </div>
     <div>
   Antwoord van openAI: <p>{{ data }}</p>
   </div>
  <div>
 <p>TEST Prompt:    {{ prompt }}</p>
 <p>TEST api url: {{  apiurl  }}</p>
 
   </div></div>
 </template>
 <script setup>  // https://github.com/dizid/openAItest/blob/master/src/components/HelloWorld.vue
import { ref} from "vue"
    const data = ref(null)
   const prompt = ref('tell me about the sun')  // App works with this default value. 
  // const apiurl = "http://localhost:3000/openai?prompt=" + prompt  // ERROR: not reactive anymore
  const apiurl = "https://439c-87-209-198-112.ngrok.io/openai?prompt=" + prompt

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

