(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l03", num: 3, track: "bases",
  title: { fr: "Tests et booléens", en: "Tests and booleans" },
  intro: {
    fr: "Un test pose une question à Python. La réponse est toujours <code>True</code> (vrai) ou <code>False</code> (faux) : un booléen.",
    en: "A test asks Python a question. The answer is always <code>True</code> or <code>False</code>: a boolean."
  },
  blocks: [
    { t: "h", fr: "Les comparaisons", en: "Comparisons" },
    { t: "table",
      head: { fr: ["On teste…", "En Python", "Exemple"], en: ["We test…", "In Python", "Example"] },
      rows: [
        [{ fr: "une égalité", en: "equality" }, "==", "2 == 3"],
        [{ fr: "une « non égalité »", en: "not equal" }, "!=", "2 != 3"],
        [{ fr: "une inégalité stricte", en: "strictly less / greater" }, "<   >", "3 < 4"],
        [{ fr: "une inégalité large", en: "less / greater or equal" }, "<=   >=", "5 <= 6"]
      ] },
    { t: "code", code: "2 == 3\n2 != 3\n3 < 4" },
    { t: "note",
      fr: "<strong>Très important :</strong> <code>=</code> affecte une valeur à une variable, <code>==</code> compare deux valeurs.",
      en: "<strong>Very important:</strong> <code>=</code> assigns a value to a variable, <code>==</code> compares two values." },

    { t: "h", fr: "Propositions complexes : and, or", en: "Combining tests: and, or" },
    { t: "p",
      fr: "<code>A and B</code> est vrai quand A et B sont vrais tous les deux. <code>A or B</code> est vrai dès qu'au moins l'un des deux est vrai.",
      en: "<code>A and B</code> is true when both A and B are true. <code>A or B</code> is true as soon as at least one of them is true." },
    { t: "code", code: "2 == 3 or 2 < 3\n2 == 3 and 2 < 3" },

    { t: "h", fr: "Appartenance : in, not in", en: "Membership: in, not in" },
    { t: "code", code: "L = [5, 6, 1, 4]\n8 in L\n8 not in L" },

    { t: "h", fr: "Tester la divisibilité", en: "Testing divisibility" },
    { t: "p",
      fr: "Un entier n est divisible par d quand le reste de la division de n par d est nul : <code>n % d == 0</code>.",
      en: "An integer n is divisible by d when the remainder of n divided by d is zero: <code>n % d == 0</code>." },
    { t: "code", code: "n = 2026\nn % 2 == 0\nn % 3 == 0" }
  ],
  exercises: [
    { t: "predict", id: "l03-p1",
      title: { fr: "Vrai ou faux ?", en: "True or false?" },
      items: [
        { code: "5 <= 6" },
        { code: "5 > 6" },
        { code: "3 == 4" },
        { code: "3 != 4" },
        { code: "1 == 2 and 1 > 0.5" },
        { code: "1 == 2 or 1 > 0.5" },
        { code: "1 + 2 == 3 and 4 <= 5" },
        { code: "1 == 2 or 1 < 0" },
        { code: "15 % 5 == 0" },
        { code: "3 in [1, 2, 3]" },
        { code: "\"a\" in \"chat\"",
          note: { fr: "<code>in</code> marche aussi avec les chaînes : on cherche une lettre dans un mot.",
                  en: "<code>in</code> also works on strings: it looks for a letter in a word." } },
        { code: "0.1 + 0.2 == 0.3",
          note: { fr: "0.1 + 0.2 donne 0.30000000000000004. Évite de tester l'égalité de deux décimaux.",
                  en: "0.1 + 0.2 gives 0.30000000000000004. Avoid testing two decimals for equality." } },
        { code: "1 = 2",
          note: { fr: "Avec un seul <code>=</code>, Python essaie d'affecter 2 à… 1. Impossible : erreur de syntaxe. Pour comparer, il faut <code>==</code>.",
                  en: "With a single <code>=</code>, Python tries to assign 2 to… 1. Impossible: syntax error. To compare, use <code>==</code>." } }
      ] },
    { t: "code", id: "l03-c1",
      title: { fr: "Pair ou impair ?", en: "Even or odd?" },
      prompt: { fr: "La variable <code>n</code> est déjà définie. Écris un test (une seule ligne, sans <code>if</code>) qui vaut <code>True</code> si n est pair, <code>False</code> sinon.",
                en: "The variable <code>n</code> is already defined. Write a test (one line, no <code>if</code>) whose value is <code>True</code> if n is even, <code>False</code> otherwise." },
      starter: { fr: "# n est déjà définie\n", en: "# n is already defined\n" },
      tests: [
        { setup: "n = 2026", stdout: "True" },
        { setup: "n = 7", stdout: "False" },
        { setup: "n = 0", stdout: "True" }
      ],
      require: ["%"], forbid: ["if"],
      hint: { fr: "Un test vaut déjà True ou False : écris simplement <code>n % 2 == 0</code>.",
              en: "A test is already True or False: simply write <code>n % 2 == 0</code>." },
      solution: "n % 2 == 0" },
    { t: "code", id: "l03-c2",
      title: { fr: "Dans le disque unité ?", en: "Inside the unit disc?" },
      prompt: { fr: "Les variables <code>x</code> et <code>y</code> sont définies. Écris un test qui vaut <code>True</code> si le point M(x ; y) est dans le disque de centre O et de rayon 1 (bord compris), c'est-à-dire si x² + y² ≤ 1, et <code>False</code> sinon.",
                en: "The variables <code>x</code> and <code>y</code> are defined. Write a test whose value is <code>True</code> if the point M(x ; y) is inside the disc with centre O and radius 1 (edge included), that is if x² + y² ≤ 1, and <code>False</code> otherwise." },
      starter: { fr: "# x et y sont déjà définies\n", en: "# x and y are already defined\n" },
      tests: [
        { setup: "x = 0.5\ny = 0.5", stdout: "True" },
        { setup: "x = 1\ny = 1", stdout: "False" },
        { setup: "x = 0\ny = -1", stdout: "True" },
        { setup: "x = 0.8\ny = 0.7", stdout: "False" }
      ],
      hint: { fr: "x² s'écrit <code>x ** 2</code>. Le test est <code>x ** 2 + y ** 2 <= 1</code>.",
              en: "x² is <code>x ** 2</code>. The test is <code>x ** 2 + y ** 2 <= 1</code>." },
      solution: "x ** 2 + y ** 2 <= 1",
      after: { fr: "Tu retrouveras ce test en terminale pour estimer π au hasard (méthode de Monte-Carlo).",
               en: "You'll meet this test again later, to estimate π with random points (Monte Carlo method)." } }
  ],
  challenges: [
    {
      "t": "code",
      "id": "l03-d1",
      "title": {
        "fr": "Année bissextile",
        "en": "Leap year"
      },
      "prompt": {
        "fr": "Une année est bissextile si elle est divisible par 4 mais pas par 100, ou si elle est divisible par 400. La variable <code>annee</code> est définie : écris un test (une seule ligne, sans <code>if</code>) qui vaut <code>True</code> si elle est bissextile, <code>False</code> sinon.",
        "en": "A year is a leap year if it's divisible by 4 but not by 100, or if it's divisible by 400. The variable <code>annee</code> is defined: write a test (one line, no <code>if</code>) whose value is <code>True</code> if it's a leap year, <code>False</code> otherwise."
      },
      "starter": {
        "fr": "# annee est déjà définie\n",
        "en": "# annee is already defined\n"
      },
      "tests": [
        {
          "setup": "annee = 2024",
          "stdout": "True"
        },
        {
          "setup": "annee = 2026",
          "stdout": "False"
        },
        {
          "setup": "annee = 1900",
          "stdout": "False"
        },
        {
          "setup": "annee = 2000",
          "stdout": "True"
        },
        {
          "setup": "annee = 2100",
          "stdout": "False"
        }
      ],
      "require": [
        "%",
        "and",
        "or"
      ],
      "forbid": [
        "if"
      ],
      "hints": [
        {
          "fr": "Traduis la phrase en Python morceau par morceau : « divisible par 4 » s'écrit <code>annee % 4 == 0</code>.",
          "en": "Translate the sentence into Python piece by piece: \"divisible by 4\" is <code>annee % 4 == 0</code>."
        },
        {
          "fr": "« pas divisible par 100 » s'écrit <code>annee % 100 != 0</code>. Relie les morceaux avec <code>and</code> et <code>or</code>.",
          "en": "\"not divisible by 100\" is <code>annee % 100 != 0</code>. Join the pieces with <code>and</code> and <code>or</code>."
        },
        {
          "fr": "Mets des parenthèses pour bien grouper : <code>(… and …) or …</code>.",
          "en": "Use brackets to group things properly: <code>(… and …) or …</code>."
        }
      ],
      "solution": "(annee % 4 == 0 and annee % 100 != 0) or annee % 400 == 0",
      "after": {
        "fr": "1900 n'était pas bissextile, mais 2000 l'était.",
        "en": "1900 wasn't a leap year, but 2000 was."
      }
    },
    {
      "t": "code",
      "id": "l03-d2",
      "title": {
        "fr": "Trois points alignés ?",
        "en": "Three points in a line?"
      },
      "prompt": {
        "fr": "Les coordonnées de trois points A, B et C sont dans les variables <code>xA</code>, <code>yA</code>, <code>xB</code>, <code>yB</code>, <code>xC</code>, <code>yC</code>. Écris un test (sans <code>if</code>) qui vaut <code>True</code> si A, B et C sont alignés, <code>False</code> sinon. Rappel : ils sont alignés quand les vecteurs AB et AC sont colinéaires, c'est-à-dire quand x<sub>AB</sub> × y<sub>AC</sub> − y<sub>AB</sub> × x<sub>AC</sub> = 0.",
        "en": "The coordinates of three points A, B and C are in the variables <code>xA</code>, <code>yA</code>, <code>xB</code>, <code>yB</code>, <code>xC</code>, <code>yC</code>. Write a test (no <code>if</code>) whose value is <code>True</code> if A, B and C are on one line, <code>False</code> otherwise. Reminder: they are on one line when the vectors AB and AC are collinear, that is when x<sub>AB</sub> × y<sub>AC</sub> − y<sub>AB</sub> × x<sub>AC</sub> = 0."
      },
      "starter": {
        "fr": "# xA, yA, xB, yB, xC, yC sont déjà définies\n",
        "en": "# xA, yA, xB, yB, xC, yC are already defined\n"
      },
      "tests": [
        {
          "setup": "xA = 0\nyA = 0\nxB = 1\nyB = 1\nxC = 3\nyC = 3",
          "stdout": "True"
        },
        {
          "setup": "xA = 1\nyA = 2\nxB = 3\nyB = 6\nxC = 4\nyC = 8",
          "stdout": "True"
        },
        {
          "setup": "xA = 0\nyA = 0\nxB = 1\nyB = 2\nxC = 2\nyC = 3",
          "stdout": "False"
        },
        {
          "setup": "xA = 1\nyA = 1\nxB = 1\nyB = 5\nxC = 1\nyC = -2",
          "stdout": "True"
        },
        {
          "setup": "xA = -2\nyA = 1\nxB = 0\nyB = 0\nxC = 4\nyC = -1",
          "stdout": "False"
        }
      ],
      "require": [
        "=="
      ],
      "forbid": [
        "if"
      ],
      "hints": [
        {
          "fr": "Commence par calculer les coordonnées des deux vecteurs : x<sub>AB</sub> = xB − xA, y<sub>AB</sub> = yB − yA, et de même pour AC.",
          "en": "Start by computing the coordinates of the two vectors: x<sub>AB</sub> = xB − xA, y<sub>AB</sub> = yB − yA, and the same for AC."
        },
        {
          "fr": "Range-les dans quatre variables <code>xAB</code>, <code>yAB</code>, <code>xAC</code>, <code>yAC</code> : la formule sera beaucoup plus lisible.",
          "en": "Store them in four variables <code>xAB</code>, <code>yAB</code>, <code>xAC</code>, <code>yAC</code>: the formula will be much easier to read."
        },
        {
          "fr": "Termine par le test <code>xAB * yAC - yAB * xAC == 0</code>, seul sur sa ligne.",
          "en": "End with the test <code>xAB * yAC - yAB * xAC == 0</code>, alone on its line."
        }
      ],
      "solution": "xAB = xB - xA\nyAB = yB - yA\nxAC = xC - xA\nyAC = yC - yA\nxAB * yAC - yAB * xAC == 0",
      "after": {
        "fr": "Avec des coordonnées décimales, ce test d'égalité peut échouer à cause des arrondis (souviens-toi : 0.1 + 0.2 == 0.3 est faux).",
        "en": "With decimal coordinates, this equality test can fail because of rounding (remember: 0.1 + 0.2 == 0.3 is false)."
      }
    }
  ]
});
