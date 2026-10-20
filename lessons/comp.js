(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "comp", num: 11, track: "bases",
  title: { fr: "Listes en compréhension et découpage", en: "List comprehensions and slicing" },
  intro: {
    fr: "Deux écritures très courtes pour fabriquer et découper des listes. La liste « en compréhension » est au programme de maths du lycée.",
    en: "Two very short ways to build and cut lists. List comprehensions are part of the French lycée maths syllabus."
  },
  blocks: [
    { t: "h", fr: "Trois façons de créer une liste", en: "Three ways to create a list" },
    { t: "table",
      head: { fr: ["Méthode", "Exemple : les carrés de 0 à 4"], en: ["Method", "Example: the squares from 0 to 4"] },
      rows: [
        [{ fr: "en extension (on écrit tout)", en: "by listing (write everything)" }, "L = [0, 1, 4, 9, 16]"],
        [{ fr: "par ajouts successifs", en: "by successive appends" }, { fr: "<code>L = []</code> puis <code>for k in range(5): L.append(k ** 2)</code>", en: "<code>L = []</code> then <code>for k in range(5): L.append(k ** 2)</code>" }],
        [{ fr: "en compréhension", en: "as a comprehension" }, "L = [k ** 2 for k in range(5)]"]
      ] },
    { t: "p",
      fr: "La liste en compréhension se lit comme en maths : « la liste des k² pour k allant de 0 à 4 ». Elle fait en une ligne ce que la boucle avec <code>append</code> fait en trois.",
      en: "A comprehension reads like maths: \"the list of k² for k from 0 to 4\". It does in one line what the loop with <code>append</code> does in three." },
    { t: "code", code: "carres = [k ** 2 for k in range(5)]\nprint(carres)\n\nimpairs = [2 * k + 1 for k in range(6)]\nprint(impairs)" },

    { t: "h", fr: "Avec une condition", en: "With a condition" },
    { t: "p",
      fr: "On peut ne garder que certains éléments en ajoutant <code>if</code> à la fin : « la liste des x de 0 à 29 tels que x est multiple de 7 ».",
      en: "You can keep only some elements by adding <code>if</code> at the end: \"the list of x from 0 to 29 such that x is a multiple of 7\"." },
    { t: "code", code: "multiples = [x for x in range(30) if x % 7 == 0]\nprint(multiples)\n\nnotes = [12, 8, 15, 9, 17]\nprint([n for n in notes if n >= 10])" },
    { t: "note",
      fr: "Pour les images d'une fonction : <code>Y = [f(x) for x in X]</code>. C'est l'écriture la plus courte pour préparer un graphique.",
      en: "For the images of a function: <code>Y = [f(x) for x in X]</code>. It's the shortest way to prepare a graph." },

    { t: "h", fr: "Découper une liste", en: "Slicing a list" },
    { t: "p",
      fr: "<code>L[a:b]</code> renvoie les éléments d'index a à b, <strong>b exclu</strong> (comme <code>range</code>). Si on omet a, on part du début ; si on omet b, on va jusqu'au bout.",
      en: "<code>L[a:b]</code> returns the elements from index a to b, <strong>b excluded</strong> (like <code>range</code>). Leave out a to start at the beginning; leave out b to go to the end." },
    { t: "table",
      head: { fr: ["Avec L = [10, 20, 30, 40, 50]", "Résultat"], en: ["With L = [10, 20, 30, 40, 50]", "Result"] },
      rows: [
        ["L[1:3]", "[20, 30]"],
        ["L[:2]", "[10, 20]"],
        ["L[3:]", "[40, 50]"],
        ["L[::2]", { fr: "[10, 30, 50] : un sur deux", en: "[10, 30, 50]: every other one" }],
        ["L[::-1]", { fr: "[50, 40, 30, 20, 10] : à l'envers", en: "[50, 40, 30, 20, 10]: reversed" }]
      ] },
    { t: "code", code: "L = [10, 20, 30, 40, 50]\nprint(L[1:3])\nprint(L[::-1])\nprint(L[-2:])" },

    { t: "h", fr: "Parcourir avec les index", en: "Looping over indexes" },
    { t: "p",
      fr: "<code>for k in L:</code> donne les éléments. Quand on a besoin de la <strong>position</strong> (pour comparer un élément à son voisin, ou modifier la liste), on parcourt les index : <code>for i in range(len(L)):</code>.",
      en: "<code>for k in L:</code> gives the elements. When you need the <strong>position</strong> (to compare an element with its neighbour, or change the list), loop over the indexes: <code>for i in range(len(L)):</code>." },
    { t: "code", code: "U = [2, 5, 11, 23, 47]\nfor i in range(len(U) - 1):\n    print(U[i + 1] - U[i])" }
  ],
  exercises: [
    { t: "predict", id: "comp-p1",
      title: { fr: "Compréhension", en: "Comprehensions" },
      items: [
        { code: "[k ** 2 for k in range(5)]" },
        { code: "[2 * k + 1 for k in range(4)]" },
        { code: "[x for x in range(10) if x % 3 == 0]" },
        { code: "[k for k in [4, -1, 7, -3] if k > 0]" },
        { code: "len([k for k in range(100) if k % 2 == 0])" },
        { code: "sum([k for k in range(1, 11)])" }
      ] },
    { t: "predict", id: "comp-p2",
      title: { fr: "Découpage et index", en: "Slicing and indexes" },
      setup: "L = [10, 20, 30, 40, 50]",
      items: [
        { code: "L[1:3]" },
        { code: "L[:2]" },
        { code: "L[3:]" },
        { code: "L[::-1]" },
        { code: "L[::2]" },
        { code: "L[2:2]" },
        { code: "for i in range(len(L)):\n    L[i] = L[i] // 10\nL" }
      ] },
    {
      "t": "fill",
      "id": "comp-f1",
      "title": {
        "fr": "Compréhension et découpage",
        "en": "Comprehension and slicing"
      },
      "prompt": {
        "fr": "Complète <code>carres_pairs(n)</code>, qui renvoie en compréhension la liste des carrés des entiers pairs de 0 à n, puis <code>derniers(L, n)</code>, qui renvoie les n derniers éléments de L (n ≥ 1) avec un découpage.",
        "en": "Fill in <code>carres_pairs(n)</code>, which returns as a comprehension the list of the squares of the even integers from 0 to n, then <code>derniers(L, n)</code>, which returns the last n elements of L (n ≥ 1) using a slice."
      },
      "template": "def carres_pairs(n):\n    return [{{k ** 2}} for k in range({{n + 1}}) if {{k % 2 == 0}}]\n\ndef derniers(L, n):\n    return L[{{-n:}}]",
      "tests": [
        {
          "call": "carres_pairs(6)",
          "expect": "[0, 4, 16, 36]"
        },
        {
          "call": "carres_pairs(1)",
          "expect": "[0]"
        },
        {
          "call": "derniers([1, 2, 3, 4, 5], 2)",
          "expect": "[4, 5]"
        },
        {
          "call": "derniers([7, 8, 9], 3)",
          "expect": "[7, 8, 9]"
        }
      ],
      "hints": [
        {
          "fr": "« Les k² pour k de 0 à n tels que k est pair » : <code>range(n + 1)</code> et la condition <code>k % 2 == 0</code>.",
          "en": "\"The k² for k from 0 to n such that k is even\": <code>range(n + 1)</code> and the condition <code>k % 2 == 0</code>."
        },
        {
          "fr": "Les index négatifs partent de la fin : <code>L[-n:]</code> va de l'élément d'index −n jusqu'au bout.",
          "en": "Negative indexes count from the end: <code>L[-n:]</code> goes from the element at index −n to the end."
        }
      ]
    },
    { t: "code", id: "comp-c1",
      title: { fr: "Un tableau de valeurs en une ligne", en: "A table of values in one line" },
      prompt: { fr: "Écris la fonction <code>images()</code> qui renvoie la liste des images des entiers de −3 à 3 par f(x) = x² − 1, <strong>en compréhension</strong> (sans <code>append</code>).",
                en: "Write the function <code>images()</code> that returns the list of the images of the integers from −3 to 3 by f(x) = x² − 1, <strong>as a comprehension</strong> (no <code>append</code>)." },
      starter: { fr: "def images():\n    return ", en: "def images():\n    return " },
      tests: [ { call: "images()", expect: "[8, 3, 0, -1, 0, 3, 8]" } ],
      require: ["for", "return"], forbid: ["append"],
      hint: { fr: "<code>[x ** 2 - 1 for x in range(-3, 4)]</code>", en: "<code>[x ** 2 - 1 for x in range(-3, 4)]</code>" },
      solution: "def images():\n    return [x ** 2 - 1 for x in range(-3, 4)]" },
    { t: "code", id: "comp-c2",
      title: { fr: "Les multiples de n", en: "The multiples of n" },
      prompt: { fr: "Écris <code>multiples(n, N)</code> qui renvoie, en compréhension, la liste des multiples de n compris entre 1 et N (N inclus).",
                en: "Write <code>multiples(n, N)</code> that returns, as a comprehension, the list of multiples of n between 1 and N (N included)." },
      starter: { fr: "def multiples(n, N):\n    return ", en: "def multiples(n, N):\n    return " },
      tests: [
        { call: "multiples(3, 20)", expect: "[3, 6, 9, 12, 15, 18]" },
        { call: "multiples(5, 5)", expect: "[5]" },
        { call: "multiples(7, 3)", expect: "[]" }
      ],
      require: ["for", "if", "return"], forbid: ["append"],
      hint: { fr: "Garde les x de <code>range(1, N + 1)</code> tels que <code>x % n == 0</code>.", en: "Keep the x in <code>range(1, N + 1)</code> such that <code>x % n == 0</code>." },
      solution: "def multiples(n, N):\n    return [x for x in range(1, N + 1) if x % n == 0]" },
    { t: "code", id: "comp-c3",
      title: { fr: "Les écarts entre termes", en: "Gaps between terms" },
      prompt: { fr: "Écris <code>ecarts(U)</code> qui renvoie la liste des différences U[i+1] − U[i] entre deux termes consécutifs. Exemple : ecarts([1, 4, 9, 16]) donne [3, 5, 7].",
                en: "Write <code>ecarts(U)</code> that returns the list of differences U[i+1] − U[i] between two consecutive terms. Example: ecarts([1, 4, 9, 16]) gives [3, 5, 7]." },
      starter: { fr: "def ecarts(U):\n    ", en: "def ecarts(U):\n    " },
      tests: [
        { call: "ecarts([1, 4, 9, 16])", expect: "[3, 5, 7]" },
        { call: "ecarts([2, 2, 2])", expect: "[0, 0]" },
        { call: "ecarts([5])", expect: "[]" }
      ],
      require: ["for", "return", "len"],
      hint: { fr: "Il y a un écart de moins que de termes : <code>for i in range(len(U) - 1):</code>, ou en compréhension <code>[U[i + 1] - U[i] for i in range(len(U) - 1)]</code>.",
              en: "There's one gap fewer than terms: <code>for i in range(len(U) - 1):</code>, or as a comprehension <code>[U[i + 1] - U[i] for i in range(len(U) - 1)]</code>." },
      solution: "def ecarts(U):\n    return [U[i + 1] - U[i] for i in range(len(U) - 1)]",
      after: { fr: "Si tous les écarts sont égaux, la suite est arithmétique : c'est l'objet d'un des défis.", en: "If all the gaps are equal, the sequence is arithmetic: that's one of the challenges." } }
  ],
  challenges: [
    { t: "code", id: "comp-d1",
      title: { fr: "Arithmétique ou géométrique ?", en: "Arithmetic or geometric?" },
      prompt: { fr: "U est la liste des premiers termes d'une suite (au moins 2 termes, tous non nuls). Écris <code>est_arithmetique(U)</code> et <code>est_geometrique(U)</code>, qui renvoient <code>True</code> ou <code>False</code>. Utilise des listes en compréhension.",
                en: "U is the list of the first terms of a sequence (at least 2 terms, all non-zero). Write <code>est_arithmetique(U)</code> and <code>est_geometrique(U)</code>, which return <code>True</code> or <code>False</code>. Use list comprehensions." },
      starter: { fr: "def est_arithmetique(U):\n    ecarts = []\n    \n\ndef est_geometrique(U):\n    ", en: "def est_arithmetique(U):\n    ecarts = []\n    \n\ndef est_geometrique(U):\n    " },
      tests: [
        { call: "est_arithmetique([3, 7, 11, 15])", expect: "True" },
        { call: "est_arithmetique([1, 2, 4])", expect: "False" },
        { call: "est_arithmetique([5, 5])", expect: "True" },
        { call: "est_geometrique([2, 6, 18, 54])", expect: "True" },
        { call: "est_geometrique([3, -6, 12])", expect: "True" },
        { call: "est_geometrique([1, 2, 3])", expect: "False" },
        { call: "est_geometrique([1, 0.5, 0.25])", expect: "True" }
      ],
      require: ["for", "return"],
      hints: [
        { fr: "Arithmétique : tous les écarts U[i+1] − U[i] sont égaux. Géométrique : tous les quotients U[i+1] / U[i] sont égaux.", en: "Arithmetic: all the gaps U[i+1] − U[i] are equal. Geometric: all the ratios U[i+1] / U[i] are equal." },
        { fr: "Fabrique la liste des écarts en compréhension, puis compare-la à une liste remplie du premier écart : <code>E == len(E) * [E[0]]</code>.", en: "Build the list of gaps as a comprehension, then compare it with a list filled with the first gap: <code>E == len(E) * [E[0]]</code>." },
        { fr: "<code>E = [U[i + 1] - U[i] for i in range(len(U) - 1)]</code> puis <code>return E == len(E) * [E[0]]</code>. Même chose avec <code>U[i + 1] / U[i]</code> pour la suite géométrique.", en: "<code>E = [U[i + 1] - U[i] for i in range(len(U) - 1)]</code> then <code>return E == len(E) * [E[0]]</code>. Same with <code>U[i + 1] / U[i]</code> for the geometric one." }
      ],
      solution: "def est_arithmetique(U):\n    ecarts = [U[i + 1] - U[i] for i in range(len(U) - 1)]\n    return ecarts == len(ecarts) * [ecarts[0]]\n\ndef est_geometrique(U):\n    quotients = [U[i + 1] / U[i] for i in range(len(U) - 1)]\n    return quotients == len(quotients) * [quotients[0]]",
      after: { fr: "Avec des décimaux, les quotients peuvent avoir de minuscules erreurs d'arrondi : dans un vrai programme, on testerait plutôt que les écarts sont très petits.", en: "With decimals, the ratios can have tiny rounding errors: in a real program you'd rather test that the differences are very small." } },
    { t: "code", id: "comp-d2",
      title: { fr: "Le triangle de Pascal", en: "Pascal's triangle" },
      prompt: { fr: "Chaque ligne du triangle de Pascal commence et finit par 1, et chaque autre nombre est la somme des deux nombres au-dessus de lui. 1) Écris <code>ligne_suivante(L)</code> qui renvoie la ligne qui suit la ligne L. 2) Écris <code>pascal(n)</code> qui renvoie la ligne n (la ligne 0 est [1]).",
                en: "Each row of Pascal's triangle starts and ends with 1, and every other number is the sum of the two numbers above it. 1) Write <code>ligne_suivante(L)</code> that returns the row after row L. 2) Write <code>pascal(n)</code> that returns row n (row 0 is [1])." },
      starter: { fr: "def ligne_suivante(L):\n    \n\ndef pascal(n):\n    L = [1]\n    ", en: "def ligne_suivante(L):\n    \n\ndef pascal(n):\n    L = [1]\n    " },
      tests: [
        { call: "ligne_suivante([1])", expect: "[1, 1]" },
        { call: "ligne_suivante([1, 2, 1])", expect: "[1, 3, 3, 1]" },
        { call: "pascal(0)", expect: "[1]" },
        { call: "pascal(4)", expect: "[1, 4, 6, 4, 1]" },
        { call: "pascal(10)[5]", expect: "252" },
        { call: "sum(pascal(10))", expect: "1024", desc: { fr: "la somme de la ligne 10 vaut 2¹⁰ = 1024", en: "the sum of row 10 is 2¹⁰ = 1024" } }
      ],
      require: ["for", "return"],
      hints: [
        { fr: "Dans la ligne suivante, à part les deux 1 des bords, on trouve les sommes de deux voisins de L : L[0] + L[1], L[1] + L[2], …", en: "In the next row, apart from the two 1s at the ends, you find the sums of two neighbours of L: L[0] + L[1], L[1] + L[2], …" },
        { fr: "La liste des sommes de voisins s'écrit en compréhension : <code>[L[i] + L[i + 1] for i in range(len(L) - 1)]</code>. Il reste à ajouter [1] au début et à la fin avec <code>+</code>.", en: "The list of neighbour sums is a comprehension: <code>[L[i] + L[i + 1] for i in range(len(L) - 1)]</code>. Then add [1] at the start and at the end with <code>+</code>." },
        { fr: "Pour <code>pascal(n)</code> : pars de <code>L = [1]</code> et applique <code>L = ligne_suivante(L)</code> n fois, puis <code>return L</code>.", en: "For <code>pascal(n)</code>: start from <code>L = [1]</code> and apply <code>L = ligne_suivante(L)</code> n times, then <code>return L</code>." }
      ],
      solution: "def ligne_suivante(L):\n    return [1] + [L[i] + L[i + 1] for i in range(len(L) - 1)] + [1]\n\ndef pascal(n):\n    L = [1]\n    for k in range(n):\n        L = ligne_suivante(L)\n    return L",
      after: { fr: "En terminale, tu retrouveras ces nombres : ce sont les coefficients binomiaux, par exemple « 5 parmi 10 » = 252.", en: "These numbers are the binomial coefficients: for example \"10 choose 5\" = 252." } }
  ]
});
