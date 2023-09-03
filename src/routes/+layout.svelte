<script lang="ts">
    import { onMount } from 'svelte';
    import { setWhiteTheme } from '$lib/theme';
    import { getBoolSetting } from '$lib/settings';
    import './colors.css'
    import './scrollbar.css'

    onMount(() => {
        // Inverted as since dark theme is prioritized and we need to set the "light" value
        if (!getBoolSetting("theme"))
            setWhiteTheme();
    });
</script>

<slot />