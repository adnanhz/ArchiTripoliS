<template>
  <div
    style="background-color: #f5f5f5; opacity: 0.95; border: 2px solid #cb9323; border-radius: 2px; height: 460px; width: 80%;"
  >
    <div style="height: 100px;">
      <span style="font-size: 30px; width: 100%; color: #cb9323;">{{title}}</span>
    </div>
    <div style="height: 300px;">
      <slot></slot>
      <div v-if="title=='Projet'" style="margin-top: 25px;">
        <img
          src="~@/assets/powtoon.jpg"
          data-toggle="modal"
          data-target="#jeu1"
          @click="$emit('openIframe', 'https://www.youtube.com/embed/GFgBqB1-e_M')"
        />
      </div>
    </div>
    <div v-if="title !== 'Projet'">
      <span
        v-if="title !== 'Évaluation'"
        style="background-color: #cb9323; color: white; padding: 20px; margin-top: 35px;"
        @click="$emit('continue', title)"
      >Continuer</span>
      <span
        v-else
        data-toggle="modal"
        data-target="#jeu1"
        style="background-color: #cb9323; color: white; padding: 20px; margin-top: 35px;"
        @click="$emit('openIframe', 'https://www.survio.com/survey/d/P0H6P8A2I4Q3M5V4I')"
      >Continuer</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"]
};
</script>