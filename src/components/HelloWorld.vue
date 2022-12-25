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
 <script setup>  
  // Code is here: https://github.com/dizid/openAItest/blob/master/src/components/HelloWorld.vue
  // Site runs here: https://jazzy-pixie-d52103.netlify.app/

import { ref} from "vue"
    const data = ref(null)
   const prompt = ref('tell me about the sun')  // App works with this default value. 
  // const apiurl = "http://localhost:3000/openai?prompt=" + prompt  // ERROR: not reactive anymore

// The problem: if i type a query into the textbox, Vue need to create an URL for the API call.
// But: the 'promt' variable stops being reactive

  const apiurl = "https://439c-87-209-198-112.ngrok.io/openai?prompt=" + prompt.value  // Runs on my localhost through NGROK.com

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

