# 📊 Planilha Pro

Um dashboard moderno para gestão visual de produtos, com importação de
planilhas Excel, galeria interativa e métricas em tempo real.

---

## 🚀 Visão geral

O **Planilha Pro** é uma aplicação frontend construída em **Vue 3**
que permite importar, visualizar e gerenciar dados de produtos de forma
visual e interativa.

O projeto foi desenvolvido com foco em:

- Arquitetura moderna de frontend
- Organização de estado global
- Componentização
- Boas práticas de UI/UX
- Experiência de usuário profissional

---

## 🛠️ Tecnologias utilizadas

- **Vue 3** --- framework principal
- **Pinia** --- gerenciamento de estado global
- **Vue Router** --- navegação entre páginas
- **SheetJS (xlsx)** --- leitura de planilhas Excel
- **CSS Variables** --- sistema de tema dark/light
- **Vite** --- build tool

---

## ✨ Funcionalidades

### 📥 Importação de planilha

- Suporte a `.xlsx`, `.xls` e `.csv`
- Leitura automática de dados
- Normalização inteligente de colunas
- Atualização em tempo real do dashboard

---

### 📊 Dashboard de métricas

- Total de produtos com imagem
- Produtos disponíveis
- Produtos indisponíveis
- Score médio automático

As métricas são reativas e atualizam instantaneamente após a importação.

---

### 🖼️ Galeria de produtos

- Grid responsivo de cards
- Preview de imagem
- Badge de status
- Hover interativo
- Edição rápida via modal

A galeria funciona como painel visual de gestão.

---

### ✏️ Modal de edição

- Edição de produtos em tempo real
- Preview automático de imagem
- Validação básica de URL
- Scroll interno otimizado
- Compatível com tema dark/light

---

### 🌙 Tema dark/light

- Alternância instantânea
- Persistência no localStorage
- Sistema baseado em CSS variables
- Consistência visual global

---

## 🧠 Arquitetura do projeto

    src/
    ├── components/   # Componentes reutilizáveis
    ├── views/        # Páginas principais
    ├── stores/       # Estado global (Pinia)
    ├── services/     # Serviços (Excel parser)
    ├── assets/       # Estilos globais
    └── router/       # Configuração de rotas

---

### Gerenciamento de estado

O **Pinia** centraliza:

- Lista de produtos
- Cálculo de métricas
- Operações CRUD
- Sincronização entre views

---

### Fluxo de dados

    Excel → Service → Store → UI

1.  A planilha é importada pelo usuário
2.  Os dados são processados e normalizados
3.  O estado global é atualizado
4.  A interface reage automaticamente

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone <repo-url>
cd product-dashboard
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse:

http://localhost:5173

---

## 📁 Formato esperado da planilha

Campos suportados:

- Nome / Name / Nome do Produto
- Imagem / URL Imagem / Image
- Status
- Score / Nota / Avaliação

---

## 🎯 Decisões técnicas

- Uso de **Pinia** para escalabilidade
- Normalização automática de dados
- Sistema de temas com CSS variables
- Componentização modular
- Separação entre lógica e interface

---

## 🔮 Melhorias futuras

- Filtros avançados
- Busca por produtos
- Ordenação dinâmica
- Gráficos analíticos
- Exportação de relatórios
- Integração com backend

---

## 📌 Objetivo do projeto

Demonstrar domínio de:

- Vue 3 moderno
- Arquitetura frontend
- Gerenciamento de estado
- UI/UX
- Manipulação de dados externos

---

## 👨‍💻 Autor

Projeto desenvolvido como demonstração técnica.

---

## 📄 Licença

Uso educacional e demonstrativo.
