<script context="module">
    import * as api from "api";

    export async function preload(page, session) {
        if (!session.user) {
            return this.redirect(302, "login");
        }
        let profile = await api.profile.getProfile({token: session.user.token});
        if (!profile) {
            return this.redirect(302,"/profile/edit");
        }
        return {profile};
    }
</script>

<script>
    import Profile from "../_components/Profile.svelte";

    export let profile;
</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<div class="item-page page">
    <Profile {profile}/>
</div>
