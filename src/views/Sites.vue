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
      <div style="width: 50%; display: flex; align-items: flex-start; padding-left: 130px; flex-direction: column; justify-content: center;">
        <div
          class="game-category ebook"   
          data-toggle="modal"
          data-target="#jeu"
          @click="openBlock('ebook')"
        ></div>
        <div
          class="game-category video"
          @click="$router.push('/sites-historiques/videos')"
        ></div>
      </div>

      <div style="width: 50%; height: 400px;">
        <HomeBlock v-if="homeBlock.show" :title="homeBlock.title" @continue="goToPage">
          <div
            v-html="homeBlock.description"
            style="font-size: 25px; overflow-y: scroll; max-height: 100%; text-align: left; padding-left: 15px;"
          ></div>
        </HomeBlock>
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
    openBlock(ref) {
      this.homeBlock.show = true;
      if (ref == "ebook") {
        this.homeBlock.title = "Livres interactifs";
        this.homeBlock.description = `
        Découvrez le hammam Ezzedine et la grande mosquée al-Mansouri à partir de deux
livres interactifs au cours desquels vos connaissances seront évaluées.`;
      } else if(ref == "video") {
                this.homeBlock.title = "Videos";
        this.homeBlock.description = "Une description";
      }
    },
    goToPage(title) {
      if(title == "Livres interactifs") {
        this.$router.push("/sites-historiques/ebooks");
      } else if(title == "Videos") {
        this.$router.push("/sites-historiques/videos");
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