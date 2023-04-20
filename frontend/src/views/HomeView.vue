<template>
  <div>
    <teamBanner />
    <cardsInformation />
    <misionComponent />
    <footerNav />
  </div>
</template>

<script>
import teamBanner from "../components/teamBanner.vue";
import cardsInformation from "../components/cardsInformation.vue";
import misionComponent from "../components/misionComponent.vue";
import footerNav from "../components/footerNav.vue";
export default {
  components: { cardsInformation, teamBanner, misionComponent, footerNav },
};
</script>
