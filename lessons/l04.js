(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l04", num: 4, track: "bases",
  title: { fr: "Si… alors… sinon", en: "If… then… else" },
  intro: {
    fr: "L'instruction conditionnelle permet à un programme de faire des choix : il exécute un bloc d'instructions seulement si un test est vrai.",
    en: "A conditional statement lets a program make choices: it runs a block of instructions only if a test is true."
  },
  blocks: [
    { t: "h", fr: "De l'algorithme à Python", en: "From algorithm to Python" },
    { t: "compare",
      algo: { fr: "a ← 15\nSi a < 10 :\n    a ← a + 1\nSinon :\n    a ← a − 1\nAfficher a",
              en: "a ← 15\nIf a < 10:\n    a ← a + 1\nElse:\n    a ← a − 1\nDisplay a" },
      code: "a = 15\nif a < 10:\n    a = a + 1\nelse:\n    a = a - 1\nprint(a)",
      run: true,
      caption: { fr: "« Si » devient <code>if</code>, « Sinon » devient <code>else</code>. Le « alors » est codé par la tabulation.",
                 en: "\"If\" becomes <code>if</code>, \"Else\" becomes <code>else</code>. The \"then\" is written with indentation." } },
    { t: "note",
      fr: "<strong>Quand utiliser <code>print</code> ?</strong> Dans un bloc (après <code>if</code>, et plus tard <code>for</code> ou <code>while</code>), la valeur d'une ligne ne s'affiche pas toute seule : pour afficher quelque chose, on écrit <code>print(...)</code>. Mais le plus souvent, on range le résultat dans une variable et on écrit son nom à la fin du programme. Dans une fonction (leçon 7), on le renvoie avec <code>return</code>. <code>print</code> sert surtout pour les messages destinés à l'utilisateur.",
      en: "<strong>When to use <code>print</code>?</strong> Inside a block (after <code>if</code>, and later <code>for</code> or <code>while</code>), the value of a line is not shown on its own: to display something, write <code>print(...)</code>. But most of the time, store the result in a variable and write its name at the end of the program. In a function (lesson 7), return it with <code>return</code>. <code>print</code> is mainly for messages meant for the user." },
    { t: "note",
      fr: "<strong>Le rôle des deux points.</strong> Les deux points <code>:</code> ouvrent un bloc d'instructions. Toutes les lignes du bloc sont décalées de 4 espaces (touche Tab). Quand le décalage s'arrête, le bloc est fini.",
      en: "<strong>The role of the colon.</strong> The colon <code>:</code> opens a block of instructions. Every line in the block is shifted by 4 spaces (Tab key). When the shift stops, the block ends." },

    { t: "h", fr: "Plusieurs cas : elif", en: "Several cases: elif" },
    { t: "p",
      fr: "<code>elif</code> est la contraction de <code>else</code> et <code>if</code>. Python teste les conditions dans l'ordre et exécute <strong>seulement le premier bloc</strong> dont la condition est vraie.",
      en: "<code>elif</code> is short for <code>else</code> + <code>if</code>. Python checks the conditions in order and runs <strong>only the first block</strong> whose condition is true." },
    { t: "code", code: "note = 13\nif note >= 16:\n    mention = \"Très bien\"\nelif note >= 14:\n    mention = \"Bien\"\nelif note >= 12:\n    mention = \"Assez bien\"\nelif note >= 10:\n    mention = \"Passable\"\nelse:\n    mention = \"Recalé\"\nmention" },
    { t: "p",
      fr: "Change la valeur de <code>note</code> et relance le programme pour voir chaque cas.",
      en: "Change the value of <code>note</code> and run the program again to see each case." }
  ],
  exercises: [
    { t: "predict", id: "l04-p1",
      title: { fr: "Que va afficher la console ?", en: "What will the console show?" },
      items: [
        { code: "a = 15\nif a < 10:\n    a = a + 1\nelse:\n    a = a - 1\na" },
        { code: "a = 5\nif a < 10:\n    a = a + 1\nelse:\n    a = a - 1\na" },
        { code: "x = 7\nif x % 2 == 0:\n    print(\"pair\")\nelse:\n    print(\"impair\")" },
        { code: "x = 3\nif x > 5:\n    print(\"grand\")\nprint(\"fin\")" },
        { code: "n = 25\nif n > 10:\n    n = n - 10\nelif n > 20:\n    n = n - 20\nn",
          note: { fr: "25 > 10 est vrai, donc seul le premier bloc s'exécute. Le <code>elif</code> n'est même pas testé.",
                  en: "25 > 10 is true, so only the first block runs. The <code>elif</code> isn't even checked." } },
        { code: "n = 25\nif n > 10:\n    n = n - 10\nif n > 10:\n    n = n - 10\nn",
          note: { fr: "Ici, deux <code>if</code> séparés : les deux tests sont faits, l'un après l'autre.",
                  en: "Here there are two separate <code>if</code>s: both tests run, one after the other." } },
        { code: "x = 3\nif x > 5:\nprint(\"grand\")",
          note: { fr: "Après les deux points, la ligne doit être décalée. Sinon : <code>IndentationError</code>.",
                  en: "After the colon, the next line must be indented. Otherwise: <code>IndentationError</code>." } }
      ] },
    {
      "t": "fill",
      "id": "l04-f1",
      "title": {
        "fr": "Une fonction définie par morceaux",
        "en": "A piecewise function"
      },
      "prompt": {
        "fr": "La fonction f est définie par : f(x) = −x si x &lt; 0, f(x) = x² si 0 ≤ x ≤ 2, et f(x) = 4 si x &gt; 2. La variable <code>x</code> est déjà définie. Complète le programme pour qu'il range f(x) dans la variable <code>y</code>.",
        "en": "The function f is defined by: f(x) = −x if x &lt; 0, f(x) = x² if 0 ≤ x ≤ 2, and f(x) = 4 if x &gt; 2. The variable <code>x</code> is already defined. Fill in the program so that it stores f(x) in the variable <code>y</code>."
      },
      "template": {
        "fr": "# x est déjà définie\nif x < {{0}}:\n    y = {{-x}}\nelif x <= {{2}}:\n    y = {{x ** 2}}\nelse:\n    y = 4",
        "en": "# x is already defined\nif x < {{0}}:\n    y = {{-x}}\nelif x <= {{2}}:\n    y = {{x ** 2}}\nelse:\n    y = 4"
      },
      "tests": [
        {
          "setup": "x = -3",
          "call": "y", "expect": "3"
        },
        {
          "setup": "x = 0",
          "call": "y", "expect": "0"
        },
        {
          "setup": "x = 1.5",
          "call": "y", "expect": "2.25"
        },
        {
          "setup": "x = 2",
          "call": "y", "expect": "4"
        },
        {
          "setup": "x = 5",
          "call": "y", "expect": "4"
        }
      ],
      "hints": [
        {
          "fr": "Chaque branche correspond à un morceau de la définition : lis-les dans l'ordre, x &lt; 0 d'abord, puis 0 ≤ x ≤ 2.",
          "en": "Each branch matches one piece of the definition: read them in order, x &lt; 0 first, then 0 ≤ x ≤ 2."
        },
        {
          "fr": "Les seuils sont 0 et 2 ; les expressions sont <code>-x</code> et <code>x ** 2</code>.",
          "en": "The thresholds are 0 and 2; the expressions are <code>-x</code> and <code>x ** 2</code>."
        }
      ]
    },
    { t: "code", id: "l04-c1",
      title: { fr: "Valeur absolue, sans abs", en: "Absolute value, without abs" },
      prompt: { fr: "La variable <code>x</code> est définie. Range dans une variable <code>v</code> la valeur absolue de x, <strong>sans utiliser</strong> la fonction <code>abs</code>.",
                en: "The variable <code>x</code> is defined. Store in a variable <code>v</code> the absolute value of x, <strong>without using</strong> the <code>abs</code> function." },
      starter: { fr: "# x est déjà définie\n", en: "# x is already defined\n" },
      tests: [
        { setup: "x = -4", call: "v", expect: "4" },
        { setup: "x = 7", call: "v", expect: "7" },
        { setup: "x = 0", call: "v", expect: "0" },
        { setup: "x = -2.5", call: "v", expect: "2.5" }
      ],
      require: ["if"], forbid: ["abs"],
      hint: { fr: "Si x est négatif, sa valeur absolue est −x. Sinon, c'est x.", en: "If x is negative, its absolute value is −x. Otherwise it's x." },
      solution: "if x < 0:\n    v = -x\nelse:\n    v = x" },
    { t: "code", id: "l04-c2",
      title: { fr: "Combien de solutions ?", en: "How many solutions?" },
      prompt: { fr: "Les variables <code>a</code>, <code>b</code>, <code>c</code> sont définies (a ≠ 0). Range dans une variable <code>n</code> le nombre de solutions réelles de l'équation ax² + bx + c = 0.",
                en: "The variables <code>a</code>, <code>b</code>, <code>c</code> are defined (a ≠ 0). Store in a variable <code>n</code> the number of real solutions of the equation ax² + bx + c = 0." },
      starter: { fr: "# a, b et c sont déjà définies\n", en: "# a, b and c are already defined\n" },
      tests: [
        { setup: "a = 1\nb = 0\nc = -4", call: "n", expect: "2" },
        { setup: "a = 1\nb = 2\nc = 1", call: "n", expect: "1" },
        { setup: "a = 1\nb = 0\nc = 1", call: "n", expect: "0" },
        { setup: "a = 2\nb = -3\nc = 5", call: "n", expect: "0" },
        { setup: "a = -1\nb = 4\nc = 5", call: "n", expect: "2" }
      ],
      require: ["if"],
      hint: { fr: "Calcule le discriminant <code>delta = b ** 2 - 4 * a * c</code>, puis compare-le à 0 avec <code>if</code>, <code>elif</code>, <code>else</code>.",
              en: "Compute the discriminant <code>delta = b ** 2 - 4 * a * c</code>, then compare it to 0 with <code>if</code>, <code>elif</code>, <code>else</code>." },
      solution: "delta = b ** 2 - 4 * a * c\nif delta > 0:\n    n = 2\nelif delta == 0:\n    n = 1\nelse:\n    n = 0" }
  ],
  challenges: [
    {
      "t": "code",
      "id": "l04-d1",
      "title": {
        "fr": "Le prix d'une place de cinéma",
        "en": "The price of a cinema ticket"
      },
      "prompt": {
        "fr": "Un cinéma applique ces tarifs : 5 € pour les moins de 14 ans, 7 € de 14 à 25 ans et à partir de 65 ans, 10 € sinon. Le mercredi, personne ne paie plus de 6 €. Les variables <code>age</code> et <code>jour</code> sont définies (jour vaut 1 pour lundi, …, 7 pour dimanche : le mercredi est donc le jour 3). Range le prix à payer dans une variable <code>prix</code>.",
        "en": "A cinema charges: €5 for under-14s, €7 from 14 to 25 and from 65 on, €10 otherwise. On Wednesdays nobody pays more than €6. The variables <code>age</code> and <code>jour</code> are defined (jour is 1 for Monday, …, 7 for Sunday, so Wednesday is day 3). Store the price to pay in a variable <code>prix</code>."
      },
      "starter": {
        "fr": "# age et jour sont déjà définies\n",
        "en": "# age and jour are already defined\n"
      },
      "tests": [
        {
          "setup": "age = 10\njour = 1",
          "call": "prix", "expect": "5"
        },
        {
          "setup": "age = 20\njour = 3",
          "call": "prix", "expect": "6"
        },
        {
          "setup": "age = 40\njour = 5",
          "call": "prix", "expect": "10"
        },
        {
          "setup": "age = 14\njour = 2",
          "call": "prix", "expect": "7"
        },
        {
          "setup": "age = 65\njour = 6",
          "call": "prix", "expect": "7"
        },
        {
          "setup": "age = 10\njour = 3",
          "call": "prix", "expect": "5"
        },
        {
          "setup": "age = 64\njour = 4",
          "call": "prix", "expect": "10"
        }
      ],
      "require": [
        "if",
        "elif"
      ],
      "hints": [
        {
          "fr": "Fais-le en deux temps : d'abord le prix normal selon l'âge, rangé dans une variable <code>prix</code>, puis la règle du mercredi.",
          "en": "Do it in two stages: first the normal price according to age, stored in a variable <code>prix</code>, then the Wednesday rule."
        },
        {
          "fr": "Pour l'âge : <code>if age < 14:</code> … <code>elif age <= 25 or age >= 65:</code> … <code>else:</code> …",
          "en": "For the age: <code>if age < 14:</code> … <code>elif age <= 25 or age >= 65:</code> … <code>else:</code> …"
        },
        {
          "fr": "Ensuite, un second <code>if</code>, séparé du premier : <code>if jour == 3 and prix > 6:</code> alors <code>prix = 6</code>.",
          "en": "Then a second <code>if</code>, separate from the first: <code>if jour == 3 and prix > 6:</code> then <code>prix = 6</code>."
        }
      ],
      "solution": "if age < 14:\n    prix = 5\nelif age <= 25 or age >= 65:\n    prix = 7\nelse:\n    prix = 10\nif jour == 3 and prix > 6:\n    prix = 6"
    },
    {
      "t": "code",
      "id": "l04-d2",
      "title": {
        "fr": "Résoudre ax² + bx + c = 0",
        "en": "Solving ax² + bx + c = 0"
      },
      "prompt": {
        "fr": "Les variables <code>a</code>, <code>b</code>, <code>c</code> sont définies (a ≠ 0). Affiche d'abord le nombre de solutions réelles de ax² + bx + c = 0, puis les solutions, une par ligne, dans l'ordre croissant. Pour la racine carrée, utilise la puissance ½ : √Δ s'écrit <code>delta ** 0.5</code>.",
        "en": "The variables <code>a</code>, <code>b</code>, <code>c</code> are defined (a ≠ 0). First print the number of real solutions of ax² + bx + c = 0, then the solutions, one per line, in increasing order. For the square root, use the power ½: √Δ is written <code>delta ** 0.5</code>."
      },
      "starter": {
        "fr": "# a, b et c sont déjà définies\n",
        "en": "# a, b and c are already defined\n"
      },
      "tests": [
        {
          "setup": "a = 1\nb = 0\nc = -4",
          "stdout": "2\n-2.0\n2.0"
        },
        {
          "setup": "a = 1\nb = 2\nc = 1",
          "stdout": "1\n-1.0"
        },
        {
          "setup": "a = 1\nb = 0\nc = 1",
          "stdout": "0"
        },
        {
          "setup": "a = 2\nb = -3\nc = 1",
          "stdout": "2\n0.5\n1.0"
        },
        {
          "setup": "a = -1\nb = 1\nc = 2",
          "stdout": "2\n-1.0\n2.0"
        }
      ],
      "require": [
        "if",
        "**"
      ],
      "hints": [
        {
          "fr": "Calcule Δ = b² − 4ac, puis distingue trois cas avec <code>if</code>, <code>elif</code>, <code>else</code>, comme dans l'exercice « Combien de solutions ? ».",
          "en": "Compute Δ = b² − 4ac, then handle three cases with <code>if</code>, <code>elif</code>, <code>else</code>, as in the exercise \"How many solutions?\"."
        },
        {
          "fr": "Si Δ &gt; 0 : x<sub>1</sub> = (−b − √Δ) / (2a) et x<sub>2</sub> = (−b + √Δ) / (2a). Attention : si a est négatif, x<sub>1</sub> est le plus grand, il faut donc les comparer avant d'afficher. Si Δ = 0 : x<sub>0</sub> = −b / (2a).",
          "en": "If Δ &gt; 0: x<sub>1</sub> = (−b − √Δ) / (2a) and x<sub>2</sub> = (−b + √Δ) / (2a). Careful: if a is negative, x<sub>1</sub> is the larger one, so compare them before printing. If Δ = 0: x<sub>0</sub> = −b / (2a)."
        },
        {
          "fr": "<code>r = delta ** 0.5</code>, <code>x1 = (-b - r) / (2 * a)</code>, <code>x2 = (-b + r) / (2 * a)</code>, puis <code>if x1 < x2:</code> affiche x1 puis x2, <code>else:</code> l'inverse.",
          "en": "<code>r = delta ** 0.5</code>, <code>x1 = (-b - r) / (2 * a)</code>, <code>x2 = (-b + r) / (2 * a)</code>, then <code>if x1 < x2:</code> print x1 then x2, <code>else:</code> the other way round."
        }
      ],
      "solution": "delta = b ** 2 - 4 * a * c\nif delta > 0:\n    print(2)\n    r = delta ** 0.5\n    x1 = (-b - r) / (2 * a)\n    x2 = (-b + r) / (2 * a)\n    if x1 < x2:\n        print(x1)\n        print(x2)\n    else:\n        print(x2)\n        print(x1)\nelif delta == 0:\n    print(1)\n    print(-b / (2 * a))\nelse:\n    print(0)"
    }
  ]
});
