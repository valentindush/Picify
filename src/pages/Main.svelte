<script lang="ts">
  import SideBar from "../lib/components/SideBar.svelte";
</script>
<section class="w-screen h-screen bg-gray-800 flex">
    <SideBar/>
    <section class="w-[calc(100%-20rem)] p-6">
      <div class="">
        <h1 class="text-xl text-gray-300 font-medium">Online Photo Editor</h1>
        <div class="mt-4 flex gap-4">
          <button class="p-2 px-4 text-gray-300 bg-black rounded active:scale-95">Open</button>
          <button class="p-2 px-4 text-gray-300 bg-black rounded active:scale-95">Export</button>
        </div>
      </div>
      <div class="p-4 rounded mt-4 h-1/2 border">

      </div>
      <div class="controls">
        
      </div>
    </section>
</section>