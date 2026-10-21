(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l09", num: 9, track: "bases",
  title: { fr: "Les méthodes", en: "Methods" },
  intro: {
    fr: "Une méthode ressemble à une fonction : Python exécute une instruction sur un objet. Mais elle s'écrit après l'objet, avec un point : <code>L.append(4)</code>.",
    en: "A method is like a function: Python runs an instruction on an object. But it's written after the object, with a dot: <code>L.append(4)</code>."
  },
  blocks: [
    { t: "h", fr: "Fonction ou méthode ?", en: "Function or method?" },
    { t: "table",
      head: { fr: ["", "Écriture", "Ce qui se passe"], en: ["", "Code", "What happens"] },
      rows: [
        [{ fr: "Fonction", en: "Function" }, "print(L)", { fr: "on appelle la fonction print pour la liste L", en: "we call the print function on the list L" }],
        [{ fr: "Méthode", en: "Method" }, "L.append(3)", { fr: "on applique la méthode append à L : « j'ajoute 3 en bout de liste »", en: "we apply the append method to L: \"add 3 at the end of the list\"" }]
      ] },
    { t: "note",
      fr: "Au lycée, les méthodes s'appliquent surtout aux listes, plus rarement aux chaînes de caractères. En général, une méthode de liste <strong>modifie la liste</strong> et ne renvoie pas d'image… sauf exception (<code>pop</code>, <code>index</code>, <code>count</code>).",
      en: "In school, methods are mostly used on lists, sometimes on strings. Usually a list method <strong>changes the list</strong> and returns nothing… with exceptions (<code>pop</code>, <code>index</code>, <code>count</code>)." },

    { t: "h", fr: "Les méthodes des listes", en: "List methods" },
    { t: "table",
      head: { fr: ["Méthode", "Rôle", "Renvoie"], en: ["Method", "What it does", "Returns"] },
      rows: [
        ["L.append(x)", { fr: "ajoute x à la fin de L", en: "adds x at the end of L" }, { fr: "rien", en: "nothing" }],
        ["L.remove(x)", { fr: "supprime le premier x rencontré", en: "removes the first x found" }, { fr: "rien", en: "nothing" }],
        ["L.pop(i)", { fr: "supprime l'objet d'index i", en: "removes the object at index i" }, { fr: "l'objet supprimé", en: "the removed object" }],
        ["L.count(x)", { fr: "compte les x dans L", en: "counts the x in L" }, { fr: "un entier", en: "an integer" }],
        ["L.index(x)", { fr: "cherche le premier x", en: "finds the first x" }, { fr: "son index", en: "its index" }],
        ["L.sort()", { fr: "trie L (L est modifiée)", en: "sorts L (L is changed)" }, { fr: "rien", en: "nothing" }]
      ] },
    { t: "code", code: "L = [1, 3, 5, 2, 7, 2, 9]\nL.append(4)\nL\nL.remove(2)\nL\nL.pop(2)\nL" },
    { t: "note",
      fr: "<strong>Rappel :</strong> <code>sorted(L)</code> renvoie une copie triée sans toucher à L, alors que <code>L.sort()</code> trie L elle-même.",
      en: "<strong>Reminder:</strong> <code>sorted(L)</code> returns a sorted copy without touching L, while <code>L.sort()</code> sorts L itself." },

    { t: "h", fr: "Construire une liste avec une boucle", en: "Building a list with a loop" },
    { t: "p",
      fr: "C'est l'usage le plus fréquent en maths : on part d'une liste vide <code>[]</code> et on ajoute un élément à chaque tour de boucle avec <code>append</code>.",
      en: "This is the most common use in maths: start from an empty list <code>[]</code> and add one element on each pass with <code>append</code>." },
    { t: "code", code: "carres = []\nfor k in range(1, 6):\n    carres.append(k ** 2)\ncarres" },

    { t: "h", fr: "Quelques méthodes des chaînes", en: "A few string methods" },
    { t: "code", code: "a = \"réglisse\"\na.upper()\n\"USLY\".lower()\n\"elisabeth\".capitalize()\na" },
    { t: "p",
      fr: "Une chaîne ne peut pas être modifiée : <code>upper()</code> renvoie une <em>nouvelle</em> chaîne, et <code>a</code> ne change pas.",
      en: "A string can't be changed: <code>upper()</code> returns a <em>new</em> string, and <code>a</code> stays the same." }
  ],
  exercises: [
    { t: "predict", id: "l09-p1",
      title: { fr: "Que devient la liste ?", en: "What happens to the list?" },
      hint: { fr: "Si la console n'affiche rien, écris « rien ».", en: "If the console shows nothing, write \"nothing\"." },
      items: [
        { code: "L = [1, 2, 3]\nL.append(4)\nL" },
        { code: "T = [5, 1, \"chat\"]\nT.append(-2)\nT" },
        { code: "L = [1, 3, 5, 2, 7, 2, 9]\nL.remove(2)\nL",
          note: { fr: "Seul le <strong>premier</strong> 2 est supprimé.", en: "Only the <strong>first</strong> 2 is removed." } },
        { code: "L = [1, 3, 5, 2, 7, 2, 9]\nL.pop(2)",
          note: { fr: "<code>pop</code> est une exception : elle renvoie l'objet qu'elle enlève, ici L[2] = 5.", en: "<code>pop</code> is an exception: it returns the object it removes, here L[2] = 5." } },
        { code: "L = [5, 3, 7, 9, 3, 8, 3, 3]\nL.count(3)" },
        { code: "L = [5, 1, 6, 7, 6, 4, 3]\nL.index(7)" },
        { code: "[1, 7, 3, 2, 7, 2, 9].index(7)" },
        { code: "L = [3, 1, 5, 2]\nL.sort()\nL" },
        { code: "L = [3, 1, 2]\nL.sort()",
          note: { fr: "<code>sort</code> trie L mais ne renvoie rien : la console n'affiche rien.", en: "<code>sort</code> sorts L but returns nothing: the console shows nothing." } },
        { code: "L = [3, 1, 2]\nM = L.sort()\nprint(M)",
          note: { fr: "M reçoit ce que renvoie <code>L.sort()</code>, c'est-à-dire rien : <code>None</code>. Piège classique !", en: "M receives what <code>L.sort()</code> returns, which is nothing: <code>None</code>. A classic trap!" } },
        { code: "L = [1, 2, 3]\nL.remove(10)" },
        { code: "\"usly\".upper()" },
        { code: "c = \"elisabeth\"\nc.capitalize()\nc",
          note: { fr: "<code>capitalize()</code> renvoie une nouvelle chaîne, mais on ne l'a gardée nulle part : c n'a pas changé.", en: "<code>capitalize()</code> returns a new string, but it wasn't stored anywhere: c hasn't changed." } }
      ] },
    {
      "t": "fill",
      "id": "l09-f1",
      "title": {
        "fr": "Les termes jusqu'à un seuil",
        "en": "Terms up to a threshold"
      },
      "prompt": {
        "fr": "Complète la fonction <code>termes_jusqua(u0, q, A)</code> qui renvoie la liste des termes de la suite géométrique de premier terme u0 et de raison q (q &gt; 1), tant qu'ils ne dépassent pas A.",
        "en": "Fill in the function <code>termes_jusqua(u0, q, A)</code> that returns the list of the terms of the geometric sequence with first term u0 and ratio q (q &gt; 1), as long as they don't exceed A."
      },
      "template": "def termes_jusqua(u0, q, A):\n    L = []\n    u = u0\n    while {{u <= A}}:\n        L.{{append}}(u)\n        u = {{u * q}}\n    return L",
      "tests": [
        {
          "call": "termes_jusqua(1, 2, 20)",
          "expect": "[1, 2, 4, 8, 16]"
        },
        {
          "call": "termes_jusqua(3, 3, 100)",
          "expect": "[3, 9, 27, 81]"
        },
        {
          "call": "termes_jusqua(50, 2, 10)",
          "expect": "[]"
        }
      ],
      "hints": [
        {
          "fr": "On ajoute le terme courant à la liste tant qu'il ne dépasse pas A, puis on calcule le suivant.",
          "en": "Add the current term to the list as long as it doesn't exceed A, then compute the next one."
        },
        {
          "fr": "La méthode qui ajoute en bout de liste est <code>append</code> ; le terme suivant d'une suite géométrique est <code>u * q</code>.",
          "en": "The method that adds at the end of a list is <code>append</code>; the next term of a geometric sequence is <code>u * q</code>."
        }
      ]
    },
    { t: "code", id: "l09-c1",
      title: { fr: "La liste des carrés", en: "The list of squares" },
      prompt: { fr: "Écris la fonction <code>carres(n)</code> qui renvoie la liste [1, 4, 9, …, n²].",
                en: "Write the function <code>carres(n)</code> that returns the list [1, 4, 9, …, n²]." },
      starter: { fr: "def carres(n):\n    L = []\n    ", en: "def carres(n):\n    L = []\n    " },
      tests: [
        { call: "carres(4)", expect: "[1, 4, 9, 16]" },
        { call: "carres(1)", expect: "[1]" },
        { call: "carres(0)", expect: "[]" }
      ],
      require: ["for", "append", "return"],
      hint: { fr: "<code>for k in range(1, n + 1):</code> puis <code>L.append(k ** 2)</code>. Le <code>return L</code> se place après la boucle.",
              en: "<code>for k in range(1, n + 1):</code> then <code>L.append(k ** 2)</code>. The <code>return L</code> goes after the loop." },
      solution: "def carres(n):\n    L = []\n    for k in range(1, n + 1):\n        L.append(k ** 2)\n    return L" },
    { t: "code", id: "l09-c2",
      title: { fr: "Les termes d'une suite", en: "The terms of a sequence" },
      prompt: { fr: "La suite (u<sub>n</sub>) est définie par u<sub>0</sub> = 3 et u<sub>n+1</sub> = 2u<sub>n</sub> − 1. Écris <code>termes(n)</code> qui renvoie la liste [u<sub>0</sub>, u<sub>1</sub>, …, u<sub>n</sub>].",
                en: "The sequence (u<sub>n</sub>) is defined by u<sub>0</sub> = 3 and u<sub>n+1</sub> = 2u<sub>n</sub> − 1. Write <code>termes(n)</code> that returns the list [u<sub>0</sub>, u<sub>1</sub>, …, u<sub>n</sub>]." },
      starter: { fr: "def termes(n):\n    u = 3\n    L = [u]\n    ", en: "def termes(n):\n    u = 3\n    L = [u]\n    " },
      tests: [
        { call: "termes(4)", expect: "[3, 5, 9, 17, 33]" },
        { call: "termes(0)", expect: "[3]" },
        { call: "termes(1)", expect: "[3, 5]" }
      ],
      require: ["for", "append", "return"],
      hint: { fr: "La liste contient déjà u<sub>0</sub>. Répète n fois : calcule le terme suivant <code>u = 2 * u - 1</code>, puis ajoute-le avec <code>L.append(u)</code>.",
              en: "The list already holds u<sub>0</sub>. Repeat n times: compute the next term <code>u = 2 * u - 1</code>, then add it with <code>L.append(u)</code>." },
      solution: "def termes(n):\n    u = 3\n    L = [u]\n    for k in range(n):\n        u = 2 * u - 1\n        L.append(u)\n    return L" },
    { t: "code", id: "l09-c3",
      title: { fr: "Les diviseurs d'un entier", en: "The divisors of an integer" },
      prompt: { fr: "Écris la fonction <code>diviseurs(n)</code> qui renvoie la liste des diviseurs positifs de l'entier n ≥ 1, dans l'ordre croissant.",
                en: "Write the function <code>diviseurs(n)</code> that returns the list of positive divisors of the integer n ≥ 1, in increasing order." },
      starter: { fr: "def diviseurs(n):\n    ", en: "def diviseurs(n):\n    " },
      tests: [
        { call: "diviseurs(12)", expect: "[1, 2, 3, 4, 6, 12]" },
        { call: "diviseurs(7)", expect: "[1, 7]" },
        { call: "diviseurs(1)", expect: "[1]" },
        { call: "diviseurs(36)", expect: "[1, 2, 3, 4, 6, 9, 12, 18, 36]" }
      ],
      require: ["for", "append", "return"],
      hint: { fr: "Teste chaque entier d de 1 à n : si <code>n % d == 0</code>, d est un diviseur, ajoute-le à la liste.",
              en: "Test each integer d from 1 to n: if <code>n % d == 0</code>, d is a divisor, so add it to the list." },
      solution: "def diviseurs(n):\n    L = []\n    for d in range(1, n + 1):\n        if n % d == 0:\n            L.append(d)\n    return L",
      after: { fr: "Un entier n ≥ 2 est premier quand <code>diviseurs(n)</code> vaut exactement [1, n].",
               en: "An integer n ≥ 2 is prime when <code>diviseurs(n)</code> is exactly [1, n]." } }
  ],
  challenges: [
    { t: "code", id: "l09-d1",
      title: { fr: "Valeurs et effectifs d'une série", en: "Values and counts of a data set" },
      prompt: { fr: "Écris <code>effectifs(L)</code> qui renvoie la liste des paires <code>[valeur, effectif]</code> d'une série statistique L, rangées par valeurs croissantes. Exemple : effectifs([3, 1, 3, 2, 3]) donne [[1, 1], [2, 1], [3, 3]].",
                en: "Write <code>effectifs(L)</code> that returns the list of pairs <code>[value, count]</code> of a data set L, sorted by increasing value. Example: effectifs([3, 1, 3, 2, 3]) gives [[1, 1], [2, 1], [3, 3]]." },
      starter: { fr: "def effectifs(L):\n    valeurs = []\n    ", en: "def effectifs(L):\n    valeurs = []\n    " },
      tests: [
        { call: "effectifs([3, 1, 3, 2, 3])", expect: "[[1, 1], [2, 1], [3, 3]]" },
        { call: "effectifs([5])", expect: "[[5, 1]]" },
        { call: "effectifs([])", expect: "[]" },
        { call: "effectifs([12, 8, 15, 8, 12, 12, 20])", expect: "[[8, 2], [12, 3], [15, 1], [20, 1]]" }
      ],
      require: ["for", "append", "return"],
      hints: [
        { fr: "Travaille en deux temps : d'abord la liste des valeurs différentes, triée ; ensuite, pour chaque valeur, son effectif.", en: "Work in two steps: first the list of distinct values, sorted; then, for each value, its count." },
        { fr: "Pour les valeurs : parcours L et ajoute x à <code>valeurs</code> seulement si <code>x not in valeurs</code>, puis <code>valeurs.sort()</code>. Pour les effectifs, la méthode <code>L.count(v)</code> fait tout le travail.", en: "For the values: go through L and add x to <code>valeurs</code> only if <code>x not in valeurs</code>, then <code>valeurs.sort()</code>. For the counts, the method <code>L.count(v)</code> does all the work." },
        { fr: "Dernière boucle : <code>R = []</code>, puis <code>for v in valeurs:</code> <code>R.append([v, L.count(v)])</code>, et enfin <code>return R</code>.", en: "Last loop: <code>R = []</code>, then <code>for v in valeurs:</code> <code>R.append([v, L.count(v)])</code>, and finally <code>return R</code>." }
      ],
      solution: "def effectifs(L):\n    valeurs = []\n    for x in L:\n        if x not in valeurs:\n            valeurs.append(x)\n    valeurs.sort()\n    R = []\n    for v in valeurs:\n        R.append([v, L.count(v)])\n    return R",
      after: { fr: "C'est exactement le tableau des effectifs que tu fais en statistiques.", en: "That's exactly the frequency table you build in statistics." } },
    { t: "code", id: "l09-d2",
      title: { fr: "Trier par insertion, sans sort", en: "Insertion sort, without sort" },
      prompt: { fr: "1) Écris <code>inserer(L, x)</code> qui reçoit une liste L déjà triée et renvoie une <strong>nouvelle</strong> liste triée contenant aussi x. 2) Écris <code>tri_insertion(L)</code> qui trie une liste en partant d'une liste vide et en y insérant les éléments un par un avec <code>inserer</code>. Interdit : <code>sort</code> et <code>sorted</code>.",
                en: "1) Write <code>inserer(L, x)</code> that takes an already sorted list L and returns a <strong>new</strong> sorted list that also contains x. 2) Write <code>tri_insertion(L)</code> that sorts a list by starting from an empty list and inserting the elements one by one with <code>inserer</code>. Not allowed: <code>sort</code> and <code>sorted</code>." },
      starter: { fr: "def inserer(L, x):\n    R = []\n    place = False\n    \n\ndef tri_insertion(L):\n    R = []\n    ", en: "def inserer(L, x):\n    R = []\n    place = False\n    \n\ndef tri_insertion(L):\n    R = []\n    " },
      tests: [
        { call: "inserer([1, 3, 5], 4)", expect: "[1, 3, 4, 5]" },
        { call: "inserer([1, 3, 5], 0)", expect: "[0, 1, 3, 5]" },
        { call: "inserer([1, 3, 5], 9)", expect: "[1, 3, 5, 9]" },
        { call: "inserer([], 2)", expect: "[2]" },
        { call: "tri_insertion([5, 2, 8, 1, 2])", expect: "[1, 2, 2, 5, 8]" },
        { call: "tri_insertion([])", expect: "[]" }
      ],
      require: ["for", "append", "return"], forbid: ["sort", "sorted"],
      hints: [
        { fr: "Pour <code>inserer</code> : recopie L élément par élément dans R, et glisse x juste avant le premier élément qui est plus grand que lui.", en: "For <code>inserer</code>: copy L element by element into R, and slip x in just before the first element that is bigger than it." },
        { fr: "La variable <code>place</code> retient si x a déjà été placé. Dans la boucle <code>for y in L:</code>, si <code>place == False and x <= y</code>, ajoute x et passe <code>place</code> à True ; puis ajoute y dans tous les cas. Après la boucle, si x n'a jamais été placé, il va à la fin.", en: "The variable <code>place</code> remembers whether x has been placed. In the loop <code>for y in L:</code>, if <code>place == False and x <= y</code>, add x and set <code>place</code> to True; then add y in every case. After the loop, if x was never placed, it goes at the end." },
        { fr: "Pour <code>tri_insertion</code> : <code>for x in L:</code> puis <code>R = inserer(R, x)</code>, et <code>return R</code> après la boucle.", en: "For <code>tri_insertion</code>: <code>for x in L:</code> then <code>R = inserer(R, x)</code>, and <code>return R</code> after the loop." }
      ],
      solution: "def inserer(L, x):\n    R = []\n    place = False\n    for y in L:\n        if place == False and x <= y:\n            R.append(x)\n            place = True\n        R.append(y)\n    if place == False:\n        R.append(x)\n    return R\n\ndef tri_insertion(L):\n    R = []\n    for x in L:\n        R = inserer(R, x)\n    return R",
      after: { fr: "C'est le tri que l'on fait spontanément avec des cartes à jouer dans la main.", en: "It's the sort you naturally do with playing cards in your hand." } }
  ]
});
