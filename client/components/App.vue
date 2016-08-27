<template>
  <div id="app">
    <h1>Simply press your keyboard to get keyCode ;)</h1>
    <p style="margin-top: 2rem">
      <kbd v-if="info.code">{{ info.code }}</kbd>
      <kbd v-if="info.keyCode">{{ info.keyCode }}</kbd>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        info: {
          keyCode: '',
          code: ''
        }
      }
    },
    mounted() {
      this.handler = e => {
        this.info = {
          keyCode: e.keyCode,
          code: e.code
        }
      }
      document.addEventListener('keydown', this.handler, false)
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.handler, false)      
    }
  }
</script>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: impact, sans-serif;
}
h1, h2, h3, h4 {
  margin: 0;
}
#app {
  padding: 10px;
  h1 {
    max-width: 55%;
  }
}
code {
  background-color: #f0f0f0;
  padding: 3px 5px;
  border-radius: 2px;
}
kbd {
  padding: .4rem 3rem;
  border: 1px solid #ccc;
  font-size: 3rem;
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  color: #333;
  box-shadow: inset 0 -1px 0 #bbb;
  border-radius: 4px;
  display: inline-block;
  text-shadow: 0 1px 0 #fff;
  line-height: 1.4;
  white-space: nowrap;
}
</style>