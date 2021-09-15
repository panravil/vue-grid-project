<template>
  <div :id="`grid-item-${col}-${row}`" class="item-grid" :style="itemStyles" @click="expandField()">
    <h1>{{col}}/{{row}}</h1>
    
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CustomGridItem',
  props: [
    'row', 'col'
  ],
  computed: {
    ...mapState([
      'data', 'width_unit', 'height_unit', 'expand_step'
    ]),
    ...mapGetters([
    ]),
    itemStyles() {
      return {
        '--height': this.height_unit + 'px',
        '--width': this.width_unit + 'px',
        '--position-top': ( ( this.col - 1) * this.height_unit) + 'px',
        '--position-left': ( ( this.row - 1) * this.width_unit) + 'px',
      };
    }
  },  
  mounted () {
  },
  methods: {
    ...mapMutations([
      'addIndex'
    ]),
    ...mapActions([
      'initialize'
    ]),
    expandField () {
      console.log(this.row + '/' + this.col);
      let temp = [];

      console.log("expand_step", this.expand_step); 
      for(let i=this.row-this.expand_step; i<this.row+this.expand_step+1; i++) {
        for(let j=this.col-this.expand_step; j<this.col+this.expand_step+1; j++) {
          temp.push({row: i, col: j})
        }
      }
      temp.forEach(element => {
        var valObj = this.data['indexes'].filter(function(elem){
            if((elem.row == element.row)&&(elem.col == element.col)) return elem.row;
        });

        if (valObj.length == 0) this.addIndex(element)
      });
      console.log(this.data['indexes'])
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.item-grid {
  position: absolute;
  width: var(--width);
  height: var(--height);
  top: var(--position-top);
  left: var(--position-left);
  background-color: lightgreen;
  border: 1px solid red;
}
</style>
