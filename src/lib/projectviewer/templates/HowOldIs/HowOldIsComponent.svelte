<script lang="ts">
    import type { OldElement } from "./oldelement";

    export let element: OldElement;
</script>

<div class="element">
    <b>{element.name}</b>
    {#if element.subtitle}
        <i>{element.subtitle}</i>
    {/if}
    was released <b>{element.getTimeSinceString()} ago</b>, 
    on {element.getDateProperFormat()}
</div>
<hr>

<style>
    * {
        font-size: 1.5rem;
    }
    .element {
        overflow: auto;
        white-space: nowrap;
    }
    i {
        font-size: .8rem;
    }

</style>