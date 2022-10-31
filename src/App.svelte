<script lang="ts">
  import SideBar from "./lib/components/SideBar.svelte";
  import Main from "./pages/Main.svelte";


</script>

<!-- 
  Features

  //Resize
  //Crop
  //Round

  Color===> Red, green, BLue
  Exposure===>//Brightness, saturation, Contrast
  Advanced feature===> //Blur, Glow, Pic collection
  Pre-made effects ===> [...]

  //OOP approach

  IMAGE OBJ{
    PROPERTIES={
      brightness,contrast, dimensions{width,height},aspectRatio,colors{red,green,blue},blur,noise
    }
    getters and setters

    other methods: {
      export: using HTML5 canvas to export the png, jpg or svg image
      reset : {set all properties to their default}
    }
  }

  //UX

  tabs: [
    
  ]

 -->

<main class="">
  <Main/>
</main>