#!/usr/bin/env python3
"""Slice K'naan map v2 (16383x10923 WebP) into a Leaflet z/x/y tile pyramid.
Zoom 0 (whole map ~1 tile) .. zoom 6 (full resolution). Edge tiles padded
transparent to 256px. Output: The-Sacred-Veil/map/tiles/{z}/{x}/{y}.webp
"""
import os
from PIL import Image

Image.MAX_IMAGE_PIXELS = None

SRC = "/Users/munashe-calebmanyumbu/Documents/Hellig DND Campaign Stuff/Images/WebP/Averium/Maps/K'naan map v2.webp"
OUT = "/Users/munashe-calebmanyumbu/Documents/GitHub/The-Sacred-Veil/map/tiles"
TILE = 256
MAX_Z = 6  # 16383 / 256 = 64 cols -> log2 = 6

img = Image.open(SRC).convert("RGBA")
W, H = img.size
print(f"source {W}x{H}")

level = img
count = 0
for z in range(MAX_Z, -1, -1):
    lw, lh = level.size
    cols = (lw + TILE - 1) // TILE
    rows = (lh + TILE - 1) // TILE
    for x in range(cols):
        os.makedirs(f"{OUT}/{z}/{x}", exist_ok=True)
        for y in range(rows):
            box = (x * TILE, y * TILE, min((x + 1) * TILE, lw), min((y + 1) * TILE, lh))
            tile = level.crop(box)
            if tile.size != (TILE, TILE):
                padded = Image.new("RGBA", (TILE, TILE), (0, 0, 0, 0))
                padded.paste(tile, (0, 0))
                tile = padded
            tile.save(f"{OUT}/{z}/{x}/{y}.webp", "WEBP", quality=82, method=4)
            count += 1
    print(f"z{z}: {cols}x{rows} tiles done (level {lw}x{lh})")
    if z > 0:
        level = level.resize((max(1, lw // 2), max(1, lh // 2)), Image.LANCZOS)

print(f"TOTAL {count} tiles")
