const caixa_Principal = document.querySelector(".caixa-principal");
const caixa_Perguntas = document.querySelector(".caixa-perguntas");
const caixa_Alternativas = document.querySelector(".caixa-alternativas");
const caixa_Resultados = document.querySelector(".caixa-resultados");
const texto_Resultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "A disseminação de fake news pode ter graves consequências para a sociedade,  propagação de boatos, aumento da polarização política e o enfraquecimento da confiança nas instituições e na mídia. Você tem ciência dessas consequências ao compartilhar informações?",
        alternativas: [
            {
                texto: "Não me preocupo com isso",
                afirmacao: "Acredito na liberdade de expressão, todos têm o direito de expor ideias: sejam verdadeiras ou não.  ",
            },

            {

                texto: "Sim, com toda a certeza!",
                afirmação: "Além de toda as consequências que  a propagação de desinformação podem causar, há também a questão jurídica, pois dependendo da informação disseminada: pode caber processo.",

            },
        ]
    },

    {
        enunciado: "Como a desigualdade social afeta o acesso  a educação de qualidade?",
        alternativas: [
            {
                texto: "Faz com que pessoas com maior poder aquisitivo tenha uma educação de maior qualidade.",
                afirmacao: "Pois, é um problema socioeconômico, no qual quem tem mais recursos tem acesso a tempo, cultura, e materiais de qualidade."
            },

            {
                texto: "Ela não afeta a educação,  pois todos têm acesso aos mesmos recursos.",
                afirmacao: "Independente da condição social, com esforço (hardwork) todos podem alcançar seus objetivos."
            }
        ]
    },

    {
        enunciado: "Quais as causas das desigualdades sociais? A educação pode conscientizar sobre Fake News e Desigualdade Social?",
        alternativas: [
            {
                texto: "Distribuição de renda e baixa qualificação profissional. A educação pode ser a ferramenta para conscientizar a sociedade.",
                afirmacao: "O problema é  político, social e econômico com foco na  má distribuição de renda, consequentemente inoportunidades na  formação de qualificação, tanto profissional quanto pessoal."
            },

            {
                texto: "Falta de acessibilidade e utilização adequada da tecnologia para a qualificação profissional. A educação não interfere na conscientização da sociedade.",
                afirmacao: "Dificuldade em conciliar trabalho com estudo. As barreiras que ainda existem em relação ao acesso a conexão e equipamentos que permitam essa tal formação."
            }
        ]
    }
];

let perg_atual = 0;
let pergunta_atual;
let historia_final = "";

function mostra_pergunta() {
    if (perg_atual >= perguntas.length) {
        mostra_resultado();
        return;
    };
    pergunta_atual = perguntas[perg_atual]
    caixa_Perguntas.textContent = perguntas[0].enunciado
    caixa_Alternativas.textContent = "";
    texto_Resultado.textContent = "";
    mostra_alternativas();
};

mostra_pergunta();


function mostra_alternativas() {
    for (const alternativa of pergunta_atual.alternativas) {
        const botao_alternativas = document.createElement("button")
        botao_alternativas.textContent = alternativa.texto;
        botao_alternativas.addEventListener("click", () => resposta_selecionada(alternativa));
        caixa_Alternativas.appendChild(botao_alternativas);

    };
};

function resposta_selecionada(opcao_selecionada) {
    const afirmacao = opcao_selecionada.afirmacao;
    historia_final += afirmacao + " ";
    perg_atual++;
    mostra_pergunta();
};

function mostra_resultado() {
    caixa_Perguntas.textContent = "em 2049...";
    texto_Resultado.textContent = historia_final;
    caixa_Alternativas.textContent = "";
};
