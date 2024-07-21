<script lang="ts">
    // Props
    export let link: string;
    
    // Assuming no one uses http anymore
    $: httpsLink = (link.startsWith("https://")) ? link : `https://${link}`;

</script>
  
<a href="{httpsLink}">{link}</a>
