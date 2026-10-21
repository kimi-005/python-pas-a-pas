(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l07", num: 7, track: "bases",
  title: { fr: "Les fonctions", en: "Functions" },
  intro: {
    fr: "Les fonctions Python sont des fonctions mathématiques : à un antécédent, elles associent une image. Elles peuvent aussi avoir plusieurs antécédents, qu'on appelle des <strong>paramètres</strong>.",
    en: "Python functions are mathematical functions: they map an input (\"antécédent\") to an output (\"image\"). They can have several inputs, called <strong>parameters</strong>."
  },
  blocks: [
    { t: "p",
      fr: "Exemple de fonction à trois variables : g(x ; y ; z) = ⅓(x + y + z). Son objectif : calculer la moyenne de trois nombres.",
      en: "Example of a function of three variables: g(x ; y ; z) = ⅓(x + y + z). Its purpose: compute the mean of three numbers." },

    { t: "h", fr: "Trois familles de fonctions", en: "Three families of functions" },
    { t: "table",
      head: { fr: ["Famille", "Exemple"], en: ["Family", "Example"] },
      rows: [
        [{ fr: "Fonctions natives (disponibles dès qu'on ouvre Python)", en: "Built-in functions (available as soon as Python starts)" }, "round(22/7, 3)"],
        [{ fr: "Fonctions importées d'un module", en: "Functions imported from a module" }, "from math import sqrt"],
        [{ fr: "Fonctions que l'on crée soi-même", en: "Functions you write yourself" }, "def moy(x, y, z):"]
      ] },
    { t: "code", code: "abs(-5)\nround(22 / 7, 4)\nmax(10, 6, 7.7, 19 / 2)\nlen(\"le chat\")" },
    { t: "code", code: "from math import sqrt, floor, pi\nsqrt(81)\nfloor(-3.2)\npi" },
    { t: "note",
      fr: "Sans <code>from math import …</code>, Python ne connaît pas <code>sqrt</code> : il répond <code>NameError</code>.",
      en: "Without <code>from math import …</code>, Python doesn't know <code>sqrt</code>: it answers <code>NameError</code>." },

    { t: "h", fr: "Créer sa propre fonction", en: "Writing your own function" },
    { t: "anatomy",
      code: "def moy(x, y, z):\n    m = 1/3 * (x + y + z)\n    return round(m, 2)",
      labels: [
        { k: "def", fr: "mot clé qui annonce une fonction", en: "keyword that starts a function" },
        { k: "moy", fr: "nom de la fonction, choisi par celui qui code", en: "the function's name, chosen by whoever writes it" },
        { k: "(x, y, z)", fr: "les paramètres, ici trois", en: "the parameters, three here" },
        { k: "return", fr: "renvoie l'image et achève l'exécution de la fonction", en: "returns the output and ends the function" }
      ] },
    { t: "p",
      fr: "Une fois la fonction définie, on l'appelle avec des valeurs. Essaie avec d'autres notes :",
      en: "Once the function is defined, call it with values. Try it with other marks:" },
    { t: "code", code: "def moy(x, y, z):\n    m = 1/3 * (x + y + z)\n    return round(m, 2)\n\nmoy(12, 15, 9)\nmoy(8, 11, 13)" },

    { t: "h", fr: "return ou print ?", en: "return or print?" },
    { t: "p",
      fr: "<code>print</code> affiche une valeur à l'écran, mais la fonction ne renvoie rien (Python dit <code>None</code>). Avec <code>return</code>, on peut réutiliser l'image dans un autre programme.",
      en: "<code>print</code> shows a value on screen, but the function returns nothing (Python says <code>None</code>). With <code>return</code>, the output can be reused in another program." },
    { t: "code", code: "def double_print(x):\n    print(2 * x)\n\ndef double_return(x):\n    return 2 * x\n\na = double_print(5)\nb = double_return(5)\na, b\ndouble_return(5) + 1" },
    { t: "note",
      fr: "<strong>Règle :</strong> une fonction <em>renvoie</em> son résultat avec <code>return</code>, elle ne l'affiche pas. Une fonction qui fait <code>print</code> ne sert qu'une fois : on ne peut ni réutiliser sa valeur, ni la tester, ni écrire <code>double_print(5) + 1</code>. Dans cette appli, tous les exercices avec des fonctions vérifient la valeur <em>renvoyée</em>.",
      en: "<strong>Rule:</strong> a function <em>returns</em> its result with <code>return</code>; it doesn't display it. A function that uses <code>print</code> is single-use: its value can't be reused, tested, or written as <code>double_print(5) + 1</code>. In this app, every function exercise checks the <em>returned</em> value." },
    { t: "note",
      fr: "<strong>Conseil de ton cours :</strong> pour progresser, essaie de te passer le plus possible des fonctions prédéfinies. Travaille avec le « moins possible d'outils ».",
      en: "<strong>Advice from the course:</strong> to improve, try to do without built-in functions as much as possible. Work with \"as few tools as possible\"." }
  ],
  exercises: [
    { t: "predict", id: "l07-p1",
      title: { fr: "Fonctions natives et importées", en: "Built-in and imported functions" },
      items: [
        { code: "abs(-3.4)" },
        { code: "round(22 / 7, 2)" },
        { code: "round(22 / 7, 4)" },
        { code: "max(1, 5.3, -1)" },
        { code: "min(1, 5.3, -1)" },
        { code: "len(\"chat\")" },
        { code: "len([3, \"chat\"])",
          note: { fr: "La liste contient 2 objets : l'entier 3 et la chaîne \"chat\".", en: "The list holds 2 objects: the integer 3 and the string \"chat\"." } },
        { code: "from math import sqrt\nsqrt(16)",
          note: { fr: "<code>sqrt</code> renvoie toujours un float : 4.0 et pas 4.", en: "<code>sqrt</code> always returns a float: 4.0, not 4." } },
        { code: "from math import floor\nfloor(-3.2)",
          note: { fr: "<code>floor</code> donne la partie entière : le plus grand entier inférieur ou égal. Pour −3,2, c'est −4.",
                  en: "<code>floor</code> gives the floor: the largest integer less than or equal. For −3.2 it's −4." } },
        { code: "sqrt(25)" }
      ] },
    { t: "predict", id: "l07-p2",
      title: { fr: "Tes propres fonctions", en: "Your own functions" },
      items: [
        { code: "def f(x):\n    return x ** 2 + 1\n\nf(3)" },
        { code: "def g(x, y):\n    return x - y\n\ng(2, 7)" },
        { code: "def h(x):\n    return 2 * x\n    return 3 * x\n\nh(4)",
          note: { fr: "Le premier <code>return</code> achève la fonction : la ligne suivante n'est jamais exécutée.",
                  en: "The first <code>return</code> ends the function: the next line never runs." } },
        { code: "def f(x):\n    print(x * 2)\n\ny = f(5)\nprint(y)" }
      ] },
    {
      "t": "fill",
      "id": "l07-f1",
      "title": {
        "fr": "Le taux de variation",
        "en": "The rate of change"
      },
      "prompt": {
        "fr": "On considère la fonction f(x) = x² − 3x. Complète la fonction <code>f</code>, puis la fonction <code>taux(a, h)</code> qui renvoie le taux de variation de f entre a et a + h, c'est-à-dire (f(a + h) − f(a)) / h.",
        "en": "Consider the function f(x) = x² − 3x. Fill in the function <code>f</code>, then the function <code>taux(a, h)</code> that returns the rate of change of f between a and a + h, that is (f(a + h) − f(a)) / h."
      },
      "template": "def f(x):\n    return {{x ** 2 - 3 * x}}\n\ndef taux(a, h):\n    return {{(f(a + h) - f(a)) / h}}",
      "tests": [
        {
          "call": "f(4)",
          "expect": "4"
        },
        {
          "call": "f(0)",
          "expect": "0"
        },
        {
          "call": "taux(2, 0.5)",
          "expect": "1.5"
        },
        {
          "call": "taux(0, 2)",
          "expect": "-1.0"
        }
      ],
      "hints": [
        {
          "fr": "x² s'écrit <code>x ** 2</code>. Dans <code>taux</code>, appelle la fonction <code>f</code> que tu viens d'écrire.",
          "en": "x² is <code>x ** 2</code>. In <code>taux</code>, call the function <code>f</code> you just wrote."
        },
        {
          "fr": "Attention aux parenthèses : toute la différence est divisée par h, <code>(f(a + h) - f(a)) / h</code>.",
          "en": "Mind the brackets: the whole difference is divided by h, <code>(f(a + h) - f(a)) / h</code>."
        }
      ],
      "after": {
        "fr": "Quand h devient très petit, le taux de variation s'approche du nombre dérivé f'(a) = 2a − 3. Essaie <code>taux(2, 0.0001)</code> avec « Exécuter ».",
        "en": "When h gets very small, the rate of change gets close to the derivative f'(a) = 2a − 3. Try <code>taux(2, 0.0001)</code> with \"Run\"."
      }
    },
    { t: "code", id: "l07-c1",
      title: { fr: "L'algorithme E en fonction", en: "Algorithm E as a function" },
      prompt: { fr: "Écris la fonction <code>prog1(a)</code> qui renvoie a + 1 si a &lt; 10, et a − 1 sinon.",
                en: "Write the function <code>prog1(a)</code> that returns a + 1 if a &lt; 10, and a − 1 otherwise." },
      starter: { fr: "def prog1(a):\n    ", en: "def prog1(a):\n    " },
      tests: [
        { call: "prog1(15)", expect: "14" },
        { call: "prog1(3)", expect: "4" },
        { call: "prog1(10)", expect: "9" },
        { call: "prog1(9.5)", expect: "10.5" }
      ],
      require: ["def", "return"],
      hint: { fr: "Dans la fonction : un <code>if a < 10:</code> avec <code>a = a + 1</code>, un <code>else:</code> avec <code>a = a - 1</code>, et pour finir <code>return a</code>.",
              en: "Inside the function: an <code>if a < 10:</code> with <code>a = a + 1</code>, an <code>else:</code> with <code>a = a - 1</code>, then <code>return a</code>." },
      solution: "def prog1(a):\n    if a < 10:\n        a = a + 1\n    else:\n        a = a - 1\n    return a" },
    { t: "code", id: "l07-c2",
      title: { fr: "La somme 1 + 2 + … + n", en: "The sum 1 + 2 + … + n" },
      prompt: { fr: "Écris la fonction <code>prog4bis(n)</code> qui renvoie 1 + 2 + … + n, avec une boucle <code>for</code> et sans <code>sum</code>.",
                en: "Write the function <code>prog4bis(n)</code> that returns 1 + 2 + … + n, with a <code>for</code> loop and without <code>sum</code>." },
      starter: { fr: "def prog4bis(n):\n    s = 0\n    ", en: "def prog4bis(n):\n    s = 0\n    " },
      tests: [
        { call: "prog4bis(100)", expect: "5050" },
        { call: "prog4bis(1)", expect: "1" },
        { call: "prog4bis(10)", expect: "55" }
      ],
      require: ["for", "return"], forbid: ["sum"],
      hint: { fr: "<code>for k in range(1, n + 1):</code> puis <code>s = s + k</code>. Le <code>return s</code> se place après la boucle, avec un seul décalage.",
              en: "<code>for k in range(1, n + 1):</code> then <code>s = s + k</code>. The <code>return s</code> goes after the loop, with a single indent." },
      solution: "def prog4bis(n):\n    s = 0\n    for k in range(1, n + 1):\n        s = s + k\n    return s" },
    { t: "code", id: "l07-c3",
      title: { fr: "Une fonction qui en appelle une autre", en: "A function that calls another one" },
      prompt: { fr: "<code>prog4bis</code> est déjà écrite. Écris <code>prog5(A)</code> qui renvoie le plus petit entier n tel que 1 + 2 + … + n &gt; A, en appelant <code>prog4bis</code>.",
                en: "<code>prog4bis</code> is already written. Write <code>prog5(A)</code> that returns the smallest integer n such that 1 + 2 + … + n &gt; A, by calling <code>prog4bis</code>." },
      starter: { fr: "def prog4bis(n):\n    s = 0\n    for k in range(1, n + 1):\n        s = s + k\n    return s\n\ndef prog5(A):\n    n = 0\n    ",
                 en: "def prog4bis(n):\n    s = 0\n    for k in range(1, n + 1):\n        s = s + k\n    return s\n\ndef prog5(A):\n    n = 0\n    " },
      tests: [
        { call: "prog5(10)", expect: "5" },
        { call: "prog5(0)", expect: "1" },
        { call: "prog5(10 ** 6)", expect: "1414" }
      ],
      require: ["while"],
      hint: { fr: "Tant que <code>prog4bis(n)</code> ne dépasse pas A, augmente n. Puis <code>return n</code>.",
              en: "As long as <code>prog4bis(n)</code> doesn't exceed A, increase n. Then <code>return n</code>." },
      solution: "def prog4bis(n):\n    s = 0\n    for k in range(1, n + 1):\n        s = s + k\n    return s\n\ndef prog5(A):\n    n = 0\n    while prog4bis(n) <= A:\n        n = n + 1\n    return n",
      after: { fr: "Comme on connaît la formule 1 + 2 + … + n = n(n + 1)/2, on aurait aussi pu l'utiliser dans prog4bis.",
               en: "Since 1 + 2 + … + n = n(n + 1)/2, you could also have used that formula in prog4bis." } },
    { t: "code", id: "l07-c4",
      title: { fr: "La mention au bac", en: "Grade with honours" },
      prompt: { fr: "La fonction <code>moy</code> est déjà écrite. Écris <code>mention(x, y, z)</code> qui <strong>renvoie</strong> (avec <code>return</code>) : \"Très bien\" si la moyenne est ≥ 16, \"Bien\" si elle est entre 14 et 16, \"Assez bien\" entre 12 et 14, \"Passable\" entre 10 et 12, et \"Recalé\" sinon.",
                en: "The function <code>moy</code> is already written. Write <code>mention(x, y, z)</code> that <strong>returns</strong> (with <code>return</code>): \"Very good\" if the mean is ≥ 16, \"Good\" between 14 and 16, \"Fairly good\" between 12 and 14, \"Pass\" between 10 and 12, and \"Fail\" otherwise." },
      starter: { fr: "def moy(x, y, z):\n    m = 1/3 * (x + y + z)\n    return round(m, 2)\n\ndef mention(x, y, z):\n    resultat = moy(x, y, z)\n    ",
                 en: "def moy(x, y, z):\n    m = 1/3 * (x + y + z)\n    return round(m, 2)\n\ndef mention(x, y, z):\n    result = moy(x, y, z)\n    " },
      tests: [
        { call: "mention(16, 17, 18)", expect: { fr: "'Très bien'", en: "'Very good'" } },
        { call: "mention(14, 15, 13)", expect: { fr: "'Bien'", en: "'Good'" } },
        { call: "mention(12, 13, 11)", expect: { fr: "'Assez bien'", en: "'Fairly good'" } },
        { call: "mention(10, 11, 9)", expect: { fr: "'Passable'", en: "'Pass'" } },
        { call: "mention(5, 8, 9)", expect: { fr: "'Recalé'", en: "'Fail'" } }
      ],
      require: ["return"],
      hint: { fr: "Même structure que l'exemple de la leçon 4, mais avec <code>return \"Très bien\"</code> au lieu de <code>print(\"Très bien\")</code>.",
              en: "Same structure as the lesson 4 example, but with <code>return \"Very good\"</code> instead of <code>print(\"Very good\")</code>." },
      solution: { fr: "def moy(x, y, z):\n    m = 1/3 * (x + y + z)\n    return round(m, 2)\n\ndef mention(x, y, z):\n    resultat = moy(x, y, z)\n    if resultat >= 16:\n        return \"Très bien\"\n    elif resultat >= 14:\n        return \"Bien\"\n    elif resultat >= 12:\n        return \"Assez bien\"\n    elif resultat >= 10:\n        return \"Passable\"\n    else:\n        return \"Recalé\"",
                  en: "def moy(x, y, z):\n    m = 1/3 * (x + y + z)\n    return round(m, 2)\n\ndef mention(x, y, z):\n    result = moy(x, y, z)\n    if result >= 16:\n        return \"Very good\"\n    elif result >= 14:\n        return \"Good\"\n    elif result >= 12:\n        return \"Fairly good\"\n    elif result >= 10:\n        return \"Pass\"\n    else:\n        return \"Fail\"" } }
  ],
  challenges: [
    {
      "t": "code",
      "id": "l07-d1",
      "title": {
        "fr": "Combien de jours dans un mois ?",
        "en": "How many days in a month?"
      },
      "prompt": {
        "fr": "Écris d'abord <code>est_bissextile(annee)</code>, qui renvoie <code>True</code> si l'année est bissextile (divisible par 4 mais pas par 100, ou divisible par 400). Puis écris <code>nb_jours(mois, annee)</code>, qui renvoie le nombre de jours du mois (1 pour janvier, …, 12 pour décembre), en appelant <code>est_bissextile</code> pour février.",
        "en": "First write <code>est_bissextile(annee)</code>, which returns <code>True</code> if the year is a leap year (divisible by 4 but not by 100, or divisible by 400). Then write <code>nb_jours(mois, annee)</code>, which returns the number of days in the month (1 for January, …, 12 for December), calling <code>est_bissextile</code> for February."
      },
      "starter": {
        "fr": "def est_bissextile(annee):\n    \n\ndef nb_jours(mois, annee):\n    ",
        "en": "def est_bissextile(annee):\n    \n\ndef nb_jours(mois, annee):\n    "
      },
      "tests": [
        {
          "call": "est_bissextile(2024)",
          "expect": "True"
        },
        {
          "call": "est_bissextile(1900)",
          "expect": "False"
        },
        {
          "call": "nb_jours(2, 2024)",
          "expect": "29"
        },
        {
          "call": "nb_jours(2, 2026)",
          "expect": "28"
        },
        {
          "call": "nb_jours(2, 2000)",
          "expect": "29"
        },
        {
          "call": "nb_jours(4, 2026)",
          "expect": "30"
        },
        {
          "call": "nb_jours(12, 2026)",
          "expect": "31"
        }
      ],
      "require": [
        "def",
        "return",
        "if"
      ],
      "hints": [
        {
          "fr": "Pour <code>est_bissextile</code>, renvoie directement le test booléen : <code>return (… and …) or …</code>.",
          "en": "For <code>est_bissextile</code>, return the boolean test directly: <code>return (… and …) or …</code>."
        },
        {
          "fr": "Pour <code>nb_jours</code> : février est un cas à part ; avril, juin, septembre et novembre ont 30 jours ; les autres en ont 31. Le test <code>mois in [4, 6, 9, 11]</code> est pratique.",
          "en": "For <code>nb_jours</code>: February is a special case; April, June, September and November have 30 days; the others have 31. The test <code>mois in [4, 6, 9, 11]</code> is handy."
        },
        {
          "fr": "<code>if mois == 2:</code> puis, à l'intérieur, <code>if est_bissextile(annee):</code> pour renvoyer 29, sinon 28 ; <code>elif mois in [4, 6, 9, 11]:</code> renvoie 30 ; <code>else:</code> renvoie 31.",
          "en": "<code>if mois == 2:</code> then, inside, <code>if est_bissextile(annee):</code> to return 29, otherwise 28; <code>elif mois in [4, 6, 9, 11]:</code> returns 30; <code>else:</code> returns 31."
        }
      ],
      "solution": "def est_bissextile(annee):\n    return (annee % 4 == 0 and annee % 100 != 0) or annee % 400 == 0\n\ndef nb_jours(mois, annee):\n    if mois == 2:\n        if est_bissextile(annee):\n            return 29\n        else:\n            return 28\n    elif mois in [4, 6, 9, 11]:\n        return 30\n    else:\n        return 31"
    },
    {
      "t": "code",
      "id": "l07-d2",
      "title": {
        "fr": "La méthode de Héron",
        "en": "Heron's method"
      },
      "prompt": {
        "fr": "Pour approcher √A (A &gt; 0), Héron d'Alexandrie utilisait la suite u<sub>0</sub> = A et u<sub>n+1</sub> = (u<sub>n</sub> + A / u<sub>n</sub>) / 2. Écris <code>heron(A, n)</code>, qui renvoie u<sub>n</sub>, puis <code>racine(A)</code>, qui renvoie le premier terme u<sub>n</sub> tel que |u<sub>n</sub>² − A| &lt; 10<sup>−9</sup>. Sans <code>sqrt</code>, bien sûr !",
        "en": "To approximate √A (A &gt; 0), Heron of Alexandria used the sequence u<sub>0</sub> = A and u<sub>n+1</sub> = (u<sub>n</sub> + A / u<sub>n</sub>) / 2. Write <code>heron(A, n)</code>, which returns u<sub>n</sub>, then <code>racine(A)</code>, which returns the first term u<sub>n</sub> such that |u<sub>n</sub>² − A| &lt; 10<sup>−9</sup>. Without <code>sqrt</code>, of course!"
      },
      "starter": {
        "fr": "def heron(A, n):\n    u = A\n    \n\ndef racine(A):\n    u = A\n    ",
        "en": "def heron(A, n):\n    u = A\n    \n\ndef racine(A):\n    u = A\n    "
      },
      "tests": [
        {
          "call": "heron(2, 0)",
          "expect": "2"
        },
        {
          "call": "heron(2, 1)",
          "expect": "1.5"
        },
        {
          "call": "heron(2, 2)",
          "expect": "17 / 12"
        },
        {
          "call": "heron(9, 10)",
          "expect": "3.0"
        },
        {
          "call": "racine(2)",
          "expect": "2 ** 0.5"
        },
        {
          "call": "racine(10)",
          "expect": "10 ** 0.5"
        },
        {
          "call": "racine(0.25)",
          "expect": "0.5"
        }
      ],
      "require": [
        "for",
        "while",
        "return"
      ],
      "forbid": [
        "sqrt"
      ],
      "hints": [
        {
          "fr": "<code>heron</code> ressemble au calcul d'un terme de suite (leçon 5) : on applique n fois la relation de récurrence.",
          "en": "<code>heron</code> is like computing a term of a sequence (lesson 5): apply the recurrence rule n times."
        },
        {
          "fr": "<code>racine</code> est un algorithme de seuil (leçon 6) : on applique la relation <strong>tant que</strong> u² est encore loin de A, c'est-à-dire tant que <code>abs(u * u - A) >= 10 ** -9</code>.",
          "en": "<code>racine</code> is a threshold algorithm (lesson 6): apply the rule <strong>as long as</strong> u² is still far from A, that is while <code>abs(u * u - A) >= 10 ** -9</code>."
        },
        {
          "fr": "Dans les deux fonctions, la ligne qui change u est la même : <code>u = (u + A / u) / 2</code>. N'oublie pas <code>return u</code> après la boucle.",
          "en": "In both functions, the line that updates u is the same: <code>u = (u + A / u) / 2</code>. Don't forget <code>return u</code> after the loop."
        }
      ],
      "solution": "def heron(A, n):\n    u = A\n    for k in range(n):\n        u = (u + A / u) / 2\n    return u\n\ndef racine(A):\n    u = A\n    while abs(u * u - A) >= 10 ** -9:\n        u = (u + A / u) / 2\n    return u",
      "after": {
        "fr": "La méthode de Héron double à peu près le nombre de décimales exactes à chaque étape : 4 étapes suffisent pour √2.",
        "en": "Heron's method roughly doubles the number of correct decimals at each step: 4 steps are enough for √2."
      }
    }
  ]
});
