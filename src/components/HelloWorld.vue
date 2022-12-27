<template>
 <div>
  <label>Type you query:</label>
      <input type="text" class="form-control" v-model="query">
      <p>user typed: query:  {{ query }}</p>
       <p>url with the users query as url variable  {{ url }}</p> 
   </div>  
</template>
<script setup>  
import { ref} from "vue"
const query = ref('defaultvalue')
const url = "https://80fb-31-187-152-178.ngrok.io/openai?q=" + query.value
</script>