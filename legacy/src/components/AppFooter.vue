<template>
    <v-card height="50">
        <v-footer :fixed="true" app
                dark
                absolute

                class="font-weight-medium"
        >
            <v-col
                    class="text-center"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>CSGOff Drop</strong>
            </v-col>
        </v-footer>
    </v-card>
</template>