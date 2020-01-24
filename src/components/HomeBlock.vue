<template>
  <div
    style="background-color: #f5f5f5; opacity: 0.95; border: 2px solid #926d33; border-radius: 2px; height: 460px; width: 80%;"
  >
    <div style="height: 100px;">
      <span style="font-size: 30px; width: 100%; color: #926d33;">{{title}}</span>
    </div>
    <div style="height: 300px;">
      <slot></slot>
      <div v-if="title=='Projet'" style="margin-top: 25px;">
        <img
         style="cursor: pointer;"
          src="~@/assets/powtoon.jpg"
          data-toggle="modal"
          data-target="#jeu"
          @click="$emit('openIframe', 'https://www.youtube.com/embed/GFgBqB1-e_M')"
        />
      </div>
    </div>
    <div v-if="title !== 'Projet' && title !== 'Tripoli au cours du temps'">
      <span
        v-if="title !== 'Évaluation'"
        style="background-color: #926d33; color: white; padding: 20px; margin-top: 35px; cursor: pointer;"
        @click="$emit('continue', title)"
        
      >Continuer</span>
      <span
        v-else
        data-toggle="modal"
        data-target="#jeu"
        style="background-color: #926d33; color: white; padding: 20px; margin-top: 35px; cursor: pointer;"
        @click="$emit('openIframe', 'https://www.survio.com/survey/d/O4Y6A7X6V8F8T4K8P')"
      >Continuer</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"]
};
</script>