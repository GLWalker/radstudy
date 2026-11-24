# Medical Terms — Lesson & Source Map

The instructor-provided prefix/suffix PDF is a stand-alone first section. Three subsequent sections follow lecture upload order and have their **own** notes, flashcards, graded tests and cumulative exam participation.

## Module inventory

| Module ID | Lecture source | Items | Visuals |
|---|---|---:|---:|
| `med-prefix-suffix-review` — Provided Prefix & Suffix Flashcards | Prefix and Suffix Review Flash Cards 2026.pdf; pages 1–33 | 191 | 0 |
| `med-c1-language` — Medical Language & Body Structures | 1 Medical Language and body structures C27 2026.pptx; slides 2–36 | 50 | 6 |
| `med-c2-directions` — Directional Terms, Planes & Positions | 2  Directional Terms C27 2026.pptx; slides 1–115 | 68 | 18 |
| `med-c3-skin-colors` — Integumentary System & Colors | 3 Integumentary system and colors C27 2026.pptx; slides 2–65 (original PPTX slide numbers) | 72 | 18 |

## Source fidelity and clarifications

- Instructor PowerPoints are the primary content authority. Slide numbers are **original PPTX deck indices, 1-based**. Lesson 3 has one hidden opening slide: in the LibreOffice-rendered PDF the visible slide indices are offset by one; captions use the original deck numbers.
- `Prefix and Suffix Review Flash Cards 2026.pdf` is used for the first module only. It is a course-supplied vocabulary list, not a source for replacing lecture flashcards. PDF references are 1-based page numbers.
- The PDF text extraction splits several entries across text boxes: `cata-` (p.3), `dia-` (p.5), `per-` (p.14), negative `in-` (p.10) and `-spasm` (p.31) were reconstructed from their visual row layout.
- Repeated exact PDF review terms such as `-ac` and `-tic` are not duplicated in the study bank; the repeated `-osis` definitions are represented together. Locative `in-` and negative `in-` are explicitly differentiated.
- Obvious typography errors in meanings (`asymetrical`, `surgial`, `insrument`, `involentary`) were normalized to ordinary spelling. These are spelling repairs, not changes in medical meaning.
- The PDF contains the form `-iactric` on p.25; its spelling is questionable. It is preserved as written and should be checked against the instructor before treating it as standard terminology.
- Lecture 3, slide 16 labels leukemia as a skin rash; this is scientifically wrong and **not used as a quiz fact**. Leukemia is a blood-forming tissue malignancy.
- Lecture 3, slide 15 suggests erythema and rosacea are interchangeable; they are not. Erythema is redness, while rosacea is a specific chronic skin condition. This is not used as a test equivalence.
- Lecture 3, slides 49 and 56 have likely transcription/spelling errors (e.g. `live abscess`, `Hypograstric`). Their details are not asserted as medical facts in quiz answers.
- Lecture 2 contains repeated slide subsets and non-clinical story slides. The course keeps relevant concepts and selected images, without reproducing unrelated personal stories verbatim.
- Every new item has its own stable ID, an explicit source locator, four distinct options and a rationale. Existing question IDs and study records remain unchanged.

## Visual policy

Source slides are rasterized as standalone WebP visuals, stored under `assets/medical-terms/`. Captions identify lecture number and verified original slide number. Only selected educational diagrams/illustrations are included. The existing Study Visuals lightbox handles them; no CSS or JavaScript changes are needed.

## Course filter

This package requires **one surgical script registration** in `index.html`: load `data/medical-terms.js` immediately after `data/anatomy.js` and before `js/app.js`. The existing course selector automatically derives `Medical Terms` from the module `course` property. No hard-coded menu or styling changes are necessary.

## Validation targets

After merging into a 32-module, 775-question, 116-visual baseline, expected totals are:

- Modules: **36**
- New Medical Terms modules: **4**
- New recall items: **381**
- New visual images: **42**
- Total built-in recall items: **1156**
- Total study visuals: **158**
- Preserve the 23 existing numeric templates

If the local code differs, recompute and explain instead of forcing totals.
