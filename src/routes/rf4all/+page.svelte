<script lang="ts">
  import HorizontalCurves from '$lib/components/HorizontalCurves.svelte';
  import SectionContainer from '$lib/components/SectionContainer.svelte';
  import Card from '$lib/components/Card.svelte';

  const handySites = [
    {
      id: 'websdrs',
      title: 'KiwiSDR/OpenWebRX/WebSDR',
      description:
        'Software Defined Radios that can be accessed over the internet. KiwiSDR is for HF reception and has a more intuitive interface for most users. OpenWebRX is for any band reception and is software that can be installed on a Raspberry Pi. WebSDR is for HF reception, is the oldest of the three, and is generally unintuitive (subjective) and does not include decoders built-in.',
      links: [
        {
          href: 'http://kiwisdr.com/public/',
          text: 'KiwiSDR Instance List'
        },
        {
          href: 'http://rx.linkfanel.net/',
          text: 'Linkfanel KiwiSDR/WebSDR Map'
        },
        {
          href: 'https://rx-tx.info/map-sdr-points',
          text: 'rx-tx.info WebSDR/OpenWebRX/KiwiSDR Map'
        }
      ]
    },
    {
      id: 'hamstudy',
      title: 'HamStudy',
      description:
        'A site that helps you study for your Ham Radio license using flashcards and practice exams.',
      links: [
        {
          href: 'https://hamstudy.org/',
          text: 'HamStudy'
        }
      ]
    },
    {
      id: 'sigidwiki',
      title: 'Signal Identification Wiki',
      description: 'Handy site that lists a lot of different Ham Radio signals.',
      links: [
        {
          href: 'https://www.sigidwiki.com/',
          text: 'Signal Identification Wiki'
        }
      ]
    }
  ];

  const softwareList = [
    {
      id: 'sdrsharp',
      title: 'SDR#',
      description:
        'SDR# is the most popular SDR software for Windows. It is easy to use and has a lot of plugins available.',
      platforms: ['icon-[mdi--windows] text-blue-500'],
      link: {
        href: 'https://airspy.com/download/',
        text: 'SDR#'
      }
    },
    {
      id: 'sdrpp',
      title: 'SDR++',
      description:
        'SDR++ is a newer SDR software that is cross-platform and has a intuitive and modern interface. It does not have many decoders or similar yet however due to it being pretty new.',
      platforms: [
        'icon-[mdi--windows] text-blue-500',
        'icon-[mdi--apple] text-magma-10',
        'icon-[uil--linux] text-yellow-500',
        'icon-[mdi--android] text-green-500'
      ],
      link: {
        href: 'https://www.sdrpp.org/',
        text: 'SDR++'
      }
    },
    {
      id: 'sdrangel',
      title: 'SDRangel',
      description:
        'SDRangel is a SDR software that is cross-platform and is feature-packed. It has a lot of decoders and similar built-in including TX capabilities.',
      platforms: [
        'icon-[mdi--windows] text-blue-500',
        'icon-[mdi--apple] text-magma-10',
        'icon-[uil--linux] text-yellow-500',
        'icon-[mdi--android] text-green-500'
      ],
      link: {
        href: 'https://www.sdrangel.org/',
        text: 'SDRangel'
      }
    },
    {
      id: 'satdump',
      title: 'Satdump',
      description:
        'Satdump is an all-in-one suite for all things relating to satellites. It includes decoders for many satellites, satellite tracking with rotator support, and support for making projections and composites from satellite images.',
      platforms: [
        'icon-[mdi--windows] text-blue-500',
        'icon-[mdi--apple] text-magma-10',
        'icon-[uil--linux] text-yellow-500',
        'icon-[mdi--android] text-green-500'
      ],
      link: {
        href: 'https://www.satdump.org',
        text: 'Satdump'
      }
    }
  ];
</script>

<svelte:head>
  <title>rf4all - All Things RF</title>
  <meta
    name="description"
    content="Information on how to get into Ham Radio without expensive gear. Learn about handy sites and software."
  />
</svelte:head>

<div class="bg-magma-150 text-magma-10 min-h-screen p-2 md:p-4">
  <SectionContainer title="rf4all">
    <div class="mb-4 flex items-center justify-between">
      <p class="text-magma-20 text-lg">
        Information on how to get into Ham Radio without expensive gear.
      </p>
    </div>
    <hr class="border-magma-120 my-4" />
    <h3 class="text-magma-10 mb-2 text-2xl">Table of Contents</h3>
    <ul class="text-magma-30 list-inside list-disc space-y-1">
      <li><a href="#sites" class="hover:text-magma-10">+ Handy sites</a></li>
      <li><a href="#software" class="hover:text-magma-10">+ Software</a></li>
    </ul>
  </SectionContainer>

  <HorizontalCurves />

  <SectionContainer title="Handy sites">
    <p class="text-magma-20 mb-4 text-lg">Useful sites for Ham Radio.</p>
    <div class="space-y-4">
      {#each handySites as site}
        <Card title={site.title}>
          <p class="text-magma-10 mb-3 text-sm">{site.description}</p>
          <hr class="border-magma-120 my-3" />
          <div class="flex flex-wrap gap-2">
            {#each site.links as link}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                class="bg-magma-120 hover:bg-magma-110 text-magma-10 rounded-md px-3 py-2 text-sm transition-colors"
                >{link.text}</a
              >
            {/each}
          </div>
        </Card>
      {/each}
    </div>
  </SectionContainer>

  <HorizontalCurves />

  <SectionContainer title="Software">
    <p class="text-magma-20 mb-4 text-lg">Useful software for Ham Radio.</p>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      {#each softwareList as sw}
        <Card title={sw.title}>
          <p class="text-magma-10 mb-3 text-sm">{sw.description}</p>
          <div class="mb-3 flex space-x-2">
            {#each sw.platforms as platformIcon}
              <span class="{platformIcon} text-2xl"></span>
            {/each}
          </div>
          <hr class="border-magma-120 my-3" />
          <a
            href={sw.link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="bg-magma-120 hover:bg-magma-110 text-magma-10 rounded-md px-3 py-2 text-sm transition-colors"
            >{sw.link.text}</a
          >
        </Card>
      {/each}
    </div>
  </SectionContainer>
</div>
