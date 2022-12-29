<script setup>
import { ref, computed } from "vue";
const data = ref(null);
const query = ref("vertel me over jezelf");
const apiurl = computed(() => {
  // return "http://localhost:3000/openai?q=" + query.value;
  return "https://d5d1-87-209-198-112.ngrok.io/openai?q=" + query.value;
});

async function callAPI() {
  // create a fetch get API call to apiurl here and store the result in data
  const response = await fetch(apiurl.value);
  data.value = await response.json();
  // log the second value of the json response to the console here  (data.value.message)
  console.log("data.value.message: ", data.value.message);
}
// console.log("data.value.message: ", data.value.message);
console.log("data.value: ", data.value);
console.log("data: ", data);
</script>
 <template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-half">
        <div class="box">
          <label class="label" for="prompt">Je vraag aan chatGPT:</label>
          <input class="input" type="text" v-model="query" /><br />
          <button class="button is-info is-light" @click="callAPI">
            Submit!
          </button>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <div class="box">
          <label class="label" for="prompt">Antwoord van chatGPT:</label>
          <!-- // show the second value of the json response here (data.value.message) -->
          <p>{{ data ? data.message : "" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>