<script setup lang="js">
import Card from 'primevue/card';
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <Card class="max-w-sm w-full">
                    <template #title>Starter Plan</template>
                    <template #subtitle>For personal projects</template>
                    <template #content>
                        <p class="m-0">Includes essential features, basic analytics and access to community support.</p>
                    </template>
                    <template #footer>
                        <span class="text-sm text-surface-500 dark:text-surface-400">Cancel anytime. No credit card
                            required.</span>
                    </template>
                </Card>
            </v-col>
        </v-row>
    </v-container>
</template>