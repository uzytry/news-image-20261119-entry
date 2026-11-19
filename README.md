# 19 November 2026 in one image

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/uzytry/news-image-20261119-entry/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/uzytry/news-image-20261119-entry/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Entry for the [make.fun bounty "Sum up 19 November's world news in one image"](https://make.fun/bounty/news-image-20261119) ($250, top 50 paid).

## The image

A newspaper front page — **WORLD NEWS, Thursday 19 November 2026** — summing up the day (v2: every story re-verified against real reporting; the Voyager panel from v1 was dropped — its one-light-day milestone fell on 18 Nov, not the 19th — and the EU panel's stray flag artefact is gone):

- **World court rules on Rohingya genocide case** — the ICJ delivers its judgment in The Gambia v. Myanmar, The Hague (read from 10:00 CET)
- **Trump, Xi and Putin meet in Shenzhen** — first-ever trilateral summit on the APEC sidelines; nuclear arms top the agenda, no deal expected
- **GTA VI launches worldwide** — Rockstar returns to Vice City after 13 years (PS5 / Xbox Series X|S, midnight local unlock)
- **US and Iran trade fire again** — three tankers on fire in Hormuz; Saudi-led coalition strikes Yemen
- **Crimean Bridge hit again** — third strike in a week; railway section hit, traffic halted (road span collapsed 17 Nov)
- **Cyclone Akvan nears India** — 46,700 evacuated in Odisha; landfall due Friday between Narsapur and Puri

Ticker: EU proposes €45bn loan for Ukraine · Democrats nominate Jeffries for Speaker (251–11) · Nvidia halts H-series chip shipments to China · Fed minutes point to more rate hikes.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`. The image is a 1024×1024 JPEG (331,475 bytes), deterministic — two runs write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
