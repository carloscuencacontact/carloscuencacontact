create extension if not exists pgcrypto;

create table if not exists public.news_articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null check (char_length(title) between 8 and 180),
  summary text not null check (char_length(summary) between 20 and 400),
  category text not null check (char_length(category) between 2 and 60),
  body text not null check (char_length(body) between 50 and 30000),
  image_url text not null,
  image_alt text not null default '',
  author_id uuid not null references auth.users(id) on delete restrict,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create index if not exists news_articles_publication_idx
  on public.news_articles (published_at desc)
  where status = 'published';

create or replace function public.set_news_article_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists news_articles_set_updated_at on public.news_articles;
create trigger news_articles_set_updated_at
before update on public.news_articles
for each row execute function public.set_news_article_updated_at();

alter table public.news_articles enable row level security;
grant select on public.news_articles to anon, authenticated;
grant insert, update, delete on public.news_articles to authenticated;

drop policy if exists "Anyone can read published news" on public.news_articles;
create policy "Anyone can read published news"
on public.news_articles for select
to anon, authenticated
using (status = 'published');

drop policy if exists "Editors can manage news" on public.news_articles;
create policy "Editors can manage news"
on public.news_articles for all
to authenticated
using ((select auth.jwt() -> 'app_metadata' ->> 'role') = 'editor')
with check ((select auth.jwt() -> 'app_metadata' ->> 'role') = 'editor');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('news-images', 'news-images', true, 5242880, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Editors can upload news images" on storage.objects;
create policy "Editors can upload news images"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'news-images'
  and (select auth.jwt() -> 'app_metadata' ->> 'role') = 'editor'
);

drop policy if exists "Editors can update news images" on storage.objects;
create policy "Editors can update news images"
on storage.objects for update
to authenticated
using (
  bucket_id = 'news-images'
  and (select auth.jwt() -> 'app_metadata' ->> 'role') = 'editor'
)
with check (
  bucket_id = 'news-images'
  and (select auth.jwt() -> 'app_metadata' ->> 'role') = 'editor'
);

drop policy if exists "Editors can delete news images" on storage.objects;
create policy "Editors can delete news images"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'news-images'
  and (select auth.jwt() -> 'app_metadata' ->> 'role') = 'editor'
);
