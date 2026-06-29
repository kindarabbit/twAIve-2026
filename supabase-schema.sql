-- Run this in the Supabase SQL editor after creating your project.
-- Supabase Auth still stores the password securely.
-- The app shows only username/password, and internally uses username@twaive.local for Auth.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique,
  auth_email text not null,
  display_name text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles add column if not exists username text;
alter table public.profiles add column if not exists auth_email text;
alter table public.profiles add column if not exists display_name text;
alter table public.profiles add column if not exists created_at timestamptz not null default now();
alter table public.profiles drop column if exists email;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'profiles_username_key'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles add constraint profiles_username_key unique (username);
  end if;
end $$;

alter table public.profiles enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.profiles to anon;
grant select, insert, update on public.profiles to authenticated;

create or replace function public.is_username_available(requested_username text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select not exists (
    select 1
    from public.profiles
    where username = lower(trim(requested_username))
  );
$$;

grant execute on function public.is_username_available(text) to anon, authenticated;

drop policy if exists "Users can read their own profile" on public.profiles;
drop policy if exists "Anyone can check usernames" on public.profiles;
drop policy if exists "Users can create their own profile" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;

create policy "Users can read their own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

create policy "Anyone can check usernames"
on public.profiles
for select
to anon
using (true);

create policy "Users can create their own profile"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

notify pgrst, 'reload schema';
