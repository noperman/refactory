<template>
  <div id="app">
    <h1>Jangan lupa matikan client.. Kode terus berjalan tiap menit.. Klik inspect untuk melihat log..</h1>
    {{ data }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      timer: '',
      data : []
    }
  },
  mounted () {      
      const that = this
      this.timer = setInterval(async function () {
        await axios
          .post('http://localhost:3000', {'counter': 1}, {headers: {'X-RANDOM' : '93f9h3dx'}})
          .then(res=>{
            that.data.push(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }, 60000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
