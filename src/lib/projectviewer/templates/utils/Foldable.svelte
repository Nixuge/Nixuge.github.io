<script lang="ts">
  // Props
  export let title: string;
  export let sub: boolean = false;
  export let open: boolean = false;

  // Animation
  let animationClass = false;
  let collapsingClass = false;
  // Lots of parts taken from  https://linkedlist.ch/animate_details_element_60/
  // Heavily adapted but still
  function summaryClick(elem: HTMLElement) {
    // Could also use on:click but yeah this works perfect so why not
    elem.addEventListener("click", (event: MouseEvent) => {
      const detailsElement = elem.parentElement!;
      const contentElement = elem.nextElementSibling!;

      if (animationClass || collapsingClass) {
        event.preventDefault();
        return;
      }

      const onAnimationEnd = (cb: () => void) => contentElement.addEventListener("animationend", cb, { once: true });

      // request an animation frame to force Safari 16 to actually perform the animation
      requestAnimationFrame(() => (animationClass = true));
      onAnimationEnd(() => (animationClass = false));

      const isDetailsOpen = detailsElement.getAttribute("open") !== null;
      if (isDetailsOpen) {
        event.preventDefault();
        collapsingClass = true;
        onAnimationEnd(() => {          
          detailsElement.removeAttribute("open");
          collapsingClass = false;
        });
      }
    });
  }
</script>

<details open={open} class="{sub === true ? 'sub' : ''}" >
  <summary use:summaryClick>{title}</summary>
  <div class="{animationClass ? 'animation' : ''} {collapsingClass ? 'collapsing' : ''}">
    <div class="content">
      <slot/>
    </div>
  </div>
  
</details>

<style>
  /* Scroll animation steps */
  details > div {
    overflow: hidden;
    display: grid;
    /* intentionally independent from .animation as Safari 16
    would otherwise ignore the expansion animation. */
    animation-duration: 0.2s;
  }

  /* easeInQuint (animation) & easeOutQuint (collapsing) */
  /* thanks to https://easings.net/ */
  details > .animation {
    animation-name: grid-expand;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }

  details > .collapsing {
    animation-direction: reverse;
    animation-timing-function: cubic-bezier(0.64, 0, 0.78, 0);
  }

  details > div > div {
    min-height: 0;
  }

  @keyframes grid-expand {
    0% {
      grid-template-rows: 0fr;
    }
    100% {
      grid-template-rows: 1fr;
    }
  }
  /* End animation steps */
  
  details {
    background-color: var(--background-3);
    border-radius: 5px;
    margin: 15px;
    padding: 3px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .content {
    /* Overflow y hidden to hide the scrollbar while the animation is going. 
    Don't think this causes any issue. 
    Could also dynamically hide/show overflow y but this works */
    overflow-y: hidden;
    overflow-x: auto;
  }
  details > summary {
    cursor: pointer;
    text-align: center;
    list-style-type: "";
    font-size: 1.5em;
    margin-bottom: 5px;
  }

  details:not(.sub) > summary {
    font-weight: bold;
  }
  details.sub {
    padding: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 5px;
    background-color: var(--background-4);
  }
</style>
