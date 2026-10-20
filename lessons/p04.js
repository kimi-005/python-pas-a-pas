(window.PY_LESSONS = window.PY_LESSONS || []).push({
  "id": "p04",
  "num": 104,
  "label": "P4",
  "kind": "probleme",
  "track": "problemes",
  "title": {
    "fr": "Un emprunt immobilier",
    "en": "A home loan"
  },
  "intro": {
    "fr": "Une famille emprunte 100 000 € pour acheter un appartement, à un taux de 0,3 % par mois, et rembourse 600 € chaque mois. Combien doit-elle encore après un an ? Combien de temps pour tout rembourser ? Combien d'intérêts au total ? Tu vas construire le tableau d'amortissement d'une banque.",
    "en": "A family borrows €100,000 to buy a flat, at a rate of 0.3% per month, and pays back €600 every month. How much do they still owe after a year? How long to pay everything back? How much interest in total? You'll build a bank's amortization table."
  },
  "blocks": [
    {
      "t": "h",
      "fr": "Ce qui se passe chaque mois",
      "en": "What happens each month"
    },
    {
      "t": "p",
      "fr": "La banque ajoute les intérêts du mois (capital restant × taux), puis la famille paie sa mensualité M. Avec un capital C et un taux mensuel t : <strong>nouveau capital = C × (1 + t) − M</strong>. C'est une suite arithmético-géométrique, comme dans la leçon 14.",
      "en": "The bank adds the month's interest (remaining capital × rate), then the family pays its monthly instalment M. With capital C and monthly rate t: <strong>new capital = C × (1 + t) − M</strong>. It's an arithmetic-geometric sequence, like in lesson 14."
    },
    {
      "t": "table",
      "head": {
        "fr": [
          "Mois",
          "Intérêts",
          "Capital remboursé",
          "Capital restant"
        ],
        "en": [
          "Month",
          "Interest",
          "Capital repaid",
          "Capital left"
        ]
      },
      "rows": [
        [
          "1",
          {
            "fr": "300,00 €",
            "en": "€300.00"
          },
          {
            "fr": "300,00 €",
            "en": "€300.00"
          },
          {
            "fr": "99 700,00 €",
            "en": "€99,700.00"
          }
        ],
        [
          "2",
          {
            "fr": "299,10 €",
            "en": "€299.10"
          },
          {
            "fr": "300,90 €",
            "en": "€300.90"
          },
          {
            "fr": "99 399,10 €",
            "en": "€99,399.10"
          }
        ],
        [
          "3",
          {
            "fr": "298,20 €",
            "en": "€298.20"
          },
          {
            "fr": "301,80 €",
            "en": "€301.80"
          },
          {
            "fr": "99 097,30 €",
            "en": "€99,097.30"
          }
        ]
      ]
    },
    {
      "t": "note",
      "fr": "Dans le programme, un taux de 0,3 % s'écrit <code>0.003</code>. On suppose toujours que la mensualité est plus grande que les intérêts du premier mois, sinon la dette ne diminuerait jamais.",
      "en": "In the program, a 0.3% rate is written <code>0.003</code>. We always assume the instalment is bigger than the first month's interest, otherwise the debt would never go down."
    }
  ],
  "exercises": [
    {
      "t": "code",
      "id": "p04-e1",
      "title": {
        "fr": "Étape 1 · Le capital restant après n mois",
        "en": "Step 1 · Capital left after n months"
      },
      "prompt": {
        "fr": "Écris <code>restant(C, t, M, n)</code> qui renvoie le capital restant dû après n mois, pour un emprunt C au taux mensuel t avec une mensualité M.",
        "en": "Write <code>restant(C, t, M, n)</code> that returns the capital still owed after n months, for a loan C at monthly rate t with an instalment M."
      },
      "starter": {
        "fr": "def restant(C, t, M, n):\n    ",
        "en": "def restant(C, t, M, n):\n    "
      },
      "tests": [
        {
          "call": "restant(100000, 0.003, 600, 0)",
          "expect": "100000"
        },
        {
          "call": "restant(100000, 0.003, 600, 1)",
          "expect": "99700.0"
        },
        {
          "call": "restant(100000, 0.003, 600, 12)",
          "expect": "96340.00197118672",
          "desc": {
            "fr": "après un an, il reste environ 96 340 €",
            "en": "after a year, about €96,340 is left"
          }
        },
        {
          "call": "restant(1000, 0.01, 100, 2)",
          "expect": "819.1"
        }
      ],
      "require": [
        "for",
        "return"
      ],
      "hints": [
        {
          "fr": "Le nombre de mois est connu : c'est une boucle bornée, qui tourne n fois.",
          "en": "The number of months is known: it's a bounded loop that runs n times."
        },
        {
          "fr": "À chaque tour, applique la relation de la leçon : <code>C = C * (1 + t) - M</code>. Puis <code>return C</code> après la boucle.",
          "en": "On each pass, apply the rule from the lesson: <code>C = C * (1 + t) - M</code>. Then <code>return C</code> after the loop."
        }
      ],
      "solution": "def restant(C, t, M, n):\n    for k in range(n):\n        C = C * (1 + t) - M\n    return C"
    },
    {
      "t": "code",
      "id": "p04-e2",
      "carry": true,
      "title": {
        "fr": "Étape 2 · La durée du remboursement",
        "en": "Step 2 · How long it takes"
      },
      "prompt": {
        "fr": "Écris <code>duree(C, t, M)</code> qui renvoie le nombre de mois nécessaires pour tout rembourser, c'est-à-dire pour que le capital restant devienne inférieur ou égal à 0. (Le dernier mois, la famille paie un peu moins que M.)",
        "en": "Write <code>duree(C, t, M)</code> that returns the number of months needed to pay everything back, that is until the capital left is less than or equal to 0. (In the last month the family pays a bit less than M.)"
      },
      "starter": {
        "fr": "def duree(C, t, M):\n    mois = 0\n    ",
        "en": "def duree(C, t, M):\n    mois = 0\n    "
      },
      "tests": [
        {
          "call": "duree(1000, 0.01, 100)",
          "expect": "11"
        },
        {
          "call": "duree(100000, 0.003, 600)",
          "expect": "232",
          "desc": {
            "fr": "100 000 € à 0,3 % par mois avec 600 € par mois : 232 mois, soit 19 ans et 4 mois",
            "en": "€100,000 at 0.3% a month with €600 a month: 232 months, i.e. 19 years and 4 months"
          }
        },
        {
          "call": "duree(500, 0.01, 1000)",
          "expect": "1"
        }
      ],
      "require": [
        "while",
        "return"
      ],
      "hints": [
        {
          "fr": "Le nombre de mois n'est pas connu d'avance : c'est un algorithme de seuil, avec une boucle <code>while</code>.",
          "en": "The number of months isn't known in advance: it's a threshold algorithm, with a <code>while</code> loop."
        },
        {
          "fr": "Tant que <code>C > 0</code> : calcule le nouveau capital et ajoute 1 au nombre de mois.",
          "en": "While <code>C > 0</code>: compute the new capital and add 1 to the number of months."
        },
        {
          "fr": "<code>while C > 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>C = C * (1 + t) - M</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>mois = mois + 1</code><br><code>return mois</code>",
          "en": "<code>while C > 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>C = C * (1 + t) - M</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>mois = mois + 1</code><br><code>return mois</code>"
        }
      ],
      "solution": "def duree(C, t, M):\n    mois = 0\n    while C > 0:\n        C = C * (1 + t) - M\n        mois = mois + 1\n    return mois"
    },
    {
      "t": "code",
      "id": "p04-e3",
      "carry": true,
      "title": {
        "fr": "Étape 3 · Le coût total des intérêts",
        "en": "Step 3 · The total cost of interest"
      },
      "prompt": {
        "fr": "Écris <code>cout_interets(C, t, M)</code> qui renvoie la somme de tous les intérêts payés jusqu'au remboursement complet. Les intérêts d'un mois valent capital restant × t.",
        "en": "Write <code>cout_interets(C, t, M)</code> that returns the sum of all the interest paid until the loan is fully repaid. A month's interest is capital left × t."
      },
      "starter": {
        "fr": "def cout_interets(C, t, M):\n    total = 0\n    ",
        "en": "def cout_interets(C, t, M):\n    total = 0\n    "
      },
      "tests": [
        {
          "call": "cout_interets(1000, 0.01, 100)",
          "expect": "58.98488001215102"
        },
        {
          "call": "cout_interets(100000, 0.003, 600)",
          "expect": "38837.49131441786",
          "desc": {
            "fr": "emprunter 100 000 € coûte environ 38 837 € d'intérêts",
            "en": "borrowing €100,000 costs about €38,837 in interest"
          }
        },
        {
          "call": "cout_interets(1000, 0.01, 2000)",
          "expect": "10.0"
        }
      ],
      "require": [
        "while",
        "return"
      ],
      "hints": [
        {
          "fr": "Même boucle qu'à l'étape 2, mais on additionne les intérêts de chaque mois au lieu de compter les mois.",
          "en": "Same loop as in step 2, but you add up each month's interest instead of counting months."
        },
        {
          "fr": "Dans la boucle : <code>i = C * t</code>, ajoute i à total, puis <code>C = C + i - M</code>.",
          "en": "In the loop: <code>i = C * t</code>, add i to total, then <code>C = C + i - M</code>."
        }
      ],
      "solution": "def cout_interets(C, t, M):\n    total = 0\n    while C > 0:\n        i = C * t\n        total = total + i\n        C = C + i - M\n    return total",
      "after": {
        "fr": "Attention : <code>duree × M − C</code> ne donne pas tout à fait le bon résultat, car la dernière mensualité est plus petite que M.",
        "en": "Careful: <code>duree × M − C</code> doesn't give quite the right answer, because the last instalment is smaller than M."
      }
    },
    {
      "t": "code",
      "id": "p04-e4",
      "carry": true,
      "title": {
        "fr": "Étape 4 · Le tableau d'amortissement",
        "en": "Step 4 · The amortization table"
      },
      "prompt": {
        "fr": "Écris <code>tableau(C, t, M, n)</code> qui renvoie la liste des n premières lignes du tableau. Chaque ligne est un tuple <code>(mois, intérêts, capital remboursé, capital restant)</code>, avec les trois montants arrondis au centime par <code>round(…, 2)</code>.",
        "en": "Write <code>tableau(C, t, M, n)</code> that returns the list of the first n rows of the table. Each row is a tuple <code>(month, interest, capital repaid, capital left)</code>, with the three amounts rounded to the cent with <code>round(…, 2)</code>."
      },
      "starter": {
        "fr": "def tableau(C, t, M, n):\n    lignes = []\n    ",
        "en": "def tableau(C, t, M, n):\n    lignes = []\n    "
      },
      "tests": [
        {
          "call": "tableau(100000, 0.003, 600, 3)",
          "expect": "[(1, 300.0, 300.0, 99700.0), (2, 299.1, 300.9, 99399.1), (3, 298.2, 301.8, 99097.3)]"
        },
        {
          "call": "tableau(1000, 0.01, 100, 2)",
          "expect": "[(1, 10.0, 90.0, 910.0), (2, 9.1, 90.9, 819.1)]"
        },
        {
          "call": "len(tableau(100000, 0.003, 600, 24))",
          "expect": "24"
        }
      ],
      "require": [
        "for",
        "append",
        "round",
        "return"
      ],
      "hints": [
        {
          "fr": "Chaque mois : intérêts <code>i = C * t</code>, capital remboursé <code>r = M - i</code>, nouveau capital <code>C = C - r</code>.",
          "en": "Each month: interest <code>i = C * t</code>, capital repaid <code>r = M - i</code>, new capital <code>C = C - r</code>."
        },
        {
          "fr": "Arrondis seulement au moment de ranger la ligne, pas dans le calcul : sinon les erreurs d'arrondi s'accumulent.",
          "en": "Only round when you store the row, not in the calculation: otherwise rounding errors pile up."
        },
        {
          "fr": "<code>for mois in range(1, n + 1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>i = C * t</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>r = M - i</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>C = C - r</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>lignes.append((mois, round(i, 2), round(r, 2), round(C, 2)))</code>",
          "en": "<code>for mois in range(1, n + 1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>i = C * t</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>r = M - i</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>C = C - r</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>lignes.append((mois, round(i, 2), round(r, 2), round(C, 2)))</code>"
        }
      ],
      "solution": "def tableau(C, t, M, n):\n    lignes = []\n    for mois in range(1, n + 1):\n        i = C * t\n        r = M - i\n        C = C - r\n        lignes.append((mois, round(i, 2), round(r, 2), round(C, 2)))\n    return lignes"
    },
    {
      "t": "code",
      "id": "p04-e5",
      "carry": true,
      "title": {
        "fr": "Étape 5 · Calculer la bonne mensualité",
        "en": "Step 5 · Finding the right instalment"
      },
      "prompt": {
        "fr": "Les banques calculent la mensualité qui rembourse exactement C en n mois avec la formule M = C × t / (1 − (1 + t)<sup>−n</sup>). Écris <code>mensualite(C, t, n)</code>, puis vérifie avec <code>restant</code> qu'après n mois il ne reste (presque) plus rien.",
        "en": "Banks compute the instalment that repays exactly C in n months with the formula M = C × t / (1 − (1 + t)<sup>−n</sup>). Write <code>mensualite(C, t, n)</code>, then check with <code>restant</code> that after n months (almost) nothing is left."
      },
      "starter": {
        "fr": "def mensualite(C, t, n):\n    ",
        "en": "def mensualite(C, t, n):\n    "
      },
      "tests": [
        {
          "call": "mensualite(100000, 0.003, 240)",
          "expect": "585.1114668470296",
          "desc": {
            "fr": "sur 20 ans (240 mois) : environ 585,11 € par mois",
            "en": "over 20 years (240 months): about €585.11 a month"
          }
        },
        {
          "call": "abs(restant(100000, 0.003, mensualite(100000, 0.003, 240), 240)) < 0.01",
          "expect": "True",
          "desc": {
            "fr": "avec cette mensualité, il ne reste rien après 240 mois",
            "en": "with this instalment, nothing is left after 240 months"
          }
        },
        {
          "call": "mensualite(1200, 0.01, 12)",
          "expect": "106.61854641400993"
        }
      ],
      "require": [
        "return",
        "**"
      ],
      "hints": [
        {
          "fr": "(1 + t)<sup>−n</sup> s'écrit <code>(1 + t) ** -n</code>.",
          "en": "(1 + t)<sup>−n</sup> is written <code>(1 + t) ** -n</code>."
        },
        {
          "fr": "Attention aux parenthèses : <code>return C * t / (1 - (1 + t) ** -n)</code>.",
          "en": "Watch the brackets: <code>return C * t / (1 - (1 + t) ** -n)</code>."
        }
      ],
      "solution": "def mensualite(C, t, n):\n    return C * t / (1 - (1 + t) ** -n)",
      "after": {
        "fr": "Bravo, problème terminé ! Tu peux comparer : <code>cout_interets(100000, 0.003, mensualite(100000, 0.003, 120))</code> (10 ans) et la même chose sur 300 mois (25 ans). Emprunter plus longtemps fait baisser la mensualité, mais coûte beaucoup plus d'intérêts.",
        "en": "Well done, problem solved! Compare <code>cout_interets(100000, 0.003, mensualite(100000, 0.003, 120))</code> (10 years) with the same over 300 months (25 years). Borrowing for longer lowers the instalment but costs far more interest."
      }
    }
  ]
});
