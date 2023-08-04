<script lang="ts">
    export let title: string;
    export let sub: boolean = false;
</script>

<details class="{sub === true ? 'sub' : ''}">
    <summary>{title}</summary>
    <slot/>
</details>

<style>
  details {
    overflow: auto;
    background-color: #333;
    border-radius: 5px;
    margin: 15px;
    padding: 3px;
    padding-left: 8px;
    padding-right: 8px;
  }
  details > summary {
    cursor: pointer;
    text-align: center;
    list-style-type: "";
    font-size: 1.5em;
  }

  details:not(.sub) > summary {
    font-weight: bold;
  }
  details.sub {
    padding: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 5px;
    background-color: #444;
  }
</style>