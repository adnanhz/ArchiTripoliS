<template>
  <div class="crosswords container-fluid">
    <div
      style="display: flex; flex-wrap: wrap; justify-content: space-around; align-items: center;"
    >
      <div style="width: 100%; display: flex; height: 150px; justify-content: space-between;">
        <span
          style="width: 27%; height: 100px; background-color: white; 
                    padding: 15px; margin-top: 10px; border: 6px solid #f5f5f5;
                    font-size: 40px;cursor: pointer;"
          @click="$router.back()"
        >Retour</span>
        <MenuItem
          style="margin-bottom: 150px; width: 70%; font-size: 40px;"
          bgcolor="#3f5756"
          title="Sites historiques"
        />
      </div>
      <div
        style="width: 50%; display: flex; flex-direction: column; align-items: flex-start; padding-left: 130px; justify-content: center;"
      >
        <div style="display: flex; flex-direction: column; color: black; padding-left: 25px;">
          <div
            class="game-category video"
            @click="$router.push('/sites-historiques/videos/youtube')"
          ></div>
          <h2>Vidéos</h2>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; color: black;">
          <div class="game-category video" @click="openBlock('videos-quiz')"></div>
          <h2>Vidéos + Quiz</h2>
        </div>
      </div>

      <div style="width: 50%; height: 400px;">
        <HomeBlock v-if="homeBlock.show" :title="homeBlock.title" @continue="goToPage">
          <div
            style="font-size: 18px; overflow-y: scroll; max-height: 100%; padding-left: 15px; text-align: left;"
          >
            Allez à la découverte de la Citadelle de Tripoli (Le Château de Saint-Gilles) à travers trois vidéos au cours desquelles vous serez évalués.
            <div
              style="cursor: pointer" @click="iframeUrl = 'https://www.bookwidgets.com/play/JLB77U?teacher_id=5540252375580672'"
              data-toggle="modal"
              data-target="#jeu"
              class="edpuzzle-logo"
            ></div>
          </div>
        </HomeBlock>
      </div>
    </div>
    <div class="modal fade" id="jeu" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn btn-primary" @click="$router.back()" style="cursor: pointer;">
              Retour
            </button>
          </div>
          <div class="modal-body">
            <iframe
              frameborder="0"
              allowfullscreen
              style="width: 100%; height: 100%;"
              :src="iframeUrl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuItem from "@/components/MenuItem";
import HomeBlock from "@/components/HomeBlock";
export default {
  data() {
    return {
      iframeUrl: '',
      homeBlock: {
        show: false,
        title: "",
        description: "",
        showExplication: false,
        iframeUrl: "https://tinyurl.com/tj3dbpa"
      }
    };
  },
  components: {
    MenuItem,
    HomeBlock
  },
  methods: {
    openBlock(ref) {
      this.homeBlock.show = true;
      if (ref == "videos-no-quiz") {
        this.homeBlock.title = "Vidéos";
        this.homeBlock.description = "Une description";
      } else if (ref == "videos-quiz") {
        this.homeBlock.title = "Vidéos + Quiz";
      }
    },
    goToPage(title) {
      if (title == "Vidéos + Quiz") {
        this.$router.push("/sites-historiques/videos/edpuzzle");
      } else if (title == "Vidéos") {
        this.$router.push("/sites-historiques/videos/youtube");
      }
    }
  }
};
</script>
<style scoped>
.crosswords {
  background-image: url("~@/assets/wall.jpg");
  min-height: 100vh;
}

.mots-croises {
  background-image: url("~@/assets/mots croises.png");
}

.puzzles {
  background-image: url("~@/assets/puzzle.png");
}

.pendu {
  background-image: url("~@/assets/pendu.png");
}

.memoire {
  background-image: url("~@/assets/memoire.png");
}

.ebook {
  background-image: url("~@/assets/book logo2.png");
}

.video {
  background-image: url("~@/assets/camera.png");
}

.game-category {
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  width: 150px;
  height: 150px;
}
.game-category-inner {
  background-color: rgba(0, 0, 0, 0.4);
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 86px;
}

.modal-dialog {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
}

.modal-content {
  width: 100vw;
  height: 99%;
  border-radius: 0;
}
</style>
<style>
.edpuzzle-logo {
  background-image: url("~@/assets/edpuzzle.jpg");
  background-size: 100%;
  width: 150px;
  height: 60px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>