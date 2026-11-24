/* Magnetism and Electromagnetism: instructor slides Lectures 1–3.
   Stable IDs. Do not change existing lesson IDs or overwrite state. */
(()=>{'use strict';
const m=[
  {
    "id": "magnetism-l1",
    "course": "Radiographic Physics",
    "unit": "Magnetism and Electromagnetism · Lecture 1",
    "title": "Magnetism — Magnetic Laws & Materials",
    "summary": "Magnetic moments, magnets, poles, flux, units and the electromagnetic spectrum.",
    "source": "RAD145 Magnetism and Electromagnetism, Lecture 1 instructor slides; journal outline Sections A–B",
    "lesson": [
      {
        "head": "Electromagnetic wave review",
        "text": "Electric and magnetic fields travel as electromagnetic waves. In vacuum c ≈ 3 × 10⁸ m/s. Frequency f is cycles per second (Hz); wavelength λ is crest-to-crest distance. c = fλ, so larger λ means smaller f. Photon energy increases with frequency.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slides 2–12"
      },
      {
        "head": "Magnetism and magnetic moments",
        "text": "Orbital and spin magnetic moments contribute to an atom’s magnetic behavior. A dipole has N and S poles; many aligned atomic moments form a domain. A magnet has sufficiently aligned domains to create a net magnetic field.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slides 19–23"
      },
      {
        "head": "Magnetic field lines",
        "text": "Magnetic flux lines never cross. Outside a magnet they travel N → S; inside they return S → N, making loops. Crowded lines indicate a stronger field.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slides 24–25"
      },
      {
        "head": "Three laws of magnetism",
        "text": "Unlike poles attract, like poles repel. An introductory inverse-square model says doubling separation gives one-quarter the force. Breaking a magnet produces smaller N–S dipoles, never a lone pole.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slides 15–17"
      },
      {
        "head": "Magnetic units",
        "text": "Weber (Wb) measures magnetic flux. Tesla (T) and gauss (G) measure flux density. 1 T = 1 Wb/m² = 10,000 G.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slides 28"
      },
      {
        "head": "Three magnet types",
        "text": "Natural: lodestone, Earth. Artificial permanent: alnico bar or horseshoe magnets, may be weakened by heat or trauma. Electromagnet: current through a coil creates a field that disappears as current stops.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slides 30–33"
      },
      {
        "head": "Useful distinction",
        "text": "Magnetic dipole refers to a two-pole magnetic moment; a domain is a region with many aligned moments. The lecture simplifies these terms; remember the difference to avoid ambiguous answers.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slides 22–23"
      }
    ],
    "items": [
      {
        "id": "magnetism-l1-001",
        "q": "Which motion-related property of an electron contributes to atomic magnetism?",
        "a": "Orbital magnetic moment",
        "wrong": [
          "Magnetic retentivity",
          "Magnetic permeability",
          "Magnetic flux density"
        ],
        "why": "The lecture identifies orbital and spin magnetic moments.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 21"
      },
      {
        "id": "magnetism-l1-002",
        "q": "What magnetic property is associated with electron spin?",
        "a": "Spin magnetic moment",
        "wrong": [
          "Orbital magnetic moment",
          "Magnetic susceptibility",
          "Magnetic coercivity"
        ],
        "why": "Spin is a distinct contributor to electron magnetic moment.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 20"
      },
      {
        "id": "magnetism-l1-003",
        "q": "What is a magnetic dipole?",
        "a": "A magnetic system with north and south poles",
        "wrong": [
          "A magnetic system with only a north pole",
          "A magnetic field with no direction",
          "A material with no magnetic response"
        ],
        "why": "Magnetic poles appear in pairs.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 17"
      },
      {
        "id": "magnetism-l1-004",
        "q": "What is a magnetic domain?",
        "a": "Region of aligned atomic magnetic moments",
        "wrong": [
          "Region of randomly aligned isolated poles",
          "Single isolated magnetic north pole",
          "Area without any atomic magnetic moments"
        ],
        "why": "Domain alignment produces a net field.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 22"
      },
      {
        "id": "magnetism-l1-005",
        "q": "What strengthens an ordinary permanent magnet?",
        "a": "More domains aligned in the same direction",
        "wrong": [
          "More domains randomly oriented",
          "More heat applied to erase orientation",
          "Separating every magnetic dipole"
        ],
        "why": "Aligned domains reinforce magnetic field.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 23"
      },
      {
        "id": "magnetism-l1-006",
        "q": "Outside a bar magnet, magnetic field lines run in which direction?",
        "a": "North to south",
        "wrong": [
          "South to north",
          "From center to both poles only",
          "In straight lines that stop at each pole"
        ],
        "why": "Outside N→S; inside returns S→N.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 25"
      },
      {
        "id": "magnetism-l1-007",
        "q": "What is true of magnetic field lines?",
        "a": "They form closed loops and never intersect",
        "wrong": [
          "They end at the magnetic equator",
          "They intersect where fields are strong",
          "They flow only within the magnet"
        ],
        "why": "Lecture specifies closed loops and no crossing.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 24–25"
      },
      {
        "id": "magnetism-l1-008",
        "q": "When two north poles face one another, what happens?",
        "a": "They repel",
        "wrong": [
          "They attract",
          "They cancel both poles permanently",
          "They create an isolated south pole"
        ],
        "why": "Like poles repel.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 15"
      },
      {
        "id": "magnetism-l1-009",
        "q": "What happens when a bar magnet breaks into two pieces?",
        "a": "Each piece has its own north and south poles",
        "wrong": [
          "One piece is only north and the other only south",
          "Both pieces permanently lose all magnetic domains",
          "Each piece develops only a north pole"
        ],
        "why": "A dipole cannot be split into isolated poles in the classroom model.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 17"
      },
      {
        "id": "magnetism-l1-010",
        "q": "In the simplified inverse-square model, doubling distance changes the force to what fraction?",
        "a": "One-quarter",
        "wrong": [
          "One-half",
          "One-eighth",
          "One-sixteenth"
        ],
        "why": "Force varies inversely with distance squared in that simplified law.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 16"
      },
      {
        "id": "magnetism-l1-011",
        "q": "What unit measures total magnetic flux?",
        "a": "Weber (Wb)",
        "wrong": [
          "Tesla (T)",
          "Gauss (G)",
          "Hertz (Hz)"
        ],
        "why": "Weber is flux, whereas tesla and gauss measure flux density.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 28"
      },
      {
        "id": "magnetism-l1-012",
        "q": "What SI unit measures magnetic flux density?",
        "a": "Tesla (T)",
        "wrong": [
          "Weber (Wb)",
          "Ampere (A)",
          "Ohm (Ω)"
        ],
        "why": "Tesla is Wb/m².",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 28"
      },
      {
        "id": "magnetism-l1-013",
        "q": "One tesla equals how many gauss?",
        "a": "10,000 G",
        "wrong": [
          "1,000 G",
          "100,000 G",
          "100 G"
        ],
        "why": "1 T = 10⁴ G.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 28"
      },
      {
        "id": "magnetism-l1-014",
        "q": "Which example is a natural magnet?",
        "a": "Lodestone",
        "wrong": [
          "Alnico bar magnet",
          "Energized relay coil",
          "Steel screwdriver magnetized at a factory"
        ],
        "why": "Lodestone (magnetite) is naturally magnetic.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 31"
      },
      {
        "id": "magnetism-l1-015",
        "q": "Which is an example of an artificial permanent magnet?",
        "a": "Alnico horseshoe magnet",
        "wrong": [
          "Current-powered solenoid",
          "Energized x-ray tube detent",
          "A coil carrying alternating current"
        ],
        "why": "Alnico is used to make permanent magnets.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 32"
      },
      {
        "id": "magnetism-l1-016",
        "q": "What produces the field in an electromagnet?",
        "a": "Current flowing in a coil",
        "wrong": [
          "A permanently isolated north pole",
          "A static uncharged glass rod",
          "Heat without moving charges"
        ],
        "why": "Current produces a magnetic field.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 33"
      },
      {
        "id": "magnetism-l1-017",
        "q": "Which change can weaken an artificial permanent magnet?",
        "a": "Excessive heat",
        "wrong": [
          "Reducing ambient light",
          "Increasing surface area of nearby plastic",
          "Placing it in still air"
        ],
        "why": "Heating can disrupt alignment of domains.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 32"
      },
      {
        "id": "magnetism-l1-018",
        "q": "Magnetic field strength is visually indicated by what in a field-line diagram?",
        "a": "Density of the field lines",
        "wrong": [
          "Color of the surrounding air",
          "Length of the magnet label",
          "Number of current switches drawn"
        ],
        "why": "More closely spaced lines indicate a stronger field.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 24"
      },
      {
        "id": "magnetism-l1-019",
        "q": "What is the relation between frequency and wavelength for waves traveling at fixed speed?",
        "a": "Inversely proportional",
        "wrong": [
          "Directly proportional",
          "Both must remain equal",
          "Unrelated at fixed speed"
        ],
        "why": "c = fλ.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 8–10"
      },
      {
        "id": "magnetism-l1-020",
        "q": "What happens to X-ray photon frequency as photon energy rises?",
        "a": "Frequency increases",
        "wrong": [
          "Frequency decreases",
          "Frequency remains fixed",
          "Frequency alternates randomly"
        ],
        "why": "Photon energy is directly related to frequency.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 12"
      },
      {
        "id": "magnetism-l1-021",
        "q": "What physical feature distinguishes the electromagnetic spectrum from ordinary sound?",
        "a": "Electromagnetic energy travels in vacuum",
        "wrong": [
          "All EM radiation is mechanically longitudinal",
          "Electromagnetic waves require a solid conductor",
          "Frequency cannot change in EM waves"
        ],
        "why": "The EM spectrum represents electric and magnetic wave propagation.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 2–4"
      },
      {
        "id": "magnetism-l1-022",
        "q": "What is 1 hertz?",
        "a": "One cycle per second",
        "wrong": [
          "One meter per second",
          "One weber per square meter",
          "One joule per coulomb"
        ],
        "why": "Hz expresses frequency.",
        "source": "Magnetism and Electromagnetism — Lecture 1; slide 5"
      }
    ],
    "numerics": [],
    "visuals": [
      {
        "src": "assets/magnetism/l1-s15.webp",
        "label": "Like-pole repulsion and unlike-pole attraction · Lecture 1, slide 15",
        "alt": "Like-pole repulsion and unlike-pole attraction"
      },
      {
        "src": "assets/magnetism/l1-s17.webp",
        "label": "Dipoles and magnetic poles · Lecture 1, slide 17",
        "alt": "Dipoles and magnetic poles"
      },
      {
        "src": "assets/magnetism/l1-s20.webp",
        "label": "Electron spin magnetic moment · Lecture 1, slide 20",
        "alt": "Electron spin magnetic moment"
      },
      {
        "src": "assets/magnetism/l1-s21.webp",
        "label": "Electron orbital magnetic moment · Lecture 1, slide 21",
        "alt": "Electron orbital magnetic moment"
      },
      {
        "src": "assets/magnetism/l1-s22.webp",
        "label": "Magnetic domain illustration · Lecture 1, slide 22",
        "alt": "Magnetic domain illustration"
      },
      {
        "src": "assets/magnetism/l1-s24.webp",
        "label": "Magnetic lines of flux · Lecture 1, slide 24",
        "alt": "Magnetic lines of flux"
      },
      {
        "src": "assets/magnetism/l1-s25.webp",
        "label": "Magnetic field direction around a bar magnet · Lecture 1, slide 25",
        "alt": "Magnetic field direction around a bar magnet"
      },
      {
        "src": "assets/magnetism/l1-s28.webp",
        "label": "Magnetic flux and flux-density units · Lecture 1, slide 28",
        "alt": "Magnetic flux and flux-density units"
      },
      {
        "src": "assets/magnetism/l1-s32.webp",
        "label": "Artificial permanent magnet examples · Lecture 1, slide 32",
        "alt": "Artificial permanent magnet examples"
      }
    ]
  },
  {
    "id": "magnetism-l2",
    "course": "Radiographic Physics",
    "unit": "Magnetism and Electromagnetism · Lecture 2",
    "title": "Electromagnetism — Fields & Generators",
    "summary": "Materials, hand rules, Oersted, solenoids, induction methods and generators.",
    "source": "RAD145 Magnetism and Electromagnetism, Lecture 2 instructor slides; journal outline Sections A–B",
    "lesson": [
      {
        "head": "Magnetic properties of materials",
        "text": "Susceptibility: how strongly material can become magnetized. Permeability: how easily flux passes through it. Retentivity: how much magnetism remains afterward. The slide describes a tendency between permeability and retentivity, not a universal inverse law.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 2"
      },
      {
        "head": "Four material classes",
        "text": "Ferromagnetic: strongly attracted (iron, nickel, cobalt). Paramagnetic: weakly attracted (aluminum, platinum). Diamagnetic: weakly repelled (bismuth, water). Classroom nonmagnetic category: little apparent response (wood, glass, rubber).",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 3–4"
      },
      {
        "head": "Oersted’s current/field discovery",
        "text": "Hans Oersted (1820): current in a conductor creates a magnetic field. A compass deflects beside the wire only when current flows.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 6–7"
      },
      {
        "head": "Hand rules",
        "text": "Straight wire grip rule: right thumb = conventional current, fingers curl around magnetic field. Solenoid grip rule: curl fingers with conventional current around turns; right thumb shows north pole. Fleming right-hand generator and left-hand motor rules are distinct.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 8–13"
      },
      {
        "head": "Helix, solenoid, electromagnet",
        "text": "Helix = coiled wire. Solenoid = energized coil. Electromagnet = energized solenoid with a ferromagnetic core; it creates a strong N–S field. Used in x-ray room detents and relays.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 11–17"
      },
      {
        "head": "Three requirements for induction",
        "text": "Magnetic field, a conductor/circuit, and changing flux linkage (relative motion OR changing field strength). A closed circuit is required for induced current to flow.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 22"
      },
      {
        "head": "Three ways to induce voltage",
        "text": "(1) Move a conductor through a stationary field. (2) Move the field/magnet across a conductor. (3) Vary the stationary field strength through the conductor. These all change flux.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 23–26"
      },
      {
        "head": "Generator vs. motor",
        "text": "Generator: mechanical → electrical energy (electromagnetic induction). Motor: electrical → mechanical motion (magnetic force). AC generator uses rotating coil, shaft, stator field, slip rings and brushes.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 20, 22, 27"
      },
      {
        "head": "Why a constant field is not enough",
        "text": "Simply putting a stationary coil in a steady magnetic field produces no continuous induced voltage; the flux linked to the coil must change.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slides 28"
      }
    ],
    "items": [
      {
        "id": "magnetism-l2-001",
        "q": "Which term means how readily a material supports magnetization?",
        "a": "Magnetic permeability",
        "wrong": [
          "Magnetic retentivity",
          "Magnetic susceptibility",
          "Magnetic coercivity"
        ],
        "why": "The lecture uses “how easily can it become magnetic?”",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 2"
      },
      {
        "id": "magnetism-l2-002",
        "q": "Which term means magnetization remaining after a magnetizing force is removed?",
        "a": "Magnetic retentivity",
        "wrong": [
          "Magnetic permeability",
          "Magnetic susceptibility",
          "Inductive reactance"
        ],
        "why": "Retentivity measures how much remains magnetized.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 2"
      },
      {
        "id": "magnetism-l2-003",
        "q": "Which term describes the degree a material can be magnetized?",
        "a": "Magnetic susceptibility",
        "wrong": [
          "Magnetic retentivity",
          "Magnetic induction",
          "Magnetic flux density"
        ],
        "why": "Susceptibility describes the strength of its magnetic response.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 2"
      },
      {
        "id": "magnetism-l2-004",
        "q": "Which class includes iron, cobalt, and nickel?",
        "a": "Ferromagnetic",
        "wrong": [
          "Paramagnetic",
          "Diamagnetic",
          "Classroom nonmagnetic"
        ],
        "why": "These materials can be strongly magnetized.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 3"
      },
      {
        "id": "magnetism-l2-005",
        "q": "Which material type is weakly attracted to a magnetic field?",
        "a": "Paramagnetic",
        "wrong": [
          "Ferromagnetic",
          "Diamagnetic",
          "Classroom nonmagnetic"
        ],
        "why": "Paramagnetic materials show a weak attraction.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 3"
      },
      {
        "id": "magnetism-l2-006",
        "q": "Which material type is weakly repelled by a magnetic field?",
        "a": "Diamagnetic",
        "wrong": [
          "Ferromagnetic",
          "Paramagnetic",
          "Strong permanent magnetic"
        ],
        "why": "Diamagnetism opposes an applied magnetic field weakly.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 4"
      },
      {
        "id": "magnetism-l2-007",
        "q": "Which is a lecture example of a paramagnetic material?",
        "a": "Aluminum",
        "wrong": [
          "Bismuth",
          "Nickel",
          "Glass"
        ],
        "why": "The lecture lists aluminum and platinum.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 3"
      },
      {
        "id": "magnetism-l2-008",
        "q": "What did Oersted demonstrate with a current-carrying wire and compass?",
        "a": "Electric current creates a magnetic field",
        "wrong": [
          "Magnetism always creates DC current in an unmoving coil",
          "An open circuit generates alternating current",
          "A constant field alone induces sustained current"
        ],
        "why": "A nearby compass deflected when current flowed.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 6–7"
      },
      {
        "id": "magnetism-l2-009",
        "q": "For a straight conductor, the right-hand thumb points with which direction?",
        "a": "Conventional current",
        "wrong": [
          "Electron drift direction",
          "Magnetic field circulation",
          "Motion of the conductor"
        ],
        "why": "The curled fingers show magnetic field direction.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 9"
      },
      {
        "id": "magnetism-l2-010",
        "q": "For a solenoid, the right-hand thumb points toward what?",
        "a": "North magnetic pole",
        "wrong": [
          "South magnetic pole",
          "Electron flow through its axis",
          "Direction of its mechanical spin"
        ],
        "why": "Curl fingers with conventional current around the turns.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 13"
      },
      {
        "id": "magnetism-l2-011",
        "q": "What is a helix before current is applied?",
        "a": "A spiral coil of wire",
        "wrong": [
          "An energized solenoid with iron core",
          "A rotating AC generator",
          "A permanent magnetic domain"
        ],
        "why": "The lecture distinguishes the coil before and after energization.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 11"
      },
      {
        "id": "magnetism-l2-012",
        "q": "What is a solenoid?",
        "a": "Current-carrying coil of wire",
        "wrong": [
          "Coil with no current by definition",
          "Permanently magnetized alnico bar",
          "Stationary armature of generator"
        ],
        "why": "The coil creates a field when energized.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 12"
      },
      {
        "id": "magnetism-l2-013",
        "q": "What turns a solenoid into a stronger electromagnet?",
        "a": "Adding a ferromagnetic core",
        "wrong": [
          "Removing all core material",
          "Opening the current-carrying circuit",
          "Replacing wire with an insulator"
        ],
        "why": "Ferromagnetic core strengthens flux density.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 14"
      },
      {
        "id": "magnetism-l2-014",
        "q": "Which x-ray-room component can use an electromagnet?",
        "a": "Detent/positioning lock",
        "wrong": [
          "Lead apron",
          "Collimation mirror",
          "Image receptor cassette"
        ],
        "why": "Lecture identifies detents and electromagnetic relays.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 16–17"
      },
      {
        "id": "magnetism-l2-015",
        "q": "Which set contains the three ingredients for induction?",
        "a": "Magnetic field, conductor, changing flux",
        "wrong": [
          "Magnetic field, insulator, steady field",
          "Stationary core, constant DC, open loop",
          "Two fixed magnets, plastic, no field change"
        ],
        "why": "Flux linkage must change in a conducting circuit.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 22"
      },
      {
        "id": "magnetism-l2-016",
        "q": "What happens if a stationary coil sits in an unchanging magnetic field?",
        "a": "No continuous induced voltage",
        "wrong": [
          "Continuous maximum AC voltage",
          "A steadily increasing induced voltage",
          "A permanent rise in secondary current"
        ],
        "why": "A constant flux does not produce induction.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 28"
      },
      {
        "id": "magnetism-l2-017",
        "q": "Which method induces voltage with NO physical motion?",
        "a": "Change the field strength through a stationary conductor",
        "wrong": [
          "Keep a steady field and stationary conductor",
          "Move an insulator parallel to the field",
          "Disconnect a stationary conductor from every circuit"
        ],
        "why": "Time-varying magnetic flux works without physical movement.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 26"
      },
      {
        "id": "magnetism-l2-018",
        "q": "What energy conversion describes an electrical generator?",
        "a": "Mechanical to electrical",
        "wrong": [
          "Electrical to mechanical",
          "Electrical to chemical",
          "Magnetic to nuclear"
        ],
        "why": "A generator rotates a conductor relative to magnetic flux.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 27"
      },
      {
        "id": "magnetism-l2-019",
        "q": "What energy conversion describes an electric motor?",
        "a": "Electrical to mechanical",
        "wrong": [
          "Mechanical to electrical",
          "Thermal to nuclear",
          "Chemical to light only"
        ],
        "why": "Current and a magnetic field produce mechanical force.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 20"
      },
      {
        "id": "magnetism-l2-020",
        "q": "Which generator components maintain rotating electrical contact?",
        "a": "Slip rings and brushes",
        "wrong": [
          "Hysteresis core and laminations",
          "Rotor and field magnets alone",
          "Capacitor and bridge rectifier"
        ],
        "why": "Slip rings and brushes connect the rotating coil to the output circuit.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 27"
      },
      {
        "id": "magnetism-l2-021",
        "q": "Which part of the illustrated generator rotates?",
        "a": "Rotor / armature",
        "wrong": [
          "Stator frame",
          "Stationary pole shoe",
          "Fixed magnetic yoke"
        ],
        "why": "The shaft turns the armature in the field.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 27"
      },
      {
        "id": "magnetism-l2-022",
        "q": "What does the stationary part of a generator or motor mean?",
        "a": "Stator",
        "wrong": [
          "Rotor",
          "Armature shaft",
          "Slip-ring brush"
        ],
        "why": "Stator remains stationary.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 27"
      },
      {
        "id": "magnetism-l2-023",
        "q": "What is mutual induction?",
        "a": "A changing field in one coil induces voltage in another coil",
        "wrong": [
          "A wire’s own DC resistance produces heat",
          "A permanent magnet is demagnetized by heat",
          "Two coils create static fields with no change"
        ],
        "why": "The magnetic field of the primary links the secondary.",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 22–28"
      },
      {
        "id": "magnetism-l2-024",
        "q": "Which hand is normally used for Fleming’s generator rule?",
        "a": "Right hand",
        "wrong": [
          "Left hand",
          "Both hands interlocked",
          "Neither hand: the rule uses only the foot"
        ],
        "why": "Fleming’s generator effect uses a right-hand rule (distinct from grip rule).",
        "source": "Magnetism and Electromagnetism — Lecture 2; slide 8"
      }
    ],
    "numerics": [],
    "visuals": [
      {
        "src": "assets/magnetism/l2-s03.webp",
        "label": "Ferromagnetic and paramagnetic material descriptions · Lecture 2, slide 3",
        "alt": "Ferromagnetic and paramagnetic material descriptions"
      },
      {
        "src": "assets/magnetism/l2-s04.webp",
        "label": "Diamagnetic and nonmagnetic materials · Lecture 2, slide 4",
        "alt": "Diamagnetic and nonmagnetic materials"
      },
      {
        "src": "assets/magnetism/l2-s07.webp",
        "label": "Oersted compass deflection experiment · Lecture 2, slide 7",
        "alt": "Oersted compass deflection experiment"
      },
      {
        "src": "assets/magnetism/l2-s09.webp",
        "label": "Right-hand grip rule for a straight wire · Lecture 2, slide 9",
        "alt": "Right-hand grip rule for a straight wire"
      },
      {
        "src": "assets/magnetism/l2-s12.webp",
        "label": "Current-carrying solenoid and its magnetic field · Lecture 2, slide 12",
        "alt": "Current-carrying solenoid and its magnetic field"
      },
      {
        "src": "assets/magnetism/l2-s13.webp",
        "label": "Right-hand solenoid rule · Lecture 2, slide 13",
        "alt": "Right-hand solenoid rule"
      },
      {
        "src": "assets/magnetism/l2-s14.webp",
        "label": "Field strength of an electromagnet with a core · Lecture 2, slide 14",
        "alt": "Field strength of an electromagnet with a core"
      },
      {
        "src": "assets/magnetism/l2-s24.webp",
        "label": "Conductor moving through stationary field · Lecture 2, slide 24",
        "alt": "Conductor moving through stationary field"
      },
      {
        "src": "assets/magnetism/l2-s25.webp",
        "label": "Magnet moving across a conductor · Lecture 2, slide 25",
        "alt": "Magnet moving across a conductor"
      },
      {
        "src": "assets/magnetism/l2-s26.webp",
        "label": "Field changing through stationary conductor · Lecture 2, slide 26",
        "alt": "Field changing through stationary conductor"
      },
      {
        "src": "assets/magnetism/l2-s27.webp",
        "label": "Rotating AC generator parts · Lecture 2, slide 27",
        "alt": "Rotating AC generator parts"
      }
    ]
  },
  {
    "id": "magnetism-l3",
    "course": "Radiographic Physics",
    "unit": "Magnetism and Electromagnetism · Lecture 3",
    "title": "Induction — Faraday, Lenz & Transformers",
    "summary": "Induction laws, mutual/self-induction, transformer ratios, cores and losses.",
    "source": "RAD145 Magnetism and Electromagnetism, Lecture 3 instructor slides; journal outline Sections A–B",
    "lesson": [
      {
        "head": "Faraday’s first law — four factors",
        "text": "Induced voltage increases with stronger magnetic field, faster change of relative flux, a conductor crossing field lines nearer 90°, and a greater number of turns. More induced current follows only if circuit resistance stays fixed.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 2–7"
      },
      {
        "head": "Lenz’s second law",
        "text": "The induced current’s field opposes the CHANGE in magnetic flux. Approaching N pole creates a near N face that repels approach; when the N pole recedes, induced field reverses to oppose retreat.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 8"
      },
      {
        "head": "Mutual induction",
        "text": "A changing primary coil field links the secondary coil and induces voltage in it. Transformers rely on mutual induction.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 9–11"
      },
      {
        "head": "Self induction and inductive reactance",
        "text": "Changing current through a coil produces opposing induced voltage within the same coil. Inductive reactance opposes AC changes and is measured in Ω. Supplemental Xₗ=2πfL.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 12–13"
      },
      {
        "head": "Ideal transformer laws",
        "text": "Primary (p) receives AC; secondary (s) supplies output. Vₛ/Vₚ = Nₛ/Nₚ; Iₛ/Iₚ = Nₚ/Nₛ. Ideal power input ≈ output: VₚIₚ ≈ VₛIₛ.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 14, 16–19"
      },
      {
        "head": "Step-up vs. step-down",
        "text": "Step-up: Nₛ>Nₚ, voltage increases, current decreases. Step-down: Nₛ<Nₚ, voltage decreases, current increases. The labels up/down refer to VOLTAGE, not current.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 20–21"
      },
      {
        "head": "Core configuration types",
        "text": "Air core (no ferromagnetic core); open core (incomplete magnetic path); closed core (complete return path); shell type (core surrounds windings and is described as common in x-ray generators). Autotransformer has one tapped winding.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 22–25"
      },
      {
        "head": "Transformer losses and fixes",
        "text": "Copper loss I²R: reduce winding resistance/use thicker wire. Hysteresis: silicon-iron core. Eddy currents: insulated laminated core. All three waste energy as heat.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 26–29"
      },
      {
        "head": "Step-up worked example",
        "text": "Vₚ=120 V, Nₚ=100 turns, Nₛ=500 turns ⇒ Vₛ=600 V. If Iₚ=5 A then Iₛ=1 A ideally.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 16–19"
      },
      {
        "head": "Step-down worked example",
        "text": "Vₚ=240 V, Nₚ=600 turns, Nₛ=150 turns ⇒ Vₛ=60 V. If Iₚ=2 A then Iₛ=8 A ideally.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 16–19"
      },
      {
        "head": "Drawings for journal",
        "text": "Draw the three flux-change methods; four Faraday factors; Lenz near-pole reversal; AC generator (stator, rotor, shaft, slip rings, brushes); and four transformer core shapes. The journal document supplies simplified copy diagrams.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slides 3–8, 20–24"
      }
    ],
    "items": [
      {
        "id": "magnetism-l3-001",
        "q": "Which law states that changing magnetic flux induces voltage?",
        "a": "Faraday’s law",
        "wrong": [
          "Lenz’s law",
          "Ohm’s law",
          "Inverse-square law"
        ],
        "why": "Faraday describes induced EMF due to changing flux.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 2–3"
      },
      {
        "id": "magnetism-l3-002",
        "q": "Which law determines the direction of induced current relative to a flux change?",
        "a": "Lenz’s law",
        "wrong": [
          "Faraday’s law",
          "Ohm’s law",
          "Kirchhoff’s current law"
        ],
        "why": "The induced field opposes the CHANGE in flux.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 8"
      },
      {
        "id": "magnetism-l3-003",
        "q": "What increases induced voltage when other factors are unchanged?",
        "a": "More turns in the coil",
        "wrong": [
          "Fewer turns in the coil",
          "Smaller field change",
          "Slower relative motion"
        ],
        "why": "More turns increase induced EMF.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 7"
      },
      {
        "id": "magnetism-l3-004",
        "q": "Cutting flux at which angle yields the greatest induction in the lecture model?",
        "a": "90°",
        "wrong": [
          "0°",
          "30°",
          "45°"
        ],
        "why": "Perpendicular cutting of flux lines gives greatest rate of change.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 6"
      },
      {
        "id": "magnetism-l3-005",
        "q": "How does faster conductor motion through a magnetic field affect induced EMF?",
        "a": "It increases the induced EMF",
        "wrong": [
          "It decreases the induced EMF",
          "It keeps induced EMF at zero",
          "It changes EMF into resistance"
        ],
        "why": "Faster field-line cutting increases EMF.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 5"
      },
      {
        "id": "magnetism-l3-006",
        "q": "What does a stronger field do to induced EMF if motion and coil turns stay the same?",
        "a": "Increases induced EMF",
        "wrong": [
          "Decreases induced EMF",
          "Changes only resistance",
          "Stops induction entirely"
        ],
        "why": "More magnetic flux can be cut per unit time.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 4"
      },
      {
        "id": "magnetism-l3-007",
        "q": "A north magnet pole approaches a coil. What pole appears on the coil’s near face?",
        "a": "North",
        "wrong": [
          "South",
          "Neither pole",
          "Alternating both at the same instant"
        ],
        "why": "The induced face repels an approaching N pole.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 8"
      },
      {
        "id": "magnetism-l3-008",
        "q": "A north magnet pole moves AWAY from a coil. What does the coil’s near face become?",
        "a": "South",
        "wrong": [
          "North",
          "No pole at all while flux is changing",
          "A permanent north and south at once"
        ],
        "why": "The coil opposes the retreat by attracting N.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 8"
      },
      {
        "id": "magnetism-l3-009",
        "q": "How many coils are involved in basic mutual induction?",
        "a": "Two separate coils",
        "wrong": [
          "One coil only",
          "Three permanent magnets",
          "Four isolated secondary coils"
        ],
        "why": "Primary changing flux induces voltage in separate secondary.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 10"
      },
      {
        "id": "magnetism-l3-010",
        "q": "Where is the induced opposing voltage produced during self-induction?",
        "a": "In the same coil whose current changes",
        "wrong": [
          "Only in a distant second coil",
          "Only across a fixed resistor",
          "Only inside a permanent magnet"
        ],
        "why": "Self induction means same coil.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 12"
      },
      {
        "id": "magnetism-l3-011",
        "q": "What unit measures inductive reactance?",
        "a": "Ohm (Ω)",
        "wrong": [
          "Tesla (T)",
          "Weber (Wb)",
          "Hertz (Hz)"
        ],
        "why": "Inductive reactance is opposition to changing current, measured in ohms.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 12"
      },
      {
        "id": "magnetism-l3-012",
        "q": "A step-up transformer has which winding relationship?",
        "a": "More secondary turns than primary turns",
        "wrong": [
          "Fewer secondary turns than primary turns",
          "Equal turns and output at zero",
          "No secondary winding"
        ],
        "why": "Step-up is a voltage increase proportional to turns ratio.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 21"
      },
      {
        "id": "magnetism-l3-013",
        "q": "A step-down transformer has which winding relationship?",
        "a": "Fewer secondary turns than primary turns",
        "wrong": [
          "More secondary turns than primary turns",
          "No magnetic coupling",
          "Equal turns with doubled voltage"
        ],
        "why": "Step-down reduces voltage.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 20"
      },
      {
        "id": "magnetism-l3-014",
        "q": "The name step-up or step-down refers to which output change?",
        "a": "Voltage",
        "wrong": [
          "Current",
          "Resistance",
          "Frequency"
        ],
        "why": "The slide explicitly defines up/down by voltage.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 14"
      },
      {
        "id": "magnetism-l3-015",
        "q": "In an ideal step-up transformer, secondary current does what?",
        "a": "Decreases as voltage increases",
        "wrong": [
          "Increases as voltage increases",
          "Always equals zero",
          "Stays equal regardless of turns"
        ],
        "why": "Voltage and current change inversely for ideal power transfer.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 18–19"
      },
      {
        "id": "magnetism-l3-016",
        "q": "A transformer has Vp=20 V, Np=100, Ns=10. What is Vs?",
        "a": "2 V",
        "wrong": [
          "20 V",
          "200 V",
          "0.2 V"
        ],
        "why": "Vs = 20 × (10/100) = 2 V (lecture example).",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 17"
      },
      {
        "id": "magnetism-l3-017",
        "q": "An ideal transformer has Ip=0.5 A, Np=100, Ns=10. What is Is?",
        "a": "5 A",
        "wrong": [
          "0.05 A",
          "0.5 A",
          "50 A"
        ],
        "why": "Is = 0.5 × (100/10) = 5 A.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 19"
      },
      {
        "id": "magnetism-l3-018",
        "q": "Vp=120 V, Np=100, Ns=500. Find Vs.",
        "a": "600 V",
        "wrong": [
          "120 V",
          "24 V",
          "300 V"
        ],
        "why": "Vs = 120 × (500/100) = 600 V.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 16–17"
      },
      {
        "id": "magnetism-l3-019",
        "q": "Ip=5 A, Np=100, Ns=500. Find Is for an ideal transformer.",
        "a": "1 A",
        "wrong": [
          "25 A",
          "5 A",
          "0.2 A"
        ],
        "why": "Is = 5 × 100/500 = 1 A.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 18–19"
      },
      {
        "id": "magnetism-l3-020",
        "q": "Vp=120 V, Vs=480 V, Np=150. Find Ns.",
        "a": "600 turns",
        "wrong": [
          "300 turns",
          "75 turns",
          "150 turns"
        ],
        "why": "Ns = 150 × 480/120 = 600 turns.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 16"
      },
      {
        "id": "magnetism-l3-021",
        "q": "Vp=240 V, Np=600, Ns=150. Find Vs.",
        "a": "60 V",
        "wrong": [
          "960 V",
          "240 V",
          "120 V"
        ],
        "why": "Vs = 240 × 150/600 = 60 V.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 16–17"
      },
      {
        "id": "magnetism-l3-022",
        "q": "Ip=2 A, Np=600, Ns=150. Find Is for an ideal transformer.",
        "a": "8 A",
        "wrong": [
          "0.5 A",
          "2 A",
          "4 A"
        ],
        "why": "Is = 2 × 600/150 = 8 A.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 18–19"
      },
      {
        "id": "magnetism-l3-023",
        "q": "Vp=240 V, Vs=80 V, Np=300. Find Ns.",
        "a": "100 turns",
        "wrong": [
          "900 turns",
          "300 turns",
          "200 turns"
        ],
        "why": "Ns = 300 × 80/240 = 100 turns.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 16"
      },
      {
        "id": "magnetism-l3-024",
        "q": "Which transformer design has no ferromagnetic core?",
        "a": "Air core",
        "wrong": [
          "Open core",
          "Closed core",
          "Shell-type iron core"
        ],
        "why": "Air-core configuration consists of coils without ferromagnetic core.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 23"
      },
      {
        "id": "magnetism-l3-025",
        "q": "Which transformer design has a complete core return path?",
        "a": "Closed core",
        "wrong": [
          "Air core",
          "Open core",
          "Coreless winding"
        ],
        "why": "Closed core links coils through a complete magnetic path.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 24"
      },
      {
        "id": "magnetism-l3-026",
        "q": "Which transformer construction encloses the windings in the core?",
        "a": "Shell type",
        "wrong": [
          "Air core",
          "Open core",
          "External-only core"
        ],
        "why": "The lecture calls shell-type the common x-ray generator configuration.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 24"
      },
      {
        "id": "magnetism-l3-027",
        "q": "Which transformer uses one tapped winding rather than separate primary and secondary coils?",
        "a": "Autotransformer",
        "wrong": [
          "Closed-core isolation transformer",
          "Shell-type isolation transformer",
          "Two-coil air-core transformer"
        ],
        "why": "An autotransformer has selectable turns on one winding.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 25"
      },
      {
        "id": "magnetism-l3-028",
        "q": "Which loss arises from resistance heating in transformer windings?",
        "a": "Copper (I²R) loss",
        "wrong": [
          "Hysteresis loss",
          "Eddy-current loss",
          "Flux leakage alone"
        ],
        "why": "Current through resistance produces I²R heat.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 27"
      },
      {
        "id": "magnetism-l3-029",
        "q": "What helps reduce copper loss?",
        "a": "Thicker low-resistance conductors",
        "wrong": [
          "Thinner high-resistance windings",
          "Increased winding resistance",
          "Using a solid unlaminated core"
        ],
        "why": "Lower resistance reduces I²R heating.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 27"
      },
      {
        "id": "magnetism-l3-030",
        "q": "Which loss arises from repeated core magnetization and demagnetization?",
        "a": "Hysteresis loss",
        "wrong": [
          "Copper I²R loss",
          "Eddy-current loss",
          "Friction loss in slip rings"
        ],
        "why": "The magnetic domain cycling dissipates heat.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 28"
      },
      {
        "id": "magnetism-l3-031",
        "q": "Which core material does the lecture recommend to reduce hysteresis?",
        "a": "Silicon iron",
        "wrong": [
          "Pure copper wire",
          "Solid aluminum wire",
          "Uninsulated lead foil"
        ],
        "why": "Silicon-iron helps reduce core hysteresis losses.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 28"
      },
      {
        "id": "magnetism-l3-032",
        "q": "What construction reduces transformer eddy-current losses?",
        "a": "Thin insulated core laminations",
        "wrong": [
          "Solid thick uninsulated core block",
          "Greater continuous conducting core area",
          "Removing insulation between laminations"
        ],
        "why": "Lamination disrupts eddy-current loops.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 29"
      },
      {
        "id": "magnetism-l3-033",
        "q": "Which transformer loss is caused by swirling currents within the core?",
        "a": "Eddy-current loss",
        "wrong": [
          "Copper I²R loss",
          "Hysteresis loss",
          "Brush-friction loss"
        ],
        "why": "Eddy currents circulate in the conductive core.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 29"
      },
      {
        "id": "magnetism-l3-034",
        "q": "For an ideal transformer, what stays approximately equal across primary and secondary?",
        "a": "Electrical power (V × I)",
        "wrong": [
          "Voltage only",
          "Current only",
          "Number of turns"
        ],
        "why": "Ideal transformer transfers nearly equal input and output power.",
        "source": "Magnetism and Electromagnetism — Lecture 3; slide 18"
      }
    ],
    "numerics": [],
    "visuals": [
      {
        "src": "assets/magnetism/l3-s03.webp",
        "label": "Four factors of Faraday induction · Lecture 3, slide 3",
        "alt": "Four factors of Faraday induction"
      },
      {
        "src": "assets/magnetism/l3-s06.webp",
        "label": "Perpendicular flux cutting and induced voltage · Lecture 3, slide 6",
        "alt": "Perpendicular flux cutting and induced voltage"
      },
      {
        "src": "assets/magnetism/l3-s10.webp",
        "label": "Mutual induction between two coils · Lecture 3, slide 10",
        "alt": "Mutual induction between two coils"
      },
      {
        "src": "assets/magnetism/l3-s12.webp",
        "label": "Self-induction and opposing induced current · Lecture 3, slide 12",
        "alt": "Self-induction and opposing induced current"
      },
      {
        "src": "assets/magnetism/l3-s13.webp",
        "label": "Illustrated inductive reactance · Lecture 3, slide 13",
        "alt": "Illustrated inductive reactance"
      },
      {
        "src": "assets/magnetism/l3-s16.webp",
        "label": "Transformer voltage and turns law · Lecture 3, slide 16",
        "alt": "Transformer voltage and turns law"
      },
      {
        "src": "assets/magnetism/l3-s18.webp",
        "label": "Transformer current and turns law · Lecture 3, slide 18",
        "alt": "Transformer current and turns law"
      },
      {
        "src": "assets/magnetism/l3-s20.webp",
        "label": "Step-down transformer turns illustration · Lecture 3, slide 20",
        "alt": "Step-down transformer turns illustration"
      },
      {
        "src": "assets/magnetism/l3-s21.webp",
        "label": "Step-up transformer turns illustration · Lecture 3, slide 21",
        "alt": "Step-up transformer turns illustration"
      },
      {
        "src": "assets/magnetism/l3-s22.webp",
        "label": "Air, open, closed and shell-type cores · Lecture 3, slide 22",
        "alt": "Air, open, closed and shell-type cores"
      },
      {
        "src": "assets/magnetism/l3-s24.webp",
        "label": "Closed core and shell-type construction · Lecture 3, slide 24",
        "alt": "Closed core and shell-type construction"
      },
      {
        "src": "assets/magnetism/l3-s27.webp",
        "label": "Copper I²R loss and mitigation · Lecture 3, slide 27",
        "alt": "Copper I²R loss and mitigation"
      },
      {
        "src": "assets/magnetism/l3-s28.webp",
        "label": "Hysteresis loss and mitigation · Lecture 3, slide 28",
        "alt": "Hysteresis loss and mitigation"
      },
      {
        "src": "assets/magnetism/l3-s29.webp",
        "label": "Eddy-current loss and laminated core · Lecture 3, slide 29",
        "alt": "Eddy-current loss and laminated core"
      }
    ]
  }
];
if(!window.RAD145_DATA||!Array.isArray(window.RAD145_DATA.modules))throw Error("Load data/content.js before data/magnetism.js");
for(const item of m)if(!window.RAD145_DATA.modules.some(x=>x.id===item.id))window.RAD145_DATA.modules.push(item);
})();
