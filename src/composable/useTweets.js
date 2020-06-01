import { ref } from "vue";

export function useTweets() {
  const tweets = ref([]);

  const query = `
        {
          tweets {
              id,
              full_text
          }
        }`;

  fetch("http://127.0.0.1:8080/graphql", {
    method: "post",
    body: JSON.stringify({
      query
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(({ data }) => {
      tweets.value = data.tweets;
    });

  return {
    tweets
  };
}
