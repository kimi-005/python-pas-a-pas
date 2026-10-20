(window.PY_LESSONS = window.PY_LESSONS || []).push({
  "id": "p05",
  "num": 105,
  "label": "P5",
  "kind": "probleme",
  "track": "problemes",
  "title": {
    "fr": "La marche aléatoire",
    "en": "The random walk"
  },
  "intro": {
    "fr": "Un pion part de 0 sur une droite graduée. À chaque étape, on lance une pièce : pile, il avance de 1 ; face, il recule de 1. Où sera-t-il après 10 pas ? Quelle est la probabilité qu'il soit revenu à 0 ? Tu vas simuler cette marche, la dessiner et estimer cette probabilité.",
    "en": "A counter starts at 0 on a number line. At each step you toss a coin: heads, it moves forward 1; tails, it moves back 1. Where will it be after 10 steps? What is the probability that it's back at 0? You'll simulate this walk, draw it and estimate that probability."
  },
  "blocks": [
    {
      "t": "h",
      "fr": "Un exemple de marche",
      "en": "An example of a walk"
    },
    {
      "t": "p",
      "fr": "Avec les pas +1, +1, −1, +1, −1, −1, les positions successives sont 0, 1, 2, 1, 2, 1, 0 : la liste des positions a un élément de plus que le nombre de pas, car on note aussi la position de départ.",
      "en": "With the steps +1, +1, −1, +1, −1, −1, the positions are 0, 1, 2, 1, 2, 1, 0: the list of positions has one more element than the number of steps, because the starting position is recorded too."
    },
    {
      "t": "note",
      "fr": "<code>choice([-1, 1])</code> (module random) tire −1 ou 1 au hasard, avec la même probabilité. <code>2 * randint(0, 1) - 1</code> marche aussi.",
      "en": "<code>choice([-1, 1])</code> (random module) picks −1 or 1 at random, with equal probability. <code>2 * randint(0, 1) - 1</code> works too."
    }
  ],
  "exercises": [
    {
      "t": "code",
      "id": "p05-e1",
      "title": {
        "fr": "Étape 1 · Un pas au hasard",
        "en": "Step 1 · A random step"
      },
      "prompt": {
        "fr": "Écris <code>pas()</code>, sans paramètre, qui renvoie −1 ou 1 au hasard, avec la même probabilité.",
        "en": "Write <code>pas()</code>, with no parameter, that returns −1 or 1 at random, with equal probability."
      },
      "starter": {
        "fr": "from random import choice\n\ndef pas():\n    ",
        "en": "from random import choice\n\ndef pas():\n    "
      },
      "tests": [
        {
          "call": "all(pas() in (-1, 1) for k in range(2000))",
          "expect": "True",
          "desc": {
            "fr": "sur 2 000 tirages, toujours −1 ou 1",
            "en": "over 2,000 draws, always −1 or 1"
          }
        },
        {
          "call": "sorted(set(pas() for k in range(2000)))",
          "expect": "[-1, 1]",
          "desc": {
            "fr": "−1 et 1 sortent tous les deux",
            "en": "both −1 and 1 come up"
          }
        },
        {
          "call": "abs(sum(pas() for k in range(20000))) < 1200",
          "expect": "True",
          "desc": {
            "fr": "sur 20 000 tirages, autant de −1 que de 1 (à peu près)",
            "en": "over 20,000 draws, about as many −1 as 1"
          }
        }
      ],
      "require": [
        "return"
      ],
      "hints": [
        {
          "fr": "Le module random est déjà importé : <code>choice(L)</code> renvoie un élément de la liste L au hasard.",
          "en": "The random module is already imported: <code>choice(L)</code> returns a random element of the list L."
        },
        {
          "fr": "<code>return choice([-1, 1])</code>",
          "en": "<code>return choice([-1, 1])</code>"
        }
      ],
      "solution": "from random import choice\n\ndef pas():\n    return choice([-1, 1])"
    },
    {
      "t": "code",
      "id": "p05-e2",
      "carry": true,
      "title": {
        "fr": "Étape 2 · La liste des positions",
        "en": "Step 2 · The list of positions"
      },
      "prompt": {
        "fr": "Écris <code>marche(n)</code> qui simule n pas et renvoie la liste des positions successives, en commençant par 0. Elle contient donc n + 1 nombres.",
        "en": "Write <code>marche(n)</code> that simulates n steps and returns the list of successive positions, starting with 0. So it holds n + 1 numbers."
      },
      "starter": {
        "fr": "def marche(n):\n    positions = [0]\n    ",
        "en": "def marche(n):\n    positions = [0]\n    "
      },
      "tests": [
        {
          "call": "len(marche(50))",
          "expect": "51"
        },
        {
          "call": "marche(0)",
          "expect": "[0]"
        },
        {
          "helper": "def _pas_ok(M):\n    return M[0] == 0 and all(abs(M[i + 1] - M[i]) == 1 for i in range(len(M) - 1))",
          "call": "_pas_ok(marche(200))",
          "expect": "True",
          "desc": {
            "fr": "la marche part de 0 et avance ou recule de 1 à chaque pas",
            "en": "the walk starts at 0 and moves 1 forward or back at each step"
          }
        },
        {
          "call": "len(set(tuple(marche(10)) for k in range(50))) > 5",
          "expect": "True",
          "desc": {
            "fr": "les marches changent d'une fois sur l'autre",
            "en": "the walks differ from one run to the next"
          }
        }
      ],
      "require": [
        "for",
        "append",
        "return"
      ],
      "hints": [
        {
          "fr": "La nouvelle position est l'ancienne plus un pas : la dernière position de la liste est <code>positions[-1]</code>.",
          "en": "The new position is the old one plus a step: the last position in the list is <code>positions[-1]</code>."
        },
        {
          "fr": "<code>for k in range(n):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>positions.append(positions[-1] + pas())</code><br><code>return positions</code>",
          "en": "<code>for k in range(n):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>positions.append(positions[-1] + pas())</code><br><code>return positions</code>"
        }
      ],
      "solution": "def marche(n):\n    positions = [0]\n    for k in range(n):\n        positions.append(positions[-1] + pas())\n    return positions"
    },
    {
      "t": "code",
      "id": "p05-e3",
      "carry": true,
      "title": {
        "fr": "Étape 3 · Dessiner la marche",
        "en": "Step 3 · Drawing the walk"
      },
      "prompt": {
        "fr": "Trace une marche de 200 pas : en abscisse le numéro du pas (0 à 200), en ordonnée la position. Clique plusieurs fois sur « Exécuter » : chaque marche est différente.",
        "en": "Plot a 200-step walk: the step number (0 to 200) on the x-axis, the position on the y-axis. Click \"Run\" several times: every walk is different."
      },
      "starter": {
        "fr": "import matplotlib.pyplot as plt\n\nM = marche(200)\n\nplt.show()\n",
        "en": "import matplotlib.pyplot as plt\n\nM = marche(200)\n\nplt.show()\n"
      },
      "tests": [
        {
          "call": "len(_points(0))",
          "expect": "201",
          "desc": {
            "fr": "201 points sont tracés",
            "en": "201 points are plotted"
          }
        },
        {
          "call": "_xs(0) == list(range(201))",
          "expect": "True",
          "desc": {
            "fr": "les abscisses vont de 0 à 200",
            "en": "the x values go from 0 to 200"
          }
        },
        {
          "helper": "def _pas_ok(M):\n    return M[0] == 0 and all(abs(M[i + 1] - M[i]) == 1 for i in range(len(M) - 1))",
          "call": "_pas_ok(_ys(0))",
          "expect": "True",
          "desc": {
            "fr": "les ordonnées forment une marche qui part de 0",
            "en": "the y values form a walk starting at 0"
          }
        }
      ],
      "require": [
        "plot"
      ],
      "hints": [
        {
          "fr": "Il faut une liste X des numéros de pas, de la même longueur que M.",
          "en": "You need a list X of step numbers, the same length as M."
        },
        {
          "fr": "<code>X = list(range(201))</code>, puis <code>plt.plot(X, M)</code>. Tu peux ajouter <code>plt.axhline(0, color=\"k\")</code> pour voir la position de départ.",
          "en": "<code>X = list(range(201))</code>, then <code>plt.plot(X, M)</code>. You can add <code>plt.axhline(0, color=\"k\")</code> to see the starting position."
        }
      ],
      "solution": "import matplotlib.pyplot as plt\n\nM = marche(200)\nX = list(range(201))\nplt.plot(X, M)\nplt.axhline(0, color=\"k\")\nplt.xlabel(\"pas\")\nplt.ylabel(\"position\")\nplt.show()"
    },
    {
      "t": "code",
      "id": "p05-e4",
      "carry": true,
      "title": {
        "fr": "Étape 4 · Revenir à 0 après 10 pas",
        "en": "Step 4 · Back at 0 after 10 steps"
      },
      "prompt": {
        "fr": "Écris <code>frequence_retour(N)</code> qui simule N marches de 10 pas et renvoie la fréquence des marches qui finissent à la position 0.",
        "en": "Write <code>frequence_retour(N)</code> that simulates N walks of 10 steps and returns how often a walk ends at position 0."
      },
      "starter": {
        "fr": "def frequence_retour(N):\n    c = 0\n    ",
        "en": "def frequence_retour(N):\n    c = 0\n    "
      },
      "tests": [
        {
          "call": "0 <= frequence_retour(100) <= 1",
          "expect": "True",
          "desc": {
            "fr": "renvoie une fréquence, entre 0 et 1",
            "en": "returns a frequency, between 0 and 1"
          }
        },
        {
          "call": "abs(frequence_retour(10000) - 0.24609375) < 0.035",
          "expect": "True",
          "desc": {
            "fr": "sur 10 000 marches, la fréquence est proche de 0,246",
            "en": "over 10,000 walks, the frequency is close to 0.246"
          }
        }
      ],
      "require": [
        "for",
        "return"
      ],
      "hints": [
        {
          "fr": "La position finale d'une marche, c'est le dernier élément de la liste : <code>marche(10)[-1]</code>.",
          "en": "The final position of a walk is the last element of the list: <code>marche(10)[-1]</code>."
        },
        {
          "fr": "Répète N fois : si <code>marche(10)[-1] == 0</code>, ajoute 1 à c. Pour finir, <code>return c / N</code>.",
          "en": "Repeat N times: if <code>marche(10)[-1] == 0</code>, add 1 to c. At the end, <code>return c / N</code>."
        }
      ],
      "solution": "def frequence_retour(N):\n    c = 0\n    for k in range(N):\n        if marche(10)[-1] == 0:\n            c = c + 1\n    return c / N",
      "after": {
        "fr": "Bravo, problème terminé ! Pour revenir à 0 en 10 pas, il faut exactement 5 pas en avant et 5 en arrière. Il y a 252 façons de les placer parmi les 2<sup>10</sup> = 1 024 marches possibles : la probabilité vaut 252 / 1 024 ≈ 0,246. Avec <code>from math import comb</code>, <code>comb(10, 5)</code> donne 252.",
        "en": "Well done, problem solved! To be back at 0 after 10 steps, you need exactly 5 steps forward and 5 back. There are 252 ways to place them among the 2<sup>10</sup> = 1,024 possible walks: the probability is 252 / 1,024 ≈ 0.246. With <code>from math import comb</code>, <code>comb(10, 5)</code> gives 252."
      }
    }
  ]
});
