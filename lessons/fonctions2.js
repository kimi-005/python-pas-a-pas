(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "fonctions2", num: 13, track: "bases",
  title: { fr: "Fonctions avancées et boucles imbriquées", en: "More on functions, and nested loops" },
  intro: {
    fr: "Des fonctions qui renvoient plusieurs résultats, des fonctions qui répondent vrai ou faux, et des boucles à l'intérieur d'autres boucles.",
    en: "Functions that return several results, functions that answer true or false, and loops inside other loops."
  },
  blocks: [
    { t: "h", fr: "Renvoyer plusieurs valeurs", en: "Returning several values" },
    { t: "p",
      fr: "Comme dans le programme <code>prog2</code> de ton cours (<code>return a, b</code>), une fonction peut renvoyer plusieurs valeurs séparées par des virgules. Python les regroupe dans un <strong>tuple</strong>, qu'on peut « déballer » dans plusieurs variables.",
      en: "Like <code>prog2</code> in your course (<code>return a, b</code>), a function can return several values separated by commas. Python groups them in a <strong>tuple</strong>, which you can unpack into several variables." },
    { t: "code", code: "def prog2(a):\n    b = 0\n    while a < 20:\n        a = 1.5 * a\n        b = b + 1\n    return a, b\n\nprog2(6)\nvaleur, tours = prog2(6)\nprint(\"valeur :\", valeur)\nprint(\"tours :\", tours)" },

    { t: "h", fr: "Des fonctions qui répondent vrai ou faux", en: "Functions that answer true or false" },
    { t: "p",
      fr: "Une fonction peut renvoyer un booléen. On l'utilise alors directement dans un <code>if</code>. Le mot <code>not</code> inverse un booléen : <code>not True</code> vaut <code>False</code>.",
      en: "A function can return a boolean. You then use it directly in an <code>if</code>. The word <code>not</code> flips a boolean: <code>not True</code> is <code>False</code>." },
    { t: "code", code: "def est_pair(n):\n    return n % 2 == 0\n\nfor n in range(5):\n    if est_pair(n):\n        print(n, \"est pair\")\n    if not est_pair(n):\n        print(n, \"est impair\")" },
    { t: "note",
      fr: "<strong>Sortir tôt :</strong> un <code>return</code> placé dans une boucle arrête tout de suite la fonction. C'est pratique pour répondre <code>False</code> dès qu'on trouve un contre-exemple.",
      en: "<strong>Leaving early:</strong> a <code>return</code> inside a loop stops the function immediately. That's handy to answer <code>False</code> as soon as you find a counterexample." },
    { t: "code", code: "def tous_positifs(L):\n    for x in L:\n        if x < 0:\n            return False\n    return True\n\ntous_positifs([3, 8, 1])\ntous_positifs([3, -8, 1])" },

    { t: "h", fr: "Boucles imbriquées", en: "Nested loops" },
    { t: "p",
      fr: "Une boucle peut en contenir une autre. Pour chaque tour de la boucle extérieure, la boucle intérieure fait tous ses tours. Exemple : les 36 résultats possibles de deux dés.",
      en: "A loop can contain another one. For each pass of the outer loop, the inner loop does all its passes. Example: the 36 possible outcomes of two dice." },
    { t: "code", code: "c = 0\nfor i in range(1, 7):\n    for j in range(1, 7):\n        if i + j == 7:\n            c = c + 1\nprint(c, \"résultats sur 36 donnent une somme de 7\")\nprint(\"probabilité :\", c / 36)" },
    { t: "p",
      fr: "On retrouve exactement la probabilité 1/6 que la simulation de la leçon 14 approche.",
      en: "This gives exactly the probability 1/6 that the simulation in lesson 14 approximates." }
  ],
  exercises: [
    { t: "predict", id: "fonctions2-p1",
      title: { fr: "Tuples, booléens, boucles imbriquées", en: "Tuples, booleans, nested loops" },
      items: [
        { code: "def f(x):\n    return x, x ** 2\n\nf(3)" },
        { code: "def f(x):\n    return x, x ** 2\n\na, b = f(4)\nb" },
        { code: "not (3 < 4)" },
        { code: "def g(n):\n    for k in range(n):\n        if k * k > 10:\n            return k\n    return -1\n\ng(10)",
          note: { fr: "Dès que k² dépasse 10 (k = 4), le <code>return</code> arrête la fonction.", en: "As soon as k² exceeds 10 (k = 4), the <code>return</code> stops the function." } },
        { code: "def g(n):\n    for k in range(n):\n        if k * k > 10:\n            return k\n    return -1\n\ng(3)" },
        { code: "c = 0\nfor i in range(3):\n    for j in range(4):\n        c = c + 1\nc" },
        { code: "for i in range(1, 3):\n    for j in range(1, 3):\n        print(i * j)" }
      ] },
    {
      "t": "fill",
      "id": "fonctions2-f1",
      "title": {
        "fr": "Somme de deux carrés",
        "en": "Sum of two squares"
      },
      "prompt": {
        "fr": "Complète la fonction <code>decomposition(n)</code> qui cherche deux entiers a ≤ b tels que a² + b² = n. Elle renvoie le premier couple trouvé <code>(a, b)</code>, ou <code>None</code> s'il n'y en a pas.",
        "en": "Fill in the function <code>decomposition(n)</code> that looks for two integers a ≤ b such that a² + b² = n. It returns the first pair found <code>(a, b)</code>, or <code>None</code> if there isn't one."
      },
      "template": "def decomposition(n):\n    for a in range(n + 1):\n        for b in range({{a}}, n + 1):\n            if {{a ** 2 + b ** 2 == n}}:\n                return {{a, b}}\n    return {{None}}",
      "tests": [
        {
          "call": "decomposition(5)",
          "expect": "(1, 2)"
        },
        {
          "call": "decomposition(25)",
          "expect": "(0, 5)"
        },
        {
          "call": "decomposition(50)",
          "expect": "(1, 7)"
        },
        {
          "call": "decomposition(3)",
          "expect": "None"
        }
      ],
      "hints": [
        {
          "fr": "Pour avoir a ≤ b, la boucle sur b commence à a. Dès qu'on trouve un couple qui marche, on le renvoie.",
          "en": "To get a ≤ b, the loop over b starts at a. As soon as a pair works, return it."
        },
        {
          "fr": "Le test est <code>a ** 2 + b ** 2 == n</code> ; on renvoie le tuple <code>a, b</code>, et <code>None</code> si les deux boucles finissent sans succès.",
          "en": "The test is <code>a ** 2 + b ** 2 == n</code>; return the tuple <code>a, b</code>, and <code>None</code> if both loops end without success."
        }
      ]
    },
    { t: "code", id: "fonctions2-c1",
      title: { fr: "Division euclidienne, sans // ni %", en: "Euclidean division, without // or %" },
      prompt: { fr: "Écris <code>division(a, b)</code> qui renvoie le quotient et le reste de la division euclidienne de a ≥ 0 par b &gt; 0, <strong>sans</strong> <code>//</code> ni <code>%</code> : on retire b de a tant que c'est possible, en comptant.",
                en: "Write <code>division(a, b)</code> that returns the quotient and the remainder of the Euclidean division of a ≥ 0 by b &gt; 0, <strong>without</strong> <code>//</code> or <code>%</code>: subtract b from a as long as you can, counting." },
      starter: { fr: "def division(a, b):\n    q = 0\n    ", en: "def division(a, b):\n    q = 0\n    " },
      tests: [
        { call: "division(23, 7)", expect: "(3, 2)" },
        { call: "division(6, 3)", expect: "(2, 0)" },
        { call: "division(5, 9)", expect: "(0, 5)" }
      ],
      require: ["while", "return"], forbid: ["//", "%", "divmod"],
      hint: { fr: "<code>while a >= b:</code> retire b de a et ajoute 1 à q. Après la boucle, a est le reste : <code>return q, a</code>.",
              en: "<code>while a >= b:</code> subtract b from a and add 1 to q. After the loop, a is the remainder: <code>return q, a</code>." },
      solution: "def division(a, b):\n    q = 0\n    while a >= b:\n        a = a - b\n        q = q + 1\n    return q, a" },
    { t: "code", id: "fonctions2-c2",
      title: { fr: "Est-il premier ?", en: "Is it prime?" },
      prompt: { fr: "Écris <code>est_premier(n)</code> qui renvoie <code>True</code> si l'entier n est premier, <code>False</code> sinon. Rappel : n est premier s'il a exactement deux diviseurs, 1 et lui-même (donc 0 et 1 ne sont pas premiers).",
                en: "Write <code>est_premier(n)</code> that returns <code>True</code> if the integer n is prime, <code>False</code> otherwise. Reminder: n is prime if it has exactly two divisors, 1 and itself (so 0 and 1 aren't prime)." },
      starter: { fr: "def est_premier(n):\n    if n < 2:\n        return False\n    ", en: "def est_premier(n):\n    if n < 2:\n        return False\n    " },
      tests: [
        { call: "est_premier(2)", expect: "True" },
        { call: "est_premier(17)", expect: "True" },
        { call: "est_premier(21)", expect: "False" },
        { call: "est_premier(1)", expect: "False" },
        { call: "est_premier(97)", expect: "True" },
        { call: "est_premier(91)", expect: "False" }
      ],
      require: ["for", "return"],
      hint: { fr: "Teste chaque d de 2 à n − 1 : si d divise n, <code>return False</code> tout de suite. Si la boucle se termine sans trouver de diviseur, <code>return True</code>.",
              en: "Test each d from 2 to n − 1: if d divides n, <code>return False</code> straight away. If the loop ends without finding a divisor, <code>return True</code>." },
      solution: "def est_premier(n):\n    if n < 2:\n        return False\n    for d in range(2, n):\n        if n % d == 0:\n            return False\n    return True" },
    { t: "code", id: "fonctions2-c3",
      title: { fr: "Deux dés : combien de façons ?", en: "Two dice: how many ways?" },
      prompt: { fr: "Écris <code>nb_couples(s)</code> qui renvoie le nombre de résultats (i ; j) de deux dés tels que i + j = s, avec deux boucles imbriquées.",
                en: "Write <code>nb_couples(s)</code> that returns the number of outcomes (i ; j) of two dice such that i + j = s, using two nested loops." },
      starter: { fr: "def nb_couples(s):\n    c = 0\n    ", en: "def nb_couples(s):\n    c = 0\n    " },
      tests: [
        { call: "nb_couples(7)", expect: "6" },
        { call: "nb_couples(2)", expect: "1" },
        { call: "nb_couples(12)", expect: "1" },
        { call: "nb_couples(9)", expect: "4" },
        { call: "nb_couples(13)", expect: "0" }
      ],
      require: ["for", "return"],
      hint: { fr: "Reprends l'exemple de la leçon, mais avec s à la place de 7.", en: "Reuse the lesson's example, with s instead of 7." },
      solution: "def nb_couples(s):\n    c = 0\n    for i in range(1, 7):\n        for j in range(1, 7):\n            if i + j == s:\n                c = c + 1\n    return c" },
    { t: "code", id: "fonctions2-c4",
      title: { fr: "Minimum et maximum en un seul passage", en: "Minimum and maximum in one pass" },
      prompt: { fr: "Écris <code>min_max(L)</code> qui renvoie le plus petit et le plus grand élément d'une liste non vide, en un seul parcours, sans <code>min</code>, <code>max</code> ni <code>sorted</code>.",
                en: "Write <code>min_max(L)</code> that returns the smallest and largest element of a non-empty list, in a single pass, without <code>min</code>, <code>max</code> or <code>sorted</code>." },
      starter: { fr: "def min_max(L):\n    petit = L[0]\n    grand = L[0]\n    ", en: "def min_max(L):\n    petit = L[0]\n    grand = L[0]\n    " },
      tests: [
        { call: "min_max([3, 1, 5])", expect: "(1, 5)" },
        { call: "min_max([2])", expect: "(2, 2)" },
        { call: "min_max([-4, 7, 0, 7, -9])", expect: "(-9, 7)" }
      ],
      require: ["for", "return"], forbid: ["min", "max", "sorted", "sort"],
      hint: { fr: "Dans la boucle, deux tests séparés : si x &lt; petit, mets à jour petit ; si x &gt; grand, mets à jour grand. Puis <code>return petit, grand</code>.",
              en: "In the loop, two separate tests: if x &lt; petit, update petit; if x &gt; grand, update grand. Then <code>return petit, grand</code>." },
      solution: "def min_max(L):\n    petit = L[0]\n    grand = L[0]\n    for x in L:\n        if x < petit:\n            petit = x\n        if x > grand:\n            grand = x\n    return petit, grand" }
  ],
  challenges: [
    { t: "code", id: "fonctions2-d1",
      title: { fr: "Nombres parfaits et nombres amis", en: "Perfect and amicable numbers" },
      prompt: { fr: "Les diviseurs stricts de n sont ses diviseurs positifs autres que n lui-même. 1) Écris <code>somme_diviseurs(n)</code> qui renvoie leur somme. 2) Un nombre est <strong>parfait</strong> s'il est égal à cette somme (6 = 1 + 2 + 3) : écris <code>parfaits(N)</code> qui renvoie la liste des nombres parfaits de 1 à N. 3) Deux nombres différents a et b sont <strong>amis</strong> si la somme des diviseurs stricts de chacun vaut l'autre : écris <code>amis(a, b)</code> qui renvoie <code>True</code> ou <code>False</code>.",
                en: "The proper divisors of n are its positive divisors other than n itself. 1) Write <code>somme_diviseurs(n)</code> that returns their sum. 2) A number is <strong>perfect</strong> if it equals that sum (6 = 1 + 2 + 3): write <code>parfaits(N)</code> that returns the list of perfect numbers from 1 to N. 3) Two different numbers a and b are <strong>amicable</strong> if the sum of the proper divisors of each one equals the other: write <code>amis(a, b)</code> that returns <code>True</code> or <code>False</code>." },
      starter: { fr: "def somme_diviseurs(n):\n    s = 0\n    \n\ndef parfaits(N):\n    \n\ndef amis(a, b):\n    ", en: "def somme_diviseurs(n):\n    s = 0\n    \n\ndef parfaits(N):\n    \n\ndef amis(a, b):\n    " },
      tests: [
        { call: "somme_diviseurs(12)", expect: "16" },
        { call: "somme_diviseurs(1)", expect: "0" },
        { call: "somme_diviseurs(28)", expect: "28" },
        { call: "parfaits(500)", expect: "[6, 28, 496]" },
        { call: "amis(220, 284)", expect: "True" },
        { call: "amis(220, 285)", expect: "False" },
        { call: "amis(6, 6)", expect: "False", desc: { fr: "amis(6, 6) renvoie False : les deux nombres doivent être différents", en: "amis(6, 6) returns False: the two numbers must be different" } }
      ],
      require: ["for", "return"],
      hints: [
        { fr: "Les trois fonctions s'appuient les unes sur les autres : écris d'abord <code>somme_diviseurs</code>, puis utilise-la dans les deux autres.", en: "The three functions build on each other: write <code>somme_diviseurs</code> first, then use it in the other two." },
        { fr: "<code>somme_diviseurs</code> : ajoute à s chaque d de 1 à n − 1 qui divise n. <code>parfaits</code> : une liste en compréhension avec la condition <code>somme_diviseurs(n) == n</code>.", en: "<code>somme_diviseurs</code>: add to s every d from 1 to n − 1 that divides n. <code>parfaits</code>: a list comprehension with the condition <code>somme_diviseurs(n) == n</code>." },
        { fr: "<code>amis</code> renvoie directement un test : <code>a != b and somme_diviseurs(a) == b and somme_diviseurs(b) == a</code>.", en: "<code>amis</code> returns a test directly: <code>a != b and somme_diviseurs(a) == b and somme_diviseurs(b) == a</code>." }
      ],
      solution: "def somme_diviseurs(n):\n    s = 0\n    for d in range(1, n):\n        if n % d == 0:\n            s = s + d\n    return s\n\ndef parfaits(N):\n    return [n for n in range(1, N + 1) if somme_diviseurs(n) == n]\n\ndef amis(a, b):\n    return a != b and somme_diviseurs(a) == b and somme_diviseurs(b) == a",
      after: { fr: "Le nombre parfait suivant est 8 128. On ne sait toujours pas s'il existe un nombre parfait impair !", en: "The next perfect number is 8,128. Nobody knows yet whether an odd perfect number exists!" } },
    { t: "code", id: "fonctions2-d2",
      title: { fr: "Triplets pythagoriciens", en: "Pythagorean triples" },
      prompt: { fr: "Un triplet pythagoricien est un triplet d'entiers (a, b, c) avec a &lt; b &lt; c et a² + b² = c² (comme (3, 4, 5)). 1) Écris <code>triplets(N)</code> qui renvoie la liste de tous les triplets avec c ≤ N, sous forme de tuples, rangés par a puis b croissants. 2) Un triplet est <strong>primitif</strong> si a et b n'ont pas d'autre diviseur commun que 1 : écris <code>primitifs(N)</code> en utilisant <code>gcd</code> du module math.",
                en: "A Pythagorean triple is a triple of integers (a, b, c) with a &lt; b &lt; c and a² + b² = c² (like (3, 4, 5)). 1) Write <code>triplets(N)</code> that returns the list of all triples with c ≤ N, as tuples, sorted by increasing a then b. 2) A triple is <strong>primitive</strong> if a and b have no common divisor other than 1: write <code>primitifs(N)</code> using <code>gcd</code> from the math module." },
      starter: { fr: "from math import gcd\n\ndef triplets(N):\n    R = []\n    \n\ndef primitifs(N):\n    ", en: "from math import gcd\n\ndef triplets(N):\n    R = []\n    \n\ndef primitifs(N):\n    " },
      tests: [
        { call: "triplets(20)", expect: "[(3, 4, 5), (5, 12, 13), (6, 8, 10), (8, 15, 17), (9, 12, 15), (12, 16, 20)]" },
        { call: "triplets(4)", expect: "[]" },
        { call: "len(triplets(50))", expect: "20" },
        { call: "primitifs(30)", expect: "[(3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), (20, 21, 29)]" }
      ],
      require: ["for", "gcd", "return"],
      hints: [
        { fr: "Essaie toutes les possibilités avec trois boucles imbriquées : a, puis b plus grand que a, puis c plus grand que b, tous jusqu'à N.", en: "Try every possibility with three nested loops: a, then b bigger than a, then c bigger than b, all up to N." },
        { fr: "<code>for a in range(1, N + 1):</code>, puis <code>for b in range(a + 1, N + 1):</code>, puis <code>for c in range(b + 1, N + 1):</code>. Si <code>a ** 2 + b ** 2 == c ** 2</code>, ajoute le tuple <code>(a, b, c)</code> à R.", en: "<code>for a in range(1, N + 1):</code>, then <code>for b in range(a + 1, N + 1):</code>, then <code>for c in range(b + 1, N + 1):</code>. If <code>a ** 2 + b ** 2 == c ** 2</code>, add the tuple <code>(a, b, c)</code> to R." },
        { fr: "Pour <code>primitifs</code>, filtre la liste précédente en compréhension : <code>[t for t in triplets(N) if gcd(t[0], t[1]) == 1]</code>.", en: "For <code>primitifs</code>, filter the previous list with a comprehension: <code>[t for t in triplets(N) if gcd(t[0], t[1]) == 1]</code>." }
      ],
      solution: "from math import gcd\n\ndef triplets(N):\n    R = []\n    for a in range(1, N + 1):\n        for b in range(a + 1, N + 1):\n            for c in range(b + 1, N + 1):\n                if a ** 2 + b ** 2 == c ** 2:\n                    R.append((a, b, c))\n    return R\n\ndef primitifs(N):\n    return [t for t in triplets(N) if gcd(t[0], t[1]) == 1]",
      after: { fr: "Tous les autres triplets sont des multiples des primitifs : (6, 8, 10) = 2 × (3, 4, 5).", en: "All the other triples are multiples of the primitive ones: (6, 8, 10) = 2 × (3, 4, 5)." } }
  ]
});
