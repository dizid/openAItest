
 <script setup>
import { ref, computed } from "vue";
const data = ref(null);
const query = ref("tell me about Bankok");
const apiurl = computed(() => {
  return "http://localhost:3000/openai?q=" + query.value;
});

async function callAPI() {
  // fetch API call to node.js server here
}
</script>
 <template>
  <div class="form-group">
    <label for="prompt">Je vraag aan chatGPT:</label>
    <input type="text" class="form-control" v-model="query" />
    <button class="btn btn-primary" @click="callAPI">Submit!</button>
  </div>
  <div>
    <p>user typed: query: {{ query }}</p>
    <p>url with the users query as url variable {{ apiurl }}</p>
  </div>
</template>