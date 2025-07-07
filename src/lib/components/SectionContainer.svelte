<script lang="ts">
  export let title: string;
</script>

<div class="bg-magma-140 m-3 rounded-3xl p-4 shadow-2xl md:p-6">
  <h2 class="text-magma-10 mb-3 text-2xl font-bold md:mb-4 md:text-3xl">{title}</h2>
  <slot />
</div>
