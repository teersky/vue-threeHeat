import { Scene, PerspectiveCamera, AmbientLight, DirectionalLight, Vector3, WebGLRenderer } from "three";
import Tween from "tween";
import i_threeScene from "./i_threeScene"

export default class ThreeScene {
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    el: HTMLDivElement;
    camera_x: number;
    camera_y: number;
    camera_z: number;
    initLen: 1500;
    constructor(options: i_threeScene) {
        this.el = options.el;
        this.camera_x = 0;
        this.camera_y = 1000;
        this.camera_z = 0;
        this.initLen = 1500;

        this.scene = new Scene();
        this.camera = new PerspectiveCamera(45, this.el.offsetWidth / this.el.offsetHeight, 1, 10000);
        this.renderer = new WebGLRenderer({
            antialias: true,
            alpha: true
        });

        this.initCamear();
        this.initLight();
    }
    initCamear() {
        this.camera.position.set(this.camera_x, this.camera_y, this.camera_z);
        var target = new Vector3();
        this.camera.lookAt(target);
        this.camera.fov = 50;
    }

    initLight() {
        // 设置环境光
        var ambientLight = new AmbientLight(0x606060);
        this.scene.add(ambientLight);
        // 设置平行光
        var directionalLight = new DirectionalLight(0xffffff);
        directionalLight.position.set(1, 0.75, 0.5).normalize();
        this.scene.add(directionalLight);
    }

    createRenderer() {
        /**
         * WebGLRenderer
         * antialias 抗锯齿，平滑，默认false
         * alpha 画布是否包含透明缓冲区，默认false
         * gammaInput: Boolean 所有的纹理和颜色预乘伽马，默认false
         * gammaOutput: Boolean 需要以预乘的伽马输出，默认false
         * shadowMap: 属性有enabled(默认false)/autoUpdate(默认true)/needsUpdate(默认false)/type(默认 THREE.PCFShadowMap)
         * setPixelRatio(value) 设置设备像素比
         * setSize(width, height) 设置渲染器的范围
         * setClearColor(color,alpha) 设置渲染的环境的颜色
         */
       
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight);

        this.renderer.setClearColor(0XFFFFFF, 0);

        this.el.innerHTML = "";
        this.el.appendChild(this.renderer.domElement);

        // this.renderer.gammaInput = true;
        // this.renderer.gammaOutput = true;

        this.renderer.shadowMap.enabled = true;
    }
    /**
     * 初始化FPS函数
     */
    animate() {
        let _self = this;
        requestAnimationFrame(_self.animate.bind(this));
        Tween.update();
    }

}