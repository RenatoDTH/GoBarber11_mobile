<h1 align="center">
    <img alt="GoBarberLogo" title="GoBarber" src=".github/goBarberLogo.PNG" />
</h1>

# GoBarber11_mobile
Versão mobile do GoBarber 11 com Typescript e React-native, com ensinamentos da [Rocketseat](https://rocketseat.com.br/).

## Sobre o GoBarber

GoBarber é um serviço de cadastramento de prestadores, o qual você pode se cadastrar como um e visualizar os agendamentos para o seu serviço. Por outro lado, o consumidor poderá selecionar e agendar com os prestadores de serviço, podendo se usufruir de uma aplicação completa restful, utlizando tanto a versão web, como a mobile.

<p align="center">
  <img alt="GoBarber" src=".github/goBarberLoginMobile.PNG" width="25%">
</p>

## Dependências

Inicialmente para baixar as dependências, você precisa rodar:

```
yarn install
```
e configurar o axios para o tipo de emulador que você vai estar usando:

```
import axios from 'axios';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/
const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api;

```
Caso não saiba como configurar o emulador, segue o [tutorial](https://react-native.rocketseat.dev/) da própria Rocketseat.

Estando todas as coisas configurados, você precisa rodar para instalar o aplicativo no emulador:
```
yarn react-native run-android
ou
yarn react-native run-ios
```
e estando com o aplicativo já no emulador, sem nenhuma dependência nova ou conflito, rodar:
```
yarn react-native start
```

Agora, rodando o emulador e a aplicação, você precisa certificar-se de estar rodando o [backend](https://github.com/RenatoDTH/GoBarber11_api) para poder utilizá-lo da melhor maneira e para tirar o máximo proveito e visualizar todas as frentes, rodar também a versão [web](https://github.com/RenatoDTH/GoBarber11_web) pois nela é a versão para os provedores e o mobile, a versão para os usuários.
