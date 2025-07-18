# Gerador de Planilha (.XLSX) para Habilitação de Certificados

Este projeto é uma aplicação web simples feita em PHP e HTML+JavaScript para cadastrar dados e gerar uma planilha Excel (.xlsx) para habilitação de certificados.

## Como funciona

1. **Cadastro de Dados**
   - O usuário preenche um formulário com:
     - Nome
     - Número de Série
     - Ativar (SIM/NÃO)
     - Motivo de desativação/ativação (1 ou 4)
     - Data Inicial
     - Data Final
   - Ao enviar, os dados são salvos em um arquivo `dados.csv` no servidor.

2. **Geração do Arquivo XLSX**
   - Ao clicar em "Gerar XLSX", o sistema lê o arquivo `dados.csv` e converte para um arquivo Excel (.xlsx) usando JavaScript (biblioteca SheetJS) direto no navegador.
   - O arquivo XLSX é baixado automaticamente.
   - Após o download, o arquivo `dados.csv` é apagado do servidor e recriado vazio, garantindo que os dados antigos não fiquem salvos.

3. **Limpeza Automática**
   - Sempre que um novo dado é cadastrado, ele é adicionado ao CSV.
   - Sempre que um XLSX é gerado, o CSV é limpo para evitar duplicidade de dados.

## Estrutura dos Arquivos

- `index.html`: Página principal com o formulário e botão para gerar o XLSX.
- `adddados.php`: Recebe os dados do formulário e adiciona ao CSV.
- `excluircsv.php`: Apaga e recria o arquivo CSV após gerar o XLSX.
- `dados.csv`: Arquivo temporário onde os dados ficam salvos até serem baixados.
- `README.md`: Este arquivo.

## Observações

- O projeto não depende de banco de dados.
- O XLSX é gerado no navegador, não no servidor.
- O sistema é simples e ideal para uso local ou em ambientes controlados.


----------------------------------------------------------------------------------------------------------------------------------------------

# Versão 2.0 com executável

### Gerador de planilha 2.0 [Repositório](https://github.com/TheoStracke/gerador-planilha-v2.0)
