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
 <p>TEST mytestprompt: {{  mytestprompt  }}</p>
 
   </div></div>
 </template>
 <script setup>  
  // Code is here: https://github.com/dizid/openAItest/blob/master/src/components/HelloWorld.vue
  // Site runs here: https://jazzy-pixie-d52103.netlify.app/
  
import { ref, watch} from "vue"
    const data = ref(null)
   const prompt = ref('tell me about the sun')  // App works with this default value. 
const newValue = ref('test tell about Moon')
const mytestprompt = prompt.value
   watch(prompt, (newValue, oldValue) => {
  // do something with newValue and oldValue.
    return newValue
});

// const apiurl = "http://localhost:3000/openai?prompt=" + prompt  // ERROR: not reactive anymore

// The problem: if i type a query into the textbox, Vue need to create an URL for the API call.
// But: the 'prompt' variable stops being reactive

  const apiurl = "https://80fb-31-187-152-178.ngrok.io/openai?prompt=" + newValue.value  // Runs on my localhost through NGROK.com


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

