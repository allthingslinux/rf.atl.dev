<script lang="ts">
  import HorizontalCurves from '$lib/components/HorizontalCurves.svelte';
  import SectionContainer from '$lib/components/SectionContainer.svelte';
  import Card from '$lib/components/Card.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    const textClip = document.querySelector<HTMLElement>('.rf-text-clip');
    if (textClip) {
      const images = ['scroll.png', 'scroll1.png', 'scroll2.png', 'scroll3.png'];
      const randomImage = images[Math.floor(Math.random() * images.length)];
      textClip.style.backgroundImage = `url('${randomImage}')`;
    }
  });
</script>

<h1 class="text-magma-10 py-7 text-center text-6xl font-bold md:text-9xl">
  <span>All Things</span>
  <span class="rf-text-clip">RF</span>
</h1>
<p class="text-magma-20 px-2 text-center text-xl md:text-2xl">
  A community for discussing Radio Frequency (RF) technology, antennas, and software-defined radios
  (SDRs) in the context of Linux and open-source software.
</p>
<noscript>
  <p>
    We try our best to make this site JS accessible, but some things may not work as intended.<br />
    If anything does not work as expected, this is considered a non-issue and will not be fixed.
  </p>
</noscript>

<HorizontalCurves />

<div id="quicklinks" class="text-magma-10 m-2 text-center text-lg">
  <a
    href="/rf4all"
    class="bg-magma-100 hover:bg-magma-90 text-magma-10 rounded-md px-3 py-2 text-sm transition-colors"
    >rf4all</a
  >

  <!-- svelte-ignore a11y_invalid_attribute -->
  <a
    href="#"
    class="bg-magma-90 hover:bg-magma-80 text-magma-10 rounded-md px-3 py-2 text-sm transition-colors"
    >more links coming soon</a
  >
</div>

<HorizontalCurves />

<div class="grid grid-cols-1 md:grid-cols-2">
  <SectionContainer title="Join our community">
    <p class="text-magma-20 mb-3 text-sm md:mb-4 md:text-base">
      We are a subcommunity of the <a
        href="https://allthingslinux.org/"
        class="text-magma-40 hover:text-magma-30">All Things Linux</a
      > community. We are comprised of hobbyists who like to tinker with Radio Frequency (RF) technology.
      We discuss everything from antennas to software-defined radios (SDRs) and more.
    </p>

    <h3 class="text-magma-10 mb-2 text-lg font-semibold md:text-xl">How to join:</h3>
    <ol class="text-magma-20 list-inside list-decimal space-y-1 text-sm md:text-base">
      <li>
        Join the <a href="https://allthingslinux.org/" class="text-magma-40 hover:text-magma-30"
          >All Things Linux</a
        >
        Discord server here:
        <a href="https://discord.gg/linux" class="text-magma-40 hover:text-magma-30"
          >https://discord.gg/linux</a
        >
      </li>
      <li>
        Find the <code class="bg-magma-150 text-magma-30 rounded px-1">#forum</code> channel in the channel
        list.
      </li>
      <li>Search "All Things RF".</li>
      <li>Either send a message in the post or click the follow button.</li>
    </ol>
  </SectionContainer>

  <SectionContainer title="Our Projects">
    <div class="space-y-3">
      <ProjectCard title="rf4all" href="/rf4all">
        Information on how to get into Ham Radio without expensive gear. Learn about handy sites and
        software.
      </ProjectCard>
      <ProjectCard title="quicklinks" href="#quicklinks">
        Quick links to quickly access useful resources related to RF and SDRs.
      </ProjectCard>
      <p class="text-magma-20 pt-2 text-center">More projects coming soon...</p>
    </div>
  </SectionContainer>
</div>

<HorizontalCurves />

