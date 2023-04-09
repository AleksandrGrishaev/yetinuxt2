<template>
  <v-container class="pt-4">
    <v-row no-gutters>
      <v-col cols="12" md="8">
        <h1 class="text-h1 mb-2">{{ $t("BodyStartTitle") }}</h1>
        <h3 class="text-h2 mb-2">{{ $t("BodyStartSubtitle") }}</h3>
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
        <v-btn color="primary" class="mr-4" :href="$t('BodyStartButton1Link')"
          >{{ $t("BodyStartButton1") }}
        </v-btn>
        <v-btn outlined class="border-0" :href="$t('BodyStartButton2Link')">{{
          $t("BodyStartButton2")
        }}</v-btn>
      </v-col>
      <v-col cols="12" md="4">
        <YetiCard />
      </v-col>
    </v-row>
  </v-container>
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
        {
          icon: "mdi-speedometer",
          title: this.$t("BodyStartGoal4Title"),
          description: this.$t("BodyStartGoal4Description"),
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
