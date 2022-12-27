<template>
 <div><label>Type you query:</label>
      <input type="text" class="form-control" v-model="query">
      <p>url with the users query as url variable  {{ url }}</p></div>   <!-- Problem: not reactive -->
</template>
<script setup>  
import { ref} from "vue"
const query = ref('default value')   
const url = "https://80fb-31-187-152-178.ngrok.io/openai?prompt=" + query.value
</script>