export const formatPrice = (value) => {
  // Convert price to a number and format it as a currency string
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100);
}