# Login com JWT/Autenticação e Webstorage 💻👮‍♂️

## Introdução
Olá! Este repositório foi feito com objetivo de salvar e documentar o projeto de criação de uma tela de login básica com algumas validações. Esta tela de login foi utilizada em um outro <a href="https://github.com/castellogui/umReal">projeto</a> de login/crud com autenticação utilizando JWT.


## Detalhes sobre o login
Para fazer as validações no front-end do formulário e configurações sobre itens requeridos, utilizei o pacote para VueJS: VeeValidade. Outro plugin utilizado para estilização dos formulários foi o PrimeVue, uma biblioteca de design similar ao Materialize e Bootstrap.

![image](https://user-images.githubusercontent.com/78494604/165872166-3728d56e-854b-4445-9490-34220e643ac3.png)

Se a senha ou usuário for digitado de forma incorreta, uma mensagem é sobreposta no canto da tela, através da biblioteca nativa do Vue: toast.

![image](https://user-images.githubusercontent.com/78494604/165877819-416a951d-3115-4d14-bb39-1a9b12a7c657.png)

Ao realizar o login de forma correta, e as requisições retornarem com as responses esperadas, a página é redirecionada para um index, onde é possível realizar as funções básicas de um CRUD.

![image](https://user-images.githubusercontent.com/78494604/165877326-0532f29c-0f87-494b-8948-59417884310f.png)

## Autenticação

A página de usuários só é acessivel através do login. Não é possível acessa-la utilizando sua URI, isso graças a biblioteca Auth do nuxtJs, onde é possível definir niveis de permissões de acesso as páginas pelos usuários, integrada ao projeto diretamente pelo npm.

Ao logar pela primeira vez, os dados de usuário, senha e token exigidos para a validação do mesmo são salvos no webstorage do navegador, o que influência no seu próximo login. Se o usuário tentar redirecionar a página, ou recarrega-la, ele não precisará realizar o login novamente, graças ao session storage.

O intuido deste repositório é abordar somente o front-end deste projeto. Descorrendo brevemente sobre as funcionalidades, e ferramentas utilizadas. As informações sobre o CRUD e seu projeto estarão disponíveis no <a href="https://github.com/castellogui/umReal">repositório</a> criado especificamente para falar mais detalhadamente sobre o back-end, bem como as informações do servidor e banco utilizados.
