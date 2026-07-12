// gallery data — add a new photo by adding one object here
const GALLERY_DATA = [
  {
    "slug": "senior-high-001",
    "thumb": "assets/images/thumbnails/senior-high-001.jpg",
    "medium": "assets/images/medium/senior-high-001.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "some things you just keep.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-002",
    "thumb": "assets/images/thumbnails/senior-high-002.jpg",
    "medium": "assets/images/medium/senior-high-002.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "unposed and still her best angle.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-003",
    "thumb": "assets/images/thumbnails/senior-high-003.jpg",
    "medium": "assets/images/medium/senior-high-003.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "filed under: reasons i'm not going anywhere.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-004",
    "thumb": "assets/images/thumbnails/senior-high-004.jpg",
    "medium": "assets/images/medium/senior-high-004.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "another day, another favorite of her.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-005",
    "thumb": "assets/images/thumbnails/senior-high-005.jpg",
    "medium": "assets/images/medium/senior-high-005.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "her laugh in the background of everything.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-006",
    "thumb": "assets/images/thumbnails/senior-high-006.jpg",
    "medium": "assets/images/medium/senior-high-006.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "this one lives rent-free in my head.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-007",
    "thumb": "assets/images/thumbnails/senior-high-007.jpg",
    "medium": "assets/images/medium/senior-high-007.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "main character energy, always.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-008",
    "thumb": "assets/images/thumbnails/senior-high-008.jpg",
    "medium": "assets/images/medium/senior-high-008.jpg",
    "orientation": "square",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "exhibit a: the goofy side she pretends doesn't exist.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-009",
    "thumb": "assets/images/thumbnails/senior-high-009.jpg",
    "medium": "assets/images/medium/senior-high-009.jpg",
    "orientation": "landscape",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "this is the version of us i want to remember.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-010",
    "thumb": "assets/images/thumbnails/senior-high-010.jpg",
    "medium": "assets/images/medium/senior-high-010.jpg",
    "orientation": "landscape",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "no caption needed for this one, honestly.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-011",
    "thumb": "assets/images/thumbnails/senior-high-011.jpg",
    "medium": "assets/images/medium/senior-high-011.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "the kind of ordinary i'd repeat forever.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-012",
    "thumb": "assets/images/thumbnails/senior-high-012.jpg",
    "medium": "assets/images/medium/senior-high-012.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "her, being effortlessly her.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-013",
    "thumb": "assets/images/thumbnails/senior-high-013.jpg",
    "medium": "assets/images/medium/senior-high-013.jpg",
    "orientation": "square",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "some days looked exactly like this \u2014 quiet, and enough.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-014",
    "thumb": "assets/images/thumbnails/senior-high-014.jpg",
    "medium": "assets/images/medium/senior-high-014.jpg",
    "orientation": "landscape",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "proof that ordinary days can still be the good ones.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-015",
    "thumb": "assets/images/thumbnails/senior-high-015.jpg",
    "medium": "assets/images/medium/senior-high-015.jpg",
    "orientation": "landscape",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "her, unaware she's this pretty in candid shots.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-016",
    "thumb": "assets/images/thumbnails/senior-high-016.jpg",
    "medium": "assets/images/medium/senior-high-016.jpg",
    "orientation": "square",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "just us, being us.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-017",
    "thumb": "assets/images/thumbnails/senior-high-017.jpg",
    "medium": "assets/images/medium/senior-high-017.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "still can't believe she's mine.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-018",
    "thumb": "assets/images/thumbnails/senior-high-018.jpg",
    "medium": "assets/images/medium/senior-high-018.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "this one's a favorite. can you tell why.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-019",
    "thumb": "assets/images/thumbnails/senior-high-019.jpg",
    "medium": "assets/images/medium/senior-high-019.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "another one for the archive.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-020",
    "thumb": "assets/images/thumbnails/senior-high-020.jpg",
    "medium": "assets/images/medium/senior-high-020.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "she has no idea how good this one turned out.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-021",
    "thumb": "assets/images/thumbnails/senior-high-021.jpg",
    "medium": "assets/images/medium/senior-high-021.jpg",
    "orientation": "square",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "her, mid-laugh, unposed.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-022",
    "thumb": "assets/images/thumbnails/senior-high-022.jpg",
    "medium": "assets/images/medium/senior-high-022.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "her, doing absolutely nothing remarkable, and i love it.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "senior-high-023",
    "thumb": "assets/images/thumbnails/senior-high-023.jpg",
    "medium": "assets/images/medium/senior-high-023.jpg",
    "orientation": "portrait",
    "category": "school days",
    "tags": [
      "school days",
      "2022-2023"
    ],
    "caption": "found this one while looking for another. kept it anyway.",
    "featured": false,
    "alt": "kei and val, senior high"
  },
  {
    "slug": "college-024",
    "thumb": "assets/images/thumbnails/college-024.jpg",
    "medium": "assets/images/medium/college-024.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "a moment we almost didn't photograph.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-025",
    "thumb": "assets/images/thumbnails/college-025.jpg",
    "medium": "assets/images/medium/college-025.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026",
      "favorites"
    ],
    "caption": "still the prettiest thing in every room she\u2019s in.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-026",
    "thumb": "assets/images/thumbnails/college-026.jpg",
    "medium": "assets/images/medium/college-026.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "found this one while looking for another. kept it anyway.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-027",
    "thumb": "assets/images/thumbnails/college-027.jpg",
    "medium": "assets/images/medium/college-027.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "this one's a favorite. can you tell why.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-028",
    "thumb": "assets/images/thumbnails/college-028.jpg",
    "medium": "assets/images/medium/college-028.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "her laugh in the background of everything.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-029",
    "thumb": "assets/images/thumbnails/college-029.jpg",
    "medium": "assets/images/medium/college-029.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "some days looked exactly like this \u2014 quiet, and enough.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-030",
    "thumb": "assets/images/thumbnails/college-030.jpg",
    "medium": "assets/images/medium/college-030.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "proof that ordinary days can still be the good ones.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-031",
    "thumb": "assets/images/thumbnails/college-031.jpg",
    "medium": "assets/images/medium/college-031.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "filed under: reasons i'm not going anywhere.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-032",
    "thumb": "assets/images/thumbnails/college-032.jpg",
    "medium": "assets/images/medium/college-032.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "main character energy, always.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-033",
    "thumb": "assets/images/thumbnails/college-033.jpg",
    "medium": "assets/images/medium/college-033.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "her, unaware she's this pretty in candid shots.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-034",
    "thumb": "assets/images/thumbnails/college-034.jpg",
    "medium": "assets/images/medium/college-034.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "she has no idea how good this one turned out.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-035",
    "thumb": "assets/images/thumbnails/college-035.jpg",
    "medium": "assets/images/medium/college-035.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2026",
      "favorites"
    ],
    "caption": "\"you look like you love me...\"",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-036",
    "thumb": "assets/images/thumbnails/college-036.jpg",
    "medium": "assets/images/medium/college-036.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "her, being effortlessly her.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-037",
    "thumb": "assets/images/thumbnails/college-037.jpg",
    "medium": "assets/images/medium/college-037.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "another day, another favorite of her.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-038",
    "thumb": "assets/images/thumbnails/college-038.jpg",
    "medium": "assets/images/medium/college-038.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "exhibit a: the goofy side she pretends doesn't exist.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-039",
    "thumb": "assets/images/thumbnails/college-039.jpg",
    "medium": "assets/images/medium/college-039.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "a moment we almost didn't photograph.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-040",
    "thumb": "assets/images/thumbnails/college-040.jpg",
    "medium": "assets/images/medium/college-040.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "the kind of ordinary i'd repeat forever.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-041",
    "thumb": "assets/images/thumbnails/college-041.jpg",
    "medium": "assets/images/medium/college-041.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "her, mid-laugh, unposed.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-042",
    "thumb": "assets/images/thumbnails/college-042.jpg",
    "medium": "assets/images/medium/college-042.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "another one for the archive.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-043",
    "thumb": "assets/images/thumbnails/college-043.jpg",
    "medium": "assets/images/medium/college-043.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "no caption needed for this one, honestly.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-044",
    "thumb": "assets/images/thumbnails/college-044.jpg",
    "medium": "assets/images/medium/college-044.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "some things you just keep.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-045",
    "thumb": "assets/images/thumbnails/college-045.jpg",
    "medium": "assets/images/medium/college-045.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days"
    ],
    "caption": "her, doing absolutely nothing remarkable, and i love it.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-046",
    "thumb": "assets/images/thumbnails/college-046.jpg",
    "medium": "assets/images/medium/college-046.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "still can't believe she's mine.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-047",
    "thumb": "assets/images/thumbnails/college-047.jpg",
    "medium": "assets/images/medium/college-047.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "this is the version of us i want to remember.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-048",
    "thumb": "assets/images/thumbnails/college-048.jpg",
    "medium": "assets/images/medium/college-048.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026",
      "anniversaries",
      "favorites"
    ],
    "caption": "books, watsons run, a stitch something. all of it.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-049",
    "thumb": "assets/images/thumbnails/college-049.jpg",
    "medium": "assets/images/medium/college-049.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026",
      "anniversaries",
      "favorites"
    ],
    "caption": "third anniversary, sm pampanga \u2014 buying her everything on the list.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-050",
    "thumb": "assets/images/thumbnails/college-050.jpg",
    "medium": "assets/images/medium/college-050.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "unposed and still her best angle.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-051",
    "thumb": "assets/images/thumbnails/college-051.jpg",
    "medium": "assets/images/medium/college-051.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "just us, being us.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-052",
    "thumb": "assets/images/thumbnails/college-052.jpg",
    "medium": "assets/images/medium/college-052.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "this one lives rent-free in my head.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-053",
    "thumb": "assets/images/thumbnails/college-053.jpg",
    "medium": "assets/images/medium/college-053.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "some things you just keep.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-054",
    "thumb": "assets/images/thumbnails/college-054.jpg",
    "medium": "assets/images/medium/college-054.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "her, doing absolutely nothing remarkable, and i love it.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-055",
    "thumb": "assets/images/thumbnails/college-055.jpg",
    "medium": "assets/images/medium/college-055.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "another one for the archive.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-056",
    "thumb": "assets/images/thumbnails/college-056.jpg",
    "medium": "assets/images/medium/college-056.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "a moment we almost didn't photograph.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-057",
    "thumb": "assets/images/thumbnails/college-057.jpg",
    "medium": "assets/images/medium/college-057.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025",
      "favorites"
    ],
    "caption": "caught being soft when she thought no one noticed.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-058",
    "thumb": "assets/images/thumbnails/college-058.jpg",
    "medium": "assets/images/medium/college-058.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "unposed and still her best angle.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-059",
    "thumb": "assets/images/thumbnails/college-059.jpg",
    "medium": "assets/images/medium/college-059.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "some days looked exactly like this \u2014 quiet, and enough.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-060",
    "thumb": "assets/images/thumbnails/college-060.jpg",
    "medium": "assets/images/medium/college-060.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "another day, another favorite of her.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-061",
    "thumb": "assets/images/thumbnails/college-061.jpg",
    "medium": "assets/images/medium/college-061.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "no caption needed for this one, honestly.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-062",
    "thumb": "assets/images/thumbnails/college-062.jpg",
    "medium": "assets/images/medium/college-062.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "her, unaware she's this pretty in candid shots.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-063",
    "thumb": "assets/images/thumbnails/college-063.jpg",
    "medium": "assets/images/medium/college-063.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2024"
    ],
    "caption": "found this one while looking for another. kept it anyway.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-064",
    "thumb": "assets/images/thumbnails/college-064.jpg",
    "medium": "assets/images/medium/college-064.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "just us, being us.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-065",
    "thumb": "assets/images/thumbnails/college-065.jpg",
    "medium": "assets/images/medium/college-065.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "this one's a favorite. can you tell why.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-066",
    "thumb": "assets/images/thumbnails/college-066.jpg",
    "medium": "assets/images/medium/college-066.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "proof that ordinary days can still be the good ones.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-067",
    "thumb": "assets/images/thumbnails/college-067.jpg",
    "medium": "assets/images/medium/college-067.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "the kind of ordinary i'd repeat forever.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-068",
    "thumb": "assets/images/thumbnails/college-068.jpg",
    "medium": "assets/images/medium/college-068.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "still can't believe she's mine.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-069",
    "thumb": "assets/images/thumbnails/college-069.jpg",
    "medium": "assets/images/medium/college-069.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "main character energy, always.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-070",
    "thumb": "assets/images/thumbnails/college-070.jpg",
    "medium": "assets/images/medium/college-070.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "her laugh in the background of everything.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-071",
    "thumb": "assets/images/thumbnails/college-071.jpg",
    "medium": "assets/images/medium/college-071.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "filed under: reasons i'm not going anywhere.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-072",
    "thumb": "assets/images/thumbnails/college-072.jpg",
    "medium": "assets/images/medium/college-072.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "this one lives rent-free in my head.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-073",
    "thumb": "assets/images/thumbnails/college-073.jpg",
    "medium": "assets/images/medium/college-073.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "her, mid-laugh, unposed.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-074",
    "thumb": "assets/images/thumbnails/college-074.jpg",
    "medium": "assets/images/medium/college-074.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "her, being effortlessly her.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-075",
    "thumb": "assets/images/thumbnails/college-075.jpg",
    "medium": "assets/images/medium/college-075.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025",
      "favorites"
    ],
    "caption": "this face was NOT the one she meant to make.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-076",
    "thumb": "assets/images/thumbnails/college-076.jpg",
    "medium": "assets/images/medium/college-076.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2026"
    ],
    "caption": "she has no idea how good this one turned out.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-077",
    "thumb": "assets/images/thumbnails/college-077.jpg",
    "medium": "assets/images/medium/college-077.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "exhibit a: the goofy side she pretends doesn't exist.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-078",
    "thumb": "assets/images/thumbnails/college-078.jpg",
    "medium": "assets/images/medium/college-078.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "this is the version of us i want to remember.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-079",
    "thumb": "assets/images/thumbnails/college-079.jpg",
    "medium": "assets/images/medium/college-079.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "main character energy, always.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-080",
    "thumb": "assets/images/thumbnails/college-080.jpg",
    "medium": "assets/images/medium/college-080.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "filed under: reasons i'm not going anywhere.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-081",
    "thumb": "assets/images/thumbnails/college-081.jpg",
    "medium": "assets/images/medium/college-081.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "proof that ordinary days can still be the good ones.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-082",
    "thumb": "assets/images/thumbnails/college-082.jpg",
    "medium": "assets/images/medium/college-082.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "this is the version of us i want to remember.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-083",
    "thumb": "assets/images/thumbnails/college-083.jpg",
    "medium": "assets/images/medium/college-083.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days"
    ],
    "caption": "her, being effortlessly her.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-084",
    "thumb": "assets/images/thumbnails/college-084.jpg",
    "medium": "assets/images/medium/college-084.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "found this one while looking for another. kept it anyway.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-085",
    "thumb": "assets/images/thumbnails/college-085.jpg",
    "medium": "assets/images/medium/college-085.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days"
    ],
    "caption": "a moment we almost didn't photograph.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-086",
    "thumb": "assets/images/thumbnails/college-086.jpg",
    "medium": "assets/images/medium/college-086.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "some days looked exactly like this \u2014 quiet, and enough.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-087",
    "thumb": "assets/images/thumbnails/college-087.jpg",
    "medium": "assets/images/medium/college-087.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "she has no idea how good this one turned out.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-088",
    "thumb": "assets/images/thumbnails/college-088.jpg",
    "medium": "assets/images/medium/college-088.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2025"
    ],
    "caption": "this one lives rent-free in my head.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-089",
    "thumb": "assets/images/thumbnails/college-089.jpg",
    "medium": "assets/images/medium/college-089.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2024",
      "anniversaries",
      "favorites"
    ],
    "caption": "bicentennial park picnic \u2014 cake, strawberries, sushi, chips, bread. tight on budget, made it work anyway.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-090",
    "thumb": "assets/images/thumbnails/college-090.jpg",
    "medium": "assets/images/medium/college-090.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2024",
      "anniversaries",
      "favorites"
    ],
    "caption": "first anniversary, bicentennial park.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-091",
    "thumb": "assets/images/thumbnails/college-091.jpg",
    "medium": "assets/images/medium/college-091.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2024"
    ],
    "caption": "no caption needed for this one, honestly.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-092",
    "thumb": "assets/images/thumbnails/college-092.jpg",
    "medium": "assets/images/medium/college-092.jpg",
    "orientation": "square",
    "category": "college days",
    "tags": [
      "college days",
      "2025",
      "anniversaries",
      "favorites"
    ],
    "caption": "second anniversary \u2014 steak, lasagna, coffee. the steak was expensive. worth it.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-093",
    "thumb": "assets/images/thumbnails/college-093.jpg",
    "medium": "assets/images/medium/college-093.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2025",
      "anniversaries",
      "favorites"
    ],
    "caption": "the restaurant that made us go quiet for a second, in a good way.",
    "featured": true,
    "alt": "kei and val together"
  },
  {
    "slug": "college-094",
    "thumb": "assets/images/thumbnails/college-094.jpg",
    "medium": "assets/images/medium/college-094.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2024"
    ],
    "caption": "just us, being us.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-095",
    "thumb": "assets/images/thumbnails/college-095.jpg",
    "medium": "assets/images/medium/college-095.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2024"
    ],
    "caption": "exhibit a: the goofy side she pretends doesn't exist.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-096",
    "thumb": "assets/images/thumbnails/college-096.jpg",
    "medium": "assets/images/medium/college-096.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2024"
    ],
    "caption": "another day, another favorite of her.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-097",
    "thumb": "assets/images/thumbnails/college-097.jpg",
    "medium": "assets/images/medium/college-097.jpg",
    "orientation": "portrait",
    "category": "college days",
    "tags": [
      "college days",
      "2024"
    ],
    "caption": "some things you just keep.",
    "featured": false,
    "alt": "kei and val together"
  },
  {
    "slug": "college-098",
    "thumb": "assets/images/thumbnails/college-098.jpg",
    "medium": "assets/images/medium/college-098.jpg",
    "orientation": "landscape",
    "category": "college days",
    "tags": [
      "college days",
      "2024"
    ],
    "caption": "still can't believe she's mine.",
    "featured": false,
    "alt": "kei and val together"
  }
];
