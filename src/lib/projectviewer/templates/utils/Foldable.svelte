<script lang="ts">
    export let title: string;
    export let sub: boolean = false;
    export let open: boolean = false;
</script>

<details open={open} class="{sub === true ? 'sub' : ''}">
    <summary>{title}</summary>
    <div id="content">
        <slot/>
    </div>
    
</details>

<style>
  details {
    background-color: #333;
    border-radius: 5px;
    margin: 15px;
    padding: 3px;
    padding-left: 8px;
    padding-right: 8px;
  }
  #content {
    overflow: auto;
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
    background-color: #444;
  }
</style>