<SectionContainer title="Reasons to start RF as a hobby">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <Card title="Can be very cheap, free even" icon="icon-[mdi--dollar-off]">
      <p class="text-magma-10 mb-2 text-sm">
        While the world of RF can seem daunting with specialized equipment, getting your feet wet
        doesn't require a hefty investment. You can start exploring the radio spectrum with a
        surprisingly affordable
        <a href="https://www.rtl-sdr.com/about-rtl-sdr/" class="text-magma-40 hover:text-magma-30"
          >RTL-SDR dongle</a
        >
        (often less than $30!) and a simple piece of wire for an antenna.
      </p>
      <p class="text-magma-10 mb-2 text-sm">
        Even before spending a dime, you can tune into global radio signals using one of the
        <a href="http://rx.linkfanel.net/" class="text-magma-40 hover:text-magma-30"
          >many online SDRs (WebSDRs)</a
        >. These are receivers shared by other hobbyists, accessible right from your web browser,
        offering a fantastic way to discover what's out there. Many fascinating signals, like those
        from aircraft or local repeaters, can be picked up with very basic setups.
      </p>
    </Card>

    <Card title="RF is everywhere" icon="icon-[mdi--antenna]">
      <p class="text-magma-10 mb-3 text-sm">
        Almost every electronic device uses (or unintentionally emits) RF signals. There are
        hundreds of different types of RF signals, all with their own unique properties and uses.
        Because of this you can find radio signals anywhere, from your room to even places in
        nature! One of the first things that may pop into your mind is hacking <a
          href="https://allthingslinux.org/code-of-conduct#17-piracy--penetration-testing"
          class="text-magma-40 hover:text-magma-30"
          >(NOTE: if you want to discuss this please view the rule about this by clicking this)</a
        >, but there are a HUGE amount of other interesting applications for RF technology!
      </p>
      <p class="text-magma-40 mb-2 text-xs font-semibold">
        DISCLAIMER: Depending on your country, some of these applications may be illegal or require
        a license to operate. Please check your local laws before operating any RF equipment. We
        tried to make sure examples in this list will be *generally* legal, but we <strong
          class="text-magma-60">cannot guarantee it</strong
        >.
      </p>
      <p class="text-magma-10 mb-2 text-sm font-semibold">
        A very small subset of examples include:
      </p>
      <ul class="text-magma-20 list-disc space-y-1 pl-5 text-sm">
        <li>Listening to weather satellites</li>
        <li>
          Scattering radio waves off many things (the moon, meteors, ionosphere, rain even!) to get
          huge distances
        </li>
        <li>Analyzing unknown signals</li>
        <li>Listening to (and even talking to) the International Space Station</li>
      </ul>
    </Card>

    <Card title="Theres something for (almost) everyone" icon="icon-[mdi--account-group-outline]">
      <div class="space-y-3">
        <div>
          <p class="text-magma-10 flex items-center font-semibold">
            <span class="icon-[mdi--code-braces] text-magma-40 mr-2 text-xl"></span>
            Developers
          </p>
          <p class="text-magma-20 ml-7 text-sm">
            Craft software to decode signals, automate radio tasks, or build custom RF tools.
          </p>
        </div>
        <div>
          <p class="text-magma-10 flex items-center font-semibold">
            <span class="icon-[mdi--telescope] text-magma-40 mr-2 text-xl"></span>
            Astonomy
          </p>
          <p class="text-magma-20 ml-7 text-sm">
            Listen to satellites, capture images from weather spacecraft, or learn about radio
            astronomy.
          </p>
        </div>
        <div>
          <p class="text-magma-10 flex items-center font-semibold">
            <span class="icon-[mdi--tools] text-magma-40 mr-2 text-xl"></span>
            Tinkerers
          </p>
          <p class="text-magma-20 ml-7 text-sm">
            Build your own antennas, modify existing hardware, or create custom RF projects.
          </p>
        </div>
        <div>
          <p class="text-magma-10 flex items-center font-semibold">
            <span class="icon-[mdi--compass-outline] text-magma-40 mr-2 text-xl"></span>
            Explorers
          </p>
          <p class="text-magma-20 ml-7 text-sm">
            Hunt for distant or unusual signals, and explore the radio spectrum.
          </p>
        </div>
        <div>
          <p class="text-magma-10 flex items-center font-semibold">
            <span class="icon-[mdi--account-multiple-outline] text-magma-40 mr-2 text-xl"></span>
            Conversationalists (theres probably a better word for this)
          </p>
          <p class="text-magma-20 ml-7 text-sm">
            Talk/listen to people countries away, even from across the world!
          </p>
        </div>
        <p>
          Can't find something, feel free to ask. We are always happy to help people find what they
          are looking for!
        </p>
      </div>
    </Card>
  </div>
</SectionContainer>

<HorizontalCurves />
<p class="text-magma-20 text-center text-sm">
  Design by <a href="https://accuratelinuxgraphs.com/" class="text-magma-40 hover:text-magma-30"
    >Accurate Linux Graphs</a
  >.<br />
  join us now and share the software... defined radios
  <button
    type="button"
    class="text-magma-40 hover:text-magma-30"
    aria-label="explanation"
    on:click={() => {
      alert(
        '"join us now and share the software" is an in joke in the accuratelinuxgraphs.com community due to the song featuring it being put on accuratelinuxgraphs as a joke'
      );
    }}>(?)</button
  >
</p>

<style>
  .rf-text-clip {
    background-image: url('scroll.png');
    background-size: auto 200%; /* Adjust background size for scrolling effect */
    background-repeat: repeat-y;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent; /* Added for better cross-browser support */
    display: inline-block; /* Added for rendering consistency */
    /* Updated to use CSS variables directly for filter, as Tailwind doesn't generate filter utilities from theme colors by default */
    filter: drop-shadow(0 0 5px var(--color-magma-100));
    animation: scroll-background 10s linear infinite;
  }

  @keyframes scroll-background {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 200%; /* Scroll the height of the image twice */
    }
  }
</style>
