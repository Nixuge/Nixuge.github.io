<script lang="ts">
    export let text1: string;
    export let text2: string;
    export let show1: boolean;
    // Kinda dirty
    // Wanted to use ref but it shows an annoying error with typescript.
    export let css: string = "";

    // This was made for the "Other options" part of the settings page.
    // However, due to css not being able to properly make 
    // an input checkbox and a div stay on the same line,
    // this is unused.
</script>

<div class="fadingtext" style={css}>
    <p class="{show1 ? 'shown' : 'hidden'}">{text1}</p>
    <p class="{show1 ? 'hidden' : 'shown'}">{text2}</p>
</div>

<style>
    .shown, .hidden {
        transition: .2s opacity linear;
    }
    .hidden {
        opacity: 0;
    }
    .shown {
        opacity: 1;
    }
    .fadingtext {
        position: relative;
        height: 2em;
    }
    .fadingtext > * {
        position: absolute;
        left: 0;
        top: 0;
    }
</style>