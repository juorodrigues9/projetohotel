# Pousada SaaS (Next.js + Supabase)

Plataforma web para gestão completa de pousada (31 quartos), com arquitetura escalável, autenticação, controle de perfis, operação de reservas/check-in/check-out, governança, financeiro e relatórios.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Auth + PostgreSQL + Storage)
- React Hook Form + Zod
- Shadcn/ui base pattern
- Lucide React
- Deploy na Vercel

## Estrutura
```bash
src/
  app/
    (auth)/login
    (dashboard)/dashboard
    (dashboard)/rooms
    (dashboard)/reservations
    (dashboard)/stays
    (dashboard)/checkout
    (dashboard)/housekeeping
    (dashboard)/finance
    (dashboard)/reports
    (dashboard)/users
  components/
    layout/
    ui/
    rooms/
    dashboard/
  actions/
  services/
  lib/
  schemas/
  types/
supabase/
  migrations/
  seeds/
```

## Configuração
1. Crie projeto Supabase e habilite email/senha em Auth.
2. Execute a migration `supabase/migrations/0001_init.sql`.
3. Execute seed `supabase/seeds/seed.sql`.
4. Configure variáveis:

`.env.example`
```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

## Comandos
```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Módulos já iniciados
- Login e proteção de rotas por middleware
- Dashboard com KPIs operacionais
- Mapa de quartos funcional com 31 quartos mockados
- Páginas iniciais para reservas, hospedagens, checkout, governança, financeiro, relatórios e usuários
- Modelagem SQL completa de domínio

## Deploy Vercel
1. Suba repositório no GitHub.
2. Importe na Vercel.
3. Defina variáveis de ambiente.
4. Deploy automático.

## Próximos passos de produção
- Integrar todas páginas com dados reais Supabase.
- Completar RLS por perfil/permissão.
- Implementar fluxos completos de check-in/check-out e pagamento misto.
- Implementar logs de auditoria em todas ações críticas.
