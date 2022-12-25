<template>
  <div>
   <div class="form-group">
     <label for="prompt">Je vraag aan chatGPT:</label>
      <input type="text" class="form-control" v-model="prompt">  <!-- ref instead of v-model gives: TEST Prompt: "[object HTMLInputElement]"-->
      <button class="btn btn-primary" @click="callAPI">Submit!</button> 
 </div>
     <div>
   Antwoord van openAI: <p>{{ data }}</p>
   </div>
  <div>
 <p>TEST Prompt:    {{ prompt }}</p>
 <p>TEST api url: {{  apiurl  }}</p>
 <p>TEST tmp: {{  tmp  }}</p>
   </div></div>
 </template>
 <script setup>
import { ref} from "vue"
    const data = ref(null)
    const prompt = ref('tell me about the sun')
//    const tmp =  ref(prompt)  // WORKS, is still reactive
//  const tmp = ref(prompt.value) // EROR: not reactive


    const apiurl = "http://localhost:3000/openai?prompt=" + prompt.value

    // this.$refs[ref].submit()  because your ref is a string and needs to be inside the [] to enable the dot notation.

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

