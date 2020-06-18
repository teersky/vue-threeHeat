import { MeshPhongMaterial } from "three"
function initMaterial(){
    return new MeshPhongMaterial({
        color: 0xcfcfcf
    }) 
}

export default {
    initMaterial: initMaterial()
}