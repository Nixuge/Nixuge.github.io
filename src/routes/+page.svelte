<script lang="ts">
    import './styles.css';
    import ProjectViewer from './ProjectViewer.svelte';
    import SocialPickerVertical from './SocialPickerVertical.svelte';
</script>

<!-- TODO: -->
<!-- mobile/vertical mode -->

<h1>Nixuge.me - Home</h1>
<!-- <p>Visit <a href="/linuxtricks">dsfsdf</a> to read the documentation</p> -->
<div id="content">
    <!-- <h1>Nioxuge.me</h1> -->
    <SocialPickerVertical />
    <ProjectViewer />
</div>

<style>
    #content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 80%;
        width: 90%;
    }
</style>