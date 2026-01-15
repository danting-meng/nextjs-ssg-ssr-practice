# nextjs-ssg-ssr-practice

Practice project for **Next.js App Router**, focusing on:

- **Dynamic Routes**
- **SSG vs SSR in Dynamic Routes**
- **Caching behaviors** (`force-cache` vs `no-store`)
- **Using `public/` as static assets**

---

## Project Structure

This repository contains **two parts**:

### 1) Next.js Practice (Dynamic Routes + SSG/SSR)

Main focus: **SSG and SSR implementations on the same dynamic route**:  
`/cars/[id]`

**Key files**
- Dynamic route page (core):
  - `app/cars/[id]/page.tsx`
    - Contains **SSG version** and **SSR version** for comparison
- Cars list page:
  - `app/cars/page.tsx`
- Simple test page:
  - `app/hello/page.tsx`

**Data**
- `public/data/cars.json` (list of car ids)
- `public/data/tesla.json`
- `public/data/ford.json`
- `public/data/lambo.json`

**Images**
- `public/image/tesla.jpg`
- `public/image/ford.jpg`
- `public/image/lambo.jpg`

---

### 2) Note

My personal study notes for this practice (SSG/SSR/Dynamic Routes/Caching).

- `Note/Next.tsx`

---
