# OpenAI Speech Transcriber

Este repositório contém uma aplicação web desenvolvida para transcrever áudio utilizando a API OpenAI Whisper. O sistema foi construído com o framework **Next.js**, seguindo as boas práticas de organização de código, como **MVC (Model-View-Controller)**, **Atomic Design**, **tratamento de erros** e outros.

## Tecnologias Utilizadas

- **Next.js** (versão 15.3.1): Framework para React que permite renderização do lado do servidor e criação de APIs.
- **React.js** (versão 19.0.0): Biblioteca para construção de interfaces de usuário.
- **React Toastify** (versão 11.0.5): Biblioteca para exibição de notificações na aplicação.
- **TypeScript** (versão 5): Superset de JavaScript para tipagem estática e melhor desenvolvimento.
- **Busboy** (versão 1.6.0): Middleware para parsing de arquivos.
- **OpenAI Whisper**: API utilizada para transcrição de áudio.

## Instalação e Execução

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (versão descrita no arquivo `.nvmrc`)
- **Yarn** ou **npm**

### Passos para Instalação

1. Clone o repositório:

```bash
git clone https://github.com/edfepinto/openai-speech-transcriber.git
```

2. Navegue até o diretório do projeto:

```bash
cd openai-speech-transcriber
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

4. Configuração das variáveis de ambiente
Crie um arquivo .env com base no .env.example e em seguida preencha ele com a chave de API do OpenAI: 

```bash
cp .env.example .env
```

5. Para rodar a aplicação em desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em http://localhost:3000.

## Estrutura do Projeto
A estrutura do projeto segue as melhores práticas de organização para facilitar o desenvolvimento e a manutenção. Ela utiliza o padrão MVC e a abordagem Atomic Design para componentes de UI.

```bash
/openai-speech-transcriber
│
├── /src
│   ├── /components          # Componentes reutilizáveis baseados no Atomic Design
│   │   ├── /audio-player    # Componente de reprodutor de áudio
│   │   ├── /process-button  # Componente de botão de processo
│   │   ├── /record-button   # Componente de botão de gravação
│   │   └── /transcription   # Componente para exibir transcrição
│   ├── /controllers         # Lógica de controle de áudio e transcrição
│   ├── /hooks               # Hooks personalizados, como useRecorder
│   ├── /pages               # Páginas do Next.js
│   │   ├── /api             # Endpoints da API, como /transcribe
│   │   ├── _app.tsx         # Configuração global do Next.js
│   │   └── index.tsx        # Página principal
│   ├── /services            # Serviços de integração com APIs externas
│   │   └── openai-whisper.service.ts  # Serviço para interagir com OpenAI Whisper
│   ├── /shared              # Arquivos de estilo e configurações globais
│   │   └── globals.css      # Estilos globais da aplicação
│
├── .env                     # Variáveis de ambiente
├── .env.example             # Template do arquivo .env que deve ser preenchido
├── .nvmrc                   # Versão do Node utilizada no projeto
├── package.json             # Dependências e scripts do projeto
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Este arquivo
```

## Testes
Atualmente, o projeto não contém testes automatizados, mas as funções principais, como a transcrição de áudio, foram implementadas de forma a facilitar a adição de testes no futuro.

## Deploy

A aplicação está disponível online via [Vercel](https://vercel.com).  
Você pode visualizar o projeto funcionando neste ambiente de preview:  
🔗 [https://openai-speech-transcriber.vercel.app](https://openai-speech-transcriber.vercel.app)

