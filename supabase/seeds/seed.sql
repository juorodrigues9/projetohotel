insert into public.profiles (code, name, permissions)
values
('admin','Administrador','{"all": true}'),
('reception','Recepção','{"reservations": true, "checkin": true, "checkout": true}'),
('housekeeping','Governança','{"housekeeping": true}'),
('finance','Financeiro','{"finance": true}'),
('management','Gerência','{"dashboard": true, "reports": true}');

insert into public.room_categories (name, base_daily_rate)
values ('Standard', 220), ('Luxo', 320), ('Família', 420);

insert into public.rooms (room_number, room_category_id, capacity, daily_rate, status)
select lpad((n)::text, 2, '0'),
  case when n <= 10 then (select id from public.room_categories where name='Standard')
       when n <= 20 then (select id from public.room_categories where name='Luxo')
       else (select id from public.room_categories where name='Família') end,
  case when n <= 20 then 2 else 4 end,
  case when n <= 20 then 290 else 420 end,
  case when n % 8 = 0 then 'maintenance'::public.room_status
       when n % 7 = 0 then 'awaiting_cleaning'::public.room_status
       when n % 6 = 0 then 'occupied'::public.room_status
       when n % 5 = 0 then 'reserved'::public.room_status
       else 'available'::public.room_status end
from generate_series(1,31) as n;

insert into public.expense_categories(name)
values ('manutenção'),('insumos'),('lavanderia'),('compras'),('fornecedores'),('folha'),('utilidades'),('outros');

insert into public.product_categories(name)
values ('frigobar'),('bebidas'),('alimentação'),('souvenirs'),('lavanderia'),('taxa extra');

insert into public.inn_settings (trade_name) values ('Pousada Exemplo');

insert into public.users (id, profile_id, full_name)
values
('11111111-1111-1111-1111-111111111111',(select id from public.profiles where code='admin'),'Owner Admin'),
('22222222-2222-2222-2222-222222222222',(select id from public.profiles where code='reception'),'Recepção Teste'),
('33333333-3333-3333-3333-333333333333',(select id from public.profiles where code='housekeeping'),'Governança Teste'),
('44444444-4444-4444-4444-444444444444',(select id from public.profiles where code='finance'),'Financeiro Teste'),
('55555555-5555-5555-5555-555555555555',(select id from public.profiles where code='management'),'Gerência Teste');
