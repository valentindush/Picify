<script lang="ts">
  import { Controls_UI } from "../lib/components/controls";
  import SideBar from "../lib/components/SideBar.svelte";
  import { tabs } from "../lib/components/Tabs";

  let active:string = tabs[0].actions[0];
  let activeControl = Controls_UI.find((control)=>control.name == active);
  const setActive = (action:string)=>{
    active = action;
    activeControl = Controls_UI.find((control)=>control.name == active)
  }


</script>
<section class="w-screen h-screen bg-gray-800 flex">
    <SideBar handler={setActive}/>
    <section class="w-[calc(100%-20rem)] p-6">
      <div class="">
        <h1 class="text-xl text-gray-300 font-medium">Online Photo Editor</h1>
        <div class="mt-4 flex gap-4">
          <button class="p-2 px-4 text-gray-300 bg-black rounded active:scale-95">Open</button>
          <button class="p-2 px-4 text-gray-300 bg-black rounded active:scale-95">Export</button>
        </div>
      </div>
      <div class="p-4 rounded mt-4 h-[22rem] border-2 border-gray-600">

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