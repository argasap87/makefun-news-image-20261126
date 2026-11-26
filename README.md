# 26 November 2026 — The World in One Day

Entry for the make.fun bounty
[Sum up 26 November's world news in one image](https://make.fun/c/news-image-20261126)
($100, closes 28 Nov 2026 07:00 WIB).

## The image

A newspaper front page for Thursday 26 November 2026, built around one
continuous fire arc: the day's oil burned at sea and on land, and the same
day the world still reached for the stars.

- **Hero — oil under fire:** Houthis strike Saudi Arabia's Ras Tanura
  refinery; two oil tankers hit naval mines in the Strait of Hormuz.
- **Gaza — ceasefire under strain:** Israel strikes a Hamas official; the
  truce wobbles.
- **Ukraine — refineries hit:** Kyiv strikes Russian oil plants; Russia's
  own figures show ~500,000 war dead.
- **Space — Pakistan's first astronaut:** Muhammad Zeeshan Ali joins
  China's Shenzhou-24 mission to the Tiangong station.
- **Cairo — tanker fire kills 30:** a fuel tanker crash ignites a deadly
  highway blaze.
- **Sport:** 15-year-old Vaibhav Sooryavanshi smashes 204 off 53 balls;
  Gukesh–Sindarov draw in World Championship Game 2.

The hero art is AI-generated (Pollinations, flux); the front-page layout,
masthead and story tiles are composed locally with Pillow. The date
"26 NOVEMBER 2026" is set large at the top and the page stays legible at
300 px wide.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024, < 1 MiB), byte-identical to entry.png
```

`main.ts` only copies the committed `entry.png` to the output directory —
no build-time tool runs in the grader sandbox.

## License

MIT — see [LICENSE](LICENSE).
