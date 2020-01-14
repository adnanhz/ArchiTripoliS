<template>
  <div
    style="background-color: #f5f5f5; opacity: 0.95; border: 2px solid #cb9323; border-radius: 2px; height: 460px; width: 80%;"
  >
    <div style="height: 100px;">
      <span style="font-size: 30px; width: 100%; color: #cb9323;">{{title}}</span>
    </div>
    <div style="height: 300px;">
      <slot></slot>
    </div>
    <div>
      <span style="background-color: #cb9323; color: white; padding: 20px;" @click="$emit('continue', title)">Continuer</span>
    </div>
  </div>
</template>
<script>
export default {
    props: ["title"]
}
</script>