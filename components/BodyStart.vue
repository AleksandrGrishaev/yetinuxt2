<template>
  <div>
    <v-container fluid class="pt-4">
      <v-row no-gutters>
        <v-col class="d-none d-md-flex" cols="12" md="4">
          <v-img src="/yeti.png"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <h2 class="text-h2 mt-2 mb-4">{{ $t("BodyStartTitle") }}</h2>
          <v-list>
            <v-list-item v-for="(goal, index) in goals" :key="index">
              <v-list-item-icon>
                <v-icon>{{ goal.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <strong>{{ goal.title }}</strong>
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  goal.description
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <h5 class="text-subtitle-1 my-2">{{ $t("BodyStartAction") }}</h5>
          <v-btn color="primary" class="mr-4" :href="$t('BodyStartButton1Link')"
            >{{ $t("BodyStartButton1") }}
          </v-btn>
          <v-btn outlined class="border-0" :href="$t('BodyStartButton2Link')">{{
            $t("BodyStartButton2")
          }}</v-btn>
        </v-col>
      </v-row>
      <!-- // second block -->
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    goals() {
      return [
        {
          icon: "mdi-target",
          title: this.$t("BodyStartGoal1Title"),
          description: this.$t("BodyStartGoal1Description"),
        },
        {
          icon: "mdi-chart-pie",
          title: this.$t("BodyStartGoal2Title"),
          description: this.$t("BodyStartGoal2Description"),
        },
        {
          icon: "mdi-trophy",
          title: this.$t("BodyStartGoal3Title"),
          description: this.$t("BodyStartGoal3Description"),
        },
      ];
    },
  },
};
</script>

<style scoped>
.v-icon {
  color: #4caf50; /* Change the icon color */
}

.v-list-item-title {
  font-weight: bold; /* Make the title bold */
}
</style>
