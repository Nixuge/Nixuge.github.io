<script lang="ts">
    import type { OldElement } from "./oldelement";

    export let element: OldElement;
</script>

<div class="element">
    <b>{element.name}</b>

    was released <b>{element.getTimeSinceString()} ago</b>, 
    on {element.getDateProperFormat()}
    {#if element.subtitle}
        <div class="subtitle"><i>{element.subtitle}</i></div>
    {/if}
</div>
<hr>

<style>
    * {
        font-size: 1.5rem;
    }
    /* 
    Q: Why am I setting overflow-y to hidden?
    A: because Firefox and Safari both add an unneeded y overflow when I add overflow-x: auto
       When the overflow isn't there everything displays properly.
       Thank you good browers.
    */
    .element {
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
    }
    i {
        font-size: .8rem;
    }
    .subtitle {
        margin-left: 2rem;
        line-height: 1rem;
        font-size: .9rem;
    }

</style>