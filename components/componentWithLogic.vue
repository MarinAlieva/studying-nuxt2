<template>
  <div :class="['component-with-logic', {'blue-color': blueColor}]">
    some content/ some logic
    <button class="component-with-logic__button" @click="setBlueColor">set Blue color</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blueColor: false,
      }
    },
    methods: {
      setBlueColor() {
        console.log('setBlueColorOnBtn');
        this.blueColor = true;
      }
    }
  }
</script>

<style scoped >
.component-with-logic {
  width: 100%;
  height: 400px;
  background-color: red;
  border-radius: 10px;
}
.component-with-logic.blue-color {
  background-color: blue;
}

</style>