<template>
  <h1>leagues</h1>
</template>

<script>
import { actionTypes } from "@/store/leaguesList"

export default {
  name: "Leagues",
  created() {
    console.log(process.env.VUE_APP_TITLE);
    this.$store.dispatch(actionTypes.getLeagues)
  }
};
</script>

<style scoped>

</style>