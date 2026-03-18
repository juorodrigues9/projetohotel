create extension if not exists "pgcrypto";

create type public.user_role as enum ('admin','reception','housekeeping','finance','management');
create type public.room_status as enum ('available','reserved','occupied','awaiting_cleaning','cleaning','clean','blocked','maintenance');
create type public.reservation_status as enum ('pending','confirmed','cancelled','converted','no_show');
create type public.stay_status as enum ('active','checked_out','cancelled');
create type public.charge_status as enum ('active','cancelled','invoiced');
create type public.payment_method as enum ('cash','pix','debit_card','credit_card','transfer','invoiced');

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  code public.user_role unique not null,
  name text not null,
  permissions jsonb not null default '{}'::jsonb
);

create table public.users (
  id uuid primary key,
  profile_id uuid not null references public.profiles(id),
  full_name text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.employees (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id),
  document text,
  phone text,
  hired_at date,
  notes text
);

create table public.room_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  base_daily_rate numeric(12,2) not null
);

create table public.rooms (
  id uuid primary key default gen_random_uuid(),
  room_number text unique not null,
  room_category_id uuid not null references public.room_categories(id),
  capacity int not null,
  daily_rate numeric(12,2) not null,
  description text,
  notes text,
  status public.room_status not null default 'available',
  updated_at timestamptz not null default now()
);

create table public.guests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  document text,
  phone text,
  email text,
  city text,
  vehicle_plate text,
  created_at timestamptz not null default now()
);

create table public.reservations (
  id uuid primary key default gen_random_uuid(),
  main_guest_id uuid not null references public.guests(id),
  room_id uuid references public.rooms(id),
  checkin_expected timestamptz not null,
  checkout_expected timestamptz not null,
  guest_count int not null,
  agreed_amount numeric(12,2) not null,
  origin text not null,
  notes text,
  status public.reservation_status not null default 'pending',
  created_by uuid references public.users(id),
  created_at timestamptz not null default now()
);

create table public.reservation_guests (
  reservation_id uuid not null references public.reservations(id),
  guest_id uuid not null references public.guests(id),
  primary key (reservation_id, guest_id)
);

create table public.stays (
  id uuid primary key default gen_random_uuid(),
  reservation_id uuid references public.reservations(id),
  guest_id uuid not null references public.guests(id),
  room_id uuid not null references public.rooms(id),
  checkin_at timestamptz not null,
  checkout_expected timestamptz not null,
  checkout_at timestamptz,
  daily_rate numeric(12,2) not null,
  status public.stay_status not null default 'active',
  handled_by uuid references public.users(id)
);

create table public.product_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.product_categories(id),
  name text not null,
  price numeric(12,2) not null,
  stock int,
  is_active boolean not null default true,
  notes text
);

create table public.stay_charges (
  id uuid primary key default gen_random_uuid(),
  stay_id uuid not null references public.stays(id),
  product_id uuid references public.products(id),
  description text not null,
  category text not null,
  quantity numeric(10,2) not null,
  unit_price numeric(12,2) not null,
  total_price numeric(12,2) not null,
  status public.charge_status not null default 'active',
  cancelled_reason text,
  created_by uuid references public.users(id),
  created_at timestamptz not null default now()
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  stay_id uuid references public.stays(id),
  amount numeric(12,2) not null,
  method public.payment_method not null,
  source text not null default 'checkout',
  notes text,
  created_by uuid references public.users(id),
  created_at timestamptz not null default now()
);

create table public.expense_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

create table public.expenses (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.expense_categories(id),
  expense_date date not null,
  description text not null,
  amount numeric(12,2) not null,
  payment_method public.payment_method not null,
  receipt_url text,
  notes text,
  created_by uuid references public.users(id),
  created_at timestamptz not null default now()
);

create table public.cleaning_records (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.rooms(id),
  employee_id uuid references public.employees(id),
  started_at timestamptz,
  finished_at timestamptz,
  notes text,
  created_at timestamptz not null default now()
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id),
  action text not null,
  entity text not null,
  entity_id text,
  changes jsonb,
  created_at timestamptz not null default now()
);

create table public.inn_settings (
  id uuid primary key default gen_random_uuid(),
  trade_name text not null,
  checkout_time text not null default '12:00',
  currency text not null default 'BRL',
  timezone text not null default 'America/Sao_Paulo'
);
