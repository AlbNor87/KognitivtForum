<template>
    <nav class="hamburger" @click="toggleMenu()" :class="{active: showMenu}">

        <svg class="burgermenu" xmlns="http://www.w3.org/2000/svg" width="55" height="37">
                
                <rect class="bar top" x="0" y="0" rx="4" ry="4"/>
                <rect class="bar mid" x="0" y="15" rx="4" ry="4"/>
                <rect class="bar bot" x="0" y="30" rx="4" ry="4"/>
                
        </svg>

    </nav>
</template>



<script>
    export default {
        data() {
            return {
                showMenu: false
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            log() {
                console.log('hej!')
            },
            toggleMenu() {
            const menu = document.querySelector('.burgermenu');
            
                function classToggle() {
                this.classList.toggle('active');
                }
                menu.addEventListener('click', classToggle)
            }
        }
    }
</script>

