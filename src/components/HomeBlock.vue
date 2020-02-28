<template>
  <div
    style="background-color: #f5f5f5; 
    opacity: 0.95; border: 2px solid #926d33; border-radius: 2px; height: 480px; 
    min-width: 350px; width: 80%"
  >
    <div style="height: 80px;">
      <span style="font-size: 30px; width: 100%; color: #926d33;">{{title}}</span>
    </div>
    <div style="height: 320px;">
      <slot style="margin-bottom: 20px;"></slot>
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
    <div style="margin-top: 20px;" v-if="title !== 'Projet'">
      <span
        v-if="title == 'Évaluation'"
        data-toggle="modal"
        data-target="#jeu"
        style="background-color: #926d33; color: white; padding: 20px; margin-top: 35px; 
        cursor: pointer;  font-size: 20px;"
        @click="$emit('openIframe', 'https://www.survio.com/survey/d/P0H6P8A2I4Q3M5V4I')"
      >Continuer</span>
      <span
        v-else-if="title == 'Tripoli au cours du temps'"
        data-toggle="modal"
        data-target="#jeu"
        style="background-color: #926d33; color: white; padding: 20px; margin-top: 35px; 
        cursor: pointer;  font-size: 20px;"
        @click="$emit('openIframe', 'https://www.youtube.com/embed/LDl3jpPXx9w')"
      >Continuer</span>
      <span
        v-else
        style="background-color: #926d33; color: white; padding: 20px; 
              margin-top: 35px; cursor: pointer; font-size: 20px;"
        @click="$emit('continue', title)"
        
      >Continuer</span>      
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"]
};
</script>
