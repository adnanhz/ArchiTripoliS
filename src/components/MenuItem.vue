<template>
  <div style="width: 100%;" @click="$emit('click');">
    <div
      :style="'background-color:'+ bgcolor + ';border: 6px solid #f5f5f5; border-radius: 2px;' +
               'padding: 10px; opacity: 0.95; margin-top: 10px;'"
    >
      <span style="font-weight: bold; color: white;">{{title}}</span>
    </div>
  </div>
</template>
<script>
export default {
    props: ["title", "bgcolor"],
}
</script>