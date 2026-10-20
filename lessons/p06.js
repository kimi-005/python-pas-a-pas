(window.PY_LESSONS = window.PY_LESSONS || []).push({
  "id": "p06",
  "num": 106,
  "label": "P6",
  "kind": "probleme",
  "track": "problemes",
  "title": {
    "fr": "Résoudre f(x) = 0 : balayage contre dichotomie",
    "en": "Solving f(x) = 0: scanning versus bisection"
  },
  "intro": {
    "fr": "Deux méthodes pour encadrer la solution d'une équation f(x) = 0 : avancer pas à pas (le balayage), ou couper l'intervalle en deux à chaque fois (la dichotomie). Tu vas programmer les deux, pour n'importe quelle fonction f, puis les comparer.",
    "en": "Two methods to bracket the solution of an equation f(x) = 0: move forward step by step (scanning), or cut the interval in half each time (bisection). You'll program both, for any function f, then compare them."
  },
  "blocks": [
    {
      "t": "h",
      "fr": "Une fonction comme paramètre",
      "en": "A function as a parameter"
    },
    {
      "t": "p",
      "fr": "Une fonction Python peut recevoir une autre fonction en paramètre. On passe alors son <strong>nom, sans parenthèses</strong>. C'est ce qui permet d'écrire une seule fois la méthode de résolution et de l'utiliser pour n'importe quelle fonction f.",
      "en": "A Python function can take another function as a parameter. You then pass its <strong>name, without brackets</strong>. That's what lets you write the solving method once and use it for any function f."
    },
    {
      "t": "code",
      "code": "def carre(x):\n    return x ** 2\n\ndef cube(x):\n    return x ** 3\n\ndef appliquer(f, x):\n    return f(x)\n\nprint(appliquer(carre, 3))\nprint(appliquer(cube, 3))"
    },
    {
      "t": "h",
      "fr": "Les deux méthodes",
      "en": "The two methods"
    },
    {
      "t": "table",
      "head": {
        "fr": [
          "Méthode",
          "Principe"
        ],
        "en": [
          "Method",
          "Idea"
        ]
      },
      "rows": [
        [
          {
            "fr": "Balayage",
            "en": "Scanning"
          },
          {
            "fr": "on avance de a en a + pas, a + 2 × pas… jusqu'à ce que f change de signe entre x et x + pas",
            "en": "move from a to a + step, a + 2 × step… until f changes sign between x and x + step"
          }
        ],
        [
          {
            "fr": "Dichotomie",
            "en": "Bisection"
          },
          {
            "fr": "on coupe [a ; b] en deux au milieu m et on garde la moitié où f change de signe (leçon 14)",
            "en": "cut [a ; b] in half at its midpoint m and keep the half where f changes sign (lesson 14)"
          }
        ]
      ]
    }
  ],
  "exercises": [
    {
      "t": "code",
      "id": "p06-e1",
      "title": {
        "fr": "Étape 1 · Un tableau de valeurs pour n'importe quelle f",
        "en": "Step 1 · A table of values for any f"
      },
      "prompt": {
        "fr": "Écris <code>images(f, X)</code> qui renvoie la liste des images par f des nombres de la liste X.",
        "en": "Write <code>images(f, X)</code> that returns the list of the images by f of the numbers in the list X."
      },
      "starter": {
        "fr": "def images(f, X):\n    ",
        "en": "def images(f, X):\n    "
      },
      "tests": [
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "images(_double, [1, 2, 3])",
          "expect": "[2, 4, 6]",
          "desc": {
            "fr": "avec f(x) = 2x : images(f, [1, 2, 3]) donne [2, 4, 6]",
            "en": "with f(x) = 2x: images(f, [1, 2, 3]) gives [2, 4, 6]"
          }
        },
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "images(_g, [0, 1, 2])",
          "expect": "[-2, -1, 2]",
          "desc": {
            "fr": "avec f(x) = x² − 2 : images(f, [0, 1, 2]) donne [−2, −1, 2]",
            "en": "with f(x) = x² − 2: images(f, [0, 1, 2]) gives [−2, −1, 2]"
          }
        },
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "images(_g, [])",
          "expect": "[]",
          "desc": {
            "fr": "avec une liste vide, renvoie une liste vide",
            "en": "with an empty list, returns an empty list"
          }
        }
      ],
      "require": [
        "for",
        "return"
      ],
      "hints": [
        {
          "fr": "À l'intérieur de <code>images</code>, f s'utilise comme n'importe quelle fonction : <code>f(x)</code>.",
          "en": "Inside <code>images</code>, f is used like any function: <code>f(x)</code>."
        },
        {
          "fr": "En compréhension : <code>return [f(x) for x in X]</code>.",
          "en": "As a comprehension: <code>return [f(x) for x in X]</code>."
        }
      ],
      "solution": "def images(f, X):\n    return [f(x) for x in X]"
    },
    {
      "t": "code",
      "id": "p06-e2",
      "carry": true,
      "title": {
        "fr": "Étape 2 · Le balayage",
        "en": "Step 2 · Scanning"
      },
      "prompt": {
        "fr": "Écris <code>balayage(f, a, pas)</code> : en partant de a, avance de <code>pas</code> en <code>pas</code> tant que f(x) et f(x + pas) ont le même signe. Renvoie le tuple <code>(x, x + pas, etapes)</code>, où <code>etapes</code> est le nombre de fois où tu as avancé. On suppose que f change de signe quelque part après a.",
        "en": "Write <code>balayage(f, a, pas)</code>: starting from a, move forward by <code>pas</code> as long as f(x) and f(x + pas) have the same sign. Return the tuple <code>(x, x + pas, etapes)</code>, where <code>etapes</code> is the number of times you moved forward. Assume f changes sign somewhere after a."
      },
      "starter": {
        "fr": "def balayage(f, a, pas):\n    etapes = 0\n    ",
        "en": "def balayage(f, a, pas):\n    etapes = 0\n    "
      },
      "tests": [
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "balayage(_g, 1, 0.1)",
          "expect": "(1.4, 1.5, 4)",
          "desc": {
            "fr": "pour x² − 2 = 0 avec un pas de 0,1 : (1.4, 1.5, 4)",
            "en": "for x² − 2 = 0 with a step of 0.1: (1.4, 1.5, 4)"
          }
        },
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "_encadre(balayage(_g, 1, 0.0001), 2 ** 0.5)",
          "expect": "True",
          "desc": {
            "fr": "avec un pas de 0,0001, l'intervalle encadre √2",
            "en": "with a step of 0.0001, the interval brackets √2"
          }
        },
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "balayage(_g, 1, 0.0001)[2]",
          "expect": "4142",
          "desc": {
            "fr": "… mais il faut 4 142 étapes",
            "en": "… but it takes 4,142 steps"
          }
        },
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "balayage(_h, 1, 0.01)",
          "expect": "(1.32, 1.33, 32)",
          "desc": {
            "fr": "pour x³ − x − 1 = 0 avec un pas de 0,01 : (1.32, 1.33, 32)",
            "en": "for x³ − x − 1 = 0 with a step of 0.01: (1.32, 1.33, 32)"
          }
        }
      ],
      "require": [
        "while",
        "return"
      ],
      "hints": [
        {
          "fr": "f(x) et f(x + pas) ont le même signe quand leur produit est strictement positif.",
          "en": "f(x) and f(x + pas) have the same sign when their product is strictly positive."
        },
        {
          "fr": "Pour éviter que les erreurs d'arrondi s'accumulent, calcule x avec <code>x = a + etapes * pas</code> plutôt que d'ajouter pas à chaque tour.",
          "en": "To stop rounding errors from piling up, compute x with <code>x = a + etapes * pas</code> rather than adding pas on each pass."
        },
        {
          "fr": "<code>while f(a + etapes * pas) * f(a + (etapes + 1) * pas) > 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>etapes = etapes + 1</code><br><code>x = a + etapes * pas</code><br><code>return (x, x + pas, etapes)</code>",
          "en": "<code>while f(a + etapes * pas) * f(a + (etapes + 1) * pas) > 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>etapes = etapes + 1</code><br><code>x = a + etapes * pas</code><br><code>return (x, x + pas, etapes)</code>"
        }
      ],
      "solution": "def balayage(f, a, pas):\n    etapes = 0\n    while f(a + etapes * pas) * f(a + (etapes + 1) * pas) > 0:\n        etapes = etapes + 1\n    x = a + etapes * pas\n    return (x, x + pas, etapes)"
    },
    {
      "t": "code",
      "id": "p06-e3",
      "carry": true,
      "title": {
        "fr": "Étape 3 · La dichotomie",
        "en": "Step 3 · Bisection"
      },
      "prompt": {
        "fr": "Écris <code>dichotomie(f, a, b, p)</code> qui coupe [a ; b] en deux tant que b − a &gt; p, et renvoie le tuple <code>(a, b, etapes)</code>, où <code>etapes</code> est le nombre de coupes. On suppose que f(a) et f(b) sont de signes contraires.",
        "en": "Write <code>dichotomie(f, a, b, p)</code> that cuts [a ; b] in half as long as b − a &gt; p, and returns the tuple <code>(a, b, etapes)</code>, where <code>etapes</code> is the number of cuts. Assume f(a) and f(b) have opposite signs."
      },
      "starter": {
        "fr": "def dichotomie(f, a, b, p):\n    etapes = 0\n    ",
        "en": "def dichotomie(f, a, b, p):\n    etapes = 0\n    "
      },
      "tests": [
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "dichotomie(_g, 1, 2, 0.1)",
          "expect": "(1.375, 1.4375, 4)",
          "desc": {
            "fr": "pour x² − 2 = 0 sur [1 ; 2] à 0,1 près : (1.375, 1.4375, 4)",
            "en": "for x² − 2 = 0 on [1 ; 2] within 0.1: (1.375, 1.4375, 4)"
          }
        },
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "_encadre(dichotomie(_g, 1, 2, 0.000001), 2 ** 0.5)",
          "expect": "True",
          "desc": {
            "fr": "à 10⁻⁶ près, l'intervalle encadre √2",
            "en": "within 10⁻⁶, the interval brackets √2"
          }
        },
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "dichotomie(_g, 1, 2, 0.000001)[2]",
          "expect": "20",
          "desc": {
            "fr": "… en seulement 20 étapes",
            "en": "… in only 20 steps"
          }
        },
        {
          "helper": "def _g(x):\n    return x ** 2 - 2\n\ndef _h(x):\n    return x ** 3 - x - 1\n\ndef _double(x):\n    return 2 * x\n\ndef _encadre(r, v):\n    return r[0] <= v <= r[1]",
          "call": "dichotomie(_h, 1, 2, 0.001)[2]",
          "expect": "10",
          "desc": {
            "fr": "pour x³ − x − 1 = 0 à 0,001 près : 10 étapes",
            "en": "for x³ − x − 1 = 0 within 0.001: 10 steps"
          }
        }
      ],
      "require": [
        "while",
        "return"
      ],
      "hints": [
        {
          "fr": "Reprends l'algorithme de la leçon 14, en ajoutant un compteur d'étapes.",
          "en": "Use the algorithm from lesson 14, adding a step counter."
        },
        {
          "fr": "Dans <code>while b - a > p:</code> : le milieu <code>m = (a + b) / 2</code> ; si <code>f(a) * f(m) <= 0</code>, la solution est dans [a ; m], sinon dans [m ; b]. N'oublie pas <code>etapes = etapes + 1</code>.",
          "en": "Inside <code>while b - a > p:</code>: the midpoint <code>m = (a + b) / 2</code>; if <code>f(a) * f(m) <= 0</code>, the solution is in [a ; m], otherwise in [m ; b]. Don't forget <code>etapes = etapes + 1</code>."
        },
        {
          "fr": "<code>while b - a > p:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>m = (a + b) / 2</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if f(a) * f(m) <= 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>b = m</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>else:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>a = m</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>etapes = etapes + 1</code><br><code>return (a, b, etapes)</code>",
          "en": "<code>while b - a > p:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>m = (a + b) / 2</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if f(a) * f(m) <= 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>b = m</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>else:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>a = m</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>etapes = etapes + 1</code><br><code>return (a, b, etapes)</code>"
        }
      ],
      "solution": "def dichotomie(f, a, b, p):\n    etapes = 0\n    while b - a > p:\n        m = (a + b) / 2\n        if f(a) * f(m) <= 0:\n            b = m\n        else:\n            a = m\n        etapes = etapes + 1\n    return (a, b, etapes)"
    },
    {
      "t": "code",
      "id": "p06-e4",
      "carry": true,
      "title": {
        "fr": "Étape 4 · Le match",
        "en": "Step 4 · The match"
      },
      "prompt": {
        "fr": "Pour f(x) = x² − 2, écris <code>comparaison(p)</code> qui renvoie le tuple <code>(etapes du balayage, etapes de la dichotomie)</code> pour encadrer √2 avec la précision p : balayage depuis 1 avec un pas de p, dichotomie sur [1 ; 2] jusqu'à une amplitude p.",
        "en": "For f(x) = x² − 2, write <code>comparaison(p)</code> that returns the tuple <code>(scanning steps, bisection steps)</code> to bracket √2 with precision p: scanning from 1 with a step of p, bisection on [1 ; 2] down to a width of p."
      },
      "starter": {
        "fr": "def f(x):\n    return x ** 2 - 2\n\ndef comparaison(p):\n    ",
        "en": "def f(x):\n    return x ** 2 - 2\n\ndef comparaison(p):\n    "
      },
      "tests": [
        {
          "call": "comparaison(0.1)",
          "expect": "(4, 4)"
        },
        {
          "call": "comparaison(0.001)",
          "expect": "(414, 10)"
        },
        {
          "call": "comparaison(0.0001)",
          "expect": "(4142, 14)",
          "desc": {
            "fr": "à 10⁻⁴ près : 4 142 étapes contre 14",
            "en": "within 10⁻⁴: 4,142 steps against 14"
          }
        }
      ],
      "require": [
        "balayage",
        "dichotomie",
        "return"
      ],
      "hints": [
        {
          "fr": "Le nombre d'étapes est le dernier élément du tuple renvoyé par chaque fonction : index 2.",
          "en": "The number of steps is the last element of the tuple each function returns: index 2."
        },
        {
          "fr": "<code>return (balayage(f, 1, p)[2], dichotomie(f, 1, 2, p)[2])</code>",
          "en": "<code>return (balayage(f, 1, p)[2], dichotomie(f, 1, 2, p)[2])</code>"
        }
      ],
      "solution": "def f(x):\n    return x ** 2 - 2\n\ndef comparaison(p):\n    return (balayage(f, 1, p)[2], dichotomie(f, 1, 2, p)[2])",
      "after": {
        "fr": "Bravo, problème terminé ! Chaque fois qu'on divise p par 10, le balayage fait 10 fois plus d'étapes, alors que la dichotomie n'en ajoute qu'environ 3,3. À 10⁻⁶ près : environ 414 214 étapes pour le balayage, 20 pour la dichotomie. Le nombre d'étapes de la dichotomie est le plus petit n tel que 1/2<sup>n</sup> ≤ p.",
        "en": "Well done, problem solved! Each time p is divided by 10, scanning takes 10 times more steps, while bisection only adds about 3.3. Within 10⁻⁶: about 414,214 steps for scanning, 20 for bisection. The number of bisection steps is the smallest n such that 1/2<sup>n</sup> ≤ p."
      }
    }
  ]
});
