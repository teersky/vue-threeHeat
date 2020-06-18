import { Mesh, BoxGeometry, BoxBufferGeometry } from "three"
import material from "../material/index"

class Grometry{
    constructor(){

    }
    initCude(options: any){
        let type = options.type || "cube";
        let _width = options.width || 1;
        let _height = options.height || 1;
        let _depth = options.depth || 1;
        let _widthSeg = options.widthSeg || 1;
        let _heightSeg = options.heightSeg || 1;
        let _depthSeg = options.depthSeg || 1; 
        let _material = options.material || material.initMaterial
        let _geometry = null;
        if(options.type === "buffet"){
            _geometry = new BoxBufferGeometry(_width, _height, _depth, _widthSeg, _heightSeg, _depthSeg);
        } else {
            _geometry = new BoxGeometry(_width, _height, _depth, _widthSeg, _heightSeg, _depthSeg);
        }
        return new Mesh(_geometry, _material)
    }

    initSphere(options: any){
        // let _geometry = new SphereGeometry(_radius, )
    }
}