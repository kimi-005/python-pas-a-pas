(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l05", num: 5, track: "bases",
  title: { fr: "La boucle « Pour » : for et range", en: "The for loop and range" },
  intro: {
    fr: "Une boucle répète des instructions. La boucle <code>for</code> est une boucle <strong>bornée</strong> : on sait à l'avance combien de fois elle tourne.",
    en: "A loop repeats instructions. The <code>for</code> loop is a <strong>bounded</strong> loop: you know in advance how many times it runs."
  },
  blocks: [
    { t: "h", fr: "La fonction range", en: "The range function" },
    { t: "p",
      fr: "<code>range(4)</code> génère les entiers 0, 1, 2, 3. Le 4 est <strong>exclu</strong>. Pour voir la liste, on compose avec <code>list( )</code>.",
      en: "<code>range(4)</code> generates the integers 0, 1, 2, 3. The 4 is <strong>excluded</strong>. To see the list, wrap it in <code>list( )</code>." },
    { t: "table",
      head: { fr: ["Écriture", "Entiers générés", "Sens"], en: ["Code", "Integers generated", "Meaning"] },
      rows: [
        ["range(4)", "0, 1, 2, 3", { fr: "de 0 à 4 exclu", en: "0 up to 4, excluded" }],
        ["range(2, 5)", "2, 3, 4", { fr: "de 2 à 5 exclu", en: "2 up to 5, excluded" }],
        ["range(2, 15, 3)", "2, 5, 8, 11, 14", { fr: "de 3 en 3", en: "in steps of 3" }],
        ["range(5, 2, -1)", "5, 4, 3", { fr: "à reculons", en: "counting down" }]
      ] },
    { t: "code", code: "print(list(range(4)))\nprint(list(range(2, 5)))\nprint(list(range(2, 15, 3)))" },

    { t: "h", fr: "La boucle for", en: "The for loop" },
    { t: "p",
      fr: "<code>for k in range(4):</code> donne successivement à k les valeurs 0, 1, 2, 3, et exécute le bloc décalé à chaque fois.",
      en: "<code>for k in range(4):</code> gives k the values 0, 1, 2, 3 in turn, and runs the indented block each time." },
    { t: "code", code: "for k in range(4):\n    print(k)" },

    { t: "h", fr: "Exemple : la somme 1 + 2 + … + 100", en: "Example: the sum 1 + 2 + … + 100" },
    { t: "compare",
      algo: { fr: "s ← 0\nPour k allant de 1 à 100 :\n    s ← s + k\nFin Pour\nAfficher s",
              en: "s ← 0\nFor k from 1 to 100:\n    s ← s + k\nEnd For\nDisplay s" },
      code: "s = 0\nfor k in range(1, 101):\n    s = s + k\nprint(s)",
      run: true,
      caption: { fr: "« k allant de 1 à 100 » s'écrit <code>range(1, 101)</code> : la borne de droite est exclue, donc on met 101.",
                 en: "\"k from 1 to 100\" is <code>range(1, 101)</code>: the right bound is excluded, so we write 101." } },
    { t: "note",
      fr: "La variable <code>s</code> est un <strong>accumulateur</strong> : elle part de 0 et on lui ajoute un terme à chaque tour. Pour un produit, on part de 1.",
      en: "The variable <code>s</code> is an <strong>accumulator</strong>: it starts at 0 and gets one term added on each pass. For a product, start at 1." }
  ],
  exercises: [
    { t: "predict", id: "l05-p1",
      title: { fr: "Que renvoie range ?", en: "What does range give?" },
      hint: { fr: "Écris une liste comme Python : <code>[0, 1, 2]</code>.", en: "Write a list the way Python does: <code>[0, 1, 2]</code>." },
      items: [
        { code: "list(range(4))" },
        { code: "list(range(0, 4))" },
        { code: "list(range(2, 5))" },
        { code: "list(range(2, 15, 3))" },
        { code: "list(range(5, 2, -1))" },
        { code: "list(range(5, 2))",
          note: { fr: "On part de 5 et on avance vers 2 en montant : impossible. La liste est vide.",
                  en: "Starting at 5 and counting up to 2 is impossible, so the list is empty." } },
        { code: "list(range(3.5))",
          note: { fr: "<code>range</code> n'accepte que des entiers.", en: "<code>range</code> only accepts integers." } }
      ] },
    { t: "predict", id: "l05-p2",
      title: { fr: "Fais tourner la boucle à la main", en: "Run the loop by hand" },
      items: [
        { code: "a = 2\nfor k in range(1, 5):\n    a = a + 2\na" },
        { code: "a = 2\nfor k in range(5):\n    a = a + 2\na" },
        { code: "s = 0\nfor k in range(4):\n    s = s + k\ns" },
        { code: "p = 1\nfor k in range(1, 5):\n    p = p * k\np" },
        { code: "for k in range(3):\n    print(k * k)",
          note: { fr: "Plusieurs lignes affichées : tu peux les séparer par des espaces dans ta réponse.",
                  en: "Several lines printed: you can separate them with spaces in your answer." } }
      ] },
    {
      "t": "fill",
      "id": "l05-f1",
      "title": {
        "fr": "La somme des premiers nombres impairs",
        "en": "The sum of the first odd numbers"
      },
      "prompt": {
        "fr": "La variable <code>n</code> est déjà définie (n ≥ 1). Complète le programme pour qu'il affiche S = 1 + 3 + 5 + … + (2n − 1), la somme des n premiers nombres impairs.",
        "en": "The variable <code>n</code> is already defined (n ≥ 1). Fill in the program so that it prints S = 1 + 3 + 5 + … + (2n − 1), the sum of the first n odd numbers."
      },
      "template": {
        "fr": "# n est déjà définie\nS = {{0}}\nfor k in range({{1}}, {{n + 1}}):\n    S = S + {{2 * k - 1}}\nprint(S)",
        "en": "# n is already defined\nS = {{0}}\nfor k in range({{1}}, {{n + 1}}):\n    S = S + {{2 * k - 1}}\nprint(S)"
      },
      "tests": [
        {
          "setup": "n = 1",
          "stdout": "1"
        },
        {
          "setup": "n = 4",
          "stdout": "16"
        },
        {
          "setup": "n = 10",
          "stdout": "100"
        }
      ],
      "hints": [
        {
          "fr": "Un accumulateur pour une somme part de 0. Pour k allant de 1 à n, le k-ième nombre impair est 2k − 1.",
          "en": "An accumulator for a sum starts at 0. For k from 1 to n, the k-th odd number is 2k − 1."
        },
        {
          "fr": "« k allant de 1 à n » s'écrit <code>range(1, n + 1)</code>.",
          "en": "\"k from 1 to n\" is written <code>range(1, n + 1)</code>."
        }
      ],
      "after": {
        "fr": "On trouve toujours n² : la somme des n premiers nombres impairs est un carré parfait.",
        "en": "You always get n²: the sum of the first n odd numbers is a perfect square."
      }
    },
    { t: "code", id: "l05-c1",
      title: { fr: "La somme 1 + 2 + … + 100", en: "The sum 1 + 2 + … + 100" },
      prompt: { fr: "Avec une boucle <code>for</code>, calcule et affiche 1 + 2 + 3 + … + 100.",
                en: "Using a <code>for</code> loop, compute and print 1 + 2 + 3 + … + 100." },
      starter: { fr: "s = 0\n", en: "s = 0\n" },
      tests: [ { stdout: "5050", label: { fr: "affiche la somme", en: "prints the sum" } } ],
      require: ["for"],
      hint: { fr: "<code>for k in range(1, 101):</code> puis, dans le bloc, <code>s = s + k</code>. Le <code>print</code> se place après la boucle, sans décalage.",
              en: "<code>for k in range(1, 101):</code> then, inside the block, <code>s = s + k</code>. The <code>print</code> goes after the loop, not indented." },
      solution: "s = 0\nfor k in range(1, 101):\n    s = s + k\nprint(s)" },
    { t: "code", id: "l05-c2",
      title: { fr: "Factorielle", en: "Factorial" },
      prompt: { fr: "La variable <code>n</code> est définie. Affiche n! = 1 × 2 × 3 × … × n. Par convention, 0! = 1.",
                en: "The variable <code>n</code> is defined. Print n! = 1 × 2 × 3 × … × n. By convention, 0! = 1." },
      starter: { fr: "# n est déjà définie\n", en: "# n is already defined\n" },
      tests: [
        { setup: "n = 5", stdout: "120" },
        { setup: "n = 1", stdout: "1" },
        { setup: "n = 10", stdout: "3628800" },
        { setup: "n = 0", stdout: "1" }
      ],
      require: ["for"],
      hint: { fr: "Un accumulateur pour un produit part de 1 : <code>p = 1</code>, puis <code>p = p * k</code> pour k allant de 1 à n.",
              en: "An accumulator for a product starts at 1: <code>p = 1</code>, then <code>p = p * k</code> for k from 1 to n." },
      solution: "p = 1\nfor k in range(1, n + 1):\n    p = p * k\nprint(p)" },
    { t: "code", id: "l05-c3",
      title: { fr: "Terme d'une suite", en: "Term of a sequence" },
      prompt: { fr: "La suite (u<sub>n</sub>) est définie par u<sub>0</sub> = 1 et u<sub>n+1</sub> = 2u<sub>n</sub> + 1. La variable <code>n</code> est définie : affiche u<sub>n</sub>.",
                en: "The sequence (u<sub>n</sub>) is defined by u<sub>0</sub> = 1 and u<sub>n+1</sub> = 2u<sub>n</sub> + 1. The variable <code>n</code> is defined: print u<sub>n</sub>." },
      starter: { fr: "# n est déjà définie\nu = 1\n", en: "# n is already defined\nu = 1\n" },
      tests: [
        { setup: "n = 0", stdout: "1" },
        { setup: "n = 3", stdout: "15" },
        { setup: "n = 10", stdout: "2047" }
      ],
      require: ["for"],
      hint: { fr: "Pour passer de u<sub>0</sub> à u<sub>n</sub>, il faut appliquer la relation n fois : <code>for k in range(n):</code> puis <code>u = 2 * u + 1</code>.",
              en: "To go from u<sub>0</sub> to u<sub>n</sub>, apply the rule n times: <code>for k in range(n):</code> then <code>u = 2 * u + 1</code>." },
      solution: "u = 1\nfor k in range(n):\n    u = 2 * u + 1\nprint(u)" }
  ],
  challenges: [
    {
      "t": "code",
      "id": "l05-d1",
      "title": {
        "fr": "Nombre parfait",
        "en": "Perfect number"
      },
      "prompt": {
        "fr": "Un entier n est <strong>parfait</strong> s'il est égal à la somme de ses diviseurs autres que lui-même. Par exemple, 6 = 1 + 2 + 3. La variable <code>n</code> (n ≥ 1) est définie : affiche <code>True</code> si n est parfait, <code>False</code> sinon.",
        "en": "An integer n is <strong>perfect</strong> if it equals the sum of its divisors other than itself. For example, 6 = 1 + 2 + 3. The variable <code>n</code> (n ≥ 1) is defined: print <code>True</code> if n is perfect, <code>False</code> otherwise."
      },
      "starter": {
        "fr": "# n est déjà définie\ns = 0\n",
        "en": "# n is already defined\ns = 0\n"
      },
      "tests": [
        {
          "setup": "n = 6",
          "stdout": "True"
        },
        {
          "setup": "n = 28",
          "stdout": "True"
        },
        {
          "setup": "n = 12",
          "stdout": "False"
        },
        {
          "setup": "n = 496",
          "stdout": "True"
        },
        {
          "setup": "n = 1",
          "stdout": "False"
        },
        {
          "setup": "n = 27",
          "stdout": "False"
        }
      ],
      "require": [
        "for",
        "%"
      ],
      "hints": [
        {
          "fr": "Calcule d'abord la somme s des diviseurs de n strictement plus petits que n.",
          "en": "First compute the sum s of the divisors of n that are strictly smaller than n."
        },
        {
          "fr": "Une boucle <code>for d in range(1, n):</code> et un test <code>if n % d == 0:</code> pour ajouter d à s.",
          "en": "A loop <code>for d in range(1, n):</code> and a test <code>if n % d == 0:</code> to add d to s."
        },
        {
          "fr": "Après la boucle, sans décalage, affiche directement le test <code>s == n</code>.",
          "en": "After the loop, not indented, print the test <code>s == n</code> directly."
        }
      ],
      "solution": "s = 0\nfor d in range(1, n):\n    if n % d == 0:\n        s = s + d\nprint(s == n)",
      "after": {
        "fr": "Les nombres parfaits sont rares : 6, 28, 496, 8 128… Personne ne sait s'il en existe un impair !",
        "en": "Perfect numbers are rare: 6, 28, 496, 8,128… Nobody knows whether an odd one exists!"
      }
    },
    {
      "t": "code",
      "id": "l05-d2",
      "title": {
        "fr": "La suite de Fibonacci",
        "en": "The Fibonacci sequence"
      },
      "prompt": {
        "fr": "La suite de Fibonacci est définie par F<sub>0</sub> = 0, F<sub>1</sub> = 1 et F<sub>n+2</sub> = F<sub>n+1</sub> + F<sub>n</sub> : chaque terme est la somme des deux précédents (0, 1, 1, 2, 3, 5, 8…). La variable <code>n</code> est définie : affiche F<sub>n</sub>.",
        "en": "The Fibonacci sequence is defined by F<sub>0</sub> = 0, F<sub>1</sub> = 1 and F<sub>n+2</sub> = F<sub>n+1</sub> + F<sub>n</sub>: each term is the sum of the two before it (0, 1, 1, 2, 3, 5, 8…). The variable <code>n</code> is defined: print F<sub>n</sub>."
      },
      "starter": {
        "fr": "# n est déjà définie\na = 0\nb = 1\n",
        "en": "# n is already defined\na = 0\nb = 1\n"
      },
      "tests": [
        {
          "setup": "n = 0",
          "stdout": "0"
        },
        {
          "setup": "n = 1",
          "stdout": "1"
        },
        {
          "setup": "n = 2",
          "stdout": "1"
        },
        {
          "setup": "n = 10",
          "stdout": "55"
        },
        {
          "setup": "n = 30",
          "stdout": "832040"
        }
      ],
      "require": [
        "for"
      ],
      "hints": [
        {
          "fr": "Garde en mémoire deux termes consécutifs : a = F<sub>k</sub> et b = F<sub>k+1</sub>. Au départ, a = 0 et b = 1.",
          "en": "Keep two consecutive terms in memory: a = F<sub>k</sub> and b = F<sub>k+1</sub>. At the start, a = 0 and b = 1."
        },
        {
          "fr": "À chaque tour, on avance d'un cran : le nouveau a est l'ancien b, et le nouveau b est l'ancien a + b. Attention à ne pas écraser une valeur dont tu as encore besoin, comme pour l'échange de la leçon 2.",
          "en": "On each pass, move one step forward: the new a is the old b, and the new b is the old a + b. Careful not to overwrite a value you still need, as in the swap from lesson 2."
        },
        {
          "fr": "<code>for k in range(n):</code> puis <code>c = a + b</code>, <code>a = b</code>, <code>b = c</code>. Après n tours, a vaut F<sub>n</sub>.",
          "en": "<code>for k in range(n):</code> then <code>c = a + b</code>, <code>a = b</code>, <code>b = c</code>. After n passes, a is F<sub>n</sub>."
        }
      ],
      "solution": "a = 0\nb = 1\nfor k in range(n):\n    c = a + b\n    a = b\n    b = c\nprint(a)"
    }
  ]
});
