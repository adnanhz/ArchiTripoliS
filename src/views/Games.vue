<template>
  <div class="games container-fluid">
    <div
      style="display: flex; flex-wrap: wrap; justify-content: space-around; align-items: center;"
    >
    <div style="width: 100%; display: flex; justify-content: space-between;">
        <span
          style="width: 10%; height: 94px; background-color: white; 
                    padding: 15px; margin-top: 10px; border: 6px solid #f5f5f5;
                    font-size: 40px;cursor: pointer;"
          @click="$router.back()"
        >🡄</span>
        <MenuItem style="margin-bottom: 150px; width: 89%; font-size: 40px;" bgcolor="#3f5756" title="Jeux" />
    </div>
      <div class="game-category mots-croises" @click="$router.push('/jeux/mots-croises')">
      </div>
      <div class="game-category puzzles" @click="$router.push('/jeux/puzzles')">
      </div>
      <div class="game-category pendu" @click="$router.push('/jeux/pendu')">
      </div>
      <div class="game-category memoire" @click="$router.push('/jeux/memoires')">
      </div>
    </div>
  </div>
</template>
<script>
import MenuItem from '@/components/MenuItem';
export default {
    components: {
        MenuItem
    }
}
</script>
<style scoped>
.games {
  background-image: url("~@/assets/wall.jpg");
  min-height: 100vh;
}

.mots-croises {
    cursor: pointer;
  background-image: url("~@/assets/mots croises.png");
}

.puzzles {
    cursor: pointer;
  background-image: url("~@/assets/puzzle.png");
}

.pendu {
    cursor: pointer;
  background-image: url("~@/assets/pendu.png");
}

.memoire {
    cursor: pointer;
  background-image: url("~@/assets/memoire.png");
}

.game-category {
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  width: 200px;
  height: 200px;
}
.game-category-inner {
  background-color: rgba(0, 0, 0, 0.4);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 26px;
}
</style>