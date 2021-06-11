<template>
  <v-card>
    <v-footer :padless="padless">
      <v-card flat tile width="100%" class="text-center" color="#740000">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Cristal</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "default",
    fixed: true,
    absolute: true,
  }),
};
</script>

<style></style>
