<template>

    <div class="dropDownMenu">

        <router-link class="active" to="/" exact>Start</router-link>
        <router-link class="" to="/about" exact>Om oss</router-link>
        <router-link class="" to="/services" exact>Tjänster</router-link>
        <router-link class="" to="/contact" exact>Kontakt</router-link>

    </div>

</template>

<script>
    export default {
        mounted() {
            console.log('Hamburger mounted.')
        },
        methods: {
            log() {
                console.log('hej!')
            }
        }
    }
</script>
