<template>
    <div>
        <Loader v-if="loading"/>
        <div v-else-if="record">
            <div class="breadcrumb-wrap">
                <router-link to="/history" class="breadcrumb">История</router-link>
                <a @click.prevent class="breadcrumb">
                    {{ record.recordType }}
                </a>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card" :class="[record.typeClass]">
                        <div class="card-content white-text">
                            <p>Описание: {{ record.description }}</p>
                            <p>Сумма: {{ record.amount | currency }}</p>
                            <p>Категория: {{ record.categoryName }}</p>

                            <small>{{ record.date | date('datetime') }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="center" v-else>Запись с id=<strong>{{ $route.params.id }}</strong> не найдена</p>
    </div>
</template>

<script>
    export default {
        name: "Detail-record",
        metaInfo() {
            return {
                title: this.$title('Detail_Title')
            }
        },
        data: () => ({
            record: null,
            loading: true,
        }),
        async mounted() {
            const id = this.$route.params.id
            const record = await this.$store.dispatch('fetchRecordById', id)
            const category = await this.$store.dispatch('fetchCategoryById', record.categoryId)

            this.record = {
                ...record,
                categoryName: category.title,
                recordType: record.type === 'income' ? 'Доход' : 'Расход',
                typeClass: record.type === 'income' ? 'green' : 'red',
            }

            this.loading = false
        }
    }
</script>

<style scoped>

</style>
