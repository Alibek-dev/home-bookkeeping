export default function currencyFilter(value, currency = 'KZT') {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency
    }).format(value)
}
