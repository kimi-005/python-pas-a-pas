(window.PY_LESSONS = window.PY_LESSONS || []).push({
  "id": "p02",
  "num": 102,
  "label": "P2",
  "kind": "probleme",
  "track": "problemes",
  "title": {
    "fr": "La suite de Syracuse",
    "en": "The Collatz sequence"
  },
  "intro": {
    "fr": "Choisis un entier n ≥ 1. S'il est pair, divise-le par 2 ; s'il est impair, multiplie-le par 3 et ajoute 1. Recommence. On a toujours fini par tomber sur 1… mais personne n'a jamais réussi à le démontrer ! Tu vas explorer cette suite étape par étape, jusqu'à la tracer.",
    "en": "Pick an integer n ≥ 1. If it's even, divide it by 2; if it's odd, multiply it by 3 and add 1. Repeat. It has always ended up at 1… but nobody has ever managed to prove it! You'll explore this sequence step by step, up to plotting it."
  },
  "blocks": [
    {
      "t": "h",
      "fr": "Le vocabulaire du « vol »",
      "en": "The \"flight\" vocabulary"
    },
    {
      "t": "p",
      "fr": "On imagine la suite comme le vol d'un grêlon qui monte et descend avant de tomber au sol (1). Avec n = 6 : 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1.",
      "en": "Think of the sequence as the flight of a hailstone going up and down before hitting the ground (1). With n = 6: 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1."
    },
    {
      "t": "table",
      "head": {
        "fr": [
          "Mot",
          "Sens",
          "Pour n = 6"
        ],
        "en": [
          "Word",
          "Meaning",
          "For n = 6"
        ]
      },
      "rows": [
        [
          {
            "fr": "le vol",
            "en": "the flight"
          },
          {
            "fr": "la liste des termes jusqu'à 1",
            "en": "the list of terms down to 1"
          },
          "[6, 3, 10, 5, 16, 8, 4, 2, 1]"
        ],
        [
          {
            "fr": "le temps de vol",
            "en": "the flight time"
          },
          {
            "fr": "le nombre d'étapes pour arriver à 1",
            "en": "the number of steps to reach 1"
          },
          "8"
        ],
        [
          {
            "fr": "l'altitude maximale",
            "en": "the maximum altitude"
          },
          {
            "fr": "le plus grand terme",
            "en": "the largest term"
          },
          "16"
        ]
      ]
    },
    {
      "t": "note",
      "fr": "Utilise la division entière <code>//</code> : <code>n / 2</code> donnerait un float (3.0 au lieu de 3).",
      "en": "Use integer division <code>//</code>: <code>n / 2</code> would give a float (3.0 instead of 3)."
    }
  ],
  "exercises": [
    {
      "t": "code",
      "id": "p02-e1",
      "title": {
        "fr": "Étape 1 · Le terme suivant",
        "en": "Step 1 · The next term"
      },
      "prompt": {
        "fr": "Écris <code>suivant(n)</code> qui renvoie n // 2 si n est pair, et 3n + 1 si n est impair.",
        "en": "Write <code>suivant(n)</code> that returns n // 2 if n is even, and 3n + 1 if n is odd."
      },
      "starter": {
        "fr": "def suivant(n):\n    ",
        "en": "def suivant(n):\n    "
      },
      "tests": [
        {
          "call": "suivant(6)",
          "expect": "3"
        },
        {
          "call": "suivant(3)",
          "expect": "10"
        },
        {
          "call": "suivant(1)",
          "expect": "4"
        },
        {
          "call": "type(suivant(10)) == int",
          "expect": "True",
          "desc": {
            "fr": "suivant(10) est un entier (int), pas un float",
            "en": "suivant(10) is an integer (int), not a float"
          }
        }
      ],
      "require": [
        "if",
        "return"
      ],
      "hints": [
        {
          "fr": "n est pair quand le reste de sa division par 2 est nul.",
          "en": "n is even when the remainder of its division by 2 is zero."
        },
        {
          "fr": "<code>if n % 2 == 0:</code> renvoie <code>n // 2</code>, <code>else:</code> renvoie <code>3 * n + 1</code>.",
          "en": "<code>if n % 2 == 0:</code> return <code>n // 2</code>, <code>else:</code> return <code>3 * n + 1</code>."
        }
      ],
      "solution": "def suivant(n):\n    if n % 2 == 0:\n        return n // 2\n    else:\n        return 3 * n + 1"
    },
    {
      "t": "code",
      "id": "p02-e2",
      "carry": true,
      "title": {
        "fr": "Étape 2 · Le vol complet",
        "en": "Step 2 · The whole flight"
      },
      "prompt": {
        "fr": "Écris <code>vol(n)</code> qui renvoie la liste de tous les termes, de n jusqu'à 1 compris, en utilisant <code>suivant</code>.",
        "en": "Write <code>vol(n)</code> that returns the list of all the terms, from n down to 1 included, using <code>suivant</code>."
      },
      "starter": {
        "fr": "def vol(n):\n    L = [n]\n    ",
        "en": "def vol(n):\n    L = [n]\n    "
      },
      "tests": [
        {
          "call": "vol(6)",
          "expect": "[6, 3, 10, 5, 16, 8, 4, 2, 1]"
        },
        {
          "call": "vol(1)",
          "expect": "[1]"
        },
        {
          "call": "vol(8)",
          "expect": "[8, 4, 2, 1]"
        },
        {
          "call": "len(vol(27))",
          "expect": "112",
          "desc": {
            "fr": "le vol de 27 compte 112 termes",
            "en": "the flight of 27 has 112 terms"
          }
        }
      ],
      "require": [
        "while",
        "append",
        "return"
      ],
      "hints": [
        {
          "fr": "On ne sait pas combien de termes il y aura : c'est une boucle <code>while</code>, qui continue tant que n n'est pas égal à 1.",
          "en": "You don't know how many terms there will be: it's a <code>while</code> loop, which goes on as long as n isn't 1."
        },
        {
          "fr": "Dans la boucle : calcule le terme suivant avec <code>n = suivant(n)</code>, puis ajoute-le à la liste.",
          "en": "In the loop: compute the next term with <code>n = suivant(n)</code>, then add it to the list."
        },
        {
          "fr": "<code>while n != 1:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>n = suivant(n)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>L.append(n)</code><br><code>return L</code>",
          "en": "<code>while n != 1:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>n = suivant(n)</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>L.append(n)</code><br><code>return L</code>"
        }
      ],
      "solution": "def vol(n):\n    L = [n]\n    while n != 1:\n        n = suivant(n)\n        L.append(n)\n    return L"
    },
    {
      "t": "code",
      "id": "p02-e3",
      "carry": true,
      "title": {
        "fr": "Étape 3 · Temps de vol et altitude",
        "en": "Step 3 · Flight time and altitude"
      },
      "prompt": {
        "fr": "Écris <code>temps_de_vol(n)</code> (le nombre d'étapes pour arriver à 1) et <code>altitude_max(n)</code> (le plus grand terme du vol), en réutilisant <code>vol</code>.",
        "en": "Write <code>temps_de_vol(n)</code> (the number of steps to reach 1) and <code>altitude_max(n)</code> (the largest term of the flight), reusing <code>vol</code>."
      },
      "starter": {
        "fr": "def temps_de_vol(n):\n    \n\ndef altitude_max(n):\n    ",
        "en": "def temps_de_vol(n):\n    \n\ndef altitude_max(n):\n    "
      },
      "tests": [
        {
          "call": "temps_de_vol(6)",
          "expect": "8"
        },
        {
          "call": "temps_de_vol(1)",
          "expect": "0"
        },
        {
          "call": "temps_de_vol(27)",
          "expect": "111"
        },
        {
          "call": "altitude_max(6)",
          "expect": "16"
        },
        {
          "call": "altitude_max(27)",
          "expect": "9232",
          "desc": {
            "fr": "27 monte jusqu'à 9 232 avant de redescendre",
            "en": "27 climbs up to 9,232 before coming back down"
          }
        }
      ],
      "require": [
        "return"
      ],
      "hints": [
        {
          "fr": "Le vol de 6 a 9 termes mais seulement 8 étapes : il y a une étape de moins que de termes.",
          "en": "The flight of 6 has 9 terms but only 8 steps: there's one step fewer than terms."
        },
        {
          "fr": "<code>len(vol(n)) - 1</code> donne le temps de vol, <code>max(vol(n))</code> l'altitude maximale.",
          "en": "<code>len(vol(n)) - 1</code> gives the flight time, <code>max(vol(n))</code> the maximum altitude."
        }
      ],
      "solution": "def temps_de_vol(n):\n    return len(vol(n)) - 1\n\ndef altitude_max(n):\n    return max(vol(n))"
    },
    {
      "t": "code",
      "id": "p02-e4",
      "carry": true,
      "title": {
        "fr": "Étape 4 · Le record",
        "en": "Step 4 · The record"
      },
      "prompt": {
        "fr": "Écris <code>record(N)</code> qui renvoie l'entier n entre 1 et N dont le temps de vol est le plus long. En cas d'égalité, garde le plus petit.",
        "en": "Write <code>record(N)</code> that returns the integer n between 1 and N with the longest flight time. If there's a tie, keep the smallest one."
      },
      "starter": {
        "fr": "def record(N):\n    meilleur = 1\n    ",
        "en": "def record(N):\n    meilleur = 1\n    "
      },
      "tests": [
        {
          "call": "record(10)",
          "expect": "9"
        },
        {
          "call": "record(100)",
          "expect": "97"
        },
        {
          "call": "record(1000)",
          "expect": "871",
          "desc": {
            "fr": "jusqu'à 1 000, le record est 871 (178 étapes)",
            "en": "up to 1,000 the record is 871 (178 steps)"
          }
        },
        {
          "call": "record(1)",
          "expect": "1"
        }
      ],
      "require": [
        "for",
        "return"
      ],
      "hints": [
        {
          "fr": "C'est une recherche de maximum, comme dans la leçon 8, mais on garde le <strong>nombre</strong> n, pas son temps de vol.",
          "en": "It's a search for a maximum, like in lesson 8, but you keep the <strong>number</strong> n, not its flight time."
        },
        {
          "fr": "Parcours n de 1 à N. Si <code>temps_de_vol(n)</code> est strictement plus grand que <code>temps_de_vol(meilleur)</code>, remplace meilleur par n.",
          "en": "Go through n from 1 to N. If <code>temps_de_vol(n)</code> is strictly bigger than <code>temps_de_vol(meilleur)</code>, replace meilleur with n."
        },
        {
          "fr": "<code>for n in range(1, N + 1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if temps_de_vol(n) > temps_de_vol(meilleur):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>meilleur = n</code><br><code>return meilleur</code>",
          "en": "<code>for n in range(1, N + 1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if temps_de_vol(n) > temps_de_vol(meilleur):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>meilleur = n</code><br><code>return meilleur</code>"
        }
      ],
      "solution": "def record(N):\n    meilleur = 1\n    for n in range(1, N + 1):\n        if temps_de_vol(n) > temps_de_vol(meilleur):\n            meilleur = n\n    return meilleur"
    },
    {
      "t": "code",
      "id": "p02-e5",
      "carry": true,
      "title": {
        "fr": "Étape 5 · Tracer le vol de 27",
        "en": "Step 5 · Plotting the flight of 27"
      },
      "prompt": {
        "fr": "Trace le vol de 27 : en abscisse l'étape (0, 1, 2, …), en ordonnée la valeur du terme. Clique sur « Exécuter » pour admirer ses montagnes russes.",
        "en": "Plot the flight of 27: the step (0, 1, 2, …) on the x-axis, the value of the term on the y-axis. Click \"Run\" to admire its roller coaster."
      },
      "starter": {
        "fr": "import matplotlib.pyplot as plt\n\nY = vol(27)\n\nplt.show()\n",
        "en": "import matplotlib.pyplot as plt\n\nY = vol(27)\n\nplt.show()\n"
      },
      "tests": [
        {
          "call": "len(_points(0))",
          "expect": "112",
          "desc": {
            "fr": "les 112 termes du vol sont tracés",
            "en": "the 112 terms of the flight are plotted"
          }
        },
        {
          "call": "_ys(0) == vol(27)",
          "expect": "True",
          "desc": {
            "fr": "les ordonnées sont les termes du vol de 27",
            "en": "the y values are the terms of the flight of 27"
          }
        },
        {
          "call": "_xs(0) == list(range(112))",
          "expect": "True",
          "desc": {
            "fr": "les abscisses vont de 0 à 111",
            "en": "the x values go from 0 to 111"
          }
        }
      ],
      "require": [
        "plot"
      ],
      "hints": [
        {
          "fr": "Il te faut une liste X des étapes, de la même longueur que Y.",
          "en": "You need a list X of steps, the same length as Y."
        },
        {
          "fr": "<code>X = list(range(len(Y)))</code> puis <code>plt.plot(X, Y)</code>. Ajoute un titre si tu veux.",
          "en": "<code>X = list(range(len(Y)))</code> then <code>plt.plot(X, Y)</code>. Add a title if you like."
        }
      ],
      "solution": "import matplotlib.pyplot as plt\n\nY = vol(27)\nX = list(range(len(Y)))\nplt.plot(X, Y)\nplt.title(\"Vol de 27\")\nplt.xlabel(\"étape\")\nplt.show()",
      "after": {
        "fr": "Bravo, problème terminé ! Le vol de 27 grimpe jusqu'à 9 232 avant de retomber à 1 après 111 étapes. La conjecture de Syracuse a été vérifiée par ordinateur jusqu'à des nombres immenses, mais jamais démontrée.",
        "en": "Well done, problem solved! The flight of 27 climbs to 9,232 before falling back to 1 after 111 steps. The Collatz conjecture has been checked by computer up to huge numbers, but never proved."
      }
    }
  ]
});
