# CreathusTest

1. Leia (consuma) via post, os dados em jason que esta api retorna; 
2. Imprima no console ou na web os dados de retorno;    
-O código pode ser entregue no email: ronaldo.nascimentomartins@gmail.com  -em formato .zip  
-para executar em um servidor de aplicação (tomcat ou outro de sua escolha) ou outro servidor. 
-Pede-se o script para criação do banco de dados (simples em formato txt).  
Ou pode me enviar a url pra fazer o git clone do projeto no git hub.  

Boa sorte!  Critérios de Avaliação:   
1. Organização e legibilidade do código;  
2. No frontend uso de um dos seguinte frameworks JavaScript: ReactJS, Angular ou VueJS 

# Tecnologias utilizadas
--ReactJS version ^16.13.1
--Docker version 19.03.12
--NodeJS Docker version 19.03.1

# Banco de Dados

## Configurando Mongo

--MongoDB (NoSQL)
--Usando um container do Docker com mongodb, com os seguintes comandos:

```
docker pull mongo

docker ps

docker run --name mongodb -p 27017:27017 -d

docker start mongodb
```
## Modelo de relacionamento do Banco de Dados

```
Projetos : { 
  id: number,
  name: string, 
  description: string, 
  img: string,
  url: string 
}
```
## Passos para configuracao

Clonar o repositório para o seu computador:
1. Entre no diretório no qual deseja clonar o projeto, e execute o comando:
```
git clone https://github.com/SesisnandoLRNeto/Teste-Creathus.git
```
2. Entre no diretório do projeto para continuar:
```
cd Teste Creathus/
```
3. Instale as dependências do frontend (à partir da raiz do projeto):
```
cd frontend/
npm install
```
4. Instale as dependências do backend (à partir da raiz do projeto):
```
cd backend/API/
npm install
```

5. Para rodar o frontend (à partir da raiz do projeto):
```
cd frontend/
npm start
```

6. Para rodar o backend (à partir da raiz do projeto):
```
cd backend/API/
npm run dev
```

7. Importe para o Insomnia ou Postman o arquivo data da API e suas requisicoes (GET, POST, PUT e DELETE) dentro da seguinte pasta
```
cd Teste Creathus/Insomnia_2020-10-08
```

8. Pode utilizar o Robo3T para checar a colecao de dados que e inserida
```
https://robomongo.org/download

```
