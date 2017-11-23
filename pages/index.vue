<template>
    <div class="f1 code">
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.login }}
            </li>
        </ul>
        {{ users }}
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState([
        	'users'
        ])
    }

</script>

<style>

</style>
