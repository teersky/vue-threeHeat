import ThreeScene from "./threeScene/index.ts";

import i_threeScene from "./threeScene/i_threeScene";
import i_RenderHeat from "./i_RenderHeat"

export default class RenderHeat extends ThreeScene{
    constructor(options: i_RenderHeat){
        let obj: i_threeScene = {
            el: options.el
        };
        super(obj)
    }
}