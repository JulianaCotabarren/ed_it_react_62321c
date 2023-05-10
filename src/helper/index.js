export const defineInputType = (string)=> {
    switch (string) {
        case 'price':
            return 'number'
        default:
            return 'text'
    }
}