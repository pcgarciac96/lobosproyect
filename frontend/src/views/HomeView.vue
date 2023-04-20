<template>
  <teamBanner/>
  <cardsInformation />
 <misionComponent/>
 <miniGalery/>
 
</template>

<script>
import teamBanner from "../components/teamBanner.vue";
import cardsInformation from "../components/cardsInformation.vue";
import misionComponent from "../components/misionComponent.vue";
import miniGalery from "../components/miniGalery.vue";
export default {
  components: { cardsInformation,teamBanner,misionComponent,miniGalery },
};
</script>
