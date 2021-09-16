<template>
    <div class="field-grid"  :style="gridStyles" @wheel.prevent="handleScroll">
        <CustomGridItem  v-for="item in data['indexes']" :key="item.row" :row="item.row" :col="item.col" :show="item.show" class="item-grid-wrapper"/>      
    </div>
</template>

<script>
import CustomGridItem from './../components/CustomGridItem.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CustomGrid',
  components: {
    CustomGridItem
  },
  computed: {
    ...mapState([
      'data', 'width_unit', 'height_unit', 'zoom'
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
      'setZoom'
    ]),
    ...mapActions([
      'initialize'
    ]),
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      console.log("scroll event", event.deltaY)
      let temp = this.zoom + event.deltaY / 100;
      this.setZoom(temp)
    }
  },
}
</script>

<style>
#CustomGrid {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  position: relative;
}
.field-grid {
  position: absolute;
  margin-top: 60px;
  top: var(--position-top);
  left: var(--position-left);
  width: 100%;
  height: calc(100% - 60px);
  overflow: hidden;
}
.field-grid:after {
  content: " "; 
  clear: both;
}
</style>
