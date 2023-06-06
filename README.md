# Crud_FullStack
Projeto de CRUD


1. Va no site da supabase
2. Cadastre-se ou faça login
3. Va em "table editor" e escolha "new table"
4. Crie uma tabela chamada "usuarios" (esse nome é obrigatório), com categorias "id" em int8, "nome" em "text" e "idade" em int8 (novamente, esses nomes são obrigatórios para o projeto rodar sem alterações)
5. Feita a tabela, va em "Home" e procure seu Project API. Salve e guarde sua "Project URL" e "API Key"
6. Faça o download da pasta do projeto e abra com a IDE de sua escolha
7. Abra o terminal no local da pasta e escreva "npm install" para baixar os modulos do projeto
8. Abra a pasta "src" e abra o arquivo "createClient.js"
9. No arquivo, existe uma função "createClient()". Entre os parênteses, pegue os valores salvos do seu supabase e coloque da seguinte forma:

createClient(
"Project URL","API Key"
)


10. Use "npm run dev" para ativar o projeto
11. Entre na URL que aparecer e teste!
