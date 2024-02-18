export const formatPrice=(amount: number)=>{
    return new Intl.NumberFormat('en-MY',{
        style:'currency',
        currency:'MYR'
    }).format(amount);
};