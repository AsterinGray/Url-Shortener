<template>
  <div>
    <h1 class="jumbotron text-center mt-5">Create Your Short Link</h1>

    <div class="card">
      <div class="card-body">
        <form @submit.prevent="submit(url)">
          <div class="form-group">
            <label for="url">Insert Your Url</label>
            <input v-model="url" id="url" class="form-control my-3" />
          </div>
          <div class="form-group" v-show="shortUrl">
            <p>
              Short Url: <a :href="shortUrl">{{ shortUrl }}</a>
            </p>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Shorten Url</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      url: '',
      shortUrl: '',
    }
  },
  methods: {
    submit: async function (url) {
      try {
        const api = 'http://localhost:4000/'
        const res = await axios.post(api, {
          url,
        })
        console.log(res.data.shortUrl)
        this.shortUrl = res.data.shortUrl
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
