(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l02", num: 2, track: "bases",
  title: { fr: "Types et variables", en: "Types and variables" },
  intro: {
    fr: "Python manipule des objets de types différents, et les range dans des variables.",
    en: "Python works with objects of different types and stores them in variables."
  },
  blocks: [
    { t: "h", fr: "Les types", en: "Types" },
    { t: "table",
      head: { fr: ["Type en algorithmique", "Classe Python", "Exemple"], en: ["Type in algorithms", "Python class", "Example"] },
      rows: [
        [{ fr: "Nombre entier", en: "Integer" }, "int", "5"],
        [{ fr: "Nombre réel (écriture décimale)", en: "Real number (decimal)" }, "float", "7.3"],
        [{ fr: "Booléen", en: "Boolean" }, "bool", "True"],
        [{ fr: "Chaîne de caractères", en: "Character string" }, "str", "\"le chat\""],
        [{ fr: "Liste", en: "List" }, "list", "[3, 5, 1]"]
      ] },
    { t: "p",
      fr: "La fonction <code>type( )</code> renvoie le type de l'objet placé entre les parenthèses.",
      en: "The <code>type( )</code> function returns the type of the object between the brackets." },
    { t: "code", code: "print(type(5))\nprint(type(7.3))\nprint(type(2 < 1))\nprint(type(\"le chat\"))\nprint(type([3, 5, 1]))" },

    { t: "h", fr: "Les variables", en: "Variables" },
    { t: "p",
      fr: "Une variable est un « casier de mémoire » qui contient un objet de n'importe quel type. Son nom peut être une lettre, un mot, ou plusieurs mots reliés par le tiret du 8 : <code>le_chat</code>.",
      en: "A variable is a \"memory box\" holding an object of any type. Its name can be a letter, a word, or several words joined by underscores: <code>le_chat</code>." },
    { t: "compare",
      algo: { fr: "a ← 5", en: "a ← 5" },
      code: "a = 5",
      caption: { fr: "En algorithmique, <em>a ← 5</em> se lit « a reçoit 5 ». En Python, on écrit <code>a = 5</code> : c'est une <strong>affectation</strong>, pas une égalité.",
                 en: "In algorithms, <em>a ← 5</em> reads \"a receives 5\". In Python, write <code>a = 5</code>: it's an <strong>assignment</strong>, not an equation." } },
    { t: "code", code: "a = 5\nb = \"le chat\"\ncommission = [\"pain\", \"lait\"]\nle_chat = \"noir\"\nprint(a, b, commission, le_chat)" },

    { t: "h", fr: "Que veut dire a = a + 1 ?", en: "What does a = a + 1 mean?" },
    { t: "p",
      fr: "En maths, a = a + 1 est impossible. En Python, c'est une affectation : Python calcule d'abord la partie droite avec l'ancienne valeur de a, puis range le résultat dans a.",
      en: "In maths, a = a + 1 is impossible. In Python it's an assignment: Python first computes the right side with the old value of a, then stores the result in a." },
    { t: "code", code: "a = 5\na = a + 1\nprint(a)" },

    { t: "h", fr: "Convertir un type", en: "Converting between types" },
    { t: "p",
      fr: "<code>int( )</code>, <code>float( )</code> et <code>str( )</code> convertissent un objet. Attention : <code>int(3.9)</code> donne 3, il <strong>tronque</strong> (il coupe la partie décimale), il n'arrondit pas.",
      en: "<code>int( )</code>, <code>float( )</code> and <code>str( )</code> convert an object. Careful: <code>int(3.9)</code> gives 3. It <strong>truncates</strong> (cuts off the decimals); it doesn't round." },
    { t: "code", code: "print(int(3.9))\nprint(float(3))\nprint(str(7) + str(7))" },
    { t: "note",
      fr: "Dans tes cours, <code>input( )</code> sert à demander une valeur, et renvoie toujours une chaîne <code>str</code>. Dans cette appli, on ne l'utilise pas : on donne directement une valeur à la variable.",
      en: "In class, <code>input( )</code> asks the user for a value and always returns a <code>str</code>. This app doesn't use it: give the variable a value directly." }
  ],
  exercises: [
    { t: "predict", id: "l02-p1",
      title: { fr: "Quel type ? Quelle valeur ?", en: "Which type? Which value?" },
      hint: { fr: "Pour un type, tu peux répondre simplement <code>int</code>, <code>float</code>…", en: "For a type, you can just answer <code>int</code>, <code>float</code>…" },
      items: [
        { code: "type(3)" },
        { code: "type(3.7)" },
        { code: "type(2 + 2.3)" },
        { code: "type(3 == 4)" },
        { code: "type(15 % 7)" },
        { code: "type(8 / 2)" },
        { code: "type(8 // 2)" },
        { code: "type(\"math\")" },
        { code: "type([1, \"chat\", 1 == 2, 1.3])" },
        { code: "int(3.9)" },
        { code: "int(-3.2)" },
        { code: "float(3)" },
        { code: "str(7)" },
        { code: "str(1 == 2)" },
        { code: "int(\"chat\")" },
        { code: "a = 5\na = a + 1\nb = a * 2\nb" },
        { code: "x = 3\ny = x\nx = 10\ny",
          note: { fr: "<code>y = x</code> copie la valeur de x à ce moment-là. Changer x ensuite ne change pas y.",
                  en: "<code>y = x</code> copies the value of x at that moment. Changing x afterwards doesn't change y." } }
      ] },
    { t: "code", id: "l02-c1",
      title: { fr: "Échanger deux variables", en: "Swap two variables" },
      prompt: { fr: "Les variables <code>a</code> et <code>b</code> sont déjà définies (on les change pour tester). Échange leurs valeurs, puis écris <code>print(a, b)</code>.",
                en: "The variables <code>a</code> and <code>b</code> are already defined (they change for each test). Swap their values, then write <code>print(a, b)</code>." },
      starter: { fr: "# a et b sont déjà définies\n\nprint(a, b)\n", en: "# a and b are already defined\n\nprint(a, b)\n" },
      tests: [
        { setup: "a = 7\nb = 3", stdout: "3 7" },
        { setup: "a = 'chat'\nb = 2.5", stdout: "2.5 chat" }
      ],
      hint: { fr: "Si tu écris <code>a = b</code>, l'ancienne valeur de a est perdue. Garde-la d'abord dans une troisième variable <code>c</code>.",
              en: "If you write <code>a = b</code>, the old value of a is lost. Keep it first in a third variable <code>c</code>." },
      solution: "c = a\na = b\nb = c\nprint(a, b)" },
    { t: "code", id: "l02-c2",
      title: { fr: "Heures, minutes, secondes", en: "Hours, minutes, seconds" },
      prompt: { fr: "La variable <code>t</code> contient une durée en secondes. Calcule le nombre d'heures <code>h</code>, de minutes <code>m</code> et de secondes <code>s</code>, puis écris <code>print(h, m, s)</code>. Exemple : 3725 s donne 1 2 5.",
                en: "The variable <code>t</code> holds a duration in seconds. Compute the hours <code>h</code>, minutes <code>m</code> and seconds <code>s</code>, then write <code>print(h, m, s)</code>. Example: 3725 s gives 1 2 5." },
      starter: { fr: "# t est déjà définie\n\nprint(h, m, s)\n", en: "# t is already defined\n\nprint(h, m, s)\n" },
      tests: [
        { setup: "t = 3725", stdout: "1 2 5" },
        { setup: "t = 59", stdout: "0 0 59" },
        { setup: "t = 7200", stdout: "2 0 0" }
      ],
      require: ["//", "%"],
      hint: { fr: "1 h = 3600 s. <code>t // 3600</code> donne les heures, et <code>t % 3600</code> ce qui reste à répartir en minutes et secondes.",
              en: "1 h = 3600 s. <code>t // 3600</code> gives the hours, and <code>t % 3600</code> what is left for minutes and seconds." },
      solution: "h = t // 3600\nreste = t % 3600\nm = reste // 60\ns = reste % 60\nprint(h, m, s)" }
  ],
  challenges: [
    {
      "t": "code",
      "id": "l02-d1",
      "title": {
        "fr": "Faire tourner trois variables",
        "en": "Rotating three variables"
      },
      "prompt": {
        "fr": "Les variables <code>a</code>, <code>b</code> et <code>c</code> sont définies. Fais « tourner » leurs valeurs : a doit recevoir l'ancienne valeur de b, b celle de c, et c celle de a. Puis écris <code>print(a, b, c)</code>.",
        "en": "The variables <code>a</code>, <code>b</code> and <code>c</code> are defined. \"Rotate\" their values: a must get the old value of b, b the old value of c, and c the old value of a. Then write <code>print(a, b, c)</code>."
      },
      "starter": {
        "fr": "# a, b et c sont déjà définies\n\nprint(a, b, c)\n",
        "en": "# a, b and c are already defined\n\nprint(a, b, c)\n"
      },
      "tests": [
        {
          "setup": "a = 1\nb = 2\nc = 3",
          "stdout": "2 3 1"
        },
        {
          "setup": "a = 'x'\nb = 5\nc = 2.5",
          "stdout": "5 2.5 x"
        },
        {
          "setup": "a = 0\nb = 0\nc = 7",
          "stdout": "0 7 0"
        }
      ],
      "hints": [
        {
          "fr": "Comme pour l'échange de deux variables : une valeur va être écrasée, il faut d'abord la garder de côté.",
          "en": "Like swapping two variables: one value is about to be overwritten, so keep it aside first."
        },
        {
          "fr": "La première valeur perdue est celle de a. Range-la dans une variable <code>t</code> avant tout le reste.",
          "en": "The first value to be lost is a's. Store it in a variable <code>t</code> before anything else."
        },
        {
          "fr": "<code>t = a</code>, puis <code>a = b</code>, <code>b = c</code>, et enfin <code>c = t</code>.",
          "en": "<code>t = a</code>, then <code>a = b</code>, <code>b = c</code>, and finally <code>c = t</code>."
        }
      ],
      "solution": "t = a\na = b\nb = c\nc = t\nprint(a, b, c)"
    },
    {
      "t": "code",
      "id": "l02-d2",
      "title": {
        "fr": "Un nombre à l'envers",
        "en": "A number backwards"
      },
      "prompt": {
        "fr": "La variable <code>n</code> contient un entier à trois chiffres. Affiche l'entier obtenu en lisant ses chiffres à l'envers, sans passer par une chaîne de caractères. Exemple : 472 donne 274, et 100 donne 1.",
        "en": "The variable <code>n</code> holds a three-digit integer. Print the integer you get by reading its digits backwards, without using a string. Example: 472 gives 274, and 100 gives 1."
      },
      "starter": {
        "fr": "# n est déjà définie\n",
        "en": "# n is already defined\n"
      },
      "tests": [
        {
          "setup": "n = 472",
          "stdout": "274"
        },
        {
          "setup": "n = 100",
          "stdout": "1"
        },
        {
          "setup": "n = 909",
          "stdout": "909"
        },
        {
          "setup": "n = 123",
          "stdout": "321"
        },
        {
          "setup": "n = 850",
          "stdout": "58"
        }
      ],
      "require": [
        "//",
        "%"
      ],
      "forbid": [
        "str"
      ],
      "hints": [
        {
          "fr": "Commence par isoler les trois chiffres : les centaines, les dizaines et les unités, chacun dans une variable.",
          "en": "Start by isolating the three digits: hundreds, tens and units, each in its own variable."
        },
        {
          "fr": "<code>c = n // 100</code>, <code>d = (n // 10) % 10</code>, <code>u = n % 10</code>.",
          "en": "<code>c = n // 100</code>, <code>d = (n // 10) % 10</code>, <code>u = n % 10</code>."
        },
        {
          "fr": "Dans le nombre à l'envers, u devient le chiffre des centaines : <code>print(100 * u + 10 * d + c)</code>.",
          "en": "In the reversed number, u becomes the hundreds digit: <code>print(100 * u + 10 * d + c)</code>."
        }
      ],
      "solution": "c = n // 100\nd = (n // 10) % 10\nu = n % 10\nprint(100 * u + 10 * d + c)",
      "after": {
        "fr": "Pourquoi 100 donne 1 et pas 001 ? Parce qu'un entier ne s'écrit jamais avec des zéros devant.",
        "en": "Why does 100 give 1 and not 001? Because an integer is never written with leading zeros."
      }
    }
  ]
});
