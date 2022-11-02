<script lang="ts">
  import { Controls_UI } from "../lib/components/controls";
  import SideBar from "../lib/components/SideBar.svelte";
  import { tabs } from "../lib/components/Tabs";
  import { Img } from "../lib/utils/Image";

  let active:string = tabs[0].actions[0];
  let activeControl = Controls_UI.find((control)=>control.name == active);
  const setActive = (action:string)=>{
    active = action;
    activeControl = Controls_UI.find((control)=>control.name == active)
  }

  let image:HTMLImageElement
  let imageInput: HTMLInputElement;
  let initialImageDimensions:{width:number,height:number} = {width:0, height:0};
  let div_height:number;
  let div_width:number;
  let inDimensions: {width:number,height:number} = {
    height: initialImageDimensions.height * div_height/100,
    width: initialImageDimensions.width * div_width/100
  }
  let isImageSelected:boolean = false;

  const setImage = ()=>{
    const file = imageInput.files[0]
    if(file){
      const reader = new FileReader()
      reader.addEventListener('load',(e)=>{
        image.setAttribute("src", reader.result.toString());
        const img = new Image()
        image.src = e.target.result.toString()

        image.onload = (e)=>{
          initialImageDimensions = {width: image.width, height:image.height};
          inDimensions = {
            height: initialImageDimensions.height / div_height*500,
            width: initialImageDimensions.width / div_width*500
          }
          image.width = inDimensions.width
          image.height = inDimensions.height
          isImageSelected = true;
        }

      })
      reader.readAsDataURL(file)
    }
    return
  }

  if(isImageSelected){

    const Image = new Img('',inDimensions)

  }

</script>
<section class="w-screen h-screen bg-gray-800 flex">
    <SideBar handler={setActive}/>
    <section class="w-[calc(100%-20rem)] p-6">
      <div class="">
        <h1 class="text-xl text-gray-300 font-medium">Online Photo Editor</h1>
        <div class="mt-4 flex gap-4">
          <label class="p-2 px-4 text-gray-300 bg-black rounded active:scale-95 cursor-pointer">Open
            <input type="file" bind:this={imageInput} on:change={setImage} accept="image/*" hidden>
          </label>
          <button class="p-2 px-4 text-gray-300 bg-black rounded active:scale-95">Export</button>
        </div>
      </div>
      <div bind:clientHeight={div_height} bind:clientWidth={div_width} class="p-4 rounded mt-4 h-[22rem] border-2 border-gray-600 flex items-center justify-center">
        <img class={``} bind:this={image} alt="">
      </div>
      <div class="controls mt-3 bg-white bg-opacity-10 p-4 rounded">
        {#if activeControl}
          <h2 class="text-gray-300 font-medium text-lg">{activeControl.name}</h2>
          <div class="flex gap-4">
            {#each activeControl.inputs as input}
              <div class="">
                <p class="text-gray-300 font-medium">{input.name}:</p>
                <input type={`${input.inpuType =='number'?'range':''}`} class="cursor-pointer">
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </section>
</section>