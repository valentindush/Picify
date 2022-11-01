<script lang="ts">
  import { tabs } from "./Tabs";
  import Icon from 'svelte-icons-pack'
  let activeTab = tabs[0].actions[0];

  const changeTab = (tab) => {
    activeTab = tab;
    console.log(activeTab);
  }
</script>
<nav class="h-full w-[20rem] p-8 pl-16 bg-gray-900 shadow-md">
    <div class="">
        <img src="/logo.svg" alt="No img found">
    </div>
    <div class="tabs">
        <div class="">
            {#each tabs as tab}
                <div class="py-2">
                    <button class="">
                        <p class="text-gray-300 text-lg font-medium">{tab.title}</p>
                        
                    </button>
                    <div class="px-2 py-1">
                        {#each tab.actions as action}
                            <button on:click={()=>changeTab(action)} class={`block text-gray-400 p-1 px-3 rounded mt-1 hover:bg-black ${activeTab == action?"bg-black":"bg-transparent"} active:scale-95`}>
                                {action}
                            </button>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</nav>
