<template>
  <div class="threeHeat" ref="threeHeat">
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import HelloWorld from "@/components/HelloWorld.vue"
import RenderHeat from "@/assets/js/three/RenderHeat.ts"

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
    renderHeat: any;
    public mounted(){
        let el = this.$refs.threeHeat as HTMLDivElement;
        this.renderHeat = new RenderHeat({
            el: el
        })
    }
}
</script>
