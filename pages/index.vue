<template>
    <div class="f1 code">
        Hello, wwww
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
        {{ users }}
    </div>
</template>

<script>
    import axios from '../plugins/axios'

    export default {
    	asyncData() {
    		return axios.get("users")
                .then(res => ({
                	users: res.data
                }))
        }
    }

</script>

<style>

</style>
