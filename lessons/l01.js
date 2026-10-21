(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l01", num: 1, track: "bases",
  title: { fr: "Python comme calculatrice", en: "Python as a calculator" },
  intro: {
    fr: "Avant d'écrire des programmes, on utilise Python comme une calculatrice : on tape une expression, Python renvoie le résultat.",
    en: "Before writing programs, we use Python as a calculator: you type an expression and Python returns the result."
  },
  blocks: [
    { t: "h", fr: "Les quatre opérations", en: "The four operations" },
    { t: "p",
      fr: "On utilise <code>+</code>, <code>-</code>, <code>*</code> (multiplication) et <code>/</code> (division). <strong>Le point remplace la virgule</strong> : on écrit <code>3.2</code> et non 3,2. En Python, la virgule sert à séparer des objets.",
      en: "Use <code>+</code>, <code>-</code>, <code>*</code> (multiplication) and <code>/</code> (division). Decimals use a <strong>point</strong>: write <code>3.2</code>. In Python the comma separates objects." },
    { t: "code", code: "3.2 + 5\n7 * 6\n30 / 5" },
    { t: "note",
      fr: "Ici, comme dans la console Python, la valeur de chaque ligne s'affiche toute seule : pas besoin de <code>print</code>. On garde <code>print</code> pour les programmes qui doivent afficher un message (leçon 4).",
      en: "Here, as in the Python console, the value of each line is shown on its own: no need for <code>print</code>. Keep <code>print</code> for programs that must display a message (lesson 4)." },
    { t: "note",
      fr: "La division <code>/</code> donne toujours un nombre décimal (un <em>float</em>) : <code>30 / 5</code> donne <code>6.0</code>, pas <code>6</code>.",
      en: "Division <code>/</code> always gives a decimal number (a <em>float</em>): <code>30 / 5</code> gives <code>6.0</code>, not <code>6</code>." },

    { t: "h", fr: "Les puissances", en: "Powers" },
    { t: "p",
      fr: "2<sup>5</sup> s'écrit <code>2 ** 5</code> (deux étoiles). Le symbole <code>^</code> existe en Python mais ne calcule pas une puissance.",
      en: "2<sup>5</sup> is written <code>2 ** 5</code> (two stars). The <code>^</code> symbol exists in Python but it is not a power." },
    { t: "code", code: "2 ** 5\n10 ** -2" },

    { t: "h", fr: "Quotient et reste euclidiens", en: "Quotient and remainder" },
    { t: "division", a: 23, b: 7 },
    { t: "p",
      fr: "Comme on a 23 = 7 × 3 + 2, le quotient euclidien de 23 par 7 est 3 et le reste est 2. En Python : <code>23 // 7</code> donne le quotient, <code>23 % 7</code> donne le reste.",
      en: "Since 23 = 7 × 3 + 2, the quotient of 23 by 7 is 3 and the remainder is 2. In Python, <code>23 // 7</code> gives the quotient and <code>23 % 7</code> gives the remainder." },
    { t: "code", code: "23 // 7\n23 % 7" },
    { t: "note",
      fr: "Le reste sert partout en maths : <code>n % 2</code> vaut 0 quand n est pair, et 1 quand n est impair.",
      en: "The remainder is everywhere in maths: <code>n % 2</code> is 0 when n is even and 1 when n is odd." },

    { t: "h", fr: "Les priorités", en: "Order of operations" },
    { t: "p",
      fr: "Les règles sont celles des maths : d'abord les puissances, puis <code>*</code> <code>/</code> <code>//</code> <code>%</code>, puis <code>+</code> et <code>-</code>. En cas de doute, mets des parenthèses.",
      en: "Same rules as in maths: powers first, then <code>*</code> <code>/</code> <code>//</code> <code>%</code>, then <code>+</code> and <code>-</code>. When in doubt, use brackets." },
    { t: "code", code: "2 + 3 * 4\n(2 + 3) * 4" }
  ],
  exercises: [
    { t: "predict", id: "l01-p1",
      title: { fr: "Prévois le résultat", en: "Predict the result" },
      items: [
        { code: "27 % 6" },
        { code: "27 // 6" },
        { code: "27 / 6" },
        { code: "30 / 5" },
        { code: "2 ** 5" },
        { code: "3.2 + 5" },
        { code: "2 + 3 * 4" },
        { code: "(2 + 3) * 4" },
        { code: "-2 ** 2",
          note: { fr: "La puissance passe avant le signe moins : Python calcule −(2²) = −4. Pour (−2)², écris <code>(-2) ** 2</code>.",
                  en: "The power comes before the minus sign: Python computes −(2²) = −4. For (−2)², write <code>(-2) ** 2</code>." } },
        { code: "7 / 0" },
        { code: "0.1 + 0.2",
          note: { fr: "Les décimaux sont stockés en binaire, de façon approchée. D'où ce petit écart : c'est normal, ce n'est pas un bug.",
                  en: "Decimals are stored in binary, as approximations. That explains the tiny gap: it's normal, not a bug." } }
      ] },
    { t: "code", id: "l01-c1",
      title: { fr: "Une puissance", en: "A power" },
      prompt: { fr: "Calcule 7<sup>4</sup> : écris l'expression, Python affiche sa valeur.",
                en: "Compute 7<sup>4</sup>: write the expression, Python shows its value." },
      starter: { fr: "# Écris ton code ici\n", en: "# Write your code here\n" },
      tests: [ { stdout: "2401", label: { fr: "la valeur de 7⁴", en: "the value of 7⁴" } } ],
      require: ["**"],
      hint: { fr: "Deux étoiles pour la puissance : <code>7 ** 4</code>, rien d'autre.", en: "Two stars for the power: <code>7 ** 4</code>, nothing else." },
      solution: "7 ** 4" },
    { t: "code", id: "l01-c2",
      title: { fr: "Division euclidienne de 2026 par 7", en: "Dividing 2026 by 7" },
      prompt: { fr: "Calcule le quotient puis, sur une deuxième ligne, le reste de la division euclidienne de 2026 par 7.",
                en: "Compute the quotient, then on a second line the remainder, of the Euclidean division of 2026 by 7." },
      starter: { fr: "# Deux lignes : le quotient, puis le reste\n", en: "# Two lines: the quotient, then the remainder\n" },
      tests: [ { stdout: "289\n3", label: { fr: "quotient puis reste", en: "quotient then remainder" } } ],
      require: ["//", "%"],
      hint: { fr: "<code>//</code> pour le quotient, <code>%</code> pour le reste.", en: "<code>//</code> for the quotient, <code>%</code> for the remainder." },
      solution: "2026 // 7\n2026 % 7" }
  ],
  challenges: [
    {
      "t": "code",
      "id": "l01-d1",
      "title": {
        "fr": "Les chiffres d'un nombre",
        "en": "The digits of a number"
      },
      "prompt": {
        "fr": "La variable <code>n</code> contient un entier d'au moins deux chiffres. Calcule, sur trois lignes : son chiffre des unités, son chiffre des dizaines, puis le nombre obtenu en supprimant le chiffre des unités. Exemple : 2026 donne 6, puis 2, puis 202.",
        "en": "The variable <code>n</code> holds an integer with at least two digits. Compute, on three lines: its units digit, its tens digit, then the number you get by removing the units digit. Example: 2026 gives 6, then 2, then 202."
      },
      "starter": {
        "fr": "# n est déjà définie\n",
        "en": "# n is already defined\n"
      },
      "tests": [
        {
          "setup": "n = 2026",
          "stdout": "6\n2\n202"
        },
        {
          "setup": "n = 57",
          "stdout": "7\n5\n5"
        },
        {
          "setup": "n = 1000",
          "stdout": "0\n0\n100"
        },
        {
          "setup": "n = 98765",
          "stdout": "5\n6\n9876"
        }
      ],
      "require": [
        "%",
        "//"
      ],
      "hints": [
        {
          "fr": "Pense à la division euclidienne par 10 : 2026 = 10 × 202 + 6.",
          "en": "Think of dividing by 10: 2026 = 10 × 202 + 6."
        },
        {
          "fr": "Le reste de la division par 10 donne le chiffre des unités ; le quotient donne le nombre sans son chiffre des unités.",
          "en": "The remainder when dividing by 10 gives the units digit; the quotient gives the number without its units digit."
        },
        {
          "fr": "<code>n % 10</code>, puis le chiffre des unités de <code>n // 10</code>, c'est-à-dire <code>(n // 10) % 10</code>, puis <code>n // 10</code>.",
          "en": "<code>n % 10</code>, then the units digit of <code>n // 10</code>, that is <code>(n // 10) % 10</code>, then <code>n // 10</code>."
        }
      ],
      "solution": "n % 10\n(n // 10) % 10\nn // 10"
    },
    {
      "t": "code",
      "id": "l01-d2",
      "title": {
        "fr": "Quel jour de la semaine ?",
        "en": "Which day of the week?"
      },
      "prompt": {
        "fr": "Le 1<sup>er</sup> janvier 2026 était un jeudi. La variable <code>j</code> contient le numéro d'un jour de l'année 2026 (1 pour le 1<sup>er</sup> janvier, 32 pour le 1<sup>er</sup> février…). Calcule le numéro du jour de la semaine : 1 pour lundi, 2 pour mardi, …, 7 pour dimanche.",
        "en": "1 January 2026 was a Thursday. The variable <code>j</code> holds the number of a day of 2026 (1 for 1 January, 32 for 1 February…). Compute the number of the day of the week: 1 for Monday, 2 for Tuesday, …, 7 for Sunday."
      },
      "starter": {
        "fr": "# j est déjà définie\n",
        "en": "# j is already defined\n"
      },
      "tests": [
        {
          "setup": "j = 1",
          "stdout": "4"
        },
        {
          "setup": "j = 5",
          "stdout": "1"
        },
        {
          "setup": "j = 11",
          "stdout": "7"
        },
        {
          "setup": "j = 293",
          "stdout": "2"
        },
        {
          "setup": "j = 365",
          "stdout": "4"
        }
      ],
      "require": [
        "%"
      ],
      "hints": [
        {
          "fr": "Les jours de la semaine reviennent tous les 7 jours : pense au reste de la division par 7.",
          "en": "The days of the week repeat every 7 days: think of the remainder when dividing by 7."
        },
        {
          "fr": "Compte les jours écoulés depuis le 1<sup>er</sup> janvier (j − 1) et décale de 3, car le 1<sup>er</sup> janvier est le 4<sup>e</sup> jour de la semaine. Le reste par 7 est entre 0 et 6.",
          "en": "Count the days since 1 January (j − 1) and shift by 3, because 1 January is the 4th day of the week. The remainder by 7 is between 0 and 6."
        },
        {
          "fr": "<code>(j - 1 + 3) % 7 + 1</code> : on ajoute 1 à la fin pour obtenir un numéro entre 1 et 7.",
          "en": "<code>(j - 1 + 3) % 7 + 1</code>: add 1 at the end to get a number between 1 and 7."
        }
      ],
      "solution": "(j - 1 + 3) % 7 + 1",
      "after": {
        "fr": "Le 20 octobre 2026 est le 293<sup>e</sup> jour de l'année : un mardi.",
        "en": "20 October 2026 is day 293 of the year: a Tuesday."
      }
    }
  ]
});
