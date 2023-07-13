function formatarData() {
    const seletorPais = document.getElementById('seletorPais');
    const paisSelecionado = seletorPais.value;
    const hoje = new Date();
    const formatadorBR = new Intl.DateTimeFormat('pt-BR');
    const formatadorEUA = new Intl.DateTimeFormat('en-US');
    const formatadorEUR = new Intl.DateTimeFormat('fr-FR');
    const valor = document.getElementById('valor');
    const conversorBR = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const conversorUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const conversorEUR = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });


    if (paisSelecionado == "BRL") {

        document.getElementById('dataFormatada').textContent = formatadorBR.format(hoje);
        document.getElementById('valorConvertido').textContent = `O valor já está em reais`;
    }
    else if (paisSelecionado == "USD") {

        const conversao = valor.value * 0.21;
        document.getElementById('dataFormatada').textContent = `A data de hoje no formato dos Estados Unidos é ${formatadorEUA.format(hoje)}`;
        document.getElementById('valorConvertido').textContent = `O valor em Dólar de ${conversorBR.format(valor.value)} é de ${conversorUSD.format(conversao)}`;

    }
    else if (paisSelecionado == "EUR") {
        const conversao = valor.value * 0.19;
        document.getElementById('dataFormatada').textContent = `A data de hoje no formato europeu é ${formatadorEUR.format(hoje)}`;
        document.getElementById('valorConvertido').textContent = `O valor em Euros de ${conversorBR.format(valor.value)} é de ${conversorUSD.format(conversao)}`;
    }
    else {
        document.getElementById('dataFormatada').textContent = 'Escolha uma opção válida!';
        
    }
}



