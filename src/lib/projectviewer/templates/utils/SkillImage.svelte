<script lang="ts">
    export let baseIconUrl: string = "https://skillicons.dev/icons?i=";
    export let icon: string;
    export let alt: string = icon;

    export let clickUrl: string;
</script>

<a href="https://{clickUrl}" target="_blank" rel="noopener noreferrer"><img class="singleline" src="{baseIconUrl}{icon}" alt="{alt}"></a>

<style scoped>
    img {
        width: 85px;
        height: 85px;
        border-radius: 20px;
    }
</style>