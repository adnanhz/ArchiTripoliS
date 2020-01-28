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
        <MenuItem style="cursor: pointer;" bgcolor="#ad9376" title="Tripoli au cours du temps" 
         class="menuItem" 
        @click="openBlock('temps')" />
        <MenuItem style="cursor: pointer;"
          bgcolor="#cb9323"
          title="Sites historiques"
           class="menuItem" 
          @click="openBlock('sites-historiques')"
        />
        <MenuItem style="cursor: pointer;"
          bgcolor="#926d33"
          title="Frise chronologique"
           class="menuItem" 
          @click="openBlock('frise-chronologique')"
        />
        <MenuItem class="menuItem" style="cursor: pointer;" bgcolor="#3f5756" title="Jeux" @click="openBlock('jeux')" />
        <MenuItem class="menuItem"  style="cursor: pointer;" bgcolor="#576359" title="Projet" @click="openBlock('projet')" />
        <MenuItem class="menuItem"  style="cursor: pointer;" bgcolor="#172639" title="Évalutation" @click="openBlock('evaluation')" />
      </div>
    </div>
    <div style="width: 50%; display: flex; justify-content: center; align-items: center;">
      <HomeBlock v-if="homeBlock.show" :title="homeBlock.title" @continue="goToPage"
      @openIframe="(url) => iframeUrl = url">
        <div v-html="homeBlock.description" style="font-size: 22px; overflow-y: scroll; max-height: 100%; text-align: left; padding-left: 15px;" ></div>
      </HomeBlock>
    </div>
    <div style="background-color: rgba(0, 0, 0, 0.7); 
                color: white; position: fixed; top: 0px; right: 0px;
                padding: 5px; font-size: 22px;">
      <span>Contactez-nous: 
        <a style="text-decoration: underline; color: white;" 
        href="mailto:archi.liban@gmail.com">archi.liban@gmail.com</a></span>
    </div>   
    <div class="modal fade" id="jeu" tabindex="-1" data-backdrop="static"  data-keyboard="false">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn btn-primary" @click="$router.back(); iframeUrl=''" style="cursor: pointer;">
              Retour
            </button>
          </div>
          <div class="modal-body" style="height: 80vh;">
            <iframe
              v-if="iframeUrl.length > 0"
              frameborder="0"
              allowfullscreen
              style="width: 100%; height: 100%; overflow-y: scroll;"
              :src="iframeUrl"
            ></iframe>
          </div>
        </div>
      </div>
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
      },
      iframeUrl: ""
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
        case "Sites historiques":
          this.$router.push("/sites-historiques");
          break;
        case "Frise chronologique":
          this.$router.push("/frise-chronologique");
          break;
        case "Jeux":
          this.$router.push("/jeux");
          break;
        case "Évaluation":
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
          this.homeBlock.description = `
          Une vidéo animée présente les différents périodes et évènements 
          historiques qu'a traversé Tripoli (la deuxième ville du Liban) et qui ont abouti à la création de son 
          riche patrimoine architectural.<br/><br/><i>En cours de préparation.</i>`;
          break;
        case "sites-historiques":
          this.homeBlock.title = "Sites historiques";
          this.homeBlock.description = 
          `<div style="margin-left: 15px;">Cette partie présente trois sites historiques:</div>
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
          Découvrez un grand nombre de sites historiques (mosquées, églises, caravansérails,
hammams…) à travers une frise chronologique en 2D ou 3D. <br />
Cliquez sur un site pour voir les photos et pour découvrir sa date de construction, son
emplacement, son fondateur et l&#39;époque à laquelle il appartient.
          `;
          break;
        case "jeux":
          this.homeBlock.title = "Jeux";
          this.homeBlock.description = `
          Allez-y pour jouer ! Quatre types de jeux vous permettent de fixer vos connaissances
tout en vous amusant : les mots croisés, les puzzles, le pendu, les jeux de
mémorisation.
          `;
          break;
        case "evaluation":
          this.homeBlock.title = "Évaluation";
          this.homeBlock.description = `
          Merci de bien vouloir consacrer quelques minutes à répondre à ce questionnaire. <br />  
          Cliquez sur Continuer pour accéder au sondage.
          `;
          break;
        case "projet":
          this.homeBlock.title = "Projet";
          this.homeBlock.description = `
          Créez une vidéo animée sur PowToon pour présenter un site historique de votre choix. <br />
Cliquez sur le logo de PowToon pour regarder un tutoriel explicatif concernant
l'usage de ce logiciel.
          `;
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
  background-size: 100% 100%;
  min-height: 100vh;
}

.modal-dialog {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
}

.modal-content {
  width: 100vw;
  height: 100%;
  border-radius: 0;
}

.menuItem:active {
  zoom: 1.1;
}
</style>
