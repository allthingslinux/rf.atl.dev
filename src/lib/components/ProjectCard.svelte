<script lang="ts">
  export let title: string;
  export let href: string;
</script>

<div class="bg-magma-130 rounded-xl p-3 shadow-lg md:p-4">
  <h3 class="text-magma-30 mb-1 text-lg font-semibold md:text-xl">{title}</h3>
  <p class="text-magma-10 text-xs md:text-sm"><slot /></p>
  <a {href} class="text-magma-40 hover:text-magma-30 mt-2 inline-block text-xs md:text-sm"
    >Learn more &rarr;</a
  >
</div>
