<template>
  <div id="app">
    <h1>Simply press your keyboard to get keyCode ;)</h1>
    <p style="margin-top: 2rem">
      <kbd v-if="info.code">{{ info.code }}</kbd>
      <kbd v-if="info.keyCode">{{ info.keyCode }}</kbd>
      <kbd v-if="info.full && !showFull" @click="toggleFull">▼</kbd>
      <kbd v-if="info.full && showFull" @click="toggleFull">▲</kbd>
    </p>
    <pre v-if="info.full && showFull" class="full-info"><code>{{ info.full }}</code>
    </pre>
  </div>
</template>

<script>
  const keys = [
    'which',
    'altKey',
    'code',
    'key',
    'keyCode',
    'metaKey',
    'shiftKey'
  ]
  const getKeys = obj => {
    const ret = {}
    for (const key in obj) {
      if (keys.indexOf(key) !== -1) {
        ret[key] = obj[key]
      }
    }
    return ret
  }

  export default {
    data() {
      return {
        info: {
          keyCode: '',
          code: '',
          full: null
        },
        showFull: false
      }
    },
    mounted() {
      this.handler = e => {
        this.info = {
          keyCode: e.keyCode,
          code: e.code,
          full: JSON.stringify(getKeys(e), null, 2)
        }
      }
      document.addEventListener('keydown', this.handler, false)
    },
    methods: {
      toggleFull() {
        this.showFull = !this.showFull
      }
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
  cursor: default;
}
.full-info {
  font-size: 14px;
  word-wrap: normal;
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  >code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }
}
</style>