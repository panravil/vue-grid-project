<template>
  <div :id="`grid-item-${col}-${row}`" class="item-grid" :class="{'show': show}" :style="itemStyles" @click="expandField()">    
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CustomGridItem',
  props: [
    'row', 'col', 'show', 
  ],
  computed: {
    ...mapState([
      'data', 'width_unit', 'height_unit', 'expand_step', 'zoom'
    ]),
    ...mapGetters([
    ]),
    itemStyles() {
      return {
        '--height': this.height + 'px',
        '--width': this.width + 'px',
        '--position-top': ( ( this.col - 1) * this.height) + 'px',
        '--position-left': ( ( this.row - 1) * this.width) + 'px',
      };
    },
    height : function() {
      return this.height_unit * this.zoom / 100;
    },
    width : function() {
      return this.width_unit * this.zoom / 100;
    }
  },  
  mounted () {
  },
  methods: {
    ...mapMutations([
      'addIndex', 'setShow'
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
          temp.push({row: i, col: j, show:0})
        }
      }
      temp.forEach(element => {
        element.show = 1;
        console.log(element)
        this.setShow(element)
        // var valObj = this.data['indexes'].filter(function(elem){
        //     if((elem.row == element.row)&&(elem.col == element.col)) return elem.row;
        // });

        // if (valObj.length == 0) this.addIndex(element)
      });
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
  background-color: #cff2cf;
  border: none;
  margin: -1px;
}
.item-grid.show {
  background-color: #8cfd7b;;
  border: 1px solid rgb(246, 10, 10);
}
</style>
