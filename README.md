# NestJS Auth & User API

Bu layihə **NestJS**, **TypeORM** və **JWT Authentication** istifadə edilərək yazılmış sadə backend API-dir.  
Layihədə istifadəçi qeydiyyatı, login və qorunan (protected) route-lar mövcuddur.

## 🚀 Texnologiyalar
- Node.js
- NestJS
- TypeScript
- TypeORM
- JWT (Authentication)
- class-validator / class-transformer

## 📂 Proyekt Strukturu
├── 📁 src
│   ├── 📁 auth
│   │   ├── 📁 dtos
│   │   │   └── 📄 auth.dto.ts
│   │   ├── 📄 auth.controller.ts
│   │   ├── 📄 auth.module.ts
│   │   ├── 📄 auth.service.ts
│   │   └── 📄 request.http
│   ├── 📁 common
│   │   ├── 📁 entities
│   │   │   ├── 📄 common.entity.ts
│   │   │   └── 📄 user.entity.ts
│   │   ├── 📁 types
│   │   └── 📄 enam.ts
│   ├── 📁 guards
│   │   └── 📄 auth.guard.ts
│   ├── 📁 interceptor
│   │   └── 📄 serialize.interceptor.ts
│   ├── 📁 post
│   │   ├── 📁 dtos
│   │   │   └── 📄 post.dto.ts
│   │   ├── 📄 post.controller.ts
│   │   ├── 📄 post.module.ts
│   │   └── 📄 post.service.ts
│   ├── 📁 user
│   │   ├── 📁 dtos
│   │   │   ├── 📄 createUser.dto.ts
│   │   │   ├── 📄 updateUser.dto.ts
│   │   │   └── 📄 user.dto.ts
│   │   ├── 📄 request.http
│   │   ├── 📄 user.controller.ts
│   │   ├── 📄 user.module.ts
│   │   └── 📄 user.service.ts
│   ├── 📄 app.controller.ts
│   ├── 📄 app.module.ts
│   ├── 📄 app.service.ts
│   └── 📄 main.ts
├── ⚙️ .gitignore
├── ⚙️ .prettierrc
├── 📝 Notes.md
├── 📝 README.md
├── 📄 db.sqlite
├── 📄 eslint.config.mjs
├── ⚙️ nest-cli.json
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── ⚙️ tsconfig.json

## 🔐 Authentication Axını
  1. User **register** olur
  2. User **login** edir
  3. Server **JWT token** qaytarır
  4. Token `Authorization` header ilə göndərilir
  5. `AuthGuard` token-i yoxlayır
  6. Token keçərlidirsə → request icazə verilir

## 🛡 AuthGuard
  `auth.guard.ts` faylında:
  - `Authorization` header-i oxuyur
  - JWT token-i yoxlayır
  - Token yoxdursa → `UnauthorizedException`
  - Token yanlışdırsa → `UnauthorizedException`

## 👤 User Controller
  `user.controller.ts`:
  - User update
  - User delete
  - Route-lar `@UseGuards(AuthGuard)` ilə qorunur

## 👤 Education
  - Education create
  - Education update
  - Education delete
  - Education getById
  - Get all educations

## SerializeInterceptor
  - Entity-dən gələn lazımsız field-ləri (məs: password) response-dan çıxarır
  - Response-u daha təhlükəsiz edir

* ⚙️ Proyekti İşə Salmaq
  - npm install
  - npm run start:dev

* Server default olaraq işləyir:
  - http://localhost:3014
  
* 🧪 API Test
  - Token ilə request göndərmək üçün:
  - Authorization: Bearer YOUR_JWT_TOKEN


