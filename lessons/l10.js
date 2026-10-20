(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l10", num: 10, track: "bases",
  title: { fr: "Les modules math et random", en: "The math and random modules" },
  intro: {
    fr: "Quand on ouvre Python, seules quelques fonctions natives sont disponibles. Les autres sont rangées dans des <strong>modules</strong>, qu'il faut <strong>importer</strong>.",
    en: "When Python starts, only a few built-in functions are available. The others are stored in <strong>modules</strong>, which you have to <strong>import</strong>."
  },
  blocks: [
    { t: "p",
      fr: "Vois un module comme une valise dans laquelle sont rangées des fonctions. Au lycée, on utilise surtout <code>math</code> (fonctions usuelles, π) et <code>random</code> (nombres aléatoires), et <code>matplotlib.pyplot</code> pour les graphiques (leçon 15).",
      en: "Think of a module as a suitcase holding functions. In school we mostly use <code>math</code> (usual functions, π) and <code>random</code> (random numbers), plus <code>matplotlib.pyplot</code> for graphs (lesson 15)." },

    { t: "h", fr: "Les différentes façons d'importer", en: "Different ways to import" },
    { t: "table",
      head: { fr: ["Écriture", "Ce qu'on obtient"], en: ["Code", "What you get"] },
      rows: [
        ["from math import sqrt", { fr: "seulement sqrt ; cos reste inconnue", en: "only sqrt; cos stays unknown" }],
        ["from math import sqrt, cos", { fr: "sqrt et cos", en: "sqrt and cos" }],
        ["from math import *", { fr: "toutes les fonctions du module : le plus simple pour nous", en: "every function in the module: the simplest for us" }],
        ["import math", { fr: "tout, mais on écrit math.sqrt(36) : on voit de quel module vient la fonction", en: "everything, but you write math.sqrt(36): you can see which module it comes from" }],
        ["from math import sqrt as r", { fr: "sqrt, renommée r : r(36)", en: "sqrt, renamed r: r(36)" }]
      ] },
    { t: "code", code: "from math import sqrt\nprint(sqrt(36))\nprint(cos(0))" },
    { t: "p",
      fr: "Lance ce code : <code>cos</code> n'a pas été importée, Python répond <code>NameError</code>. Corrige la première ligne pour que tout marche.",
      en: "Run this code: <code>cos</code> wasn't imported, so Python answers <code>NameError</code>. Fix the first line so everything works." },

    { t: "h", fr: "Le module math", en: "The math module" },
    { t: "table",
      head: { fr: ["Nom", "En maths"], en: ["Name", "In maths"] },
      rows: [
        ["sqrt(x)", "√x"],
        ["pi", "π"],
        ["exp(x)", "eˣ"],
        ["cos(x), sin(x), tan(x)", { fr: "cosinus, sinus, tangente (x en radians)", en: "cosine, sine, tangent (x in radians)" }],
        ["floor(x)", { fr: "partie entière", en: "floor (integer part)" }],
        ["gcd(a, b)", { fr: "PGCD de a et b", en: "greatest common divisor" }]
      ] },
    { t: "code", code: "from math import *\nprint(pi)\nprint(cos(pi))\nprint(exp(1))\nprint(gcd(12, 18))" },

    { t: "h", fr: "Le module random", en: "The random module" },
    { t: "table",
      head: { fr: ["Fonction", "Renvoie"], en: ["Function", "Returns"] },
      rows: [
        ["random()", { fr: "un flottant au hasard dans [0 ; 1[", en: "a random float in [0 ; 1[" }],
        ["randint(a, b)", { fr: "un entier au hasard entre a et b, <strong>les deux inclus</strong>", en: "a random integer between a and b, <strong>both included</strong>" }],
        ["uniform(a, b)", { fr: "un flottant au hasard entre a et b", en: "a random float between a and b" }],
        ["choice(L)", { fr: "un élément de la liste L au hasard", en: "a random element of the list L" }]
      ] },
    { t: "code", code: "from random import *\nprint(random())\nprint(randint(1, 6))\nprint(choice([\"pile\", \"face\"]))" },
    { t: "p",
      fr: "Relance plusieurs fois : les résultats changent à chaque exécution.",
      en: "Run it several times: the results change every time." },
    { t: "note",
      fr: "Attention : <code>randint(1, 6)</code> peut donner 6, alors que <code>range(1, 6)</code> s'arrête à 5.",
      en: "Careful: <code>randint(1, 6)</code> can give 6, whereas <code>range(1, 6)</code> stops at 5." }
  ],
  exercises: [
    { t: "predict", id: "l10-p1",
      title: { fr: "Importer et utiliser", en: "Importing and using" },
      items: [
        { code: "from math import sqrt\nsqrt(36)" },
        { code: "from math import sqrt\ncos(0)" },
        { code: "import math\nmath.sqrt(36)" },
        { code: "import math\nsqrt(36)",
          note: { fr: "Avec <code>import math</code>, il faut écrire <code>math.sqrt</code>.", en: "With <code>import math</code>, you must write <code>math.sqrt</code>." } },
        { code: "from math import sqrt as r\nr(36)" },
        { code: "from math import *\nfloor(-3.2)" },
        { code: "from math import *\ngcd(12, 18)" },
        { code: "from random import *\nx = randint(1, 6)\n1 <= x <= 6",
          note: { fr: "On ne peut pas prévoir x, mais on sait qu'il est entre 1 et 6.", en: "You can't predict x, but you know it's between 1 and 6." } },
        { code: "from random import *\nx = random()\nx < 1" }
      ] },
    {
      "t": "fill",
      "id": "l10-f1",
      "title": {
        "fr": "Attendre le 6",
        "en": "Waiting for a 6"
      },
      "prompt": {
        "fr": "On lance un dé jusqu'à obtenir un 6. Complète <code>attente()</code>, qui renvoie le nombre de lancers effectués, puis <code>moyenne_attente(N)</code>, qui renvoie la moyenne du nombre de lancers sur N expériences.",
        "en": "Roll a die until you get a 6. Fill in <code>attente()</code>, which returns how many rolls it took, then <code>moyenne_attente(N)</code>, which returns the mean number of rolls over N experiments."
      },
      "template": "from random import randint\n\ndef attente():\n    n = 1\n    while {{randint(1, 6) != 6}}:\n        n = {{n + 1}}\n    return n\n\ndef moyenne_attente(N):\n    s = 0\n    for k in range(N):\n        s = s + {{attente()}}\n    return {{s / N}}",
      "tests": [
        {
          "call": "all(type(attente()) == int and attente() >= 1 for k in range(500))",
          "expect": "True",
          "desc": {
            "fr": "attente() renvoie toujours un entier ≥ 1",
            "en": "attente() always returns an integer ≥ 1"
          }
        },
        {
          "call": "max(attente() for k in range(2000)) > 10",
          "expect": "True",
          "desc": {
            "fr": "il faut parfois plus de 10 lancers",
            "en": "it sometimes takes more than 10 rolls"
          }
        },
        {
          "call": "abs(moyenne_attente(10000) - 6) < 0.5",
          "expect": "True",
          "desc": {
            "fr": "sur 10 000 expériences, la moyenne est proche de 6",
            "en": "over 10,000 experiments, the mean is close to 6"
          }
        }
      ],
      "hints": [
        {
          "fr": "Le premier lancer est déjà compté (n = 1). On relance <em>tant que</em> le dé ne donne pas 6.",
          "en": "The first roll is already counted (n = 1). Roll again <em>as long as</em> the die doesn't show 6."
        },
        {
          "fr": "La condition est <code>randint(1, 6) != 6</code>. Pour la moyenne, additionne les résultats de <code>attente()</code> puis divise par N.",
          "en": "The condition is <code>randint(1, 6) != 6</code>. For the mean, add up the results of <code>attente()</code> then divide by N."
        }
      ],
      "after": {
        "fr": "En moyenne, il faut 6 lancers pour obtenir un 6 : c'est l'inverse de la probabilité 1/6.",
        "en": "On average it takes 6 rolls to get a 6: the inverse of the probability 1/6."
      }
    },
    { t: "code", id: "l10-c1",
      title: { fr: "Pythagore", en: "Pythagoras" },
      prompt: { fr: "Écris la fonction <code>hypotenuse(a, b)</code> qui renvoie la longueur de l'hypoténuse d'un triangle rectangle dont les côtés de l'angle droit mesurent a et b.",
                en: "Write the function <code>hypotenuse(a, b)</code> that returns the length of the hypotenuse of a right triangle whose two shorter sides are a and b." },
      starter: { fr: "from math import sqrt\n\ndef hypotenuse(a, b):\n    ", en: "from math import sqrt\n\ndef hypotenuse(a, b):\n    " },
      tests: [
        { call: "hypotenuse(3, 4)", expect: "5.0" },
        { call: "hypotenuse(5, 12)", expect: "13.0" },
        { call: "hypotenuse(1, 1)", expect: "1.4142135623730951" }
      ],
      require: ["sqrt", "return"],
      hint: { fr: "D'après le théorème de Pythagore, c² = a² + b², donc c = √(a² + b²).", en: "By Pythagoras' theorem, c² = a² + b², so c = √(a² + b²)." },
      solution: "from math import sqrt\n\ndef hypotenuse(a, b):\n    return sqrt(a ** 2 + b ** 2)" },
    { t: "code", id: "l10-c2",
      title: { fr: "Un dé à six faces", en: "A six-sided die" },
      prompt: { fr: "Écris la fonction <code>de()</code>, sans paramètre, qui simule le lancer d'un dé équilibré : elle renvoie un entier au hasard entre 1 et 6.",
                en: "Write the function <code>de()</code>, with no parameter, that simulates rolling a fair die: it returns a random integer between 1 and 6." },
      starter: { fr: "from random import randint\n\ndef de():\n    ", en: "from random import randint\n\ndef de():\n    " },
      tests: [
        { call: "all(1 <= de() <= 6 for k in range(2000))", expect: "True", desc: { fr: "sur 2 000 lancers, toujours entre 1 et 6", en: "over 2,000 rolls, always between 1 and 6" } },
        { call: "sorted(set(de() for k in range(2000)))", expect: "[1, 2, 3, 4, 5, 6]", desc: { fr: "les six faces sortent toutes", en: "all six faces come up" } },
        { call: "type(de()) == int", expect: "True", desc: { fr: "renvoie un entier", en: "returns an integer" } }
      ],
      require: ["randint", "return"],
      hint: { fr: "Une seule ligne suffit : <code>return randint(1, 6)</code>.", en: "One line is enough: <code>return randint(1, 6)</code>." },
      solution: "from random import randint\n\ndef de():\n    return randint(1, 6)" },
    { t: "code", id: "l10-c3",
      title: { fr: "Fréquence d'apparition du 6", en: "How often a 6 comes up" },
      prompt: { fr: "Écris <code>frequence(n)</code> qui simule n lancers d'un dé et renvoie la fréquence d'apparition du 6, c'est-à-dire le nombre de 6 divisé par n.",
                en: "Write <code>frequence(n)</code> that simulates n rolls of a die and returns how often a 6 comes up, that is the number of 6s divided by n." },
      starter: { fr: "from random import randint\n\ndef frequence(n):\n    c = 0\n    ", en: "from random import randint\n\ndef frequence(n):\n    c = 0\n    " },
      tests: [
        { call: "0 <= frequence(100) <= 1", expect: "True", desc: { fr: "renvoie une fréquence, entre 0 et 1", en: "returns a frequency, between 0 and 1" } },
        { call: "abs(frequence(60000) - 1/6) < 0.01", expect: "True", desc: { fr: "sur 60 000 lancers, la fréquence est proche de 1/6", en: "over 60,000 rolls, the frequency is close to 1/6" } }
      ],
      require: ["for", "randint", "return"],
      hint: { fr: "Répète n fois : si <code>randint(1, 6) == 6</code>, ajoute 1 au compteur c. Après la boucle, <code>return c / n</code>.",
              en: "Repeat n times: if <code>randint(1, 6) == 6</code>, add 1 to the counter c. After the loop, <code>return c / n</code>." },
      solution: "from random import randint\n\ndef frequence(n):\n    c = 0\n    for k in range(n):\n        if randint(1, 6) == 6:\n            c = c + 1\n    return c / n",
      after: { fr: "Plus n est grand, plus la fréquence se rapproche de la probabilité 1/6 ≈ 0,167. C'est la loi des grands nombres.",
               en: "The bigger n is, the closer the frequency gets to the probability 1/6 ≈ 0.167. This is the law of large numbers." } },
    { t: "code", id: "l10-c4",
      title: { fr: "Le PGCD, sans gcd", en: "The GCD, without gcd" },
      prompt: { fr: "Écris <code>pgcd(a, b)</code> avec l'algorithme d'Euclide, sans utiliser <code>gcd</code> : tant que b n'est pas nul, on remplace (a, b) par (b, reste de a par b). Le PGCD est alors a.",
                en: "Write <code>pgcd(a, b)</code> using Euclid's algorithm, without <code>gcd</code>: while b isn't zero, replace (a, b) with (b, remainder of a by b). The GCD is then a." },
      algo: { fr: "Tant que b ≠ 0 :\n    r ← reste de a par b\n    a ← b\n    b ← r\nFin Tant que\nAfficher a",
              en: "While b ≠ 0:\n    r ← remainder of a by b\n    a ← b\n    b ← r\nEnd While\nDisplay a" },
      starter: { fr: "def pgcd(a, b):\n    ", en: "def pgcd(a, b):\n    " },
      tests: [
        { call: "pgcd(12, 18)", expect: "6" },
        { call: "pgcd(17, 5)", expect: "1" },
        { call: "pgcd(100, 75)", expect: "25" },
        { call: "pgcd(7, 0)", expect: "7" }
      ],
      require: ["while", "%", "return"], forbid: ["gcd"],
      hint: { fr: "<code>while b != 0:</code> puis trois affectations : <code>r = a % b</code>, <code>a = b</code>, <code>b = r</code>. Après la boucle, <code>return a</code>.",
              en: "<code>while b != 0:</code> then three assignments: <code>r = a % b</code>, <code>a = b</code>, <code>b = r</code>. After the loop, <code>return a</code>." },
      solution: "def pgcd(a, b):\n    while b != 0:\n        r = a % b\n        a = b\n        b = r\n    return a" }
  ],
  challenges: [
    { t: "code", id: "l10-d1",
      title: { fr: "Distance et périmètre d'un polygone", en: "Distance and perimeter of a polygon" },
      prompt: { fr: "Un point est une liste <code>[x, y]</code>. 1) Écris <code>distance(A, B)</code> qui renvoie la distance AB. 2) Écris <code>perimetre(P)</code> qui renvoie le périmètre du polygone dont les sommets sont, dans l'ordre, les points de la liste P (le dernier sommet est relié au premier).",
                en: "A point is a list <code>[x, y]</code>. 1) Write <code>distance(A, B)</code> that returns the distance AB. 2) Write <code>perimetre(P)</code> that returns the perimeter of the polygon whose vertices are, in order, the points of the list P (the last vertex is joined to the first)." },
      starter: { fr: "from math import sqrt\n\ndef distance(A, B):\n    \n\ndef perimetre(P):\n    p = 0\n    ", en: "from math import sqrt\n\ndef distance(A, B):\n    \n\ndef perimetre(P):\n    p = 0\n    " },
      tests: [
        { call: "distance([0, 0], [3, 4])", expect: "5.0" },
        { call: "distance([1, -2], [-2, 2])", expect: "5.0" },
        { call: "perimetre([[0, 0], [4, 0], [4, 3]])", expect: "12.0" },
        { call: "perimetre([[0, 0], [2, 0], [2, 2], [0, 2]])", expect: "8.0" },
        { call: "perimetre([[0, 0], [1, 1], [2, 0], [1, -1]])", expect: "5.656854249492381" }
      ],
      require: ["sqrt", "for", "return"],
      hints: [
        { fr: "AB = √((x<sub>B</sub> − x<sub>A</sub>)² + (y<sub>B</sub> − y<sub>A</sub>)²), avec x<sub>A</sub> = A[0] et y<sub>A</sub> = A[1].", en: "AB = √((x<sub>B</sub> − x<sub>A</sub>)² + (y<sub>B</sub> − y<sub>A</sub>)²), with x<sub>A</sub> = A[0] and y<sub>A</sub> = A[1]." },
        { fr: "Pour le périmètre, additionne les distances entre chaque sommet P[i] et le suivant. Pour le dernier sommet, « le suivant » est P[0].", en: "For the perimeter, add up the distances between each vertex P[i] and the next one. For the last vertex, \"the next one\" is P[0]." },
        { fr: "<code>for i in range(len(P)):</code> et le suivant de P[i] est <code>P[(i + 1) % len(P)]</code> : le reste ramène à 0 après le dernier index.", en: "<code>for i in range(len(P)):</code> and the next of P[i] is <code>P[(i + 1) % len(P)]</code>: the remainder brings you back to 0 after the last index." }
      ],
      solution: "from math import sqrt\n\ndef distance(A, B):\n    return sqrt((B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2)\n\ndef perimetre(P):\n    p = 0\n    n = len(P)\n    for i in range(n):\n        p = p + distance(P[i], P[(i + 1) % n])\n    return p" },
    { t: "code", id: "l10-d2",
      title: { fr: "Le paradoxe des anniversaires", en: "The birthday paradox" },
      prompt: { fr: "1) Écris <code>anniversaire_commun(n)</code> qui tire au hasard le jour d'anniversaire (de 1 à 365) de n personnes et renvoie <code>True</code> si au moins deux personnes ont le même, <code>False</code> sinon. 2) Écris <code>proba(n, essais)</code> qui répète l'expérience <code>essais</code> fois et renvoie la fréquence des groupes où deux anniversaires coïncident.",
                en: "1) Write <code>anniversaire_commun(n)</code> that draws a random birthday (from 1 to 365) for n people and returns <code>True</code> if at least two people share one, <code>False</code> otherwise. 2) Write <code>proba(n, essais)</code> that repeats the experiment <code>essais</code> times and returns how often two birthdays coincide." },
      starter: { fr: "from random import randint\n\ndef anniversaire_commun(n):\n    dates = []\n    \n\ndef proba(n, essais):\n    c = 0\n    ", en: "from random import randint\n\ndef anniversaire_commun(n):\n    dates = []\n    \n\ndef proba(n, essais):\n    c = 0\n    " },
      tests: [
        { call: "anniversaire_commun(1)", expect: "False", desc: { fr: "avec une seule personne, jamais d'anniversaire commun", en: "with a single person, never a shared birthday" } },
        { call: "anniversaire_commun(366)", expect: "True", desc: { fr: "avec 366 personnes, toujours au moins un anniversaire commun", en: "with 366 people, always at least one shared birthday" } },
        { call: "abs(proba(23, 2000) - 0.507) < 0.1", expect: "True", desc: { fr: "pour 23 personnes, la fréquence est proche de 0,507", en: "for 23 people, the frequency is close to 0.507" } },
        { call: "proba(60, 1000) > 0.95", expect: "True", desc: { fr: "pour 60 personnes, c'est presque sûr", en: "for 60 people, it's almost certain" } }
      ],
      require: ["randint", "for", "return"],
      hints: [
        { fr: "Tire les anniversaires un par un. Avant d'ajouter une nouvelle date à la liste <code>dates</code>, regarde si elle y est déjà.", en: "Draw the birthdays one by one. Before adding a new date to the list <code>dates</code>, check whether it's already there." },
        { fr: "Dans la boucle : <code>d = randint(1, 365)</code> ; si <code>d in dates</code>, <code>return True</code> tout de suite ; sinon <code>dates.append(d)</code>. Si la boucle se termine, <code>return False</code>.", en: "In the loop: <code>d = randint(1, 365)</code>; if <code>d in dates</code>, <code>return True</code> straight away; otherwise <code>dates.append(d)</code>. If the loop ends, <code>return False</code>." },
        { fr: "Pour <code>proba</code> : répète <code>essais</code> fois, ajoute 1 à c quand <code>anniversaire_commun(n)</code> est vrai, puis <code>return c / essais</code>.", en: "For <code>proba</code>: repeat <code>essais</code> times, add 1 to c when <code>anniversaire_commun(n)</code> is true, then <code>return c / essais</code>." }
      ],
      solution: "from random import randint\n\ndef anniversaire_commun(n):\n    dates = []\n    for k in range(n):\n        d = randint(1, 365)\n        if d in dates:\n            return True\n        dates.append(d)\n    return False\n\ndef proba(n, essais):\n    c = 0\n    for k in range(essais):\n        if anniversaire_commun(n):\n            c = c + 1\n    return c / essais",
      after: { fr: "Surprenant : dans une classe de 23 élèves, il y a plus d'une chance sur deux que deux élèves soient nés le même jour.", en: "Surprising: in a class of 23 students, there's a better than even chance that two of them share a birthday." } }
  ]
});
