<template>
  <div class="home container-fluid" style="display: flex;">
    <div
      style="width: 50%; display: flex; justify-content: center; 
      flex-direction: column; align-items: center; padding-top: 20px; margin-left: 15px;"
    >
      <div>
        <div style="background-color: rgba(255,255,255,0.7);">
          <img style="width: 100%;" src="../assets/stone.png" />
        </div>
      </div>
      <div
        style="display: flex; flex-direction: column; justify-content: space-between; width: 550px; margin-left: 15px;"
      >
        <MenuItem bgcolor="#d5c2a2" title="Tripoli au cours du temps" @click="openBlock('temps')" />
        <MenuItem
          bgcolor="#cb9323"
          title="Les sites historiques"
          @click="openBlock('sites-historiques')"
        />
        <MenuItem
          bgcolor="#926d33"
          title="Frise chronologique"
          @click="openBlock('frise-chronologique')"
        />
        <MenuItem bgcolor="#3f5756" title="Jeux" @click="openBlock('jeux')" />
        <MenuItem bgcolor="#172639" title="Évalutation" @click="openBlock('evaluation')" />
        <MenuItem bgcolor="#576359" title="Projet" @click="openBlock('projet')" />
      </div>
    </div>
    <div style="width: 50%; display: flex; justify-content: center; align-items: center;">
      <HomeBlock v-if="homeBlock.show" :title="homeBlock.title" @continue="goToPage">
        <div v-html="homeBlock.description" style="font-size: 22px; overflow-y: scroll; max-height: 100%;" ></div>
      </HomeBlock>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuItem from "@/components/MenuItem";
import HomeBlock from "@/components/HomeBlock";
export default {
  name: "home",
  data() {
    return {
      homeBlock: {
        show: false,
        title: "",
        description: ""
      }
    };
  },
  components: {
    MenuItem,
    HomeBlock
  },
  methods: {
    goToPage(title) {
      switch (title) {
        case "Tripoli au cours du temps":
          this.$router.push("/temps");
          break;
        case "Les sites historiques":
          this.$router.push("/sites-historiques");
          break;
        case "Frise chronologique":
          this.$router.push("/frise-chronologique");
          break;
        case "Jeux":
          this.$router.push("/jeux");
          break;
        case "Évaluation":
          this.$router.push("/evaluation");
          break;
        case "Projet":
          this.$router.push("/projets");
          break;
      }
    },
    openBlock(ref) {
      this.homeBlock.show = true;
      switch (ref) {
        case "temps":
          this.homeBlock.title = "Tripoli au cours du temps";
          this.homeBlock.description = "Une vidéo animée vous présente les différents périodes et évènements historiques qu'a traversé Tripoli (la deuxième ville du Liban) et qui ont abouti à la création de son riche patrimoine architectural.";
          break;
        case "sites-historiques":
          this.homeBlock.title = "Les sites historiques";
          this.homeBlock.description = 
          `Cette partie présente trois sites historiques:
          <ul>
          <li>Trois vidéos présentent la citadelle de Tripoli (le château de Saint-Gilles)</li>
          <li>Un livre interactif présente le hammam Ezzedine.</li>
          <li>Un livre interactif présente la grande mosquée al-Mansouri.</li>
          </ul>
          `;
          break;
        case "frise-chronologique":
          this.homeBlock.title = "Frise chronologique";
          this.homeBlock.description = `
          Découvrez un grand nombre de sites historiques (mosquées, églises, caravansérails, hammams, …) qui se présentent sur une ligne chronologique en 2D ou 3D.<br />
          Cliquez sur un site pour voir ses propres photos et pour découvrir : sa date de construction, son emplacement, son fondateur et l'époque à laquelle il appartient.
          `;
          break;
        case "jeux":
          this.homeBlock.title = "Jeux";
          this.homeBlock.description = "Allez-y pour jouer! Quatre types de jeux vous permettent de fixer vos connaissances tout en s'amusant. Ces types de jeux sont: les mots croisés, les puzzles, les pendus, les jeux de mémorisation.";
          break;
        case "evaluation":
          this.homeBlock.title = "Évaluation";
          this.homeBlock.description = "";
          break;
        case "projet":
          this.homeBlock.title = "Projet";
          this.hoeBlock.description = "";
          break;
      }
    }
  }
};
</script>
<style scoped>
.home {
  background-image: url("~@/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
}
</style>