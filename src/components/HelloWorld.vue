<template>
  <h1>Tweets</h1>
  <div class="container">
    <div class="tweets">
      <div class="tweets__tweet" v-for="tweet in tweets">
        <span>{{ tweet.id }}</span>
        <p>{{ tweet.full_text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTweets } from "../composable/useTweets";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    const { tweets } = useTweets();

    return {
      tweets
    };
  }
};
</script>
