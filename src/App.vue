<template>
    <div>
        <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items="serverItems"
            :items-length="totalItems" :loading="loading" :search="search" item-value="name"
            @update:options="loadItems">
            <template v-slot:tfoot>
                <tr>
                    <td>
                        <v-text-field v-model="name" class="ma-2" density="compact" placeholder="Search name..."
                            hide-details></v-text-field>
                    </td>
                    <td>
                        <v-text-field v-model="calories" class="ma-2" density="compact" placeholder="Minimum calories"
                            type="number" hide-details></v-text-field>
                    </td>
                </tr>
            </template>
        </v-data-table-server>
    </div>
</template>

<script>
import { onBeforeMount } from 'vue';

// Sample data
const storedDesserts = localStorage.getItem('Desserts');
const desserts = storedDesserts ? JSON.parse(storedDesserts) : [];

const FakeAPI = {
    async fetch({ page, itemsPerPage, sortBy, search }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const start = (page - 1) * itemsPerPage;
                const end = start + itemsPerPage;
                const filteredItems = desserts.filter(item => {
                    const matchesName = !search.name || item.name.toLowerCase().includes(search.name.toLowerCase());
                    const matchesCalories = !search.calories || item.calories >= Number(search.calories);
                    return matchesName && matchesCalories;
                });

                const sortedItems = [...filteredItems].sort((a, b) => {
                    if (sortBy.length) {
                        const sortKey = sortBy[0].key;
                        const sortOrder = sortBy[0].order;
                        return sortOrder === 'desc' ? b[sortKey] - a[sortKey] : a[sortKey] - b[sortKey];
                    }
                    return 0;
                });

                const paginatedItems = sortedItems.slice(start, end);
                resolve({ items: paginatedItems, total: filteredItems.length });
            }, 500);
        });
    },
};

export default {
    data() {
        return {
            itemsPerPage: 5,
            headers: [
                { title: 'Dessert (100g serving)', align: 'start', sortable: false, key: 'name' },
                { title: 'Calories', key: 'calories', align: 'end' },
                { title: 'Fat (g)', key: 'fat', align: 'end' },
                { title: 'Carbs (g)', key: 'carbs', align: 'end' },
                { title: 'Protein (g)', key: 'protein', align: 'end' },
                { title: 'Iron (%)', key: 'iron', align: 'end' },
            ],
            serverItems: [],
            loading: true,
            totalItems: 0,
            name: '',
            calories: '',
            search: {},
        };
    },
    watch: {
        name() {
            this.updateSearch();
        },
        calories() {
            this.updateSearch();
        },
    },
    methods: {
        updateSearch() {
            this.search = {
                name: this.name,
                calories: this.calories,
            };
            this.loadItems({ page: 1, itemsPerPage: this.itemsPerPage, sortBy: [] }); // Reset to first page
        },
        loadItems({ page, itemsPerPage, sortBy }) {
            this.loading = true;
            FakeAPI.fetch({ page, itemsPerPage, sortBy, search: this.search }).then(({ items, total }) => {
                this.serverItems = items;
                this.totalItems = total;
                this.loading = false;
            });
        },
    },
    created() {

    },
};
</script>
