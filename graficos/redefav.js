import { getCSS, tickConfig, criarGrafico, incluirTexto } from "./common.js";

async function redesFavoritasMundo() {
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json";
    const res = await fetch(url);
    const dados = await res.json();
    const redes = Object.keys(dados);
    const valores = Object.values(dados);

    const data = [
        {
            values: valores,
            labels: redes,
            type: "pie",
            textinfo: "label+percent",
        },
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-cor'),
        paper_bgcolor: getCSS('--bg-cor'),
        height: 700,
        title: {
            text: 'Redes sociais que os usuários mais gostam',
            x: 0,
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 27
            }
        },
        legend: {
            font: {
                color: getCSS("--cor-principal"),
                size: 16,
            },
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

    incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição em termos de número total de usuários entre as redes sociais, destaca-se como a <span>preferida pelos usuários</span>. Supera até mesmo o <span>Facebook</span>, a plataforma com mais usuários, sendo a terceira opção mais apreciada pelos usuários. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo Instagram em comparação com outras redes sociais.`)
}

redesFavoritasMundo();