# Anatomy & Physiology I — Lesson and Source Map

The eight existing A&P I section IDs remain unchanged. Chapter 13 sections are instructional practice groupings derived from the uploaded lectures, **not** newly invented official lecture numbers. This revision appends notes, sourced diagrams and recall questions while preserving every original lesson entry and question ID.

| Section ID | Study section | Original items | Added | Current items | Study visuals |
|---|---|---:|---:|---:|---:|
| `ap1-c1` | Organization of the Human Body | 38 | +0 | 38 | 9 |
| `ap1-c2` | Homeostasis & Feedback Systems | 20 | +0 | 20 | 5 |
| `ap1-c13-upper1` | Skeletal System: Hand & Wrist | 26 | +26 | 52 | 8 |
| `ap1-c13-upper2` | Skeletal System: Forearm & Elbow | 18 | +14 | 32 | 4 |
| `ap1-c13-upper3` | Skeletal System: Humerus & Shoulder Girdle | 18 | +10 | 28 | 6 |
| `ap1-c13-lower1` | Skeletal System: Foot & Ankle | 21 | +15 | 36 | 8 |
| `ap1-c13-lower2` | Skeletal System: Leg, Knee & Femur | 21 | +14 | 35 | 10 |
| `ap1-c13-lower3` | Skeletal System: Pelvis & Hip | 19 | +15 | 34 | 9 |

**Total: 275 built-in A&P recall items, 59 A&P visuals, 73 lesson-note entries.** Original: 181 questions, 17 visuals, 57 notes. Added: 94 questions, 42 visuals, 16 appended note entries.

## Source decks and source boundaries

- `Chapter 1 and 2 (Anatomy and Physiology) (1).pptx`: Chapter 1 body organization, Chapter 2 homeostasis. Slides refer to the original 1-based slide order; personal photo slides 2–8 were not used.
- `Upper extremity(1).ppt`: Chapter 13 Part I skeletal anatomy (carpals, phalanges, radius, ulna, humerus, shoulder). The legacy Mac PowerPoint file could not be rendered page-by-page with the available LibreOffice converter; its **original embedded diagrams** were recovered directly from the PPT. They are labeled with chapter/topic, **not fabricated slide numbers**.
- `Lower Extremity.ppt`: Chapter 13 Part II foot, ankle, leg, knee, femur, pelvis and hip. Slides have verified 1-based page locators from the full 66-page rendering.
- `Human Hand Anatomy Diagram Worksheet .pdf` and `Forearm labeling.jpg`: previously supplied and included worksheet references.

## Visual provenance

See [`AP1_VISUAL_SOURCE_INDEX.md`](AP1_VISUAL_SOURCE_INDEX.md) for every new asset, its lesson assignment, and the exact source file or slide. New study images live in `assets/anatomy/`; their paths are referenced by `data/anatomy.js` in each lesson’s `visuals` array. The previous 17 images are retained unchanged.

## Academic notes and verified caveats

- **Lower Extremity slide 63 has the subpubic-angle inequalities reversed** in its male/female comparison; do not turn those incorrect angle signs into questions. Female pubic arch is typically wider. The expanded bank does not test those reversed signs.
- Notes about joint names distinguish intercarpal, CMC, MCP, PIP, DIP and thumb IP, plus bone markings and proximal/distal anatomy.
- Existing 181 question texts, correct answers and IDs are preserved. New items use `-landmark-###` suffixes and plausible distractors to support both flashcards and graded quizzes.
- Upper-extremity embedded diagram captions purposely omit exact slide numbers because the image-to-slide association could not be independently verified. Exact topic headings from the original lecture are retained in question source fields.
- The original lesson notes remain in their existing order and the new notes are appended. This avoids shifting lesson-note indices used by locally saved correction reports.

## Course integration and private content

The major subjects remain **All / Radiographic Physics / Radiographic Positioning / Anatomy & Physiology I**. The `import.html` private content tool, progress backups, and flashcard sharing are unchanged. The website’s `rad145-interactive-v1` browser storage key and all existing module/question IDs are unchanged. A previous browser-local import of the temporary 50-question A&P joints pack may cause repeated **notes**, although built-in questions with matching IDs are deduplicated by the site’s module merger. Check before merging a separate imported pack again.

