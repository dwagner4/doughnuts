<template>
  <div>
     <a-scene>
       <a-assets>
        <a-asset-item id="checkers-obj" src="assets/checkers.obj"></a-asset-item>
        <a-asset-item id="checkers-mtl" src="assets/checkers.mtl"></a-asset-item>
      </a-assets>
      <a-obj-model scale=".5 .5 .5" src="#checkers-obj" mtl="#checkers-mtl"></a-obj-model>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </div>
</template>

<script>

  export default {
    components: {

    },
    computed: {
      
    }
  }
</script>