const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
};

const tickConfig = {
    color: getCSS('--cor-principal'),
    size: 16,
    family: getCSS('--fonte')
}

export {getCSS, tickConfig}