import { getCSS, tickConfig, criarGrafico } from "./common.js";

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--cor-segundaria')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-cor'),
        paper_bgcolor: getCSS('--bg-cor'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 27
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes sociais',
                font: {
                    color: getCSS('--cor-segundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--cor-segundaria')
                }
            }
    }
    }

    criarGrafico(data, layout)
}

quantidadeUsuarios()