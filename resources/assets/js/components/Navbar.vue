<template>
    <nav class="kf-nav">

        <div class="kf-nav-container">

            <div class="kf-nav-logo"></div>

            <div class="kf-nav-options">

                <router-link class="nav-item active" to="/" exact>Start</router-link>
                <router-link class="nav-item dropDown" to="/services" exact>Tjänster ▾
                <div class="dropDown-content">
                        <router-link class="dropDown-item first" to="/" exact>Privatpersoner</router-link>
                        <router-link class="dropDown-item" to="/" exact>Företag</router-link>
                        <router-link class="dropDown-item" to="/" exact>Offentlig sektor</router-link>
                    </div> </router-link>
                <router-link class="nav-item" to="/office" exact>Mottagningen</router-link>
                <router-link class="nav-item" to="/about" exact>Om oss</router-link>
                <router-link class="nav-item" to="/kbt" exact>Om KBT</router-link>
                <router-link class="nav-item" to="/contact" exact>Kontakt</router-link>

            </div>

            <!-- <hamburger class="mobile"></hamburger> -->

            <div class="mobile">

                <nav class="hamburger" @click="toggleMenu()" :class="{active: showMenu}">

                    <svg class="burgermenu" :class="{active: showMenu}" xmlns="http://www.w3.org/2000/svg" width="55" height="37">
                        
                        <rect class="bar top" x="0" y="0" rx="4" ry="4"/>
                        <rect class="bar mid" x="0" y="15" rx="4" ry="4"/>
                        <rect class="bar bot" x="0" y="30" rx="4" ry="4"/>
                        
                    </svg>

                </nav>

                

            </div>
            

        </div>

        <div class="accordion" :class="{ active : showMenu}">
            <div class="accordion-items">

                    <router-link @click.native="toggleMenuSlow()" class="active" to="/" exact>Start</router-link>
                    <router-link @click.native="toggleMenuSlow()" class="" to="/services" exact>Tjänster</router-link>
                    <router-link @click.native="toggleMenuSlow()" class="" to="/office" exact>Mottagningen</router-link>
                    <router-link @click.native="toggleMenuSlow()" class="" to="/about" exact>Om oss</router-link>
                    <router-link @click.native="toggleMenuSlow()" class="" to="/kbt" exact>Om KBT</router-link>
                    <router-link @click.native="toggleMenuSlow()" class="" to="/contact" exact>Kontakt</router-link>
                    
            </div>
        </div>

    </nav>
</template>

<script>
    export default {
        data() {
            return {
                showMenu: false,

                isActive: {

                }
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu;
            },
            toggleMenuSlow() {
                setTimeout(() => {
                    this.showMenu = !this.showMenu;
                }, 400);  
            }
        }
    }
</script>
