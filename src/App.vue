<template>
    <div class="field-grid">
      <div v-for="item in data['indexes']" :key="item.index">
        <FieldGrid >
        </FieldGrid>
        {{item.row}}x{{item.col}}
      </div>
    </div>
</template>

<script>
import FieldGrid from './components/FieldGrid.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    FieldGrid
  },
  computed: {
    ...mapState([
      'data'
    ]),
    ...mapGetters([
      
    ]),
  },
  created () {
    this.initialize()
    console.log(this.data['indexes'])
  },
  methods: {
    ...mapMutations([
    
    ]),
    ...mapActions([
      'initialize'
    ]),
  },
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
.field-grid {
  position: relative;
}
</style>
