<template>
    <div>
        <h1>Bai 1</h1>
        <v-btn>
            Button
        </v-btn>

        <h1>Bai 2</h1>
        <div>
            <v-text-field :rules="rules" hide-details="auto" label="Main input"></v-text-field>
        </div>

        <h1>Bai 3</h1>
        <v-card class="mx-auto" max-width="344">
            <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

            <v-card-title>
                Top western road trips
            </v-card-title>

            <v-card-subtitle>
                1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange-lighten-2" text="Explore"></v-btn>
                <v-spacer></v-spacer>
                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                        time for
                        sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data
                        file! Hey, you
                        add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a
                        way to
                        escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>

        <h1>Bai 4</h1>
        <v-combobox label="Combobox"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-combobox>

        <div>
            <h1>Bai 5</h1>
            <v-btn @click="showAlert = !showAlert">Toggle Alert</v-btn>
            <v-alert v-if="showAlert"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                title="Alert title" type="success"></v-alert>
        </div>

        <h1>Bai 6</h1>
        <div v-if="a">
            <v-alert
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                title="Alert title" type="success"></v-alert>
        </div>

        <v-btn @click="b">Xác nhận</v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const a = ref(true);
const showAlert = ref(false);
const show = ref(false);
const rules = [];

const b = () => {
    a.value = !a.value;
};
</script>

<style></style>
