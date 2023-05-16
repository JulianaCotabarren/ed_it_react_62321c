export const defineInputType = (string)=> {
    switch (string) {
        case 'price':
            return 'number'
        default:
            return 'text'
    }
}

export const defineIfIsDisabled = (string) => {
    switch (string) {
        case 'id':
            return true
        default:
            return false
    }
}