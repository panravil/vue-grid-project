<template>
    <div class="field-grid"  :style="gridStyles">
        <ItemGrid  v-for="item in data['indexes']" :key="item.row" :row="item.row" :col="item.col" class="item-grid-wrapper"/>      
    </div>
</template>

<script>
import ItemGrid from './components/ItemGrid.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    ItemGrid
  },
  computed: {
    ...mapState([
      'data', 'width_unit', 'height_unit',
    ]),
    ...mapGetters([
      'getRowIndexes', 
      'getColIndexes'
    ]),
    gridStyles() {
      return {
        '--position-top': ( -(Math.min.apply(Math, this.getColIndexes) - 1) * this.height_unit) + 'px',
        '--position-left': ( -(Math.min.apply(Math, this.getRowIndexes)- 1) * this.width_unit) + 'px',
      };
    }
  },
  created () {
    this.initialize()
    console.log("row", Math.min.apply(Math, this.getRowIndexes))
    console.log("col", Math.min.apply(Math, this.getColIndexes))
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
  position: relative;
}
.field-grid {
  position: absolute;
  top: var(--position-top);
  left: var(--position-left);
}
</style>
