console.log('funziona');


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    methods: {

    },
    mounted() {
        console.log('vue funziona')
    }
  }).mount('#app')