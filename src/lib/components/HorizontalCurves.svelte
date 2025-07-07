<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { currentColormap } from '$lib/colormap.js';

  interface Stop {
    offset: string;
    stopColor: string;
  }

  let stops: Stop[] = [];
  let dSin = '';
  let dCos = '';
  let timerId: ReturnType<typeof setInterval>;

  // Define dimensions for full-width SVG
  const viewBoxWidth = 100;
  const viewBoxHeight = 15;
  const segments = 500;
  const waveAmpLarge = 5; // large jitter amplitude
  const waveAmpSmall = 0.3; // small jitter amplitude

  function updateLogoCurve() {
    const yCenter = viewBoxHeight / 2;
    let sinString = `M 0,${yCenter.toFixed(2)}`;
    let cosString = `M 0,${yCenter.toFixed(2)}`;

    // Decide on jitter mode once per update
    const isHeavy = Math.random() > 0.95;
    const useSinCos = isHeavy && Math.random() <= 0.2;
    // Determine heavy jitter region if needed
    let regionStart = 0;
    let regionEnd = 0;
    if (isHeavy && !useSinCos) {
      regionStart = Math.floor(Math.random() * (segments * 0.7));
      regionEnd = regionStart + 5 + Math.floor(Math.random() * (segments * 0.15));
    }

    for (let i = 1; i <= segments; i++) {
      const x = (i / segments) * viewBoxWidth;
      let yOff = Math.random() * waveAmpSmall - waveAmpSmall / 2;
      if (isHeavy) {
        if (useSinCos) {
          yOff = 2 * Math.sin(i / Math.PI);
        } else {
          yOff =
            i >= regionStart && i < regionEnd
              ? Math.random() * waveAmpLarge - waveAmpLarge / 2
              : Math.random() * waveAmpSmall - waveAmpSmall / 2;
        }
      }
      const y = (yCenter + yOff).toFixed(2);
      sinString += ` L ${x.toFixed(2)},${y}`;
      cosString += ` L ${x.toFixed(2)},${y}`;
    }
    dSin = sinString;
    dCos = cosString;
  }

  onMount(() => {
    const cMap = currentColormap;
    const newStops: Stop[] = [];
    const colorStartIndex = 50;
    const colorEndIndex = 205;

    for (let i = colorStartIndex; i <= colorEndIndex; i++) {
      const rgbString = `rgb(${cMap[i][0]},${cMap[i][1]},${cMap[i][2]})`;
      const offset = `${((i - colorStartIndex) / (colorEndIndex - colorStartIndex)) * 100}%`;
      newStops.push({ offset, stopColor: rgbString });
    }
    stops = newStops;

    updateLogoCurve();
    timerId = setInterval(updateLogoCurve, 50);
  });

  onDestroy(() => {
    clearInterval(timerId);
  });
</script>

{#if stops.length > 0}
  <svg
    width="100%"
    height="15px"
    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="separatorGradient">
        {#each stops as v, index}
          <stop offset={v.offset} stop-color={v.stopColor} stop-opacity="1" />
        {/each}
      </linearGradient>
    </defs>
    <g>
      <path
        id="logo-sin-curve-svelte"
        d={dSin}
        stroke="url(#separatorGradient)"
        stroke-width="0.5"
        fill="none"
      />
      <path
        id="logo-cos-curve-svelte"
        d={dCos}
        stroke="url(#separatorGradient)"
        stroke-width="0.5"
        fill="none"
      />
    </g>
  </svg>
{/if}
