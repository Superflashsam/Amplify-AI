-- Enable pgcrypto for UUID generation
create extension if not exists pgcrypto;

-- Create the onboarding table
create table if not exists public.onboarding (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid(),
  payload jsonb not null,
  created_at timestamptz default now(),
  constraint onboarding_user_fk
    foreign key (user_id) references auth.users (id) on delete cascade
);

-- Enable Row Level Security
alter table public.onboarding enable row level security;

-- Policy: Users can insert their own rows
create policy "onboarding_insert_own" on public.onboarding
  for insert with check (auth.uid() = user_id);

-- Policy: Users can view their own rows
create policy "onboarding_select_own" on public.onboarding
  for select using (auth.uid() = user_id);

-- Policy: Users can update their own rows
create policy "onboarding_update_own" on public.onboarding
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Policy: Users can delete their own rows
create policy "onboarding_delete_own" on public.onboarding
  for delete using (auth.uid() = user_id);

-- Enable Realtime for the onboarding table
alter publication supabase_realtime add table public.onboarding;
