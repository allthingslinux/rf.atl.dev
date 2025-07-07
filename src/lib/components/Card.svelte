<script lang="ts">
  export let title: string;
  export let icon: string | undefined = undefined;
</script>

<div class="bg-magma-130 rounded-xl p-4 shadow-lg">
  <h3 class="text-magma-20 mb-2 flex items-center text-lg font-semibold">
    {#if icon}
      <span class="{icon} text-magma-40 mr-2"></span>
    {/if}
    {title}
  </h3>
  <slot />
</div>
