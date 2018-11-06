<template>
  <ve-liquidfill :data="chartData"></ve-liquidfill>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['city', 'percent'],
          rows: [{
            city: '上海',
            percent: 0.6
          }]
        }
      }
    }
  }
</script>