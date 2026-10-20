(window.PY_LESSONS = window.PY_LESSONS || []).push({
  "id": "p03",
  "num": 103,
  "label": "P3",
  "kind": "probleme",
  "track": "problemes",
  "title": {
    "fr": "L'écriture binaire",
    "en": "Binary numbers"
  },
  "intro": {
    "fr": "Les ordinateurs ne connaissent que deux chiffres : 0 et 1. Tu vas programmer le passage du décimal au binaire et retour, compter les 1, puis poser une addition en binaire comme à l'école primaire.",
    "en": "Computers only know two digits: 0 and 1. You'll program the conversion from decimal to binary and back, count the 1s, then add two binary numbers the way you learned in primary school."
  },
  "blocks": [
    {
      "t": "h",
      "fr": "Le principe",
      "en": "The idea"
    },
    {
      "t": "p",
      "fr": "En base 10, 13 = 1 × 10 + 3. En base 2, on n'utilise que des puissances de 2 : 13 = 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1, donc 13 s'écrit <code>1101</code> en binaire.",
      "en": "In base 10, 13 = 1 × 10 + 3. In base 2 you only use powers of 2: 13 = 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1, so 13 is written <code>1101</code> in binary."
    },
    {
      "t": "h",
      "fr": "Les divisions successives par 2",
      "en": "Dividing by 2 repeatedly"
    },
    {
      "t": "table",
      "head": {
        "fr": [
          "n",
          "n % 2 (chiffre)",
          "n // 2"
        ],
        "en": [
          "n",
          "n % 2 (digit)",
          "n // 2"
        ]
      },
      "rows": [
        [
          "13",
          "1",
          "6"
        ],
        [
          "6",
          "0",
          "3"
        ],
        [
          "3",
          "1",
          "1"
        ],
        [
          "1",
          "1",
          "0"
        ]
      ]
    },
    {
      "t": "p",
      "fr": "On lit les restes <strong>de bas en haut</strong> : 1101. Chaque nouveau chiffre se place donc à <em>gauche</em> des précédents.",
      "en": "Read the remainders <strong>from bottom to top</strong>: 1101. So each new digit goes to the <em>left</em> of the previous ones."
    }
  ],
  "exercises": [
    {
      "t": "code",
      "id": "p03-e1",
      "title": {
        "fr": "Étape 1 · Du décimal au binaire",
        "en": "Step 1 · Decimal to binary"
      },
      "prompt": {
        "fr": "Écris <code>binaire(n)</code> qui renvoie l'écriture binaire de l'entier n ≥ 0, sous forme de chaîne de caractères, par divisions successives par 2. Interdit d'utiliser <code>bin</code>. Attention au cas n = 0.",
        "en": "Write <code>binaire(n)</code> that returns the binary form of the integer n ≥ 0, as a string, by dividing by 2 repeatedly. Using <code>bin</code> isn't allowed. Watch out for n = 0."
      },
      "starter": {
        "fr": "def binaire(n):\n    if n == 0:\n        return \"0\"\n    s = \"\"\n    ",
        "en": "def binaire(n):\n    if n == 0:\n        return \"0\"\n    s = \"\"\n    "
      },
      "tests": [
        {
          "call": "binaire(13)",
          "expect": "'1101'"
        },
        {
          "call": "binaire(0)",
          "expect": "'0'"
        },
        {
          "call": "binaire(1)",
          "expect": "'1'"
        },
        {
          "call": "binaire(255)",
          "expect": "'11111111'"
        },
        {
          "call": "binaire(2026)",
          "expect": "'11111101010'"
        }
      ],
      "require": [
        "while",
        "%",
        "//",
        "return"
      ],
      "forbid": [
        "bin",
        "format"
      ],
      "hints": [
        {
          "fr": "Tant que n n'est pas nul : le reste <code>n % 2</code> donne un chiffre, puis on remplace n par <code>n // 2</code>.",
          "en": "While n isn't zero: the remainder <code>n % 2</code> gives a digit, then replace n with <code>n // 2</code>."
        },
        {
          "fr": "Le chiffre est un entier : transforme-le en chaîne avec <code>str( )</code> et place-le <strong>devant</strong> s : <code>s = str(n % 2) + s</code>.",
          "en": "The digit is an integer: turn it into a string with <code>str( )</code> and put it <strong>in front of</strong> s: <code>s = str(n % 2) + s</code>."
        },
        {
          "fr": "<code>while n > 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>s = str(n % 2) + s</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>n = n // 2</code><br><code>return s</code>",
          "en": "<code>while n > 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>s = str(n % 2) + s</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>n = n // 2</code><br><code>return s</code>"
        }
      ],
      "solution": "def binaire(n):\n    if n == 0:\n        return \"0\"\n    s = \"\"\n    while n > 0:\n        s = str(n % 2) + s\n        n = n // 2\n    return s"
    },
    {
      "t": "code",
      "id": "p03-e2",
      "carry": true,
      "title": {
        "fr": "Étape 2 · Du binaire au décimal",
        "en": "Step 2 · Binary to decimal"
      },
      "prompt": {
        "fr": "Écris <code>decimal(s)</code> qui renvoie l'entier dont l'écriture binaire est la chaîne s. Méthode de Horner : on lit les chiffres de gauche à droite et, à chaque chiffre, on double le résultat puis on ajoute le chiffre. (Sans <code>int(s, 2)</code>, ce serait trop facile !)",
        "en": "Write <code>decimal(s)</code> that returns the integer whose binary form is the string s. Horner's method: read the digits from left to right and, for each digit, double the result then add the digit. (No <code>int(s, 2)</code>, that would be too easy!)"
      },
      "starter": {
        "fr": "def decimal(s):\n    v = 0\n    ",
        "en": "def decimal(s):\n    v = 0\n    "
      },
      "tests": [
        {
          "call": "decimal(\"1101\")",
          "expect": "13"
        },
        {
          "call": "decimal(\"0\")",
          "expect": "0"
        },
        {
          "call": "decimal(\"11111111\")",
          "expect": "255"
        },
        {
          "call": "decimal(binaire(2026))",
          "expect": "2026",
          "desc": {
            "fr": "decimal(binaire(2026)) redonne 2026",
            "en": "decimal(binaire(2026)) gives back 2026"
          }
        }
      ],
      "require": [
        "for",
        "return"
      ],
      "hints": [
        {
          "fr": "Pour 1101 : v = 0 → 2×0+1 = 1 → 2×1+1 = 3 → 2×3+0 = 6 → 2×6+1 = 13.",
          "en": "For 1101: v = 0 → 2×0+1 = 1 → 2×1+1 = 3 → 2×3+0 = 6 → 2×6+1 = 13."
        },
        {
          "fr": "<code>for c in s:</code> : double v, puis si <code>c == \"1\"</code>, ajoute 1.",
          "en": "<code>for c in s:</code>: double v, then if <code>c == \"1\"</code>, add 1."
        },
        {
          "fr": "<code>for c in s:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>v = 2 * v</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if c == \"1\":</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>v = v + 1</code><br><code>return v</code>",
          "en": "<code>for c in s:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>v = 2 * v</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if c == \"1\":</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>v = v + 1</code><br><code>return v</code>"
        }
      ],
      "solution": "def decimal(s):\n    v = 0\n    for c in s:\n        v = 2 * v\n        if c == \"1\":\n            v = v + 1\n    return v"
    },
    {
      "t": "code",
      "id": "p03-e3",
      "carry": true,
      "title": {
        "fr": "Étape 3 · Compter les 1 et repérer les puissances de 2",
        "en": "Step 3 · Counting 1s and spotting powers of 2"
      },
      "prompt": {
        "fr": "Écris <code>nb_uns(n)</code> qui renvoie le nombre de chiffres 1 dans l'écriture binaire de n, puis <code>est_puissance_de_2(n)</code> qui renvoie <code>True</code> si n ≥ 1 est une puissance de 2 (1, 2, 4, 8…). Astuce : regarde son écriture binaire.",
        "en": "Write <code>nb_uns(n)</code> that returns how many 1 digits the binary form of n has, then <code>est_puissance_de_2(n)</code> that returns <code>True</code> if n ≥ 1 is a power of 2 (1, 2, 4, 8…). Tip: look at its binary form."
      },
      "starter": {
        "fr": "def nb_uns(n):\n    \n\ndef est_puissance_de_2(n):\n    ",
        "en": "def nb_uns(n):\n    \n\ndef est_puissance_de_2(n):\n    "
      },
      "tests": [
        {
          "call": "nb_uns(255)",
          "expect": "8"
        },
        {
          "call": "nb_uns(13)",
          "expect": "3"
        },
        {
          "call": "nb_uns(0)",
          "expect": "0"
        },
        {
          "call": "est_puissance_de_2(1024)",
          "expect": "True"
        },
        {
          "call": "est_puissance_de_2(1)",
          "expect": "True"
        },
        {
          "call": "est_puissance_de_2(1000)",
          "expect": "False"
        }
      ],
      "require": [
        "return"
      ],
      "hints": [
        {
          "fr": "<code>binaire(n)</code> est une chaîne : la méthode <code>count</code> compte ses <code>\"1\"</code>.",
          "en": "<code>binaire(n)</code> is a string: the <code>count</code> method counts its <code>\"1\"</code>s."
        },
        {
          "fr": "Une puissance de 2 s'écrit 1, 10, 100, 1000… : un seul chiffre 1. Donc <code>est_puissance_de_2(n)</code> peut renvoyer <code>nb_uns(n) == 1</code>.",
          "en": "A power of 2 is written 1, 10, 100, 1000…: a single 1 digit. So <code>est_puissance_de_2(n)</code> can return <code>nb_uns(n) == 1</code>."
        }
      ],
      "solution": "def nb_uns(n):\n    return binaire(n).count(\"1\")\n\ndef est_puissance_de_2(n):\n    return nb_uns(n) == 1"
    },
    {
      "t": "code",
      "id": "p03-e4",
      "carry": true,
      "title": {
        "fr": "Étape 4 · Poser une addition en binaire",
        "en": "Step 4 · Adding in binary"
      },
      "prompt": {
        "fr": "Écris <code>addition(a, b)</code> qui additionne deux nombres binaires donnés sous forme de chaînes, <strong>chiffre par chiffre</strong>, de droite à gauche, avec une retenue, comme une addition posée. En binaire : 1 + 1 = 10, on écrit 0 et on retient 1.",
        "en": "Write <code>addition(a, b)</code> that adds two binary numbers given as strings, <strong>digit by digit</strong>, from right to left, with a carry, like column addition. In binary: 1 + 1 = 10, so you write 0 and carry 1."
      },
      "starter": {
        "fr": "def addition(a, b):\n    # on complète avec des 0 à gauche pour avoir la même longueur\n    n = len(a)\n    if len(b) > n:\n        n = len(b)\n    a = (n - len(a)) * \"0\" + a\n    b = (n - len(b)) * \"0\" + b\n    retenue = 0\n    resultat = \"\"\n    ",
        "en": "def addition(a, b):\n    # pad with 0s on the left so both have the same length\n    n = len(a)\n    if len(b) > n:\n        n = len(b)\n    a = (n - len(a)) * \"0\" + a\n    b = (n - len(b)) * \"0\" + b\n    retenue = 0\n    resultat = \"\"\n    "
      },
      "tests": [
        {
          "call": "addition(\"1011\", \"110\")",
          "expect": "'10001'",
          "desc": {
            "fr": "1011 + 110 = 10001 (11 + 6 = 17)",
            "en": "1011 + 110 = 10001 (11 + 6 = 17)"
          }
        },
        {
          "call": "addition(\"1\", \"1\")",
          "expect": "'10'"
        },
        {
          "call": "addition(\"111\", \"1\")",
          "expect": "'1000'"
        },
        {
          "call": "addition(\"0\", \"0\")",
          "expect": "'0'"
        },
        {
          "call": "addition(\"101\", \"10\")",
          "expect": "'111'"
        }
      ],
      "require": [
        "for",
        "return"
      ],
      "hints": [
        {
          "fr": "Parcours les index de droite à gauche : <code>for i in range(n - 1, -1, -1):</code>. À chaque rang, additionne le chiffre de a, celui de b et la retenue : le total vaut 0, 1, 2 ou 3.",
          "en": "Loop over the indexes from right to left: <code>for i in range(n - 1, -1, -1):</code>. At each position, add the digit of a, the digit of b and the carry: the total is 0, 1, 2 or 3."
        },
        {
          "fr": "Le chiffre à écrire est <code>total % 2</code> (placé devant <code>resultat</code>) et la nouvelle retenue est <code>total // 2</code>. Après la boucle, s'il reste une retenue, ajoute un <code>\"1\"</code> devant.",
          "en": "The digit to write is <code>total % 2</code> (put in front of <code>resultat</code>) and the new carry is <code>total // 2</code>. After the loop, if there's a carry left, add a <code>\"1\"</code> in front."
        },
        {
          "fr": "<code>total = retenue</code><br><code>if a[i] == \"1\":</code> <code>total = total + 1</code><br><code>if b[i] == \"1\":</code> <code>total = total + 1</code><br><code>resultat = str(total % 2) + resultat</code><br><code>retenue = total // 2</code>",
          "en": "<code>total = retenue</code><br><code>if a[i] == \"1\":</code> <code>total = total + 1</code><br><code>if b[i] == \"1\":</code> <code>total = total + 1</code><br><code>resultat = str(total % 2) + resultat</code><br><code>retenue = total // 2</code>"
        }
      ],
      "solution": {
        "fr": "def addition(a, b):\n    # on complète avec des 0 à gauche pour avoir la même longueur\n    n = len(a)\n    if len(b) > n:\n        n = len(b)\n    a = (n - len(a)) * \"0\" + a\n    b = (n - len(b)) * \"0\" + b\n    retenue = 0\n    resultat = \"\"\n    for i in range(n - 1, -1, -1):\n        total = retenue\n        if a[i] == \"1\":\n            total = total + 1\n        if b[i] == \"1\":\n            total = total + 1\n        resultat = str(total % 2) + resultat\n        retenue = total // 2\n    if retenue == 1:\n        resultat = \"1\" + resultat\n    return resultat",
        "en": "def addition(a, b):\n    # pad with 0s on the left so both have the same length\n    n = len(a)\n    if len(b) > n:\n        n = len(b)\n    a = (n - len(a)) * \"0\" + a\n    b = (n - len(b)) * \"0\" + b\n    retenue = 0\n    resultat = \"\"\n    for i in range(n - 1, -1, -1):\n        total = retenue\n        if a[i] == \"1\":\n            total = total + 1\n        if b[i] == \"1\":\n            total = total + 1\n        resultat = str(total % 2) + resultat\n        retenue = total // 2\n    if retenue == 1:\n        resultat = \"1\" + resultat\n    return resultat"
      },
      "after": {
        "fr": "Bravo, problème terminé ! Vérifie avec tes propres fonctions : <code>binaire(decimal(a) + decimal(b))</code> donne le même résultat. C'est exactement ce que fait le processeur de ton téléphone, des milliards de fois par seconde.",
        "en": "Well done, problem solved! Check with your own functions: <code>binaire(decimal(a) + decimal(b))</code> gives the same result. It's exactly what your phone's processor does, billions of times per second."
      }
    }
  ]
});
